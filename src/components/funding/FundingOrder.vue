<template>
  <div>
    <div class="service_title">
      <h4>category</h4>
      <i class="fas fa-gift funding_menu">&nbsp; Main 메뉴명(의결권펀딩)</i>
      <div class="funding_title"><b>[Title] 제목입니다.</b></div>
      <div class="funding_sub_title">
        [밀폐는 물론 전자렌지까지 쌉가능!] 위생적인 스텐으로 오래오래 사용하세요. 20년 스텐전문가의 역작, 전자레인지 인증, 항균뚜껑 친환경 세라믹 스텐밀폐용기 - 비오스코 프레쉬!
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
          <b>'서포터수'명 참여</b>
        </v-chip>
      </div>

      <div class="order_divider">
        <v-divider class="mt-3 mb-4"></v-divider>
      </div>
      <div class="order_btn_group">
        <v-btn>hi</v-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {

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
  margin: 0 0 10px 0;
}
</style>
