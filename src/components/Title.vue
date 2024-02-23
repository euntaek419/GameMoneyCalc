<template>
<div class="wrap">
  <div class="title_container">
    <div @click="$emit('downEvent')" class="img_box">
      <img class="pumpkinball_img" src="../assets/images/PumpkinBall.webp">
      <img class="text_img" src="../assets/images/PumpkinBallText.webp">
    </div>

    <div class="title_name">
      <span>GAMEMONEY</span>
      <span class="Gray">CALC</span>
      <div class="Subtitle">게임머니계산기</div>
    </div>
  </div>

  <div class="main_container">
    <pre class="main_contents">
GAMEMONEYCALC은,
캐시 아이템의 게임 머니 금액과 현금 구매의 효율을 간편하게 비교하고 계산하기 위해 개발되었습니다.
필수적인 기능들로 계산을 용이하게 만들었으니, 여러분의 지갑을 더 효율적으로 관리해보세요.

즐거운 게임 되세요 !
    </pre>
  </div>


  <div class="Mouse_img">
    <img src="../assets/images/MouseIcon.webp" title="마우스 스크롤을 내려보세요!">
  </div>

  <div class="animated-title">
    <div class="track">
      <span v-for="item in 30" :key="item">
        <span class="content"> &nbsp; GAMEMONEYCALC  &nbsp; </span>
        <span class="content2"> &nbsp; GAMEMONEYCALC &nbsp; </span>
      </span>
    </div>
  </div>

</div>
</template>

<script>
export default {
}
</script>

<style>
.title_container{
  width:100%;
  height: 48.2vh;
  margin:0 auto;
  /* border: 1px solid white; */
}

.img_box{
  cursor: pointer;
}

.pumpkinball_img{
  position: absolute;
  top:11%;
  left: 10.5%;
  width: 13.91vh;
  height: 11.52vh;
  background-color: transparent;
}

.text_img{
  position: absolute;
  top:8.7%;
  left: 18%;
  width:18vh;
  height: 5.2vh;
  background-color: transparent;
}

.title_name{
  position: absolute;
  top:25%;
  left: 10.4%;
  color:#fff;
  font-size: 18.5vh;
  letter-spacing: 0.25vh;
  font-family: "MorganiteBold";
  background-color: transparent;
}

.Gray{
  color: #9b9b9b;
  background-color: transparent;
}

.Subtitle{
  width: 100%;
  font-family: "NeurimboGothicRegular";
  color : #fff;
  font-size: 5.3vh;
  line-height:2.4%;
  background-color: transparent;
}

.main_container{
  width:100%;
  height: 51.8vh;
  margin: 0 auto;
  position: relative;
  /* border: 1px solid white; */
}

.main_contents{
  position: absolute;
  top: 11.4%;
  left: 10.4%;
  right: 10%;
  font-family: 'PretendardMedium';
  color : #fff;
  font-size: 26px;
  line-height: 43px;
  letter-spacing: -0.26px;
  background-color: transparent;
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
.animated-title {
  font-size:25px;
  position: absolute;
  bottom:0;
  width: 100%;
  height: 35px;
  overflow: hidden;
  color: #000000;
  background-color: #fff;
}

.animated-title .track {
  position: absolute;
  white-space: nowrap;
  will-change: transform;
  animation: marquee 180s linear infinite;
  background-color: transparent;
}

@keyframes marquee {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}

@media (hover: hover) and (min-width: 700px){
  .animated-title .content { 
    background-color: #fff;
    text-align: center;
    font-family:'PyeongChangPeaceBold';
  }
  .animated-title .content2 {
    background-color: #fff;
    text-align: center;
    font-family:'PyeongChangPeaceLight';
  }
}
</style>

