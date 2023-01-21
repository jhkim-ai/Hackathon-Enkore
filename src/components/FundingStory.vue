<template>
  <div>
    <div class="outer-line">
    <div data-tiara-layer="top_summary" class="wrap_visual">
        <div kagetype="c360" class="cont_visual" style="background-size: cover; background-color: rgb(59, 56, 32); background-image: url(&quot;https://mud-kage.kakaocdn.net/dn/cJHB5s/btrUlQWFExw/2fvrCRUrFlLsyRyRYdBD60/c360.jpg&quot;);">
            <div class="front_pack">
                <span class="tag_group"></span>
                <h4 class="tit_visual ellipsis_type1">{{ $route.query.param1 }}</h4>
                <span class="txt_sponsor ellipsis_g">{{ $route.query.param2 }}</span>
                <fundraising-badges>
                    <div class="badge_group" style="color: #fafafa;">
                        블라블라 블라리 블라 ~~~  내용들어가는 칸으로 사용
                    </div>
                </fundraising-badges>
            </div>
        </div>
    </div>
    <div class="info_state">
        <span class="total_fund">50
            <span class="txt_won">주</span>
        </span>
        <span class="txt_goal" style = "display: block; padding-top: 1px; font-size: 17px;text-align: center;">2000주 목표</span>
        <div id="animate-area" class="chart_fund pack_type2">
            <span class="progress_road">
                <span class="screen_out">현재 진행상태</span>
                <span class="mark_pack">
                    <span class="inner_mark_pack">
                        <span class="mark_point" style="left: 69%;">
                            <span class="ico_chart txt_result">
                                <span class="num_per">69</span>
                                <span class="txt_per">%</span>
                            </span>
                        </span>
                    </span>
                </span>
            </span>
            <span class="graph_road">
                <span class="graph_bar">
                    <span class="inner_graph_bar">
                        <span class="sign_graph" style="width: 69%;"></span>
                    </span>
                </span>
            </span>
        </div>
        <strong class="screen_out">기부액 현황</strong>
        <dl class="detail_fund">
            <dt class="tit_fund"> 직접기부 (138명) </dt>
            <dd class="txt_fund"> 50주 </dd>
        </dl>
        <dl class="detail_fund fund_belong">
            <dt class="tit_fund"> ㄴ 삼성전자 (30명) </dt>
            <dd class="txt_fund"> 40주 </dd>
            <dt class="tit_fund"> ㄴ 현대자동차 (1명) </dt>
            <dd class="txt_fund"> 2주 </dd>
            <dt class="tit_fund"> ㄴ 기아차 (1명) </dt>
            <dd class="txt_fund"> 1주 </dd>
            <dt class="tit_fund"> ㄴ 삼성SDS (1명) </dt>
            <dd class="txt_fund"> 2주 </dd>
        </dl>
        <dl class="detail_fund"></dl>
    </div>
    <!--h2>name: {{ $route.query }}</h2-->
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>