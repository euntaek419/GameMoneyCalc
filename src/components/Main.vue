<template>
  <div>
    <div class="InfoBox upZ-index">
      <div class="InfoText">  
        구매할 정보를 기입해줘 !
      </div>
    </div>

    <div class="WhatMoney upZ-index">
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
        <div v-if="Persent >= 0 && isCashOption[0] == true || Persent >= 0 && isCashOption[1] == true">
          {{ cashOption }}
          ( {{ this.$store.getters.readinput(cashOption) }} 원 )
        </div>
        <div v-else>
          ( 원 )
        </div>
      </span>
    </div>

    <img class="winImg" src="../assets/images/win.webp" v-if="isWin[0] == true">
    <img class="winImgR" src="../assets/images/win.webp" v-if="isWin[1] == true">
    <div class="WhenSell upZ-index">
      <label>
        <span class="AuctionSell">
          <span v-show="Cash == '' || Money == '' || Ratio == '' || isWin[0] == false">
            아이템 판매 금액 입력
          </span>
<!-- ------------------------------------------------------------------------------------------------------ -->
          
          <span class="ResultCalc" v-show="Cash !== '' && Money !== '' && Ratio !== '' && isWin[0] == true">
            {{ cashResult }} 원, {{ Math.abs(Math.round(compairpersentweened*10) / 10) }} % 만큼 이득이야!_
          </span>

          <div>
            <input class="AuctionInput" maxlength='11' v-model="Money" :style="{ color : fontchange[0] }" @input="updateMoney">
            <div v-if="Money == ''" class="UnderBar">
              <img src="../assets/images/UnderBar.webp" >
            </div>
            <div>
              <div> {{ this.$store.getters.readinput(Money) }} 머니</div>
            </div>
          </div>
        </span>
      </label>

      <label class="upZ-index">
        <span class="CashSell">
          <span v-show="Cash == '' || Money == '' || Ratio == '' || isWin[1] == false ">
            캐시 아이템 금액 입력 
          </span>

          <span class="ResultCalc" v-show="Cash !== '' && Money !== '' && Ratio !== '' && isWin[1] == true">
            {{ cashResult }} 원, {{ Math.abs(Math.round(compairpersentweened *10) / 10) }} % 만큼 이득이야!_ 
          </span>

          <div>
            <input class="CashInput" maxlength="10" v-model="Cash" :style="{ color : fontchange[1] }" @input="updateCash">
            <div v-if="Cash == ''" class="UnderBar">
                <img src="../assets/images/UnderBar.webp">
            </div>
            <div>
              <div> {{ this.$store.getters.readinput(Cash) }} 원</div>
            </div>
          </div>
        </span>
      </label>
    </div>

    <!-- ---------------------------------------------------------------------------------------------------------- -->

    <div class="SetBox upZ-index">
      <div class="CashRatioInputBox">
        <span class="CashRatio">
          현금 거래 비율
          <span>
            <img class="Exchange_img" src="../assets/images/Exchange.webp" v-if="IsExchange == false" @click="updateisExchange">
            <img class="Exchange_img" src="../assets/images/Exchange_yellow.webp" v-if="IsExchange == true" @click="updateisExchange">
          </span>
        </span>
        <span>
          <div class="Ratio"> 1 </div>
          <div class="Colon"> : </div>
          <input class="CashRatioInput" maxlength='9' v-model="Ratio" @input="updateRatio">
          <img src="../assets/images/UnderBar.webp" class="CashRatioInput_Under" v-if=" Ratio == ''">
        </span>
        <div class="ExchangeBox"  v-if="IsExchange == true">
          <span class="ExchangeRatio">
             1 =
          </span>
          <span class="ExchangeRead">
            ( {{ this.$store.getters.readinput(ExchangeRatio) }} 원 )
          </span>
          <span class="ExchangeInputBox">
            <input class="ExchangeInput" maxlength='9' v-model="ExchangeRatio" @input="updateExchangeRatio">
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
          <input class="GiftCardInput" maxlength='4' v-model="Persent" @input="updatePersent"> <div class="Persent"> % </div>
          <img src="../assets/images/UnderBar.webp" class="GiftCardInput_Under" v-if="Persent == ''">
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
import { mapGetters, mapState } from 'vuex'
import gsap from 'gsap'

