<template>
  <div>
    <h1>화상채팅</h1>
    <div class="col-lg-6 mb-3">
        <video id="local_video" autoplay playsinline></video>
    </div>
    <div class="col-lg-6 mb-3">
        <video id="remote_video" autoplay playsinline></video>
    </div>
  </div>
</template>

<script>
  import SockJS from "sockjs-client";
  import Stomp from "webstomp-client";

  // let socket = new WebSocket("ws://localhost:8282/signal");
  let socket;
  const mediaConstraints = {
    video: true,
    audio: {
      echoCancellation: true,
      noiseSuppression: true,
      sampleRate: 44100,
    }
  }
  const peerConnectionConfig = {
    'iceServers': [
        {'urls': 'stun:stun.stunprotocol.org:3478'},
        {'urls': 'stun:stun.l.google.com:19302'},
    ]
  }

  // WebRTC variables
  let localStream;
  // let localVideoTracks;
  let myPeerConnection;

export default {

  data() {
    return {
      localUserName: "uuid",  
      localRoom: "room",
      localVideo: "local",
      remoteVideo: "remote",
    }
  },
  created() {

  },
  mounted() {
    // this.start();
    this.connect();
  },
  methods: {
    connect() {
      const serverURL = "http://localhost:8282/signal/stomp";
      let socket2 = new SockJS(serverURL);
      this.stompClient = Stomp.over(socket2);
      console.log("연결을 시도합니다.");

      this.stompClient.connect(
        {},
        frame => {
          // 소켓 연결 성공
          this.connected = true;
          console.log('소켓 연결 성공', frame);
          // 서버의 메시지 전송 endpoint를 구독합니다.
          // 이런형태를 pub sub 구조라고 합니다.
          this.stompClient.subscribe("/send", res => {
            console.log('구독으로 받은 메시지 입니다.', res.body);

            // 받은 데이터를 json으로 파싱하고 리스트에 넣어줍니다.
            this.recvList.push(JSON.parse(res.body))
          });
        },
        error => {
          // 소켓 연결 실패
          console.log('소켓 연결 실패', error);
          this.connected = false;
        }
      ); 
    },
    start() {
      console.log("hi");
      // 페이지 시작시 실행되는 메서드 -> socket 을 통해 server 와 통신한다
      socket.onmessage = function(msg) {
          console.log("hi2");
          let message = JSON.parse(msg.data);
          switch (message.type) {
            case "offer":
                this.log('Signal OFFER received');
                this.handleOfferMessage(message);
                break;

            case "answer":
                this.log('Signal ANSWER received');
                this.handleAnswerMessage(message);
                break;

            case "ice":
                this.log('Signal ICE Candidate received');
                this.handleNewICECandidateMessage(message);
                break;

            case "join":
                // ajax 요청을 보내서 userList 를 다시 확인함
                message.data = chatListCount();

                this.log('Client is starting to ' + (message.data === "true)" ? 'negotiate' : 'wait for a peer'));
                this.log("messageDATA : "+message.data)
                this.handlePeerConnection(message);
                break;

            case "leave":
                stop();
                break;

            default:
                this.handleErrorMessage('Wrong type message received from server');
          }
      };

      // ICE 를 위한 chatList 인원 확인
      function chatListCount(){
          let data;
          // $.ajax({
          //     url : "/webrtc/usercount",
          //     type : "POST",
          //     async : false,
          //     data : {
          //         "from" : this.localUserName,
          //         "type" : "findCount",
          //         "data" : this.localRoom,
          //         "candidate" : null,
          //         "sdp" : null
          //     },
          //     success(result){
          //         data = result;
          //     },
          //     error(result){
          //         console.this.log("error : "+result);
          //     }
          // });

          return data;
      }

      // add an event listener to get to know when a connection is open
      // 웹 소켓 연결 되었을 때 - open - 상태일때 이벤트 처리
      socket.onopen = function() {
          this.log('WebSocket connection opened to Room: #' + this.localRoom);
          // send a message to the server to join selected room with Web Socket
          this.sendToServer({
              from: this.localUserName,
              type: 'join',
              data: this.localRoom
          });
      };

      // a listener for the socket being closed event
      // 소켓이 끊겼을 때 이벤트처리
      socket.onclose = function(message) {
          this.log('Socket has been closed');
          this.log(message);
      };

      // an event listener to handle socket errors
      // 에러 발생 시 이벤트 처리
      socket.onerror = function(message) {
          this.handleErrorMessage("Error: " + message);
      };
    },
    stop() {
      // send a message to the server to remove this client from the room clients list
      this.log("Send 'leave' message to server");
      this.sendToServer({
          from: this.localUserName,
          type: 'leave',
          data: this.localRoom
      });

      if (myPeerConnection) {
        this.log('Close the RTCPeerConnection');

        // disconnect all our event listeners
        myPeerConnection.onicecandidate = null;
        myPeerConnection.ontrack = null;
        myPeerConnection.onnegotiationneeded = null;
        myPeerConnection.oniceconnectionstatechange = null;
        myPeerConnection.onsignalingstatechange = null;
        myPeerConnection.onicegatheringstatechange = null;
        myPeerConnection.onnotificationneeded = null;
        myPeerConnection.onremovetrack = null;

        // Stop the videos
        // 비디오 정지
        if (this.remoteVideo.srcObject) {
            this.remoteVideo.srcObject.getTracks().forEach(track => track.stop());
        }
        if (this.localVideo.srcObject) {
            this.localVideo.srcObject.getTracks().forEach(track => track.stop());
        }

        this.remoteVideo.src = null;
        this.localVideo.src = null;

        // close the peer connection
        // myPeerConnection 초기화
        myPeerConnection.close();
        myPeerConnection = null;

        this.log('Close the socket');
        if (socket != null) {
            socket.close();
        }
      }
    },
    log(message) {
      console.log(message);
    },
    handleErrorMessage(message) {
      console.error(message);
    },
    // use JSON format to send WebSocket message
    sendToServer(msg) {
      let msgJSON = JSON.stringify(msg);
      socket.send(msgJSON);
    },
    // initialize media stream
    getMedia(constraints) {
    if (localStream) {
      localStream.getTracks().forEach(track => {
          track.stop();
      });
    }
    navigator.mediaDevices.getUserMedia(constraints)
        .then(this.getLocalMediaStream).catch(this.handleGetUserMediaError);
    },
    // create peer connection, get media, start negotiating when second participant appears
    // 두번째 클라이언트가 들어오면 피어 연결을 생성 + 미디어 생성
    handlePeerConnection(message) {
      this.createPeerConnection();

      this.getMedia(mediaConstraints);

      if (message.data === "true") {

          myPeerConnection.onnegotiationneeded = this.handleNegotiationNeededEvent;
      }
    },
    createPeerConnection() {
      myPeerConnection = new RTCPeerConnection(peerConnectionConfig);

      // event handlers for the ICE negotiation process
      myPeerConnection.onicecandidate = this.handleICECandidateEvent;
      myPeerConnection.ontrack = this.handleTrackEvent;

      // the following events are optional and could be realized later if needed
      // myPeerConnection.onremovetrack = handleRemoveTrackEvent;

      myPeerConnection.oniceconnectionstatechange = this.handleICEConnectionStateChangeEvent;
      // myPeerConnection.onicegatheringstatechange = handleICEGatheringStateChangeEvent;
      // myPeerConnection.onsignalingstatechange = handleSignalingStateChangeEvent;
    },

    /** peerConnection 과 관련된 이벤트 처리
     * 다른 peer 와 연결되었을 때 remote_video show 상태로로, 끊졌을때는 remote_video 를 hide 상태로 변경
     * **/
    handleICEConnectionStateChangeEvent(){
      let status = myPeerConnection.iceConnectionState;

      if(status === "connected"){
          this.log("status : "+status)
          // $("#remote_video").show();
      }else if(status === "disconnected"){
          this.log("status : "+status)
          // $("#remote_video").hide();
      }
    },
    // add MediaStream to local video element and to the Peer
    getLocalMediaStream(mediaStream) {
        localStream = mediaStream;
        this.localVideo.srcObject = mediaStream;
        localStream.getTracks().forEach(track => myPeerConnection.addTrack(track, localStream));
    },
    // handle get media error
    handleGetUserMediaError(error) {
        this.log('navigator.getUserMedia error: ', error);
        switch(error.name) {
            case "NotFoundError":
                alert("Unable to open your call because no camera and/or microphone were found.");
                break;
            case "SecurityError":
            case "PermissionDeniedError":
                // Do nothing; this is the same as the user canceling the call.
                break;
            default:
                alert("Error opening your camera and/or microphone: " + error.message);
                break;
        }

        stop();
    }, 

    // send ICE candidate to the peer through the server
    handleICECandidateEvent(event) {
        if (event.candidate) {
            this.sendToServer({
                from: this.localUserName,
                data: this.localRoom,
                type: 'ice',
                candidate: event.candidate
            });
            this.log('ICE Candidate Event: ICE candidate sent');
        }
    },

    handleTrackEvent(event) {
        this.log('Track Event: set stream to remote video element');
        this.remoteVideo.srcObject = event.streams[0];
    },

    // WebRTC called handler to begin ICE negotiation
    // WebRTC 의 ICE 통신 순서
    // 1. WebRTC offer 생성
    // 2. local media description 생성?
    // 3. 미디어 형식, 해상도 등에 대한 내용을 서버에 전달
    handleNegotiationNeededEvent() {
      myPeerConnection.createOffer().then(function(offer) {
          return myPeerConnection.setLocalDescription(offer);
      }).then(function() {
          this.sendToServer({
              from: this.localUserName,
              data:this.localRoom,
              type: 'offer',
              sdp: myPeerConnection.localDescription
          });
          this.log('Negotiation Needed Event: SDP offer sent');
      }).catch(function(reason) {
          // an error occurred, so handle the failure to connect
          this.handleErrorMessage('failure to connect error: ', reason);
      });
    },
    handleOfferMessage(message) {
      this.log('Accepting Offer Message');
      this.log(message);
      let desc = new RTCSessionDescription(message.sdp);
      //TODO test this
      if (desc != null && message.sdp != null) {
          this.log('RTC Signalling state: ' + myPeerConnection.signalingState);
          myPeerConnection.setRemoteDescription(desc).then(function () {
              this.log("Set up local media stream");
              return navigator.mediaDevices.getUserMedia(mediaConstraints);
          })
              .then(function (stream) {
                  this.log("-- Local video stream obtained");
                  localStream = stream;
                  try {
                      this.localVideo.srcObject = localStream;
                  } catch (error) {
                      this.localVideo.src = window.URL.createObjectURL(stream);
                  }

                  this.log("-- Adding stream to the RTCPeerConnection");
                  localStream.getTracks().forEach(track => myPeerConnection.addTrack(track, localStream));
              })
              .then(function () {
                  this.log("-- Creating answer");
                  // Now that we've successfully set the remote description, we need to
                  // start our stream up locally then create an SDP answer. This SDP
                  // data describes the local end of our call, including the codec
                  // information, options agreed upon, and so forth.
                  return myPeerConnection.createAnswer();
              })
              .then(function (answer) {
                  this.log("-- Setting local description after creating answer");
                  // We now have our answer, so establish that as the local description.
                  // This actually configures our end of the call to match the settings
                  // specified in the SDP.
                  return myPeerConnection.setLocalDescription(answer);
              })
              .then(function () {
                  this.log("Sending answer packet back to other peer");

                  this.sendToServer({
                      from: this.localUserName,
                      data: this.localRoom,
                      type: 'answer',
                      sdp: myPeerConnection.localDescription
                  });

              })
              // .catch(handleGetUserMediaError);
              .catch(this.handleErrorMessage)
      }
    },
    handleAnswerMessage(message) {
      this.log("The peer has accepted request");
      // Configure the remote description, which is the SDP payload
      // in our "video-answer" message.
      // myPeerConnection.setRemoteDescription(new RTCSessionDescription(message.sdp)).catch(handleErrorMessage);
      myPeerConnection.setRemoteDescription(message.sdp).catch(this.hanleErrorMessage);
    },
    handleNewICECandidateMessage(message) {
      let candidate = new RTCIceCandidate(message.candidate);
      this.log("Adding received ICE candidate: " + JSON.stringify(candidate));
      myPeerConnection.addIceCandidate(candidate).catch(this.handleErrorMessage);
    },
  },
}
</script>

<style>

</style>
