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
            <div> {{readinput(Cash)}} 원</div>
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
            <div> {{readinput(Money)}} 머니</div>
          </div>
        </div>
      </span>
    </div>

    <div class="SetBox">
      <div class="GiftCardInputBox">
        <div class="GiftCardOption">
          상품권 옵션 설정
        </div>
        <span>
          <input class="GiftCardInput" maxlength='2'> <div class="Persent"> % </div>
          <img src="../assets/images/UnderBar.gif" class="GiftCardInput_Under">
        </span>
        
        <div class="WhatPersent">
          <div>
            <button class="Discount">% 할인</button>
          </div>

          <div>
            <button class="Add">% 추가증정</button>
          </div>
        </div>
      </div>

      <div class="CashRatioInputBox">
        <div class="CashRatio">
          현금 거래 비율
        </div>

        <span>
          <div class="Ratio"> 1 </div> <div class="Colon"> : </div><input class="CashRatioInput" maxlength='6'>
          <img src="../assets/images/UnderBar.gif" class="CashRatioInput_Under">
        </span>

        <div class="WhatPersent">
          <div>
            <button class="Reverse">REVERSE</button>
          </div>
        </div>
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
  data: () => {
    return {
      Cash: '',
      Money: '',

    }
  },
  methods:{
    readinput(cash) {
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

.SetBox{
  position: relative;
  top:60%;
  height: 300px;
  background-color: gray;
}

.GiftCardOption{
  position: relative;
  text-align: center;
  padding: 10px;
  margin-top: -30px;
  color: #fff;
  font-size: 25px;
  background-color: gray;
  font-family: 'Galmuri11';
  z-index: 1;
}

.CashRatio{
  position: relative;
  padding: 10px;
  margin-top: -30px;
  text-align: center;
  color: #fff;
  font-size: 25px;
  background-color: gray;
  font-family: 'Galmuri11';
  z-index: 1;
}

.GiftCardInputBox{
  position: absolute;
  height: 250px;
  width: 43.5%;
  left: 5%;
  top: 10%;
  background-color: #000;
}

.Ratio{
  position: absolute;
  color:#fff;
  font-size: 200px;
  font-family: "MorganiteBold";
  left:25%;
  top: 5%;
  z-index: 0;
}
.Colon{
  position: absolute;
  color:#fff;
  font-size: 200px;
  font-family: "MorganiteBold";
  left:45%;
  bottom: 25%;
  z-index: 0;
}

.CashRatioInputBox{
  position: absolute;
  height: 250px;
  width: 43.5%;
  right: 5%;
  top: 10%;
  background-color: #000;
}

.GiftCardInput{
  position: absolute;
  left:39%;
  top:5%;
  width: 100px;
  font-size: 200px;
  color: #fff;
  text-align: right;
  font-family: "MorganiteBold";
  outline: none;
  border: none; 
  caret-color: transparent;
  z-index: 0;
}

.Persent{
  position: absolute;
  left:55%;
  top: 5%;
  font-size: 200px;
  color: #fff;
  font-family: "MorganiteBold";
  z-index: 0;
}

.GiftCardInput_Under{
  position: absolute;
  left:45%;
  bottom:20%;
  font-size: 200px;
  color: #fff;
  font-family: "MorganiteBold";
}

.CashRatioInput_Under{
  position: absolute;
  right:20%;
  bottom: 20%;
}

.CashRatioInput{
  position: absolute;
  top:5%;
  right: 0;
  width: 300px;
  font-size: 200px;
  color: #fff;
  text-align: left;
  font-family: "MorganiteBold";
  z-index: 0;
  text-align: center;
  outline: none;
  border: none;
  caret-color: transparent;
}

.WhatPersent{
  position: absolute;
  font-size: 25px;
  width: 100%;
  bottom: 0;
  height: 15%;
}

.Discount{
  position: absolute;
  background-color: gray;
  font-family: 'Galmuri11';
  left:0;
  width: 50%;
  height: 100%;
}

.Discount:focus{
  background-color: #000;
  color:#02fa97
}

.Add{
  position: absolute;
  background-color: gray;
  font-family: 'Galmuri11';
  right:0;
  width: 50%;
  height: 100%;
}

.Add:focus{
  background-color: #000;
  color:#02fa97
}

.Reverse{
  position: absolute;
  background-color: gray;
  font-family: 'Galmuri11';
  width: 100%;
  height: 100%;
}

.Reverse:focus{
  background-color: #000;
  color: #fff
}
</style>