<template>
  <div>
    <div class="InfoBox">
      <div class="InfoText">  
        구매할 정보를 기입해줘 !
      </div>
    </div>

    <div class="WhatMoney">
      <span class="Auction">
        아이템 금액
        <div v-if="Ratio <= 0">( 게임 머니 )</div>
        <div v-if="Ratio > 0 && ExchangeRatio <= 0">1 원당 ( {{ this.$store.getters.readinput(Ratio) }} 게임 머니 )</div>
        <div v-if="Ratio > 0 && ExchangeRatio > 0 "> {{ ExchangeRatio }} 원당 ( {{ this.$store.getters.readinput(Ratio) }} 게임 머니 ) </div>
      </span>

      <span class="CashShop">
        캐시
        <span v-if="isCashOption[0] == true && Persent > 0 && Cash !== ''"> ( {{ Persent }} % 할인 적용 ) </span>
        <span v-if="isCashOption[1] == true && Persent > 0 && Cash !== ''" > ( {{ Persent }} % 추가 증정 적용 ) </span>
        <div v-if="Persent != '' && isCashOption[0] == true || Persent != '' && isCashOption[1] == true">
          {{ this.$store.getters.cashOption }}
          ( {{ this.$store.getters.readinput(this.$store.getters.cashOption) }} 원 )
        </div>
        <div v-else>
          ( 원 )
        </div>
      </span>
    </div>

    <div class="WhenSell">
      <label>
        <span class="AuctionSell">
          <span v-if="Cash == '' || Money == '' || Ratio == '' || isWin[0] == false">
            아이템 판매 금액 입력
          </span>
<!-- ------------------------------------------------------------------------------------------------------ -->
          <span class="ResultCalc" v-if="Cash !== '' && Money !== '' && Ratio !== '' && isWin[0] == true">
            {{ this.$store.getters.cashResult }} 원, {{ compairpersent }} % 만큼 이득이야!_
          </span>

          <div>
            <input class="AuctionInput" maxlength='11' v-model="Money" :style="{ color : fontchange }" @keyup="updateMoney">
            <div v-if="Money == ''" class="UnderBar">
              <img src="../assets/images/UnderBar.gif" >
            </div>
            <div>
              <div> {{ this.$store.getters.readinput(Money) }} 머니</div>
            </div>
          </div>
        </span>
      </label>

      <label>
        <span class="CashSell">
          <span v-if="Cash == '' || Money == '' || Ratio == '' || isWin[1] == false ">
            캐시 아이템 금액 입력
          </span>

          <span class="ResultCalc" v-if="Cash !== '' && Money !== '' && Ratio !== '' && isWin[1] == true ">
            {{ this.$store.getters.cashResult }} 원, {{ compairpersent }} % 만큼 이득이야!_ 
          </span>

          <div>
            <input class="CashInput" maxlength="11" v-model="Cash" :style="{ color : fontchange2}" @keyup="updateCash">
            <div v-if="Cash == ''" class="UnderBar">
                <img src="../assets/images/UnderBar.gif">
            </div>
            <div>
              <div> {{ this.$store.getters.readinput(Cash) }} 원</div>
            </div>
          </div>
        </span>
      </label>
    </div>

    <!-- ---------------------------------------------------------------------------------------------------------- -->

    <div class="SetBox">
      <div class="CashRatioInputBox">
        <span class="CashRatio">
          현금 거래 비율
          <span>
            <img class="Exchange_img" src="../assets/images/Exchange.png" v-if="IsExchange == false" @click="IsExchange = true; ExchangeRatio = ''">
            <img class="Exchange_img" src="../assets/images/Exchange_yellow.png" v-if="IsExchange == true" @click="IsExchange = false; ExchangeRatio = ''">
          </span>
        </span>
        <span>
          <div class="Ratio"> 1 </div> <div class="Colon"> : </div><input class="CashRatioInput" maxlength='9' v-model="Ratio" @keyup="updateRatio">
          <img src="../assets/images/UnderBar.gif" class="CashRatioInput_Under" v-if=" Ratio == ''">
        </span>
        <div class="ExchangeBox"  v-if="IsExchange == true">
          <span class="ExchangeRatio">
             1 =
          </span>
          <span class="ExchangeRead">
            ( {{ this.$store.getters.readinput(ExchangeRatio) }} 원 )
          </span>
          <span class="ExchangeInputBox">
            <input class="ExchangeInput" maxlength='9' v-model="ExchangeRatio" @keyup="updateExchangeRatio">
          </span>
        </div>

        <div class="ExchangeBox"  v-if="IsExchange == false">
          <div class="MiniLogo">
            게임머니 : 원
          </div>
        </div>
      </div>

      <div class="GiftCardInputBox">
        <div class="GiftCardOption">
          상품권 옵션 설정
        </div>
        <span>
          <input class="GiftCardInput" maxlength='5' v-model="Persent" @keyup="updatePersent"> <div class="Persent"> % </div>
          <img src="../assets/images/UnderBar.gif" class="GiftCardInput_Under" v-if="Persent == ''">
        </span>
        
        <div class="WhatPersent">
          <div>
            <button class="DiscountF" @click="changeCashOption" v-if="isCashOption[0] == false">% 할인</button>
            <button class="DiscountT" @click="changeCashOption" v-if="isCashOption[0] == true">% 할인</button>
          </div>

          <div>
            <button class="BonusF" @click="changeCashOption('B')" v-if="isCashOption[1] == false">% 추가증정</button>
            <button class="BonusT" @click="changeCashOption('B')" v-if="isCashOption[1] == true">% 추가증정</button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data: () => {
    return {
      Cash : '', //캐시 입력창
      Money : '', // 현금 입력창
      Ratio : '', // 비율 입력창
      Persent: '', // 할인, 추가증정 입력창
      ExchangeRatio: '', // 비율 변경 입력창
      IsExchange: false, // 비율 변경 여부
      isCashOption: [true, false], // 할인, 추가증정 여부
    }
  },
  computed:{
    ...mapState([
      'isWin','compairpersent'
      ]),
  },
  methods: {
    updateMoney(){
      this.$store.commit('updateMoney',this.Money)
    },
    updateCash(){
      this.$store.commit('updateCash', this.Cash)
    },
    updateRatio(){
      this.$store.commit('updateRatio', this.Ratio)
    },
    updatePersent(){
      if(this.Persent > 100 && this.isCashOption[0] == true){
        this.Persent = 100
      }
      this.$store.commit('updatePersent', this.Persent)
    },
    updateExchangeRatio(){
      this.$store.commit('updateExchangeRatio', this.ExchangeRatio)
    },
    updateisCashOption(){
      this.$store.commit('updateisCashOption', this.isCashOption)
    },
    changeCashOption(payload) {
      if(payload == 'B'){
        this.isCashOption[0] = false;
        this.isCashOption[1] = true;
        this.updateisCashOption()
      }
      else{
        this.isCashOption[0] = true;
        this.isCashOption[1] = false;
        this.updateisCashOption()
      }
    },
  },
}
</script>

