<template>
  <div>
    <div class="Title_img">
      <img src="../assets/images/temp.png">
    </div>

    <div>
      <div class="Title_name">GAMEMONEY<b class="Gray">CALC</b></div>
    </div>

    <div>
      <div class="Subtitle">게임머니계산기</div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.Title_img{
  position: fixed;
  top: 15%;
  left: 10%;
  /* cursor: pointer; */
  /* z-index: 1; */
}

.Title_name{
  position: fixed;
  top: 30%;
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
  position: fixed;
  top: 52%;
  left: 10%;
  
  font-family: "NeurimboGothicRegular";
  color : #fff;
  font-size: 55px;
  background-color: transparent;
}

</style>