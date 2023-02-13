<template>
<div>
    <div class="outer-line">
        
        <div data-tiara-layer="top_summary" class="wrap_visual">
            <div kagetype="c360" class="cont_visual" v-bind:style= "{ 'background-size': 'cover' , 'background-color': 'rgb(59, 56, 32)', 'background-image': 'url(' + getCurboad().pic + ')'}">
                <div class="front_pack">
                    <span class="tag_group"></span>
                    <h4 class="tit_visual ellipsis_type1">{{this.getCurboad().title}}</h4>
                    <span class="txt_sponsor ellipsis_g">{{this.getCurboad().foundation}}</span>
                    <fundraising-badges>
                        <div class="badge_group" style="color: #fafafa;">
                            {{this.getCurboad().note}}
                        </div>
                    </fundraising-badges>
                </div>
            </div>
        </div>
        <div class="wrap_subject" style="height:500px" >
            <div class="info_state">
                <span class="total_fund" style=" color: #EC6D1E ">{{this.getTotStockCnt()}} 
                    <span class="txt_won">주</span>
                </span>
                <span class="txt_goal" style="display: block; padding-top: 1px; font-size: 17px;text-align: center ; color: #EC6D1E ;">{{this.getCurboad().goal}}주 목표</span>
                <div id="animate-area" class="chart_fund pack_type1">
                    <span class="progress_road" style="box-sizing: content-box">
                        <span class="screen_out">현재 진행상태</span>
                        <span class="mark_pack">
                            <span class="inner_mark_pack">
                                <span class="mark_point" v-bind:style= "{ left:this.getPerCentPlus() }">
                                    <span class="ico_chart txt_result">
                                        <span class="num_per">{{this.getPerCent()}} </span>
                                        <span class="txt_per">%</span>
                                    </span>
                                </span>
                            </span>
                        </span>
                    </span>
                    <span class="graph_road">
                        <span class="graph_bar">
                            <span class="inner_graph_bar" style="width:100%">
                                <span class="sign_graph" v-bind:style= "{ width:this.getPerCentPlus() }"></span>
                            </span>
                        </span>
                    </span>
                </div>
                <strong class="screen_out">기부액 현황</strong>
                <dl class="detail_fund">
                    <dt class="tit_fund"> 직접기부 OR 익명기부 </dt>
                    <dd class="txt_fund"> 기부주식현황  </dd>
                </dl>
                <dl v-for="item in fetcheBoardCurInfo" :key="item.board" class="detail_fund fund_belong">
                    <div v-if = "item.board == $route.query.param1">
                        <div v-for= "( a , b ) in item.stock" :key="a">
                            <dt  class="tit_fund"> ㄴ {{b}} </dt>
                            <dd class="txt_fund"> {{a}}주 </dd>
                        </div>
                    </div>
                    
                </dl>
                <dl class="detail_fund"></dl>
            </div>
        </div>
        <!--h2>name: {{ $route.query }}</h2-->
    </div>
</div>
</template>

<script>

import{ mapGetters } from 'vuex';

export default{
    name: 'DonateStory',
    data: () => {
        return {
            
        };
    },
    computed: {
        ...mapGetters([
            'fetchedDonateCount','fetcheBoardCurInfo','fetcheBoard'
        ]),
    },
    methods : {
        getCurboad(){
            var getData = this.fetcheBoard
            for(var el in getData){
                if(getData[el].board==this.$route.query.param1){
                    return getData[el]
                } 
            }
            return "NULL"
        },
        getTotStockCnt(){
            var subSum=0;
            var subData = this.fetcheBoardCurInfo
            for(var al in subData){
                if(subData[al].board==this.$route.query.param1){
                    for(var a in subData[al].stock){subSum += subData[al].stock[a];}
                    return subSum;
                } 
            }
            return subSum;
            
        },
        getPerCent(){
            return this.getTotStockCnt()/this.getCurboad().goal*100;
        },
        getPerCentPlus(){
            return this.getPerCent() + "%";
        }
    }
}

</script>

<style scoped>
.outer-line {
    margin: 30px auto;
}
</style>