<style>
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.InfoBox{
  width: 350px;
  height: 65px;
  border: solid 2px #000;
  background-color: #5b5b5b;
  color:#fff;
  position: absolute;
  left: 50%;
  transform:translate(-50%, 0);
  top: 105%;
}

.InfoText{
  background-color: transparent;
  font-family: "Galmuri11";
  font-size: 25px;
  top: 50%;
  transform:translate(0, 50%);
  text-align: center;
}

.WhatMoney{
  position: absolute;
  top: 115%;
  width: 100%;
  font-family: "Galmuri11";
  font-size: 25px;
  color: #fff;
}

.Auction{
  position: absolute;
  left: 5%;
}

.CashShop{
  position: absolute;
  right: 5%;
  text-align: right;
}

.WhenSell{
  position: absolute;
  top: 125%;
  width: 100%;
  font-family: "Galmuri11";
  font-size: 30px;
  color: #9b9b9b;
}

.ResultCalc{
  color : #02fa97;
}

.AuctionSell{
  position: absolute;
  left: 5%;
}

.AuctionInput{
  width: 500px;
  height: 180px;
  color:#9b9b9b;
  font-size: 180px;
  font-family: "MorganiteBold";
  outline: none;
  border: none;
}

.CashSell{
  position: absolute;
  right: 5%;
  text-align: right;
}


.CashInput{
  width: 500px;
  height: 180px;
  color:#9b9b9b;
  font-size: 180px;
  font-family: "MorganiteBold";
  text-align: right;
  outline: none;
  border: none;
}

.UnderBar{
  margin-top: -50px;
}

.ExchangeBox{
  position : absolute;
  bottom: 0;
  width: 100%;
  height: 40px;
  color:white;
  font-size: 25px;
  border: 1px solid;
  font-family: 'Galmuri11';
  z-index: 1;
}

.ExchangeRatio{
  position : absolute;
  font-size: 25px;
  top: 50%;
  right : 5%;
  margin-right: 150px;
  transform:translate(0, -50%);
}

.ExchangeInput{
  position : absolute;
  height: 40px;
  width: 160px;
  font-family: 'Galmuri11';
  color:#fff;
  font-size: 25px;
  top:50%;
  right:0;
  transform:translate(0, -50%);
  text-align: center;

}

