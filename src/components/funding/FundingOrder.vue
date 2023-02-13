<template>
  <div>
    <div class="service_title">
      <h4>category</h4>
      <i class="fas fa-gift funding_menu">&nbsp; Main 메뉴명(의결권펀딩)</i>
      <div class="funding_title"><b>[삼성전자] 청렴결백 대표자</b></div>
      <div class="funding_sub_title">
        여러분들이 주신 한표 한표 힘받아 투명한 주주총회가 될 수 있도록 보여드리겠습니다.
        이번 주주총회에서 새로운 이사/감사를 통해 New 삼성에 박차를 가하는 삼성전자가 되도록 힘을 쏟겠습니다.
      </div>
      <div class="achievement_area">
        <span class="achievement_rate">2,530</span>
        <span class="achievement_success_info">% 달성</span>
        <v-chip class="info_chip" small color="#FFE0B2" text-color="#FF6D00">
          <b>오늘 자정 마감</b>
        </v-chip>
      </div>
      <div class="total_amount_area">
        <span class="total_amount">12,662,530</span>
        <span class="total_amount_won"> 원</span>
        <v-chip class="info_chip" small color="#F5F5F5" text-color="#424242">
          <b>{{ member }}명 참여</b>
        </v-chip>
      </div>

      <div>
        <v-card
          class="mx-auto mt-5"
          outlined
        >
          <v-list-item three-line>
            <v-list-item-avatar
              tile
              size="80"
              color="grey"
            >
              <img
                src="https://cdn.vuetifyjs.com/images/john.jpg"
                alt="John"
              >
            </v-list-item-avatar>
            <v-list-item-content>
              <div class="text-overline">
                <b>법무법인 김앤장</b>
                <div class="webcam_chatting_btn">
                <v-dialog
                  transition="dialog-bottom-transition"
                  max-width="80%"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <button 
                      class="webcam_chatting_btn"
                      v-bind="attrs"
                      v-on="on"
                      @click="setModalView">
                      <div class="webcam_chatting_info">화상채팅하기</div>
                    </button>
                  </template>
                  <template v-slot:default="dialog">
                    <v-card>
                      <v-toolbar
                        color="#FF6D00"
                      >화상채팅</v-toolbar>
                      <v-card-text>
                        <div class="text-h2 pa-12">
                          <funding-video-chatting></funding-video-chatting>
                        </div>
                      </v-card-text>
                      <v-card-actions class="justify-end">
                        <v-btn
                          text
                          @click="dialog.value = false"
                        >Close</v-btn>
                      </v-card-actions>
                    </v-card>
                  </template>
                </v-dialog>  
                </div>              
              </div>
              <v-list-item-title class="text-h9 mb-1">
                홍길동 <span style="font-size: 8px">변호사</span>
              </v-list-item-title>
              <v-list-item-subtitle class="mb-1">
                <div class="progress_group">
                  <div class="progress_group_item">
                    평판
                    <v-progress-linear
                      color="#757575"
                      rounded
                      value="30"
                    ></v-progress-linear>
                  </div>
                  <div class="progress_group_item">
                    소통
                    <v-progress-linear
                      color="#FF9C00"
                      rounded
                      value="80"
                    ></v-progress-linear>
                  </div>
                  <div class="progress_group_item">
                    인기
                    <v-progress-linear
                      color="#0033CC"
                      rounded
                      value="50"
                    ></v-progress-linear>
                  </div>
                </div>
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-divider class="mb-2"></v-divider>

          <div class="ml-4 mr-4 mb-2">
            <table class="user_info_table">
              <tr
                v-for="item in userInfo"
                :key="item.name"
              >
                <td style="color: #adb5bd;">{{ item.key }}</td>
                <td style="color: #495057;">{{ item.value }}</td>
              </tr>
            </table>
          </div>
        </v-card>
      </div>

      <div class="order_divider mt-3 mb-4">
      </div>
      
      <div class="order_btn_group">
        <button>
          <div class="button_icon_area">
            <div class="mdi mdi-heart-outline button_icon_img"></div>
            <div class="button_icon_info">1,234</div>
          </div>
        </button>
        <button>
          <div class="button_icon_area">
            <div class="mdi mdi-export-variant button_icon_img"></div>
            <div class="button_icon_info">1,234</div>
          </div>
        </button>
        <v-dialog
          transition="dialog-bottom-transition"
          v-model="dialog"
          max-width="60%"
          scrollable
        >
          <template v-slot:activator="{ on, attrs }">
            <button  
              class="button_submit_area" 
              v-bind="attrs"
              v-on="on">
              <div class="button_submit_info">
                  <b>펀딩하기</b>
              </div>
            </button> 
          </template>
          <v-card>
            <v-toolbar color="orange" class="mb-5">
              의결권 위임하기
            </v-toolbar>
            <v-card-text style="height: 500px;">
              <span class="dialog_sub_title"> 개인정보입력 </span> <small class="ml-1" style="font-size: 5px; color: #FFE0B2"> *필수항목</small>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="4" class="dialog_input_component_first">
                    <v-text-field
                      label="이름*"
                      required
                      clearable
                      counter="3"
                      :rules="rules2"
                      rounded
                      dense
                      filled
                      color="orange"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4" class="dialog_input_component_first">
                    <v-text-field
                      label="생년월일"
                      hint="example of helper text only on focus"
                      rounded
                      dense
                      filled
                      color="orange"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4" class="dialog_input_component_first">
                    <v-text-field
                      label="연락처"
                      hint="'-'없이 입력"
                      persistent-hint
                      required
                      rounded
                      dense
                      filled
                      counter="3"
                      :rules="rules2"
                      color="orange"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" class="dialog_input_component">
                    <v-text-field
                      label="Email*"
                      required
                      rounded
                      dense
                      filled
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4" class="dialog_input_component">
                    <v-text-field
                      label="소유 주식 총수"
                      type="number"
                      required
                      rounded
                      dense
                      filled
                      clearable
                      hint="숫자만 입력"
                      persistent-hint
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4" class="dialog_input_component">
                    <v-text-field
                      label="의결권 보유 주"
                      type="number"
                      required
                      rounded
                      dense
                      filled
                      clearable
                      hint="숫자만 입력"
                      persistent-hint
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4" class="dialog_input_component">
                    <v-text-field
                      label="위임 주식 수"
                      type="number"
                      required
                      rounded
                      dense
                      filled
                      clearable
                      hint="숫자만 입력"
                      persistent-hint
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
              <span class="dialog_sub_title"> 의결권 위임 주주총회 안건 </span>
                <v-container>
                  <div>
                    <table class="opnioins_table">
                      <tr>
                        <td style="width: 80%; text-align: center;">안건</td>
                        <td style="width: 10%; text-align: center;">찬성</td>
                        <td style="width: 10%; text-align: center;">반대</td>
                      </tr>
                      <tr v-for="(item, opinionKey) in opinions" :key=opinionKey>
                        <td style="width: 80%; text-align: left; padding-left: 10px;">{{opinionKey+1}}. {{item.opinion}}</td>
                        <td style="width: 10%; text-align: center;"><v-simple-checkbox v-model="item.agree" disabled></v-simple-checkbox></td>
                        <td style="width: 10%; text-align: center;"><v-simple-checkbox v-model="item.disagree" disabled></v-simple-checkbox></td>
                      </tr>
                    </table>    
                  </div>
                </v-container>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="#FF6D00"
                text
                @click="dialog = false"
              >
                위임하기
              </v-btn>
              <v-btn
                color="#FF6D00"
                text
                @click="dialog = false"
              >
                취소
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>
    </div>
  </div>
