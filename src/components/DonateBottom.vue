<template>
<div>
    <div id="app">
        <div v-show="is_show">
            <DonatePopUp></DonatePopUp>
        </div>
    </div>
    <article id="mArticle">
        <div data-tiara-layer="sign sign_button" changeclassbyoffset="" fixedreachedelementid="wrapbutton" fixeddirection="bottom" fixedclass="btn_static" class="fund_float btn_static">
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
            </button></div>
    </article>
</div>
</template>

<script>
import DonatePopUp from './DonatePopUp.vue';

export default {
    name: "app",
    data: () => {
        return {
            is_show: false
        };
    },
    methods: {
        donate: function () {
            this.is_show = !this.is_show;
            console.log(this);
            console.log("부모");
        },
    },
    components: { DonatePopUp }
}
</script>
