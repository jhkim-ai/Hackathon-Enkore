<template>
  <div>
    <div class="service_title">
      <h4>category</h4>
      <i class="fas fa-gift funding_menu">&nbsp; Main 메뉴명(의결권펀딩)</i>
      <div class="funding_title"><b>[Title] 제목입니다.</b></div>
      <div class="funding_sub_title">
        [밀폐는 물론 전자렌지까지 쌉가능!] 위생적인 스텐으로 오래오래 사용하세요. 
        20년 스텐전문가의 역작, 전자레인지 인증, 항균뚜껑 친환경 세라믹 스텐밀폐용기 - 비오스코 프레쉬!
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

      <div class="order_divider">
        <v-divider class="mt-3 mb-4"></v-divider>
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
        <button class="button_submit_area">
          <div class="button_submit_info">
              <b>펀딩하기</b>
          </div>
        </button>
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
                <button class="webcam_chatting_btn mr-3">
                  <div class="webcam_chatting_info">화상채팅하기</div>
                </button>
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

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
</style>
