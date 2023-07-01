<template>
  <div class="Main">

    <div class="InfoBox">
      <div class="InfoText">  
        구매할 정보를 기입해줘 !
      </div>
    </div>
<!--   
  <div>
    <label> 캐시 할인 : </label>
    <label> 캐시 <select> <option> 할인</option> <option> 업</option></select> : </label>
    <input placeholder="0" v-model="salecash"> % (문화상품권, 넥슨카드 등)
  </div>

  <div>
    <label>게임 머니 가격 : </label>
    <input placeholder="100"> : 1 백만 비율 (원(N) : 게임 머니(1))
  </div>

  <div>
    <label>구매 아이템 가격 : </label>
    <input placeholder="원"> <input placeholder="게임머니">
  </div>

  <div>
    10000원 구매시 필요한 금액 : {{ Math.abs(((salecash * 0.01 + 1) * 10000) - 10000 - 10000) }} 원
  </div>
-->
  
  </div>
</template>

<script>
export default {
  
}
</script>

<style>
.Main{
  height: 937px;
}

.InfoBox{
  width: 430px;
  height: 65px;
  border: solid 2px #000;
  background-color: #5b5b5b;

  color:#fff;

  position: relative;
  left: 40%;
  top: 10%;
  transform: translate(0, -50%);
}

.InfoText{
  background-color: transparent;
  font-family: "Galmuri11";
  font-size: 25px;

}

</style>