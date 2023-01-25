<template>
<div>
    <div>
      <div class="wrap_tab carousel_box" style = "height: 500px" >
        <!-- <ul class="list_tab tab_type6" style = "height: 500px; flex-wrap: wrap; justify-content: center; align-content: space-around">
            <span class="txt_tab">의결권펀딩 참여하기</span>
        </ul> -->
      </div>
      <div class="group_fundlist funding_list_box">
        <h4 class="screen_out">모금중 리스트</h4>
        <div class="search_box_outer">
          <div class="search_box_inner">
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
            @click:append="searchDonate"
          ></v-text-field>
          </div>
        </div>
        <ul class="list_fund_size list_fund fund_raising"><!---->
          <!--이거 통하나가 카드섹션 하나-->
          <li class="listcard">
            <!-- <intersection-observer> -->
              <!-- <fundraising-card> -->
                <router-link class="p_card" :to="{ name: 'DonateDetail', query: { param1: '기부내용 타이틀 자리', param2: '재단이름'} }" >
                  <span class="box_thumb">
                  <span kagetype="c203" class="img_thumb" style="background-image: url(&quot;https://mud-kage.kakaocdn.net/dn/dlBtfK/btrVqgNnWSk/ifk5ZSEIkaK8A3oMLENq1k/c203.jpg&quot;);"></span>
                  </span>
                  <span class="box_together">
                    <span class="bundle_tit">
                      <strong class="tit_together ellipsis_type1">
                        <span class="tag_bundle"><!----><!---->
                          <span class="tag_state tag_state_default">종료임박</span><!----><!----></span><!----> Sample Title 1
                      </strong>
                      <span class="txt_proposer">
                        <span class="screen_out">제안자</span>
                        Sample Sub Title 1
                        </span></span>
                    <span class="wrap_state">
                      <span class="state_bar">
                        <span class="state_gage state_ing" style="width: 97%;"></span>
                      </span>
                      <span class="screen_out">달성률</span>
                      <span class="txt_per">97%</span>
                    </span><!---->
                    <span class="price_goal"><!----><!----> 795,900원 </span>
                  </span>
                </router-link>
              <!-- </fundraising-card> -->
            <!-- </intersection-observer> -->
          </li>
          <!-- 일단 여기 데이터 임시로 우겨 넣기(Sample Data) -->
          <li class="listcard"><intersection-observer><fundraising-card><a data-tiara-layer="p_card" data-tiara-action-name="프로젝트모금함_카드_클릭" class="link_pack" href="/fundraisings/100553"><span class="box_thumb"><span kagetype="c203" class="img_thumb" style="background-image: url(&quot;https://mud-kage.kakaocdn.net/dn/dyRoof/btrN4xjeST0/5o727y2ty6mkaqhkWgHhk0/c203.jpg&quot;);"></span></span><span class="box_together"><span class="bundle_tit"><strong class="tit_together ellipsis_type1"><span class="tag_bundle"><!----><!----><span class="tag_state tag_state_default">종료임박</span><!----><!----></span><!----> 한 쪽 눈을 실명한 늦깎이 탈북학생을 응원해 주세요 </strong><span class="txt_proposer"><span class="screen_out">제안자</span>사단법인 남북사랑네트워크</span></span><span class="wrap_state"><span class="state_bar"><span class="state_gage state_ing" style="width: 63%;"></span></span><span class="screen_out">달성률</span><span class="txt_per">63%</span></span><!----><span class="price_goal"><!----><!----> 3,821,100원 </span></span></a><!----><!----></fundraising-card></intersection-observer></li>
          <li class="listcard"><intersection-observer><fundraising-card><a data-tiara-layer="p_card" data-tiara-action-name="프로젝트모금함_카드_클릭" class="link_pack" href="/fundraisings/101722"><span class="box_thumb"><span kagetype="c203" class="img_thumb" style="background-image: url(&quot;https://mud-kage.kakaocdn.net/dn/cHOtHv/btrS5OLXDg5/B4ZfUvKzojaXPk7DZpd1M0/c203.jpg&quot;);"></span></span><span class="box_together"><span class="bundle_tit"><strong class="tit_together ellipsis_type1"><span class="tag_bundle"><!----><!----><!----><!----></span><!----> 사교육에 소외된 어린이에게 따뜻한 마음을 전해주세요! </strong><span class="txt_proposer"><span class="screen_out">제안자</span>국제청년센터</span></span><span class="wrap_state"><span class="state_bar"><span class="state_gage state_ing" style="width: 84%;"></span></span><span class="screen_out">달성률</span><span class="txt_per">84%</span></span><!----><span class="price_goal"><!----><!----> 1,928,600원 </span></span></a><!----><!----></fundraising-card></intersection-observer></li><li class="listcard"><intersection-observer><fundraising-card><a data-tiara-layer="p_card" data-tiara-action-name="프로젝트모금함_카드_클릭" class="link_pack" href="/fundraisings/101424"><span class="box_thumb"><span kagetype="c203" class="img_thumb" style="background-image: url(&quot;https://mud-kage.kakaocdn.net/dn/KEtSf/btrRnpgMSIA/dkc2wY13dm6199X5eZdD51/c203.jpg&quot;);"></span></span><span class="box_together"><span class="bundle_tit"><strong class="tit_together ellipsis_type1"><span class="tag_bundle"><!----><!----><!----><!----></span><!----> 남해지역의 특수 교육 대상 아이들을 응원해주세요! </strong><span class="txt_proposer"><span class="screen_out">제안자</span>남해장애인종합복지관</span></span><span class="wrap_state"><span class="state_bar"><span class="state_gage state_ing" style="width: 34%;"></span></span><span class="screen_out">달성률</span><span class="txt_per">34%</span></span><!----><span class="price_goal"><!----><!----> 3,028,700원 </span></span></a><!----><!----></fundraising-card></intersection-observer></li><li class="listcard"><intersection-observer><fundraising-card><a data-tiara-layer="p_card" data-tiara-action-name="프로젝트모금함_카드_클릭" class="link_pack" href="/fundraisings/101952"><span class="box_thumb"><span kagetype="c203" class="img_thumb" style="background-image: url(&quot;https://mud-kage.kakaocdn.net/dn/cJHB5s/btrUlQWFExw/2fvrCRUrFlLsyRyRYdBD60/c203.jpg&quot;);"></span></span><span class="box_together"><span class="bundle_tit"><strong class="tit_together ellipsis_type1"><span class="tag_bundle"><!----><!----><!----><!----></span><!----> 외로움 '1인분'을 담아, 맛있는 '1끼'로! </strong><span class="txt_proposer"><span class="screen_out">제안자</span>광명종합사회복지관</span></span><span class="wrap_state"><span class="state_bar"><span class="state_gage state_ing" style="width: 88%;"></span></span><span class="screen_out">달성률</span><span class="txt_per">88%</span></span><!----><span class="price_goal"><!----><!----> 1,052,300원 </span></span></a><!----><!----></fundraising-card></intersection-observer></li><li class="listcard"><intersection-observer><fundraising-card><a data-tiara-layer="p_card" data-tiara-action-name="프로젝트모금함_카드_클릭" class="link_pack" href="/fundraisings/101298"><span class="box_thumb"><span kagetype="c203" class="img_thumb" style="background-image: url(&quot;https://mud-kage.kakaocdn.net/dn/3zKU3/btrQXhx01LR/SLK6knIoodDTehgdy1X92k/c203.jpg&quot;);"></span></span><span class="box_together"><span class="bundle_tit"><strong class="tit_together ellipsis_type1"><span class="tag_bundle"><!----><!----><!----><!----></span><!----> 청소년 쉼터에도 겨울의 한파가 찾아오고 있습니다 </strong><span class="txt_proposer"><span class="screen_out">제안자</span>사단법인 해피피플</span></span><span class="wrap_state"><span class="state_bar"><span class="state_gage state_ing" style="width: 48%;"></span></span><span class="screen_out">달성률</span><span class="txt_per">48%</span></span><!----><span class="price_goal"><!----><!----> 4,779,700원 </span></span></a><!----><!----></fundraising-card></intersection-observer></li><li class="listcard"><intersection-observer><fundraising-card><a data-tiara-layer="p_card" data-tiara-action-name="프로젝트모금함_카드_클릭" class="link_pack" href="/fundraisings/101526"><span class="box_thumb"><span kagetype="c203" class="img_thumb" style="background-image: url(&quot;https://mud-kage.kakaocdn.net/dn/CHeEP/btrRHCONnTo/IibGrWNKzx8wXcSa2uIBnk/c203.jpg&quot;);"></span></span><span class="box_together"><span class="bundle_tit"><strong class="tit_together ellipsis_type1"><span class="tag_bundle"><!----><!----><span class="tag_state tag_state_default">새소식</span><!----><!----></span><!----> 청년도 목소리를 내고 싶어요🔈 </strong><span class="txt_proposer"><span class="screen_out">제안자</span>참여연대</span></span><span class="wrap_state"><span class="state_bar"><span class="state_gage state_ing" style="width: 65%;"></span></span><span class="screen_out">달성률</span><span class="txt_per">65%</span></span><!----><span class="price_goal"><!----><!----> 1,605,700원 </span></span></a><!----><!----></fundraising-card></intersection-observer></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import "@/assets/css/kakao.css";
export default {
  name: "DonateView",
  methods: {
    clickList() {
      this.$router.push({
        name: "Query",
        query: { name: "Query 프로그래밍 방식", age: 2 },
      });
    },
    searchDonate() {
      alert('click Test');
    }
  },
}
</script>

<style scoped>
.carousel_box {
  margin: 10px 0px 20px 0px;
}
.funding_list_box {
  width: 80%;
  margin: 50px auto 0px auto;
}
.funding_list_box > h4 {
  height: 100px;
  width: 100px;
  line-height: 20px;
  text-indent: 0px;
  margin-left: 10%;
  margin-top: -9px;
}
.list_fund li {
  margin: 40px 0.5% 0 0.5%;
}
.list_fund_size {
  padding-left: 10%;
}
.search_box_outer {
  display: flex;
  justify-content: flex-end;
}
.search_box_inner {
  /* margin: -35px 80px 12px 0px; */
  margin: -35px 10% 12px 0px;
  width: 300px;
}
</style>
