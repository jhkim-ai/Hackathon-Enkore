<template>
<div>
    <div tabindex="0" role="dialog" class="ngdialog-content opened_modal" id="modalON" style="position: fixed; display: block; top: 15%; margin-left: -196px;">
        <modal-content>
            <div class="inner_together_layer inner_together_layer6">
                <div class="layer_head"><strong class="screen_out">기부하기</strong></div>
                <div class="layer_body">
                    <form name="form" class="form_manage ng-untouched ng-pristine ng-valid">
                        <fieldset>
                            <legend class="screen_out">기부금액 입력 양식</legend>
                            <div data-tiara-layer="donation donation_detail" class="wrap_fund">
                                <dl class="list_pay">
                                    <div>
                                        <v-autocomplete :items="selStock" item-text="name" deletable-chips return-object @change="(items) => checkStock(items)"></v-autocomplete>
                                        <v-checkbox v-model="checkbox1" color="success" :label="`${curStock} 현재 기부가능 주식 총 수 : ${curStockCnt.toString()}주`" value disabled></v-checkbox>
                                    </div>
                                    <dt class="cate_write cate_fund"><span>기부금 결제</span></dt>
                                    <dd class="info_write info_fund">
                                        <p class="txt_info"> 무통장은 3천원, 기타 결제는 1천원부터 가능합니다. </p>
                                        <div class="box_digit">
                                            <button type="button" data-tiara-layer="100" data-tiara-action-name="기부금액_클릭" class="btn_digit" @click="totalStock+=1"> + 1주
                                                <span class="screen_out">원 입력</span>
                                            </button>
                                            <button type="button" data-tiara-layer="1000" data-tiara-action-name="기부금액_클릭" class="btn_digit" @click="totalStock+=5"> + 5주
                                                <span class="screen_out">원 입력</span>
                                            </button>
                                            <button type="button" data-tiara-layer="5000" data-tiara-action-name="기부금액_클릭" class="btn_digit" @click="totalStock+=10"> + 10주
                                                <span class="screen_out">원 입력</span>
                                            </button>
                                            <button type="button" data-tiara-layer="10000" data-tiara-action-name="기부금액_클릭" class="btn_digit" @click="totalStock+=25"> + 25주
                                                <span class="screen_out">원 입력</span>
                                            </button><button type="button" data-tiara-layer="50000" data-tiara-action-name="기부금액_클릭" class="btn_digit" @click="totalStock+=50"> + 50주
                                                <span class="screen_out">원 입력</span>
                                            </button>
                                            <button type="button" data-tiara-layer="100000" data-tiara-action-name="기부금액_클릭" class="btn_digit" @click="totalStock+=100"> + 100주
                                                <span class="screen_out">원 입력</span>
                                            </button>
                                            <button type="button" data-tiara-layer="500000" data-tiara-action-name="기부금액_클릭" class="btn_digit" @click="totalStock+=500"> + 500주
                                                <span class="screen_out">원 입력</span>
                                            </button>
                                            <button type="button" data-tiara-layer="ac" data-tiara-action-name="기부금액_초기화_클릭" class="btn_modify" @click="totalStock=0"> 다시 입력 </button>
                                        </div>
                                        <div class="wrap_tf">
                                            <strong class="screen_out">총 주식수 : </strong>
                                            <em class="num_point">{{totalStock}}</em>주 </div>
                                    </dd>
                                    <dt class="cate_write cate_reply"><label for="tfReply">응원댓글 쓰기</label></dt>
                                    <dd class="info_write info_reply">
                                        <div class="wrap_tf"><textarea id="tfReply" cols="30" rows="10" name="comment" placeholder="따뜻한 한마디를 남겨주세요." data-tiara-layer="comment" data-tiara-action-name="댓글작성창_클릭" class="tf_write tf_reply ng-untouched ng-pristine ng-valid"></textarea><span class="txt_limit"><span class="screen_out">현재 글자수</span><span class="num_now">0/</span><span class="screen_out">제한 글자수</span>300 </span></div>
                                    </dd>
                                </dl>
                                <div class="box_select"><span data-tiara-layer="donation donation_detail secret" data-tiara-action-name="익명기부_클릭" class="choice_comm choice_checkbox"><input type="checkbox" id="checkAnonymous" name="anonymous" class="inp_comm ng-untouched ng-pristine ng-valid" value="true"><label for="checkAnonymous" class="lab_comm"><span class="ico_together ico_checkbox"></span>익명으로 기부하기 </label></span><span class="choice_comm choice_checkbox"><input type="checkbox" id="checkShareStory" name="share_story" class="inp_comm ng-untouched ng-pristine ng-valid"></span></div>
                                <p class="txt_msg"> 결제 수수료는 카카오가 대신 부담합니다. <br>결제완료 알림은 카카오톡으로 발송해드려요. </p>
                            </div>
                            <div class="wrap_btn wrap_btn_type"><button type="button" freezebutton="" class="btn_set btn_type1" @click="subDonate"> 기부하기 </button></div>
                        </fieldset>
                    </form>
                </div>
                <div class="layer_foot">
                    <button type="button" class="btn_close">
                        <span class="ico_together" @click="subDonate">닫기</span>
                    </button>
                </div>
            </div>
        </modal-content>
    </div>
</div>
</template>

<script>
import stockJSON from "@/assets/text/stockJSON.json";

export default {
    name: 'DonatePopUp',
    data: () => {
        return {
            totalStock: 0,
            selStock: "" ,
            checkbox1 : true,
            curStock: "",
            curStockCnt:0
        };
    },
    methods: {
        subDonate: function () {
            this.$parent.donate()
        },
        readStock: function () {
            var stocklst = new Array()
            var lst = Object.keys(stockJSON);
            Object.keys(lst).forEach(function (v) {
                stocklst.push({
                    name: lst[v],
                    symbol: stockJSON[lst[v]]
                });
            })
            this.selStock = stocklst
        },
        checkStock: function (value) {
            //여기 잔고 체크 로직 추가 
            this.curStock = value.name;
            this.curStockCnt = 10

        },
    },
    mounted() {
        console.log("호출");
        this.readStock()
    }
}
</script>
