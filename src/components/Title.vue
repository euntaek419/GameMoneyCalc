<template>
  <div class="Title">
    <div class="Title_img Title_text">
      <!-- <a href="https://cet4713.cafe24.com/"> -->
        <img src="../assets/images/PumpkinBallText.webp" @click="click">
      <!-- </a> -->
    </div>
    <div class="Title_img">
      <!-- <a href="https://cet4713.cafe24.com/"> -->
        <img src="../assets/images/PumpkinBall.webp" @click="click">
      <!-- </a> -->
    </div>

    <div>
      <div class="Title_name">
        GAMEMONEY<span class="Gray">CALC</span>
        <div class="Subtitle">게임머니계산기</div> 
      </div>
    </div>

<pre class="MainContents">
GAMEMONEYCALC은 캐시 아이템의 게임 머니 금액과 현금 구매의 효율을 간편하게 비교하고 계산하기 위해 개발되었습니다. (웹 테스트8)
필수적인 기능들로 계산을 용이하게 만들어, 여러분이 더 효율적으로 지갑을 관리할 수 있도록 돕고자 합니다.

이 웹사이트를 활용하여 가성비를 고려하며 즐거운 게임을 즐기시기 바랍니다!
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
  methods:{
    click(){
      alert('지금은 아무일도 일어나지 않습니다. 업데이트 이후를 기대해주세요!')
    }
  }

}
</script>

<style>
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

