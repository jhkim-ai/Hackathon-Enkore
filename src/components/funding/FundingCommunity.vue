<template>
<div>
    <comments>
        <div data-tiara-layer="comment" class="wrap_cmt cmt_type3">
            <strong class="screen_out">댓글</strong>
            <div class="wrap_info">
                <div class="inner_info"><span class="txt_cmt">댓글 <span class="emph_sign" style="color: #FF6D00">{{this.fetchedDonateCount}}</span></span><strong class="screen_out">분류보기 선택</strong>
                </div>
            </div>
            <ul class="list_cmt">
                <comment v-for="item in fetcheRight" :key="item.seq">
                    <li id="213">
                        <button type="button" data-tiara-layer="profile_image" data-tiara-action-name="프로필_클릭" class="link_profile">
                            <img profileimagecheck="" class="img_thumb" src="https://t1.kakaocdn.net/together_image/common/avatar/avatar03.png" alt="익명의 회원입니다">
                        </button>
                        <div class="cmt_info">
                            <span class="info_append">
                                <strong class="tit_nickname">
                                    <a href="javascript:;" class="link_nickname">
                                        <span class="screen_out">ID :</span> {{item.user}}
                                    </a>
                                </strong>
                                <span class="txt_money">
                                    <span class="screen_out">기부주식</span> {{item.stock}} &nbsp; {{item.qty}}주</span>
                                </span>
                                <span class="txt_cmt">
                                    <span class="desc_cmt">{{item.comment}}</span>
                                    <span class="emoticon_pack"></span>
                                </span>
                                <span class="info_append"><span class="txt_time">{{getDate(item.time)}}</span>
                                <like-comment>
                                    <button type="button" data-tiara-layer="comment heart" data-tiara-action-kind="Like" data-tiara-action-name="좋아요_클릭" freezebutton="" class="btn_like" data-tiara-id="14067272" data-tiara-custom="liketype=like">
                                        <span class="ico_together ico_like"></span>&nbsp;좋아요&nbsp;
                                    </button>
                                </like-comment>
                            </span>
                        </div>
                    </li>
                </comment>
            </ul>
        </div>
    </comments>
</div>
</template>

<script>

import { mapGetters } from "vuex";

export default {
    name: "DonateCommu",
    computed: {
        ...mapGetters([
            'fetcheRight'
        ]),
    },
    methods:{
        getDate(date){
            return date.slice(0,4) + "." + date.slice(4,6) + "." + date.slice(6,8);
        }
    }
}
</script>