</template>

<script>
import FundingVideoChatting from './FundingVideoChatting.vue';

export default {
  data() {
    return {
      dialog: false,
      testItem: ['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump'],
      rules: [v => v.length <= 3 || 'Max 3 characters'],
      opinions: [
          {
            opinion: '제52기 정기주주총회 소집결정의 건',
            agree: true,
            disagree: false,
          },
          {
            opinion: '제52기 정기주주총회 회의 목적사항 결정의 건',
            agree: false,
            disagree: true,
          },
          {
            opinion: '2021년 사회공헌 매칭기금 운영계획 승인의 건',
            agree: true,
            disagree: false,
          },
          {
            opinion: '삼성 준법감시위원회 설치 및 운영에 관한 협약 및 규정 개정의 건',
            agree: false,
            disagree: true,
          },
          {
            opinion: '학교법인 충남삼성학원 기부금 출연의 건',
            agree: true,
            disagree: false,
          },
          {
            opinion: '삼성바이오로직스㈜, 삼성바이오에피스㈜ 삼성 CI 상표 사용 계약 체결의 건',
            agree: false,
            disagree: true,
          },
          {
            opinion: '제52기 정기주주총회 소집결정의 건',
            agree: true,
            disagree: false,
          },
          {
            opinion: '제52기 정기주주총회 회의 목적사항 결정의 건',
            agree: false,
            disagree: true,
          },
          {
            opinion: '2021년 사회공헌 매칭기금 운영계획 승인의 건',
            agree: true,
            disagree: false,
          },
          {
            opinion: '삼성 준법감시위원회 설치 및 운영에 관한 협약 및 규정 개정의 건',
            agree: false,
            disagree: true,
          },
          {
            opinion: '학교법인 충남삼성학원 기부금 출연의 건',
            agree: true,
            disagree: false,
          },
          {
            opinion: '삼성바이오로직스㈜, 삼성바이오에피스㈜ 삼성 CI 상표 사용 계약 체결의 건',
            agree: false,
            disagree: true,
          },
        ],
        headers: [
          {
            text: 'Dessert (100g serving)',
            align: 'start',
            sortable: false,
            value: 'name',
          },
          { text: 'Calories', value: 'calories' },
          { text: 'Fat (g)', value: 'fat' },
          { text: 'Carbs (g)', value: 'carbs' },
          { text: 'Protein (g)', value: 'protein' },
          { text: 'Iron (%)', value: 'iron' },
          { text: 'Gluten-Free', value: 'glutenfree' },
        ],
      videoChattingModal: false,
      member: 199,
      userInfo: [
        {
          key: "이메일",
          value: "abcd@gmail.com"
        },
        {
          key: "연락처",
          value: "02-1234-5678",
        },
        {
          key: "홈페이지",
          value: "https://www.naver.com",
        },
      ],
    }
  },
  computed: {
    rules2() {
      return [v => v.length <= 3 || 'Max 3 characters']
    }
  },
  methods: {
    setModalView() {
      this.videoChattingModal = !this.videoChattingModal;
      console.log(this.videoChattingModal);
    }
  },
  components: {
    FundingVideoChatting,
  }
}
</script>

