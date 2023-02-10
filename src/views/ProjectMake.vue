<template>
<div id="wrap">
  <div class="inner">		
  <!--=== 펀딩프로젝트 개설 STEP1: 펀딩분야선택  ===-->
  <div class="fproject-wrap">
    <form name="frm" id="frm" action="#n" method="post" enctype="multipart/form-data" autocomplete="off">
      <input type="hidden" name="bo_table" id="bo_table" value="fd_project">	<!-- 테이블 정보 -->
      <input type="hidden" name="wr_1" value="">
      <div class="inner">
        <ul class="fproject__step-title flex--ac-jsb">
          <li class="current flex--ac-jc" style="font-family: 'Noto Sans KR' , Sans-serif !important;
    word-break: keep-all;
    letter-spacing: -0.03em !important;
    outline: none;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32.5%;
    font-weight: 700;
    color: #4c4c4c;
    text-align: center;
    border-bottom: 2px solid #d3d3d3;
    flex-wrap: wrap;
    padding-bottom: 10px;
    font-size: 1em;
    line-height: 1.3;
    border-color: #f68240;">
    <span class="font--mont" style="font-family: 'Noto Sans KR' , Sans-serif !important;
    word-break: keep-all;
    letter-spacing: -0.03em !important;
    list-style: none;
    font-weight: 700;
    text-align: center;
    font-size: 1em;
    outline: none;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    display: block;
    margin-right: 0;
    margin-bottom: 5px;
    width: 100%;
    line-height: 1;
    color: #f3791f;">01</span>프로젝트 분야 선택</li>
          <li class="flex--ac-jc" style="
    font-family: 'Noto Sans KR' , Sans-serif !important;
    word-break: keep-all;
    letter-spacing: -0.03em !important;
    outline: none;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32.5%;
    font-weight: 700;
    color: #4c4c4c;
    text-align: center;
    border-bottom: 2px solid #d3d3d3;
    flex-wrap: wrap;
    padding-bottom: 10px;
    font-size: 1em;
    line-height: 1.3;
    border-color: #f68240;"><span class="font--mont" style="font-family: 'Noto Sans KR' , Sans-serif !important;
    word-break: keep-all;
    letter-spacing: -0.03em !important;
    list-style: none;
    font-weight: 700;
    text-align: center;
    font-size: 1em;
    outline: none;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    display: block;
    margin-right: 0;
    margin-bottom: 5px;
    width: 100%;
    line-height: 1;
    color: #f3791f;">02</span>요금제 선택</li>
          <li class="flex--ac-jc" style="
    font-family: 'Noto Sans KR' , Sans-serif !important;
    word-break: keep-all;
    letter-spacing: -0.03em !important;
    outline: none;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32.5%;
    font-weight: 700;
    color: #4c4c4c;
    text-align: center;
    border-bottom: 2px solid #d3d3d3;
    flex-wrap: wrap;
    padding-bottom: 10px;
    font-size: 1em;
    line-height: 1.3;
    border-color: #f68240;"><span class="font--mont" style="font-family: 'Noto Sans KR' , Sans-serif !important;
    word-break: keep-all;
    letter-spacing: -0.03em !important;
    list-style: none;
    font-weight: 700;
    text-align: center;
    font-size: 1em;
    outline: none;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    display: block;
    margin-right: 0;
    margin-bottom: 5px;
    width: 100%;
    line-height: 1;
    color: #f3791f;">03</span>프로젝트 정보 입력</li>
        </ul>
        <section class="fproject__step1">
          <ul class="make-funding flex">
    <li class="fn_cate_li">
    <div class="input--radio">
      <img src="http://fundingtogether.org/data/file/funding_cate/thumb-3551154630_DmMkNlcp_8b0dc2448f9048976a0ff91acfbeec8847b6253c_190x320.jpg" width="190" height="320">				<input type="radio" name="makeF" value="1" id=""> 	
      <div class="makFunding__cont">
        <em class="flex--ac-jc">취약계층여성 생리대 지원</em>
        <span class="btn--select checkmark flex--ac-jc">선택하기</span>
      </div>
    </div>
  </li>
    <li class="fn_cate_li">
    <div class="input--radio">
      <img src="http://fundingtogether.org/data/file/funding_cate/thumb-3551154630_tcEyCYLz_2e8fbdc1a0b60af3d39326bed337becd1fa00296_190x320.jpg" width="190" height="320">				<input type="radio" name="makeF" value="2" id=""> 	
      <div class="makFunding__cont">
        <em class="flex--ac-jc">저소득 아동·청소년 지원</em>
        <span class="btn--select checkmark flex--ac-jc">선택하기</span>
      </div>
    </div>
  </li>
    <li class="fn_cate_li">
    <div class="input--radio">
      <img src="http://fundingtogether.org/data/file/funding_cate/thumb-3551154630_h17J8ZjO_b5c602fb812a06a891b0a51bdc9beeca6f706f87_190x320.jpg" width="190" height="320">				<input type="radio" name="makeF" value="3" id=""> 	
      <div class="makFunding__cont">
        <em class="flex--ac-jc">보육원아동 지원</em>
        <span class="btn--select checkmark flex--ac-jc">선택하기</span>
      </div>
    </div>
  </li>
    <li class="fn_cate_li">
    <div class="input--radio">
      <img src="http://fundingtogether.org/data/file/funding_cate/thumb-3551154630_J1IwaRZG_ebb112f11c02f5305d7548bd1e70b15524e9c6c4_190x320.jpg" width="190" height="320">				<input type="radio" name="makeF" value="4" id=""> 	
      <div class="makFunding__cont">
        <em class="flex--ac-jc">미혼·한부모 지원</em>
        <span class="btn--select checkmark flex--ac-jc">선택하기</span>
      </div>
    </div>
  </li>
    <li class="fn_cate_li">
    <div class="input--radio">
      <img src="http://fundingtogether.org/data/file/funding_cate/thumb-3551154630_Ms1OAH6f_92cf85bea9d55f33775b49f55629cbe481ce7911_190x320.jpg" width="190" height="320">				<input type="radio" name="makeF" value="5" id=""> 	
      <div class="makFunding__cont">
        <em class="flex--ac-jc">독거어르신 지원</em>
        <span class="btn--select checkmark flex--ac-jc">선택하기</span>
      </div>
    </div>
  </li>
    <li class="fn_cate_li">
    <div class="input--radio">
      <img src="http://fundingtogether.org/data/file/funding_cate/thumb-3551154630_IKuqEtXD_a9506dd80fc820206ac4956757a8fb30f684d721_190x320.jpg" width="190" height="320">				<input type="radio" name="makeF" value="6" id=""> 	
      <div class="makFunding__cont">
        <em class="flex--ac-jc">해외 지원</em>
        <span class="btn--select checkmark flex--ac-jc">선택하기</span>
      </div>
    </div>
  </li>
  </ul>
          <div class="fproject__btns flex--ac-jc">
            <a href="/download/nanum-quide.pdf" class="btn btn1" download="">나눔활동가를 위한 안내서 다운</a>
            <a href="./funding_step2.php" class="btn btn2" onclick="return frm_submit(this.href);">다음</a>
          </div>
        </section>
      </div>
    </form>
  </div>
  <!--=== //펀딩프로젝트 개설 STEP1: 펀딩분야선택  ===-->

  </div>
</div></template>