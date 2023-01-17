<template>
<div>
    <funding-tool-bar></funding-tool-bar>
    <h2>name: {{ $route.query }}</h2>
    <h2>name: {{ $route.query.param1 }}</h2>
    <h2>age: {{ $route.query.param2 }}</h2>
    <div class="info_state">
        <span class="total_fund">1,437,800
            <span class="txt_won">원</span>
        </span>
        <span class="txt_goal" style = "display: block; padding-top: 1px; font-size: 17px;text-align: center;">2,100,000원 목표</span>
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
            <dd class="txt_fund"> 1,014,400원 </dd>
            <dt class="tit_fund"> 참여기부 (4,198명) </dt>
            <dd class="txt_fund"> 423,400원 </dd>
        </dl>
        <dl class="detail_fund fund_belong">
            <dt class="tit_fund"> ㄴ 응원기부 (2,919명) </dt>
            <dd class="txt_fund"> 291,900원 </dd>
            <dt class="tit_fund"> ㄴ 공유기부 (197명) </dt>
            <dd class="txt_fund"> 19,700원 </dd>
            <dt class="tit_fund"> ㄴ 댓글기부 (1,078명) </dt>
            <dd class="txt_fund"> 107,800원 </dd>
            <dt class="tit_fund"> ㄴ 기부쿠폰<!----> (4명) </dt>
            <dd class="txt_fund"> 4,000원 </dd>
        </dl>
        <dl class="detail_fund"></dl>
    </div>
</div>
</template>
  
<script>
import FundingToolBar from '@/components/FundingToolBar.vue'
export default {
    components: { FundingToolBar },
}
</script>
  
<style>
.vue-divider {
    display: flex;
    width: 60%;
    justify-content: center;
    margin: auto;
}
</style>