<style scoped>
.service_title > h4{
  margin: 0 0 20px 0;
  color: rgb(134, 142, 150);
}
.funding_menu {
  font-size: 1rem;
  margin: 0 0 20px 0;
  color: #495057;
}
.funding_title {
  margin: 0 0 7px 0;
  font-size: 1.5rem;
}
.funding_sub_title {
  font-size: 0.9rem;
  margin: 0 0 20px 0;
  color: #495057;
}
.achievement_area {
  margin: 0 0 10px 0;
}
.achievement_rate {
  line-height: 34px;
  letter-spacing: -.51px;
  font-size: 24px;
  font-weight: 700;
  color: #FF6D00;
}
.achievement_success_info {
  line-height: 28px;
  letter-spacing: -.3px;
  font-size: 16px;
  font-weight: 400;
  margin-left: 2px;
  color: #FF6D00;
}
.total_amount {
  line-height: 34px;
  letter-spacing: -.51px;
  font-size: 24px;
  font-weight: 700;
  color: #212529;
}
.total_amount_won {
  font-size: 16px;
}
.info_chip {
  margin: -6px 0 0 10px;
}
.order_btn_group {
  display: flex;
  margin: 0 0 10px 0;
}
.button_icon_area {
  margin: 0 8px 0 0;
  border: 1px solid #cdd3d8;  
  border-radius: 8px;
}
.button_icon_info {
  margin: -6px 10px 0 10px;
}
.button_icon_img {
  margin: 0 0 0 0;
  font-size: 24px;
  color: #919292;
}
.button_submit_area {
  width: 100%;
  height: auto;
  border: 1px solid #FFE0B2; 
  border-radius: 8px;
  background-color: #FFE0B2;
  padding: 5px;
  text-align: center;
  margin: 0 0 0 10px;
}
.button_submit_info {
  color: #FF6D00;
  font-size: 18px;
}
.progress_group {
  display: flex;
}
.progress_group_item {
  margin: 0 8px 0 0;
  width: 33%;
}
.user_info_table {
  border-collapse: separate;
  border-spacing: 0.5rem 0.5rem;
}
.webcam_chatting_btn {
  float: right;
}
.webcam_chatting_info {
  padding: 5px 15px 5px 15px;
  border: 1px solid #FFE0B2; 
  border-radius: 8px;
  background-color: #FFE0B2;
}
.dialog_sub_title {
  font-weight: 900;
  color: #FF6D00;
  /* margin: 0 0 50px 0; */
}
.opnioins_table {
  width: 100%;
  border: 1px solid #FFE0B2;
}
.opnioins_table td {
  border: 5px solid #FFE0B2;
}
.dialog_input_component_first {
  margin: -10px 0 0 0;
}
.dialog_input_component {
  margin: -10px 0 0 0;
}
</style>
