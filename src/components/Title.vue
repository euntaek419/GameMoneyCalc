<template>
  <div class="Title">
    <!-- https://cet4713.cafe24.com/ -->
    <div class="Title_imgText">
      <a href="https://cet4713.cafe24.com/">
        <img src="../assets/images/PumpkinBallText.gif">
      </a>
    </div>
    <div class="Title_img">
      <a href="https://cet4713.cafe24.com/">
        <img src="../assets/images/PumpkinBall.gif">
      </a>
    </div>

    <div>
      <div class="Title_name">
        GAMEMONEY<span class="Gray">CALC</span>
        <div class="Subtitle">게임머니계산기</div> 
      </div>
    </div>

<pre class="MainContents">
GAMEMONEYCALC은, 게임을 하면서 캐시를 사용하는 물품을 구매하려 할 때,
경매장(거래소)에 등록 금액과 현금 거래의 비율을
하나하나 계산하는 번거로움을 줄이기 위해 만들어졌습니다.
        
겜창인 개발자의 경험으로 꼭 필요하다 생각이 들었던 상품권 할인 비율을 계산할 수 있게 만들어
더욱 효율적으로 여러분의 지갑을 조금이나마 지켜드리겠습니다!
</pre>
    <div class="Mouse_img">
      <img src="../assets/images/MouseIcon.gif" title="마우스 스크롤을 내려보세요!">
    </div>

    <div class="animated-title">
      <div class="track"> <!-- bottom animation -->
        <span class="content"> GAMEMONEYCALC &nbsp; &nbsp; </span> <span class="content2"> GAMEMONEYCALC &nbsp; &nbsp; </span> <span class="content"> GAMEMONEYCALC &nbsp; &nbsp; </span> <span class="content2"> GAMEMONEYCALC &nbsp; &nbsp; </span> <span class="content"> GAMEMONEYCALC &nbsp; &nbsp; </span> <span class="content2"> GAMEMONEYCALC &nbsp; &nbsp; </span><span class="content"> GAMEMONEYCALC &nbsp; &nbsp; </span> <span class="content2"> GAMEMONEYCALC &nbsp; &nbsp; </span> <span class="content"> GAMEMONEYCALC &nbsp; &nbsp; </span> <span class="content2"> GAMEMONEYCALC &nbsp; &nbsp; </span> <span class="content"> GAMEMONEYCALC &nbsp; &nbsp; </span> <span class="content2"> GAMEMONEYCALC &nbsp; &nbsp; </span> <span class="content"> GAMEMONEYCALC &nbsp; &nbsp; </span> <span class="content2"> GAMEMONEYCALC &nbsp; &nbsp; </span> <span class="content"> GAMEMONEYCALC &nbsp; &nbsp; </span> <span class="content2"> GAMEMONEYCALC &nbsp; &nbsp; </span> <span class="content"> GAMEMONEYCALC &nbsp; &nbsp; </span> <span class="content2"> GAMEMONEYCALC &nbsp; &nbsp; </span> <span class="content"> GAMEMONEYCALC &nbsp; &nbsp; </span> <span class="content2"> GAMEMONEYCALC &nbsp; &nbsp; </span> <span class="content"> GAMEMONEYCALC &nbsp; &nbsp; </span> <span class="content2"> GAMEMONEYCALC &nbsp; &nbsp; </span> <span class="content"> GAMEMONEYCALC &nbsp; &nbsp; </span> <span class="content2"> GAMEMONEYCALC &nbsp; &nbsp; </span> <span class="content"> GAMEMONEYCALC &nbsp; &nbsp; </span> <span class="content2"> GAMEMONEYCALC &nbsp; &nbsp; </span> <span class="content"> GAMEMONEYCALC &nbsp; &nbsp; </span> <span class="content2"> GAMEMONEYCALC &nbsp; &nbsp; </span> <span class="content"> GAMEMONEYCALC &nbsp; &nbsp; </span> <span class="content2"> GAMEMONEYCALC &nbsp; &nbsp; </span> <span class="content"> GAMEMONEYCALC &nbsp; &nbsp; </span> <span class="content2"> GAMEMONEYCALC &nbsp; &nbsp; </span> <span class="content"> GAMEMONEYCALC &nbsp; &nbsp; </span> <span class="content2"> GAMEMONEYCALC &nbsp; &nbsp; </span> <span class="content"> GAMEMONEYCALC &nbsp; &nbsp; </span> <span class="content2"> GAMEMONEYCALC &nbsp; &nbsp; </span> <span class="content"> GAMEMONEYCALC &nbsp; &nbsp; </span> <span class="content2"> GAMEMONEYCALC &nbsp; &nbsp; </span> <span class="content"> GAMEMONEYCALC &nbsp; &nbsp; </span> <span class="content2"> GAMEMONEYCALC &nbsp; &nbsp; </span> <span class="content"> GAMEMONEYCALC &nbsp; &nbsp; </span> <span class="content2"> GAMEMONEYCALC &nbsp; &nbsp; </span> <span class="content"> GAMEMONEYCALC &nbsp; &nbsp; </span> <span class="content2"> GAMEMONEYCALC &nbsp; &nbsp; </span> <span class="content"> GAMEMONEYCALC &nbsp; &nbsp; </span> <span class="content2"> GAMEMONEYCALC &nbsp; &nbsp; </span> <span class="content"> GAMEMONEYCALC &nbsp; &nbsp; </span> <span class="content2"> GAMEMONEYCALC &nbsp; &nbsp; </span> <span class="content"> GAMEMONEYCALC &nbsp; &nbsp; </span> <span class="content2"> GAMEMONEYCALC &nbsp; &nbsp; </span> <span class="content"> GAMEMONEYCALC &nbsp; &nbsp; </span> <span class="content2"> GAMEMONEYCALC &nbsp; &nbsp; </span> <span class="content"> GAMEMONEYCALC &nbsp; &nbsp; </span> <span class="content2"> GAMEMONEYCALC &nbsp; &nbsp; </span> <span class="content"> GAMEMONEYCALC &nbsp; &nbsp; </span> 
      </div>
    </div>

  </div>
