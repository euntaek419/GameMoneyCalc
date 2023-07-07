<template>
  <div class="Main">

    <div class="InfoBox">
      <div class="InfoText">  
        구매할 정보를 기입해줘 !
      </div>
    </div>

    <div class="WhatMoney">
      <span class="CashShop">
        캐시샵
        <div>(원)</div>
      </span>

      <span class="Auction">
        인게임 경매장
        <div>(현금거래 설정 비율)</div>
      </span>
    </div>

    <div class="WhenSell">
      <span class="CashSell">
        캐시샵 판매 금액 입력
        <div>
          <input  class="CashInput" maxlength="12" v-model="Cash">
          <div class="UnderBar_left">
            <img src="../assets/images/UnderBar.gif" :style="{marginLeft: (Cash.length) * 47 + 'px'}">
          </div>
          <div>
            <div> {{readmoney(Cash)}} 원</div>
          </div>
        </div>
      </span>

      <span class="AuctionSell">
        경매장 판매 금액 입력
        <div>
          <input class="AuctionInput" maxlength='12' v-model="Money">
          <div class="UnderBar_right">
            <img src="../assets/images/UnderBar.gif" >
          </div>
          <div>
            <div> {{readmoney(Money)}} 머니</div>
          </div>
        </div>
      </span>
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
  data: () => {
    return {
      Cash: '',
      Money: '',

    }
  },
  methods:{
    readmoney(cash) {
      if(cash < 10000){
        return cash
      }
      if(cash % 10000 == 0 && cash < 100000000){
        return cash / 10000 + ' 만 '
      }
      if(cash % 100000000 == 0 ){
        return cash / 100000000 + ' 억 '
      }
      if(cash > 10000 && cash < 100000000){
        return Math.floor(cash / 10000) + ' 만 ' +  cash % 10000
      }
      if(cash >= 100000000){
        return Math.floor(cash / 100000000) + ' 억 ' +  Math.floor(cash % 10000) + ' 만 ' + cash % 10000
      }
    }
  }
  
}
</script>

<style>
.Main{
  height: 937px;
}

.InfoBox{
  width: 400px;
  height: 65px;
  border: solid 2px #000;
  background-color: #5b5b5b;

  color:#fff;

  position: relative;
  left: 40%;
  top: 5%;
}

.InfoText{
  background-color: transparent;
  font-family: "Galmuri11";
  font-size: 25px;
  
  position: relative;
  top: 25%;
  text-align: center;
}

.WhatMoney{
  position: relative;
  top: 10%;
  font-family: "Galmuri11";
  font-size: 25px;
  color: #fff;
}

.CashShop{
  position: absolute;
  left: 5%;
}

.Auction{
  position: absolute;
  right: 5%;
  text-align: right;
}

.WhenSell{
  position: relative;
  top: 25%;
  font-family: "Galmuri11";
  font-size: 30px;
  color: #9b9b9b;
}

.CashSell{
  position: absolute;
  left: 5%;
}

.AuctionSell{
  position: absolute;
  right: 5%;
  text-align: right;
}

.CashInput{
  width: 600px;
  height: 200px;
  color:#9b9b9b;
  font-size: 200px;
  font-family: "MorganiteBold";
  outline: none;
  border: none;
  caret-color: transparent;
}

.AuctionInput{
  width: 600px;
  height: 200px;
  color:#9b9b9b;
  font-size: 200px;
  font-family: "MorganiteBold";
  text-align: right;
  outline: none;
  border: none;
  caret-color: transparent;
  
}

.UnderBar_left{
  margin-top: -50px;
  
}

.UnderBar_right{
  margin-top: -50px;
}


</style>