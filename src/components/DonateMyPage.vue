<template>
<div>
    <enkore-my-page></enkore-my-page>
    <div id="mArticle">
        <div class="donate_cont test" style="width:initial">
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
                            <div v-for="item in fetchedDonate" :key="item.seq" class="area_receipt">
                                <h4 class="tit_area"> {{getTitleDate(item.time)}}<span class="emph_num">(1건)</span></h4>
                                <div class="box_receipt">
                                    <ul class="list_receipt list_donate">
                                        <li class="item_donate">
                                            <p class="txt_sumdata"> {{getDate(item.time)}} </p>
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
                                    <strong class="txt_nick">gom626</strong>
                                    <div class="box_name">
                                        <strong class="txt_name"> 효도박사 </strong>
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
                            <div class="Reward_innerContent__3J75P">
                                <div class="Reward_subInfoContainer__UaprA">
                                    <div class="Reward_divider__1vIOJ"></div>
                                    <div class="Reward_subInfo__39LWw">
                                        <strong>총 기부내역 : &nbsp;&nbsp;&nbsp;</strong>
                                        <strong class="Reward_infoValue__1k-IM">100 주</strong>
                                    </div>
                                    <div class="Reward_divider__1vIOJ"></div>
                                    <div class="Reward_subInfo__39LWw">
                                        <strong>기부내역(금액환산) : &nbsp;&nbsp;&nbsp;</strong>
                                        <strong class="Reward_infoValue__1k-IM">15,000 원</strong>
                                    </div>
                                    <div class="Reward_divider__1vIOJ"></div>
                                    <div class="Reward_subInfo__39LWw">
                                        <strong>세액공제 : &nbsp;&nbsp;&nbsp;</strong>
                                        <strong class="Reward_infoValue__1k-IM">2000 원</strong>
                                    </div>
                                </div>
                                <br>
                                (*1천만원까지 공제율 20% 적용, 나머지 ~)
                            </div>
                        </div>
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
            return date.slice(0,4) + "." + date.slice(4,6) + "." + date.slice(6,8);
        },
        getTitleDate(date){
            return date.slice(0,4) + "년 " + date.slice(4,6).replace("0","") + "월";
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

.test {
    margin: -100px 0 0 0;
}
</style>
