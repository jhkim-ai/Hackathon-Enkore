<template>
<div>
    <div id="popup">
        <div v-show="is_show">
            <DonatePopUp></DonatePopUp>
        </div>
    </div>
    <div class="service_title">
        <h4>category</h4>
        <i class="fas fa-gift funding_menu">&nbsp; Main 메뉴명(배당금 기부하기)</i>
        <div class="funding_title"><b>{{this.getCurboad().title}}</b></div>
        <div class="funding_sub_title">
          {{this.getCurboad().note}}
        </div>
        <div class="achievement_area">
          <span class="achievement_rate">{{this.searchDonate(getCurboad())}}</span>
          <span class="achievement_success_info"> 달성</span>
          <v-chip class="info_chip" small color="#FFE0B2" text-color="#FF6D00">
            <b>오늘 자정 마감</b>
          </v-chip>
        </div>
        <div class="total_amount_area">
          <span class="total_amount">{{ this.getCurboad().goal }}</span>
          <span class="total_amount_won"> 주</span>
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
                  src=https://www.youcan.or.kr/img_up/shop_pds/yc11782/build/option/t_logo1500270956.png
                  alt="더불어사단법인"
                >
              </v-list-item-avatar>
              <v-list-item-content>
                <div class="text-overline">
                  <b>{{getCurboad().foundation}}</b>
                  <!--button class="webcam_chatting_btn mr-3">
                    <div class="webcam_chatting_info">화상채팅하기</div>
                  </button-->
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
                <tr>
                  <td style="color: #adb5bd;">사업자등록번호</td>
                  <td style="color: #495057;">{{ this.getCurboad().bizno }}</td>
                </tr>
                <tr>
                  <td style="color: #adb5bd;">연락처</td>
                  <td style="color: #495057;">{{ this.getCurboad().tno }}</td>
                </tr>
                <tr>
                  <td style="color: #adb5bd;">주소</td>
                  <td style="color: #495057;">{{ this.getCurboad().address }}</td>
                </tr>
              </table>
            </div>
          </v-card>
        </div>
  
        <div class="order_divider mt-3 mb-4">
        </div>
        <article id="mArticle">
        <!--div data-tiara-layer="sign sign_button" changeclassbyoffset="" fixedreachedelementid="wrapbutton" fixeddirection="bottom" fixedclass="btn_static" class="fund_float btn_static" style="display: contents">
            <button type="button" class="btn_g btn_cheer">
                <span class="ico_together ico_cheer"></span>
                <span class="txt_float txt_cheer">응원<span class="screen_out">하기</span>
                    <span class="screen_out">응원수</span>
                    <span class="num_active">5,552</span>
                </span>
            </button>
            <button type="button" data-tiara-layer="share share_button" data-tiara-action-kind="Share" data-tiara-action-name="공유하기_클릭" class="btn_g">
                <span class="ico_together ico_share"></span>
                <span class="txt_float txt_share">공유
                    <span class="num_active">256</span>
                </span>
            </button>
            <button type="button" data-tiara-layer="donation donation_button" data-tiara-action-name="기부하기_클릭" class="btn_g btn_give" @click="donate">
                <span>
                    <span>
                        <span class="ico_give"></span>
                        <span class="txt_float txt_give">기부하기</span>
                    </span>
                </span>
            </button>
          </div-->

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
              <button  class="button_submit_area" @click="donate">
                <div class="button_submit_info"><b>기부하기</b></div>
              </button>
            </div>
        </article>
      </div>
    </div>
</template>

<script>
import DonatePopUp from './DonatePopUp.vue';
import{ mapGetters } from 'vuex';

export default {
    name: "DonateNext",
    data: () => {
        return {
            is_show: false,
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
        };
    },
    computed: {
        ...mapGetters([
            'fetcheBoard','fetcheBoardCurInfo'
        ]),
    },
    methods: {
        donate: function () {
            this.is_show = !this.is_show;
            console.log(this);
            console.log("부모");
        },
        getCurboad: function(){
            var getData = this.fetcheBoard
            for(var el in getData){
                if(getData[el].board==this.$route.query.param1){
                    return getData[el]
                } 
            }
            return "NULL"
        },
        searchDonate(item){
          var subSum=0;
          var subData = this.fetcheBoardCurInfo
          for(var al in subData){
          if(subData[al].board===item.board){
            for(var a in subData[al].stock){subSum += subData[al].stock[a];}
            return (subSum/item.goal*100) + "%";
          } 
        }
      return subSum;
    }
    },
    components: { DonatePopUp }
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
    margin: 0 15px 0 0;
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
  .fund_float{
    display : content;
  }
  </style>
  