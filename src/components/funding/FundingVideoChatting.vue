<template>
  <div>
    <div class="video_outer_line">
      <!-- <table>
        <tr>
          <td>&lt; 내 화면 &gt;</td>
          <td>&lt; 상대 화면 &gt;</td>
        </tr>
        <tr>
          <td><video id="local_video" ref="local_video" autoplay v-if="localState"/></td>
          <td><video id="remote_video" ref="remote_video" autoplay v-if="remoteState"/></td>
        </tr> -->
      <!-- <v-btn @click="stop"> stop </v-btn> -->
      <!-- </table> -->
      <video id="local_video" ref="local_video" autoplay/>
      <video id="remote_video" ref="remote_video" autoplay/>
      <div class="local_video_name">
        &lt; 내 화면 &gt;
      </div>
      <div class="remote_video_name">
        &lt; 상대 화면 &gt;
      </div>
    </div>
  </div>
</template>

<script>

// [WebRTC 참고] 
// 1. https://github.com/SeJonJ/Spring-WebSocket-WebRTC-Chatting/blob/master-Webrtc-jpa/src/main/resources/static/js/rtc/webrtc_client.js
// (branch = master-Webrtc-jpa)
// 2. https://github.com/Benkoff/WebRTC-SS/blob/master/src/main/resources/static/js/webrtc_client.js
// 3. blog - https://terianp.tistory.com/178
let socket;

// WebRTC variables
let localStream;
let myPeerConnection;

let localVideo;
let remoteVideo;

// WebRTC STUN servers
const peerConnectionConfig = {
    'iceServers': [
        {'urls': 'stun:stun.stunprotocol.org:3478'},
        {'urls': 'stun:stun.l.google.com:19302'},
    ]
};

// WebRTC media
const mediaConstraints = {
    audio: true,
    video: true
};

