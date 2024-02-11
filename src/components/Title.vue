<template>
<div class="wrap">
  <div class="title_container">
    <div class="title_box">
      <div class="title_img">
          <img class="pumpkinball_img" src="../assets/images/PumpkinBall.webp" @click="click">
          <img class="text_img" src="../assets/images/PumpkinBallText.webp" @click="click">
      </div>
    </div>

    <div class="title_box">
        <div class="title_name">
          GAMEMONEY<span class="Gray">CALC</span>
          <div class="Subtitle">게임머니계산기</div> 
        </div>
    </div>
  </div>

  <div class="main_container">
    <pre class="main_contents">
<!-- <span class="mini_name">GAMEMONEY</span><span class="mini_name Gray">CALC </span>은 -->
GAMEMONEYCALC은,
캐시 아이템의 게임 머니 금액과 현금 구매의 효율을 간편하게 비교하고 계산하기 위해 개발되었습니다.
필수적인 기능들로 계산을 용이하게 만들었으니, 여러분의 지갑을 더 효율적으로 관리해보세요.

즐거운 게임 되세요 !
    </pre>
  </div>

  <div class="footer_container">
    <div class="Mouse_img">
      <img src="../assets/images/MouseIcon.gif" title="마우스 스크롤을 내려보세요!">
    </div>

    <div class="animated-title">
      <div class="track"> <!-- bottom animation -->
        <span v-for="item in 30" :key="item">
          <span class="content"> GAMEMONEYCALC &nbsp; &nbsp; </span>
          <span class="content2"> GAMEMONEYCALC &nbsp; &nbsp; </span>
        </span>
      </div>
    </div>

  </div>
</div>
</template>

<script>
export default {
  methods:{
    click(){
      window.scrollTo(9999,9999)
    }
  }

}
</script>

<style scoped>
.wrap{
  height: 100vh;
}

.title_container{
  width:1280px;
  height: 44vh;
  margin:0 auto;
  /* border: 1px solid red; */
}
.title_box{
  height: 22vh;
  position: relative;
  /* border: 1px solid orange; */
}

.title_img{
  position: absolute;
  bottom: 0;
  left: 10%;
}

.pumpkinball_img{
  width: 7rem;
}

.text_img{
  margin-left:10px;
  position: absolute;
  width:7rem;
}

.title_name{
  position: absolute;
  left: 10%;
  color:#fff;
  font-size: 14.5vh;
  font-family: "MorganiteBold";
  background-color: transparent;
  word-spacing: 2.21px;
}

.Gray{
  color: #9b9b9b;
  background-color: transparent;
}

.Subtitle{
  font-family: "NeurimboGothicRegular";
  color : #fff;
  font-size: 5vh;
  background-color: transparent;
}

.main_container{
  width:1280px;
  height: 52vh;
  margin: 0 auto;
  position: relative;
  /* border: 1px solid yellow; */
}

.main_contents{
  position: absolute;
  left: 10%;
  top: 10%;
  z-index: 1;
  font-family: 'PretendardMedium';
  color : #fff;
  font-size: 2.4vh;
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
.animated-title {
  font-size:25px;
  position: absolute;
  bottom:0;
  width: 100%;
  height: 35px;
  overflow-x: hidden;
  overflow-y: hidden;
  color: #000000;
}

.animated-title .track {
  position: absolute;
  white-space: nowrap;
  will-change: transform;
  animation: marquee 180s linear infinite;
  background-color: #fff;
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



@media (max-width:479px) {
.title_container{
  width:420px;
  height: 35vh;
  margin:0 auto;
}
.title_box{
  height: 15vh;
  position: relative;
}

.title_img{
  display: none;
}

.title_name{
  color:#fff;
  font-size: 10vh;
  font-family: "MorganiteBold";
  background-color: transparent;
}

.mini_name{
  color:#fff;
  font-size: 3vh;
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
  font-size: 3.5vh;
  background-color: transparent;
  margin-top: 0px;
}

.main_container{
  width:420px;
  height: 35vh;
  margin: 0 auto;
  position: relative;
  /* border: 1px solid white; */
}

.main_contents{
  font-size: 2vh;
  white-space: pre-wrap;
}

.footer_container{
  display: none;
}
}
</style>

