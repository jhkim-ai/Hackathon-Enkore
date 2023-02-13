<template>
<div class="hello_main">
    <div class="group_hellomain">
        <h3 class="screen_out" >안녕지수 홈</h3>
        <div class="area_thumb">
            <span class="ico_together3 ico_hello" v-bind:style="{ 'background-image' : 'url(' + getUrl() + ')' , 'background-size': '550px 500px','background-size': 'cover' }"></span>
        </div>
        <div class="area_txt"><span class="tit_test">현재 모의ESG지수</span>
            <span class="txt_score"></span>
        </div>
    </div>
    <div class="group_compare"><strong class="screen_out"></strong>
        <hello-essential-graph>
            <div class="area_graph">
                <div class="graph_compare">
                    <div class="shape_compare"></div><span class="value_lowest">0</span><span class="value_best">100</span>
                    <div class="info_compare my_compare" v-bind:style= "{ left:this.getScore() }">
                        <div class="indicate_point">
                            <!---->
                            <div class="name_info" style="left: 0px;"><span class="txt_compare">내점수&nbsp;<em class="tit_emph">{{this.getScore2()}}점</em></span></div>
                            <!---->
                            <div class="line_info"></div>
                            <div class="dot_info"></div>
                        </div>
                    </div>
                    <div class="info_compare average_compare" style="left: 50%;">
                        <div class="indicate_point">
                            <div class="line_info"></div>
                            <div class="name_info"><span class="txt_compare">현재 평균&nbsp;<em>50</em></span></div>
                        </div>
                    </div>
                </div>
            </div>
        </hello-essential-graph>
        <div class="area_condition">
            <div class="txt_update"><span class="screen_out"></span></div>
        </div>
        <v-container>
                  <div style="display: grid">
                    <table class="opnioins_table">
                      <tr>
                        <td style="width: 80%; text-align: center; font-weight: bolder;">안건</td>
                        <td style="width: 10%; text-align: center; font-weight: bolder;">찬성</td>
                        <td style="width: 10%; text-align: center; font-weight: bolder;">반대</td>
                      </tr>
                      <tr v-for="(item, opinionKey) in opinions" :key=opinionKey>
                        <td style="width: 80%; text-align: left; padding-left: 10px;">{{opinionKey+1}}. {{item.opinion}}</td>
                        <td style="width: 10%; text-align: center;"><v-simple-checkbox v-model="item.agree" color="orange" @click="curState"></v-simple-checkbox></td>
                        <td style="width: 10%; text-align: center;"><v-simple-checkbox v-model="item.disagree" color="orange" @click="curState"></v-simple-checkbox></td>
                      </tr>
                    </table>    
                  </div>
                </v-container>
    </div>
</div>
</template>

<script>
export default {
    name: 'EsgPage',
    data() {
        return {
        dialog: true,
        score: 0,
        urle:"",
        opinions: [
            {
                opinion: '이사회 내 ESG 안건을 상정했나요?',
                agree: false,
                disagree: false,
            },
            {
                opinion: '사외이사 비율이 50% 이상인가요?',
                agree: false,
                disagree: false,
            },
            {
                opinion: '이사회 구성원 중 여성 비율이 30% 이상인가요?',
                agree: false,
                disagree: false,
            },
            {
                opinion: '배당정책이 있나요?',
                agree: false,
                disagree: false,
            },
            {
                opinion: '최근 3년 간 배당을 1회 이상 실시하였나요?',
                agree: false,
                disagree: false,
            },
            {
                opinion: '전자/서면 투표를 실시하고 있나요?',
                agree: false,
                disagree: false,
            },
            {
                opinion: '내부감사부서가 설치되어있나요?',
                agree: false,
                disagree: false,
            },
            {
                opinion: '감사기구 내 회계/재무 전문가가 있나요?',
                agree: false,
                disagree: false,
            },
            {
                opinion: '최근 10년 간 개인정보 침해 사례가 발생한 적 있나요?',
                agree: false,
                disagree: false,
            },
            {
                opinion: '최근 10년 간 지배구조 법/규제를 위반한 적 있나요?',
                agree: false,
                disagree: false,
            },              
            ],
        }
    },
    methods: {
        curState: function () {
            this.score = 0;
            console.log(this.score)
            for(var i in this.opinions){
                if(this.opinions[i].agree==true){
                    this.score+=10;
                }
            }
            if(this.score <40){
                this.urle="https://cdn-icons-png.flaticon.com/512/1164/1164944.png"
            }
            else if(this.score <70){
                this.urle="//t1.kakaocdn.net/together_image/common/ico_together3_rtn_221018.png"
            }
            else{
                this.urle="https://i1.sndcdn.com/artworks-BxBGsHqqajgl8PZe-fg4f6w-t500x500.jpg"
            }

        },
        getScore: function(){
            return this.score+"%";
        },
        getScore2: function(){
            return this.score;
        },
        getUrl(){
            return this.urle;
        }
    }
}
</script>