export default {
  data() {
    return {
      // 접속한 id
      myId: "local",
      
      // caller의 stream 저장
      callerStream: "",
        
      // 자신과 연결된 세션 peer를 저장
      peers: [],

      localRoom: "3",
      localUserName: this.uuidv4(),

      localState: true,
      remoteState: true,
    }
  },
  created() {
    this.myId = this.uuidv4();
    console.log("myId: " + this.localUserName);
  },
  mounted() {
    localVideo = this.$refs["local_video"];
    remoteVideo = this.$refs["remote_video"];
    this.connect();
  },

  methods: {
    log(message) {
      console.log(message);
    },
    
    connect() {
      const serverURL = "ws://3.38.104.173:8282/signal";
      // const serverURL = "ws://localhost:8282/signal";
      // const serverURL = "ws://13.125.231.86:8282/signal";
      
      // 소켓 통신 선언부
      socket = new WebSocket(serverURL);

      // add an event listener for a message being received
      socket.onmessage = (msg => {
          let message = JSON.parse(msg.data);
          switch (message.type) {
              case "text":
                  this.log('Text message from ' + message.from + ' received: ' + message.data);
                  break;

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
                  this.log("message");
                  this.log(message);
                  this.log('Client is starting to ' + (message.data === "true)" ? 'negotiate' : 'wait for a peer'));
                  this.handlePeerConnection(message);
                  break;

              default:
                  this.handleErrorMessage('Wrong type message received from server');
          }
      });

      // add an event listener to get to know when a connection is open
      socket.onopen = () => {
          this.log('1. WebSocket connection opened to Room: #' + this.localRoom);
          // send a message to the server to join selected room with Web Socket
          this.sendToServer({
              from: this.localUserName,
              type: 'join',
              data: this.localRoom
          });
      };

      // a listener for the socket being closed event
      socket.onclose = (message) => {
        this.log(message);
        this.log('Socket has been closed');
      };

      // an event listener to handle socket errors
      socket.onerror = (message) => {
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

            this.localState = false;
            this.remoteState = false;
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
            if (remoteVideo.srcObject) {
                remoteVideo.srcObject.getTracks().forEach(track => track.stop());
            }
            if (localVideo.srcObject) {
                localVideo.srcObject.getTracks().forEach(track => track.stop());
            }

            remoteVideo.src = null;
            localVideo.src = null;

            // close the peer connection
            myPeerConnection.close();
            myPeerConnection = null;

            this.log('Close the socket');
            if (socket != null) {
                socket.close();
            }
        }
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
    
    handleICEConnectionStateChangeEvent() {
      let status = myPeerConnection.iceConnectionState;

      if(status === "connected"){
          this.log("status : "+status)
          this.remoteState = true;
      }else if(status === "disconnected"){
          this.log("status : "+status)
          this.remoteState = false;
          remoteVideo.srcObject = null;
      }
    },

    // add MediaStream to local video element and to the Peer
    getLocalMediaStream(mediaStream) {
        this.localState = true;

        localStream = mediaStream;
        localVideo.srcObject = mediaStream;
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
        if (event.candidate != null) {
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
        remoteVideo.srcObject = event.streams[0];
    },

    // WebRTC called handler to begin ICE negotiation
    // 1. create a WebRTC offer
    // 2. set local media description
    // 3. send the description as an offer on media format, resolution, etc
    handleNegotiationNeededEvent() {
        this.log("handleNegotiationNeededEvent() 호출");
        myPeerConnection.createOffer().then((offer) => {
            return myPeerConnection.setLocalDescription(offer);
        })
            .then(() => {
                this.sendToServer({
                    from: this.localUserName,
                    data: this.localRoom,
                    type: 'offer',
                    sdp: myPeerConnection.localDescription
                });
                this.log('Negotiation Needed Event: SDP offer sent');
            })
            .catch((reason) => {
                // an error occurred, so handle the failure to connect
                this.log('failure to connect error: ');
                this.handleErrorMessage(reason);
            });
    },

    handleOfferMessage(message) {
        this.log('Accepting Offer Message');
        this.log(message);
        let desc = new RTCSessionDescription(message.sdp);
        //TODO test this
        if (desc != null && message.sdp != null) {
            this.log('RTC Signalling state: ' + myPeerConnection.signalingState);
            myPeerConnection.setRemoteDescription(desc).then(() => {
                this.log("Set up local media stream");
                return navigator.mediaDevices.getUserMedia(mediaConstraints);
            })
                .then((stream) => {
                    this.log("-- Local video stream obtained");
                    localStream = stream;
                    try {
                        localVideo.srcObject = localStream;
                    } catch (error) {
                        localVideo.src = window.URL.createObjectURL(stream);
                    }

                    this.log("-- Adding stream to the RTCPeerConnection");
                    localStream.getTracks().forEach(track => myPeerConnection.addTrack(track, localStream));
                })
                .then(() => {
                    this.log("-- Creating answer");
                    // Now that we've successfully set the remote description, we need to
                    // start our stream up locally then create an SDP answer. This SDP
                    // data describes the local end of our call, including the codec
                    // information, options agreed upon, and so forth.
                    return myPeerConnection.createAnswer();
                })
                .then((answer) => {
                    this.log("-- Setting local description after creating answer");
                    // We now have our answer, so establish that as the local description.
                    // This actually configures our end of the call to match the settings
                    // specified in the SDP.
                    return myPeerConnection.setLocalDescription(answer);
                })
                .then(() => {
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
        myPeerConnection.setRemoteDescription(message.sdp).catch(this.handleErrorMessage);
    },

    handleNewICECandidateMessage(message) {
        let candidate = new RTCIceCandidate(message.candidate);
        this.log("Adding received ICE candidate: " + JSON.stringify(candidate));
        myPeerConnection.addIceCandidate(candidate).catch(this.handleErrorMessage);
    },
    closeVideo() {
      remoteVideo.src = null;
      localVideo.src = null;
    },
    uuidv4() { // UUID 생성
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
        let r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
      });
    }
  },
}
  
</script>

<style scoped>
.video_outer_line {
  /* border: 1px solid #cdd3d8;   */
  /* border-radius: 8px; */
  width: 100%;
}

#local_video {
  width: 49%;
  border: 3px solid orange;  
  border-radius: 8px;
}

#remote_video {
  margin: 0 0 0 20px;
  width: 49%;
  border: 3px solid orange;  
  border-radius: 8px;
}

.local_video_name {
  width: 49%;
  font-size: 20px;
  float: left;
  text-align: center;
  font-weight: bolder;
  /* border: 1px solid #FFE0B2; */
}
.remote_video_name {
  margin: 0 0 0 20px;
  width: 49%;
  font-size: 20px;
  float: left;
  text-align: center;
  font-weight: bolder;
  /* border: 1px solid #FFE0B2; */
}
table {
  border: 1px solid #FFE0B2;
}
table td {
  border: 1px solid #FFE0B2;
  text-align: center;
  width: 100%;
}
</style>
