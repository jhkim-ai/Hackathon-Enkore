<template>
    <div>
        <div tabindex="0" role="dialog" class="ngdialog-content" id="modalON"
            style="position: fixed; display: block; top: 15%; margin-left: -196px;">
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
                                            <v-autocomplete :items="selStock" item-text="name" deletable-chips
                                                return-object @change="(items) => eventStock(items)"></v-autocomplete>

                                            <v-card class="mx-auto text-center" color="orange" max-width="600">
                                                <v-card-text>
                                                    <v-sheet color="rgba(0, 0, 0, .12)">
                                                        <v-sparkline :value=values :labels=labels
                                                            color="rgba(255, 255, 255, .7)" height="100" padding="24"
                                                            stroke-linecap="round" smooth>
                                                        </v-sparkline>
                                                    </v-sheet>
                                                </v-card-text>
                                                <div v-show="is_show2">
                                                    <v-card-text>
                                                        <v-simple-table dense>
                                                            <template v-slot:default>
                                                              <thead>
                                                                <tr>
                                                                  <th class="text-center">
                                                                    년도
                                                                  </th>
                                                                  <th class="text-center">
                                                                    배당금
                                                                  </th>
                                                                </tr>
                                                              </thead>
                                                              <tbody>
                                                                <tr
                                                                  v-for="item in showTable"
                                                                  :key="item.year"
                                                                >
                                                                  <td>{{ item.year }}</td>
                                                                  <td>{{ item.amt }}</td>
                                                                </tr>
                                                              </tbody>
                                                            </template>
                                                        </v-simple-table>
                                                        <div class="text-h4 font-weight-thin">
                                                        </div>
                                                    </v-card-text>
                                                </div>
                                                <v-divider></v-divider>

                                                <v-card-actions class="justify-center" @click="showMoney">
                                                    <v-btn block text>
                                                        배당금 상세보기
                                                    </v-btn>
                                                </v-card-actions>

                                            </v-card>
                                            <v-checkbox v-model="checkbox1" color="success"
                                                :label="`${curStock} 현재 기부가능 주식 총 수 : ${curStockCnt.toString()}주`" value
                                                disabled></v-checkbox>
                                        </div>
                                        <dt class="cate_write cate_fund"><span>기부금 결제</span></dt>
                                        <dd class="info_write info_fund">
                                            <p class="txt_info"> 무통장은 3천원, 기타 결제는 1천원부터 가능합니다. </p>
                                            <div class="box_digit">
                                                <button type="button" data-tiara-layer="100"
                                                    data-tiara-action-name="기부금액_클릭" class="btn_digit"
                                                    @click="totalStock += 1"> + 1주
                                                    <span class="screen_out">원 입력</span>
                                                </button>
                                                <button type="button" data-tiara-layer="1000"
                                                    data-tiara-action-name="기부금액_클릭" class="btn_digit"
                                                    @click="totalStock += 5"> + 5주
                                                    <span class="screen_out">원 입력</span>
                                                </button>
                                                <button type="button" data-tiara-layer="5000"
                                                    data-tiara-action-name="기부금액_클릭" class="btn_digit"
                                                    @click="totalStock += 10"> + 10주
                                                    <span class="screen_out">원 입력</span>
                                                </button>
                                                <button type="button" data-tiara-layer="10000"
                                                    data-tiara-action-name="기부금액_클릭" class="btn_digit"
                                                    @click="totalStock += 25"> + 25주
                                                    <span class="screen_out">원 입력</span>
                                                </button><button type="button" data-tiara-layer="50000"
                                                    data-tiara-action-name="기부금액_클릭" class="btn_digit"
                                                    @click="totalStock += 50"> + 50주
                                                    <span class="screen_out">원 입력</span>
                                                </button>
                                                <button type="button" data-tiara-layer="100000"
                                                    data-tiara-action-name="기부금액_클릭" class="btn_digit"
                                                    @click="totalStock += 100"> + 100주
                                                    <span class="screen_out">원 입력</span>
                                                </button>
                                                <button type="button" data-tiara-layer="500000"
                                                    data-tiara-action-name="기부금액_클릭" class="btn_digit"
                                                    @click="totalStock += 500"> + 500주
                                                    <span class="screen_out">원 입력</span>
                                                </button>
                                                <button type="button" data-tiara-layer="ac"
                                                    data-tiara-action-name="기부금액_초기화_클릭" class="btn_modify"
                                                    @click="totalStock = 0"> 다시 입력 </button>
                                            </div>
                                            <div class="wrap_tf">
                                                <strong class="screen_out">총 주식수 : </strong>
                                                <em class="num_point">{{ totalStock }}</em>주
                                            </div>
                                        </dd>
                                        <dt class="cate_write cate_reply"><label for="tfReply">응원댓글 쓰기</label></dt>
                                        <dd class="info_write info_reply">
                                            <div class="wrap_tf">
                                                <textarea id="tfReply" cols="30" rows="10" name="comment"
                                                    placeholder="따뜻한 한마디를 남겨주세요." data-tiara-layer="comment"
                                                    data-tiara-action-name="댓글작성창_클릭"
                                                    class="tf_write tf_reply ng-untouched ng-pristine ng-valid"></textarea>
                                                <span class="txt_limit">
                                                    <span class="screen_out">현재 글자수</span>
                                                    <span class="num_now">0/</span>
                                                    <span class="screen_out">제한 글자수</span>300
                                                </span>
                                            </div>
                                        </dd>
                                    </dl>
                                    <div class="box_select">
                                        <span data-tiara-layer="donation donation_detail secret"
                                            data-tiara-action-name="익명기부_클릭" class="choice_comm choice_checkbox">
                                            <input type="checkbox" id="checkAnonymous" name="anonymous"
                                                class="inp_comm ng-untouched ng-pristine ng-valid" value="true">
                                            <label for="checkAnonymous" class="lab_comm">
                                                <span class="ico_together ico_checkbox"></span>익명으로 기부하기
                                            </label>
                                        </span>
                                        <span class="choice_comm choice_checkbox">
                                            <input type="checkbox" id="checkShareStory" name="share_story"
                                                class="inp_comm ng-untouched ng-pristine ng-valid">
                                        </span>
                                    </div>
                                    <p class="txt_msg"> 결제 수수료는 카카오가 대신 부담합니다. <br>결제완료 알림은 카카오톡으로 발송해드려요. </p>
                                </div>
                                <div class="wrap_btn wrap_btn_type"><button type="button" freezebutton=""
                                        class="btn_set btn_type1" @click="subDonate"> 기부하기 </button></div>
                            </fieldset>
                        </form>
                    </div>
                    <div class="layer_foot">
                        <button type="button" class="btn_close">
                            <span class="ico_together" @click="closeDialog">닫기</span>
                        </button>
                    </div>
                </div>
            </modal-content>
        </div>
    </div>
