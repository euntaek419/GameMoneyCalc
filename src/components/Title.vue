<template>
  <div class="Title">
    <div class="Title_img Title_text">
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
GAMEMONEYCALC은, 아이템 금액과 현금 거래의 효율을 비교계산하는 번거로움을 줄이기 위해 만들어졌습니다.

개발자의 오랜 RPG 경험으로 꼭 필요하다고 생각한 비율들을 쉽게 계산할 수 있게 만들었으니
이 사이트를 통해 더욱 효율적으로 여러분의 지갑을 지켰으면 합니다!

다들 가성비 챙기고 즐거운 게임 하세요!
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

.Title_text{
  margin-left:150px;
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
  
  left: 50%;
  transform:translate(-50%, 0);
  
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