.ExchangeRead{
  position : absolute;
  left: 5%;
  top: 50%;
  transform:translate(0, -50%);
}

.MiniLogo{
  position: absolute;
  top: 50%;
  left: 50%;
  transform:translate(-50%, -50%);
}

.Exchange_img{
  position: absolute;
  background-color: gray;
  right:1%;
  cursor: pointer;
}

.SetBox{
  position: absolute;
  top:170%;
  width: 100%;
  height: 30%;
  background-color: gray;
}

.GiftCardOption{
  position: absolute;
  width: 100%;
  text-align: center;
  left:50%;
  transform:translate(-50%, 0);
  color: #fff;
  font-size: 25px;
  background-color: gray;
  font-family: 'Galmuri11';
  z-index: 1;
  padding: 1%;
}

.GiftCardInputBox{
  position: absolute;
  height: 95%;
  width: 40%;
  right: 5%;
  background-color: #000;
}

.GiftCardInput{
  position: absolute;
  width: 100%;
  height: 65%;
  font-size: 165px;
  color: #fff;
  font-family: "MorganiteBold";
  outline: none;
  border: none; 
  z-index: 0;
  text-align: center;
  top: 55%;
  transform:translate(0, -55%);
  padding:0px;
}

.Persent{
  position: absolute;
  left:50%;
  margin-left:120px;
  font-size: 165px;
  color: #fff;
  font-family: "MorganiteBold";
  z-index: 0;
  top: 55%;
  transform:translate(-35%, -55%);
}

.GiftCardInput_Under{
  position: absolute;
  left:50%;
  transform:translate(-50%, 0);
  bottom:20%;
  color: #fff;
  font-family: "MorganiteBold";
}

.WhatPersent{
  position: absolute;
  width: 100%;
  bottom: 0;
  height: 15%;
}

.DiscountF{
  position: absolute;
  background-color: gray;
  font-family: 'Galmuri11';
  height:40px;
  left:0;
  width: 50%;
  font-size: 25px;
  top:50%;
  transform:translate(0, -50%);
}

.DiscountF:hover{
  background-color: #000;
  color:#02fa97
}

.DiscountT{
  position: absolute;
  background-color: #000;
  color:#02fa97;
  font-family: 'Galmuri11';
  height:40px;
  left:0;
  width: 50%;
  font-size: 25px;
  top:50%;
  transform:translate(0, -50%);
}

.BonusF{
  position: absolute;
  background-color: gray;
  font-family: 'Galmuri11';
  height:40px;
  right:0;
  width: 50%;
  font-size: 25px;
  top:50%;
  transform:translate(0, -50%);
}

.BonusF:hover{
  background-color: #000;
  color:#02fa97
}

.BonusT{
  position: absolute;
  background-color: #000;
  color:#02fa97;
  font-family: 'Galmuri11';
  height:40px;
  right:0;
  width: 50%;
  font-size: 25px;
  top:50%;
  transform:translate(0, -50%);
}

.Reverse{
  position: absolute;
  background-color: gray;
  font-family: 'Galmuri11';
  width: 100%;
  font-size: 25px;
  z-index: 1;
  top:50%;
  transform:translate(0, -50%);
}

.Reverse:hover{
  background-color: #000;
  color: #fff
}

.CashRatioInputBox{
  position: absolute;
  height: 95%;
  width: 40%;
  left: 5%;
  background-color: #000;
}

.CashRatio{
  position: absolute;
  width: 100%;
  text-align: center;
  right:50%;
  transform:translate(50%, 0);
  color: #fff;
  font-size: 25px;
  background-color: gray;
  font-family: 'Galmuri11';
  z-index: 1;
  padding: 1%;
}

.Ratio{
  position: absolute;
  color:#fff;
  font-size: 165px;
  font-family: "MorganiteBold";
  right:25%;
  top: 55%;
  transform:translate(0, -55%);
  z-index: 0;
}

.Colon{
  position: absolute;
  color:#fff;
  font-size: 165px;
  font-family: "MorganiteBold";
  left:50%;
  top: 55%;
  transform:translate(-50%, -65%);
  z-index: 0;
}

.CashRatioInput{
  position: absolute;
  left: 0;
  top: 55%;
  width: 45%;
  transform:translate(0, -55%);
  font-size: 130px;
  /* font-size: 165px; */
  color: #fff;
  text-align: right;
  font-family: "MorganiteBold";
  z-index: 0;
  text-align: center;
  outline: none;
  border: none;
}

.CashRatioInput_Under{
  position: absolute;
  left : 20%;
  transform:translate(-15%, 0);
  bottom: 20%;
}
</style>