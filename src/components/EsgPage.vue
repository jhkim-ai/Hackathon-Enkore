<template>
<div>
    <enkore-my-page></enkore-my-page>
    <div class="hello_main">
        <div class="group_hellomain">
            <h3 class="screen_out">안녕지수 홈</h3>
            <div class="area_thumb">
                <span class="ico_together3 ico_hello" v-bind:style="{ 'background-image' : 'url(' + getUrl() + ')' , 'background-size': '550px 500px','background-size': 'cover' }"></span>
            </div>
            <div class="area_txt"><span class="tit_test"><strong>ESG지수 자기평가</strong></span>
                <span class="txt_score"></span>
            </div>
        </div>
        <div class="group_compare"><strong class="screen_out"></strong>
            <hello-essential-graph>
                <div class="area_graph">
                    <div class="graph_compare">
                        <div class="shape_compare"></div><span class="value_lowest">0</span><span class="value_best">100</span>
                        <div class="info_compare my_compare" v-bind:style="{ left:this.getScore() }">
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
                                <div class="name_info"><span class="txt_compare">현재 평균&nbsp;<em></em></span></div>
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
                            <td style="width: 80%; text-align: center; font-weight: bolder;">체크리스트</td>
                            <td style="width: 10%; text-align: center; font-weight: bolder;">네</td>
                            <td style="width: 10%; text-align: center; font-weight: bolder;">아니요</td>
                        </tr>
                        <tr v-for="(item, opinionKey) in opinions" :key=opinionKey>
                            <td style="width: 80%; text-align: left; padding-left: 10px;">{{opinionKey+1}}. {{item.opinion}}</td>
                            <td style="width: 10%; text-align: center;">
                                <v-simple-checkbox v-model="item.agree" color="orange" @click="curState"></v-simple-checkbox>
                            </td>
                            <td style="width: 10%; text-align: center;">
                                <v-simple-checkbox v-model="item.disagree" color="orange" @click="curState"></v-simple-checkbox>
                            </td>
                        </tr>
                    </table>
                </div>
            </v-container>
        </div>
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
            urle: "",
            opinions: [{
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
            for (var i in this.opinions) {
                if (this.opinions[i].agree == true) {
                    this.score += 10;
                }
            }
            if (this.score < 20) {
                this.urle = "https://cdn-icons-png.flaticon.com/512/1164/1164944.png"
            } else if (this.score < 40) {
                this.urle = "data:image/png;base64,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"
            }else if (this.score < 60) {
                this.urle = "https://cdn.vectorstock.com/i/1000x1000/41/98/cartoon-yellow-sun-and-blue-cloud-with-kawaii-vector-20384198.webp"
            }else if (this.score < 80) {
                this.urle = "//t1.kakaocdn.net/together_image/common/ico_together3_rtn_221018.png"
            }else {
                this.urle = "https://i1.sndcdn.com/artworks-BxBGsHqqajgl8PZe-fg4f6w-t500x500.jpg"
            }
        },
        getScore: function () {
            return this.score + "%";
        },
        getScore2: function () {
            return this.score;
        },
        getUrl() {
            return this.urle;
        }
    }
}
</script>