</template>

<script>
export default {

}
</script>

<style>
.Title{
  height: 937px;
}

.Title_imgText{
  position: absolute;
  top: 11%;
  left:18%;
  cursor: pointer;
}

.Title_img{
  position: absolute;
  top:10%;
  left:10%;
  cursor: pointer;
}

.Title_name{
  position: absolute;
  top: 25%;
  left: 10%;

  color:#fff;
  font-size: 220px;
  font-family: "MorganiteBold";
  background-color: transparent;
}

.Gray{
  color: #9b9b9b;
  background-color: transparent;
}

.Subtitle{
  font-family: "NeurimboGothicRegular";
  color : #fff;
  font-size: 55px;
  background-color: transparent;
  margin-top:-30px;
}

.MainContents{
  position: absolute;
  top: 60%;
  left: 10%;
  z-index: 1;

  font-family: 'PretendardMedium';
  color : #fff;
  font-size: 25px;
  background-color: transparent;
}

.Footer{
  background-color: #fff;
  position: fixed;
  bottom: 0;
  height: 50px;
}

.BoldText{
  background-color: #fff;
  font-size: 25px;
  text-align: center;
}

.LightText{
  background-color: #fff;
  font-size: 25px;
}

.Mouse_img{
  position: absolute;
  bottom:5%;
  left:50%;
  z-index: 0;
}

/* 움직이는 텍스트 */
.animated-title {font-size:25px; position: absolute; bottom:0; width: 100%; max-width:100%; height: 35px; overflow-x: hidden; overflow-y: hidden; color: #000000;}
.animated-title .track {position: absolute; white-space: nowrap; will-change: transform; animation: marquee 180s linear infinite; background-color: #fff;}
@keyframes marquee {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}
@media (hover: hover) and (min-width: 700px){
.animated-title .content { background-color: #fff; text-align: center; font-family:'PyeongChangPeaceBold'; }
.animated-title .content2 { background-color: #fff; text-align: center; font-family:'PyeongChangPeaceLight';  }
}

</style>