export default {
  data: () => {
    return {
      Cash : '', //게임캐시 입력창
      Money : '', // 게임머니 입력창
      Ratio : '', // 비율 입력창
      Persent: '', // 할인, 추가증정 입력창
      ExchangeRatio: '', // 비율 변경 입력창
      IsExchange: false, // 비율 변경 여부
      isCashOption: [true, false], // 할인, 추가증정 여부
      cashResultweened: 0,
      compairpersentweened: 0,
      // Cashtweened: 0, // 테스트
    }
  },
  computed:{
    ...mapState([
      'isWin','compairpersent','fontchange',
      ]),
    ...mapGetters([
      'cashResult','cashOption'
    ])
  },

  methods: {
    updateMoney(){
      this.$store.dispatch('updateMoney',this.Money)
    },
    updateCash(){
      this.$store.dispatch('updateCash', this.Cash)
    },
    updateRatio(){
      this.$store.dispatch('updateRatio', this.Ratio)
    },
    updatePersent(){
      if(this.Persent > 100 && this.isCashOption[0] == true){
        this.Persent = 99.9
      }
      if(this.Persent > 1000 && this.isCashOption[1] == true){
        this.Persent = 1000
      }
      this.$store.dispatch('updatePersent', this.Persent)
    },
    updateisExchange(){
      this.IsExchange = !this.IsExchange
      this.ExchangeRatio = '';
      this.updateExchangeRatio()
      this.$store.dispatch('updateisExchange', this.IsExchange)
    },
    updateExchangeRatio(){
      this.$store.dispatch('updateExchangeRatio', this.ExchangeRatio)
    },
    updateisCashOption(){
      this.$store.dispatch('updateisCashOption', this.isCashOption)
    },
    changeCashOption(payload) {
      if(payload == 'B'){
        this.isCashOption = [false, true];
        this.Persent = ''
        this.updateisCashOption()
        this.updatePersent()
      }
      else{
        this.isCashOption = [true,false]
        this.Persent = ''
        this.updateisCashOption()
        this.updatePersent()
      }
    },
  },

  watch: {
    // cashResult(n) {
    //   gsap.to(this, { duration: 0.5, cashResultweened: Number(n) || 0 })
    // },
    compairpersent(n) {
      gsap.to(this, { duration: 0.5, compairpersentweened: Number(n) || 0 })
    },
  }
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

.winImg{
  position: absolute;
  z-index: 0;
  left: -50px;
}

.winImgR{
  position: absolute;
  z-index: 0;
  right : 0;
  transform: scaleX(-1);
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
  height: 15%;
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
  background-color: transparent;
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
  background-color: transparent;
}

.MiniLogo{
  position: absolute;
  top: 50%;
  left: 50%;
  background-color:transparent;
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
  height: 100%;
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
  height:100%;
  left:0;
  width: 50%;
  font-size: 25px;
  top:50%;
  transform:translate(0, -50%);
}

.BonusF{
  position: absolute;
  bottom:0;
  background-color: gray;
  font-family: 'Galmuri11';
  height:100%;
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
  height: 100%;
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
  height: 65%;
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

.upZ-index{
  z-index: 10;
}


@media (max-width:479px) {
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

.winImg{
  position: absolute;
  z-index: 0;
  left: -50px;
}

.winImgR{
  position: absolute;
  z-index: 0;
  right : 0;
  transform: scaleX(-1);
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
  height: 15%;
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
  background-color: transparent;
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
  background-color: transparent;
}

.MiniLogo{
  position: absolute;
  top: 50%;
  left: 50%;
  background-color:transparent;
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
  height: 100%;
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
  height:100%;
  left:0;
  width: 50%;
  font-size: 25px;
  top:50%;
  transform:translate(0, -50%);
}

.BonusF{
  position: absolute;
  bottom:0;
  background-color: gray;
  font-family: 'Galmuri11';
  height:100%;
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
  height: 100%;
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
  height: 65%;
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

.upZ-index{
  z-index: 10;
}
}
</style>