</template>

<script>
import stockJSON from "@/assets/text/stockJSON.json";
import { mapMutations , mapGetters } from "vuex";

export default {
    name: 'DonatePopUp',
    data: () => {
        return {
            totalStock: 0,
            selStock: "",
            checkbox1: true,
            curStock: "",
            curStockCnt: 0,
            labels: [],
            values: [],
            width: 2,
            radius: 10,
            padding: 8,
            lineCap: 'round',
            gradientDirection: 'top',
            fill: false,
            is_show2: false,
            type: 'trend',
            showTable : [],
            autoLineWidth: false,
        };
    },
    computed: {
        ...mapGetters([
            'fetchedDonateCount',
        ]),
    },
    methods: {
        closeDialog: function () {
            this.$parent.donate();
        },
        subDonate: function () {
            console.log("start... subDonate");
            this.$parent.donate();
            var time = new Date();
            var row = {
                seq : (this.fetchedDonateCount+1),
                board: 1,
                user: "ID임시발급#4656",
                stock: this.curStock,
                qty: this.curStockCnt,
                comment: document.getElementById("tfReply").value,
                time: time.getFullYear().toString() + time.getMonth().toString() + time.getDate().toString() + time.getHours().toString() + time.getMinutes().toString() + time.getSeconds().toString()
            }
            console.log(row);
            this.updateDonate(row);
            console.log("end... subDonate");
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
        eventStock: function (value) {
            console.log(value);
            this.calPayInfo(value);
            this.checkStock(value);
        },
        showMoney: function () {
            this.is_show2 = !this.is_show2;
        },
        calPayInfo: function (value) {
            console.log(value.name);
            var xhr = new XMLHttpRequest();
            var url = 'http://apis.data.go.kr/1160100/service/GetStocDiviInfoService/getDiviInfo'; /*URL*/
            var queryParams = '?' + encodeURIComponent('serviceKey') + '=' + '%2FwawSrA2L1Xoz%2Biif%2B8y6ruKkL%2BINj84RH%2FoQYQai1bJ9Gdsv4VfqKwqAwQhXh39qVkeuLo5fmdnDJtCgi%2F8mQ%3D%3D'; /*Service Key*/
            queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); /**/
            queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('100'); /**/
            queryParams += '&' + encodeURIComponent('resultType') + '=' + encodeURIComponent('json'); /**/
            queryParams += '&' + encodeURIComponent('basDt') + '=' + encodeURIComponent(''); /**/
            queryParams += '&' + encodeURIComponent('crno') + '=' + encodeURIComponent(''); /**/
            queryParams += '&' + encodeURIComponent('stckIssuCmpyNm') + '=' + encodeURIComponent(value.name, 'UTF-8'); /**/
            xhr.open('GET', url + queryParams);
            this.labels = [];
            this.values = [];
            this.showTable = [];
            var tmpLabel = this.labels;
            var tmpValue = this.values;
            var tmpShowTable = this.showTable;
            xhr.onreadystatechange = function () {
                if (this.readyState == 4) {
                    //alert('Status: '+this.status+'nHeaders: '+JSON.stringify(this.getAllResponseHeaders())+'nBody: '+this.responseText);
                    //alert(this.responseText);
                    var dataList = JSON.parse(this.response).response.body.items.item;
                    //console.log(dataList);
                    var samData = {};
                    if (dataList.length > 0) {
                        for (var idx in dataList) {
                            //console.log(dataList[idx]);

                            if (Object.keys(samData).includes(dataList[idx].cashDvdnPayDt.slice(0, 4))) {
                                samData[dataList[idx].cashDvdnPayDt.slice(0, 4)] += dataList[idx].stckGenrDvdnAmt * 1;
                            }
                            else {
                                samData[dataList[idx].cashDvdnPayDt.slice(0, 4)] = dataList[idx].stckGenrDvdnAmt * 1;
                            }
                        }
                        var A = new Array();
                        var B = new Array();
                        for (var key in samData) {
                            if(key*1===0) continue;
                            A.push(key * 1);
                            B.push(samData[key] * 1);
                            //tmpShowTable.push({year: key * 1,amt: samData[key] * 1});
                        }
                        var maxSize = 5;
                        A=A.reverse().slice(0,maxSize);
                        B=B.reverse().slice(0,maxSize);
                        for(var i=maxSize-1;i>=0;i--){
                            tmpLabel.push(A[i]);
                            tmpValue.push(B[i]);
                            tmpShowTable.push({year: A[i] * 1,amt: B[i] * 1});
                        }
                    }
                }
                console.log(this.labels);
                console.log(this.values);
                
            };
            console.log("ee"+this.tmpShowTable);
            xhr.send('');
            
        },
        checkStock: function (value) {
            //여기 잔고 체크 로직 추가 
            this.curStock = value.name;
            this.curStockCnt = 10

        },
        ...mapMutations({
            updateDonate: "UPDATE_DONATE",
        }),
    },
    mounted() {
        console.log("호출");
        this.readStock()
    }
}
</script>
