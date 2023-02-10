<template>
    
<v-container class="con">
    <div class="whole">
        <div class="HeadText1">프로젝트 분야를 설정해주세요</div>
        <div class="text1">의결권 위임과 배당금 기부를 할 수 있습니다</div>
        <div class="pic">
            <div class="subpic">
                <v-img src="http://fundingtogether.org/data/file/funding_cate/thumb-3551154630_DmMkNlcp_8b0dc2448f9048976a0ff91acfbeec8847b6253c_190x320.jpg">
                    <button class = "imbtn" @click="e1 = 2">
                    <span class="imtext">
                        의결권 위임
                    </span>
                    </button>
                </v-img>
            </div>
            <div class="subpic">
                <v-img src="http://fundingtogether.org/data/file/funding_cate/thumb-3551154630_IKuqEtXD_a9506dd80fc820206ac4956757a8fb30f684d721_190x320.jpg">
                    <button class = "imbtn" @click="e1 = 2">
                    <span class="imtext">
                        배당금 기부
                    </span>
                    </button>
                </v-img>
            </div>
        </div>
    </div>
</v-container>

</template>

<script>

export default {
    data () {
        return {
        e1: 1,
    }}
}
</script>


<style>

.con{
    padding:300px auto;
}

.subpic{
    position: relative;
}

.imtext{
    position:absolute;
    top:300px;
    left:50px;
    z-index:1;
    color:white;
    font-size:18px;
    width:120px;
    font-weight: bold;
}

.imbtn{
    color:orange;
    width:150px;
    height: 200px;
}

.whole{
    width: 500px;
    height: 500px;
    margin:0 auto;
}

div{
    text-align: center;
}

.pic{
    display: grid;
    grid-template-columns: auto auto auto;
    grid-gap:15px;
}

img{
    width:150px;
    height: 200px;
}

.HeadText1{
    margin:5px 0;
    font-size:30px;
    color:tomato;
    font-weight: bold;
}

.text1{
    margin:20px 0;
}

.v-enter-active, .v-leave-active{
    transition:0.5s;
}

.v-leave-to{
    opacity:0;
    transform: translate(20px);
}
</style>