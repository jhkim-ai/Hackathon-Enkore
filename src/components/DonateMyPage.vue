<template>
<div>
    <enkore-my-page></enkore-my-page>
    <div id="mArticle">
        <div class="donate_cont" style="width:initial">
            <h2 class="screen_out">마이페이지</h2>
            <div class="detail_outer_box">
                <div class="detail_inner_left_box">
                    <ng-component>
                        <div class="group_donate">
                            <h3 class="tit_section section_type6">기부내역</h3>
                            <div class="area_doselect">
                                <div class="box_select">
                                    <div class="inner_box">
                                        <div class="opt_comm"><label for="opPeriod" class="screen_out">기간</label><select id="opPeriod" class="opt_select ng-valid ng-dirty ng-touched">
                                                <option value="">전체</option>
                                                <option value="1: 2023"> 2023 </option>
                                                <option value="2: 2022"> 2022 </option>
                                                <option value="3: 2021"> 2021 </option>
                                                <option value="4: 2020"> 2020 </option>
                                                <option value="5: 2019"> 2019 </option>

                                            </select><span class="box_arrow"><span class="ico_together ico_arrow"></span></span><span class="select_option select_on"> 전체 </span></div>
                                    </div>
                                    <div class="inner_box">
                                        <div class="opt_comm"><label for="opMeans" class="screen_out">기부방식</label><select id="opMeans" class="opt_select ng-untouched ng-pristine ng-valid">
                                                <option>전체</option>
                                                <option value="1: 0">직접기부</option>
                                                <option value="2: 1">익명기부</option>
                                            </select><span class="box_arrow"><span class="ico_together ico_arrow"></span></span><span class="select_option select_on"> 전체 </span></div>
                                    </div>
                                </div>
                            </div>
                            <div v-for="item in fetchedDonate" :key="item.time" class="area_receipt">
                                <h4 class="tit_area"> 2020년 12월 <span class="emph_num">(1건)</span></h4>
                                <div class="box_receipt">
                                    <ul class="list_receipt list_donate">
                                        <li class="item_donate">
                                            <p class="txt_sumdata"> ${this.getDate({{item.time}})} </p>
                                            <p class="tit_sum"><a data-tiara-layer="title" data-tiara-action-name="모금함_클릭" class="link_sum" href="/fundraisings/81894">{{item.comment}}</a></p>
                                            <div class="donate_numinfo"><strong class="num_sumprice">{{item.stock}}</strong>
                                                <span class="txt_sumprice"> {{item.qty}}주 (익명기부 OR 직접기부)</span></div>
                                            <div class="box_link">
                                            </div>
                                        </li>
                                    </ul>

                                </div>
                            </div>
                        </div>
                        <modal>
                            <div tabindex="-1" role="dialog" class="ngdialog-content" id="modalOFF" style="position: fixed; display: none; top: 25%; margin-left: -192px;">

                            </div>
                        </modal>
                        <modal>
                            <div tabindex="-1" role="dialog" class="ngdialog-content" id="modalOFF" style="position: fixed; display: none; top: 288px; margin: 0px 0px 0px -230px;">
                                <modal-content>
                                </modal-content>
                            </div>
                        </modal>
                    </ng-component>
                </div>
                <div class="detail_outer_right_box">
                    <div class="detail_inner_right_box">
                        <div data-tiara-layer="user" class="group_profile">
                            <h3 class="screen_out">내 프로필 정보</h3>
                            <div class="box_select">
                                <div class="area_name">
                                <div class="link_myprofile">
                                    <strong class="txt_nick">해커톤2조계정</strong>
                                    <div class="box_name">
                                        <strong class="txt_name"> ID-~~~ </strong>
                                    </div>
                                </div>
                            </div>
                            <div class="area_thumb">
                                <a routerlink="badges" data-tiara-layer="talk_badge" data-tiara-action-name="스탬프_클릭" class="link_badge" href="/my/badges">
                                    <span class="badge_thumb">
                                        <img class="img_thumb" src="https://mud-kage.kakaocdn.net/dn/wAcMI/btqcJGCmdqi/8y3t5GRvKS78AoakgTkWZ1/img.png">
                                    </span>
                                </a>
                                <a data-tiara-layer="profile_img" data-tiara-action-name="프로필수정_클릭" class="link_thumb" href="/preferences/profile">
                                    <span class="profile_thumb">
                                        <img profileimagecheck="" alt="프로필 사진" class="img_thumb" src="https://t1.kakaocdn.net/together_image/common/avatar/avatar03.png">
                                    </span>
                                </a>
                                </div>
                            </div>
                        </div>
                        <div>
                            총기부금액 ~~ 한정 
                        </div>
                            {{fetchedDonate}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>

import{ mapGetters } from 'vuex';
import EnkoreMyPage from '@/views/EnkoreMyPage.vue';


export default {
    name: "DonateMyPage",
    components: {
        EnkoreMyPage
    },
    computed: {
        ...mapGetters([
            'fetchedDonate',
        ]),
    },
    methods:{
        getDate(date){
            return date.slice(0,4) + "." + date.slice(4,5) + "." + date.slice(5,6);
        }
    }
};
</script>

<style scoped>
.detail_outer_box {
    margin: 0 auto;
    width: 90%;
}

.detail_inner_left_box {
    float: left;
    margin: 20px 0 0 0;
    padding: 0 25px 0 5px;
    width: 60%;
    /* box-shadow: 1px 1px 1px 1px rgb(100 100 0 / 10%); */
}

.detail_outer_right_box {
    float: right;
    margin: 20px 0 0 0;
    padding: 0 5px 0 25px;
    width: 40%;
    height: 2500px;
    /* box-shadow: 1px 1px 1px 1px rgb(50 0 100 / 10%); */
}

.detail_inner_right_box {
    position: sticky;
    top: 0;
}
</style>
