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
        <div>( 게임 머니 )</div>
      </span>

      <span class="CashShop">
        캐시
        <span v-if="IscashOption[0] == true && Persent > 0 && Cash !== ''"> ( 할인 적용 ) </span>
        <span v-if="IscashOption[1] == true && Persent > 0 && Cash !== ''" > ( 추가 증정 적용 ) </span>
        <div> {{ cashoption(Cash,Persent) }}  ( {{readinput( cashoption(Cash,Persent) ) }} 원 )</div>
      </span>
    </div>

    <div> {{ resultcalc() }}</div>
    <div class="WhenSell">
      <label>
        <span class="AuctionSell">
          <span v-if="Cash == '' || Money == '' || Ratio == '' || isWin[0] == false">
            아이템 판매 금액 입력
          </span>
<!-- ------------------------------------------------------------------------------------------------------ -->
          <span class="ResultCalc" v-if="Cash !== '' && Money !== '' && Ratio !== '' && isWin[0] == true ">
            {{ compair }} 원, {{ compairpersent }} % 만큼 이득이야!_  <!-- Money line -->
          </span>

          <div>
            <input class="AuctionInput" maxlength='11' v-model="Money" :style="{ color : fontchange}">
            <div v-if="Money == ''" class="UnderBar">
              <img src="../assets/images/UnderBar.gif" >
            </div>
            <div>
              <div> {{ readinput(Money) }} 머니</div>
            </div>
          </div>
        </span>
      </label>

      <label>
        <span class="CashSell">
          <span v-if="Cash == '' || Money == '' || Ratio == '' || isWin[1] == false">
            캐시 아이템 금액 입력
          </span>

          <span class="ResultCalc" v-if="Cash !== '' && Money !== '' && Ratio !== '' && isWin[1] == true ">
            {{ compair }} 원, {{ compairpersent }} % 만큼 이득이야!_ <!-- Cash line -->
          </span>

          <div>
            <input class="CashInput" maxlength="11" v-model="Cash" :style="{ color : fontchange2}">
            <div v-if="Cash == ''" class="UnderBar">
                <img src="../assets/images/UnderBar.gif">
            </div>
            <div>
              <div> {{ readinput(Cash) }} 원</div>
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
            <img class="Exchange_img" src="../assets/images/Exchange.png" v-if="IsExchange == false" @click="IsExchange = true">
            <img class="Exchange_img" src="../assets/images/Exchange_yellow.png" v-if="IsExchange == true" @click="IsExchange = false">
          </span>
        </span>
        <span>
          <div class="Ratio"> 1 </div> <div class="Colon"> : </div><input class="CashRatioInput" maxlength='6' v-model="Ratio">
          <img src="../assets/images/UnderBar.gif" class="CashRatioInput_Under" v-if=" Ratio == ''">
        </span>
        <div class="ExchangeBox"  v-if="IsExchange == true">
          <span class="ExchangeRatio">
             1 =
          </span>
          <span class="ExchangeRead">
            ( {{ readinput( ExchangeRatio ) }} 원 )
          </span>
          <span class="ExchangeInputBox">
            <input class="ExchangeInput" maxlength='9' v-model="ExchangeRatio">
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
          <input class="GiftCardInput" maxlength='4' v-model="Persent" @keyup="limit"> <div class="Persent"> % </div>
          <img src="../assets/images/UnderBar.gif" class="GiftCardInput_Under" v-if="Persent == ''">
        </span>
        
        <div class="WhatPersent">
          <div>
            <button class="Discount" @click="IscashOption[0] = true; IscashOption[1] = false" :style="{ backgroundColor : DiscountBack, color: DiscountColor}">% 할인</button>
          </div>

          <div>
            <button class="Bonus" @click="IscashOption[1] = true; IscashOption[0] = false" :style="{ backgroundColor : BonusBack, color: BonusColor}">% 추가증정</button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data: () => {
    return {
      Cash: '',
      Money: '',
      Persent: '',
      Ratio: '',
      ExchangeRatio: '',
      isWin: [false, false], // 누가이겼는지 표시,
      IsExchange: false, //환율 변경 체크했는지 클릭
      cashresult: '', // 캐시 할인&증정 계산용
      leftresult: '', // 좌측 계산용
      rightresult : '', // 우측 계산용
      compair : '', // 좌우 비교용
      compairpersent : '', // 좌우 비교용
      IscashOption: [true, false], // %할인, %추가증정 여부
      DiscountBack: '', //Discount 백그라운드 변환
      DiscountColor: '', //Discount 색상 변환
      BonusBack: '', // 보너스백그라운드 변환
      BonusColor: '', // 보너스 색상 변환
      fontchange: '',
      fontchange2: '',
    }
  },
  methods:{
    readinput(payload) {
      if(payload < 10000){
        return payload
      }
      if(payload >= 10000 && payload < 100000000){ 
        if(payload % 10000 == 0){
          return Math.floor(payload / 10000) + ' 만 ' 
        }
        return Math.floor(payload / 10000) + ' 만 ' + payload % 10000
      }
      if(payload >= 100000000){
        if(payload % 100000000 == 0){
          return Math.floor(payload / 100000000) + ' 억 '
        }
        if(payload % 10000 == 0){
          return Math.floor(payload / 100000000) + ' 억 ' + Math.floor(payload % 100000000 / 10000) + ' 만 '
        }
        
        if(Math.floor( payload / 10000 ) % 10000 == 0){
          return Math.floor(payload / 100000000) + ' 억 ' + payload % 10000
        }

        return Math.floor(payload / 100000000) + ' 억 ' + Math.floor(payload % 100000000 / 10000) + ' 만 ' + payload % 10000
      }
    },
    limit(){
      if(this.Persent > 100 && this.IscashOption[0] == true){
        return this.Persent = 100
      }
    },
    resultcalc(){
      this.leftresult = this.Money / this.Ratio

      if(this.IscashOption[0] == true || this.IscashOption[1] == true && this.Persent > 0){
        this.cashresult =  Math.floor( this.Cash * ( 1 + this.Persent/100 ) )
      }
      else{
        this.cashresult = this.Cash
      }

      if(this.IsExchange == true && this.ExchangeRatio > 0){
        this.rightresult = this.cashresult / this.ExchangeRatio
      }
      else{
        this.rightresult = this.cashresult / 1
      }

      if(this.leftresult > this.rightresult && this.Cash !== '' && this.Money !== '' && this.Ratio !== ''){
        this.isWin[0] = true
        this.isWin[1] = false
        this.fontchange = '#02fa97'
        this.fontchange2 = ''
        this.compair = (this.leftresult - this.rightresult).toFixed(1)
        this.compairpersent = (this.compair / this.rightresult * 100).toFixed(1)
        
      }

      if(this.rightresult > this.leftresult && this.Cash !== '' && this.Money !== '' && this.Ratio !== ''){
        this.isWin[0] = false
        this.isWin[1] = true
        this.fontchange2 = '#02fa97'
        this.fontchange = ''
        this.compair = (this.rightresult - this.leftresult).toFixed(1)
        this.compairpersent = (this.compair / this.leftresult * 100).toFixed(1)
      }

      if(this.rightresult == this.leftresult && this.Cash !== '' && this.Money !== '' && this.Ratio !== ''){
        this.isWin[0] = true
        this.isWin[1] = true
        this.compair = 0
        this.compairpersent = 0
      }
    },
    cashoption(cash, persent){
      if(this.IscashOption[0] == true){
        this.DiscountBack = '#000'
        this.DiscountColor = '#02fa97'
        this.BonusBack = ''
        this.BonusColor = ''
        return Math.floor( cash - cash * persent/100 )

      }
      if(this.IscashOption[1] == true){
        this.BonusBack = '#000'
        this.BonusColor = '#02fa97'
        this.DiscountBack = ''
        this.DiscountColor = ''
        return Math.floor( cash * ( 1 + persent/100 ) )
      }
    },
  }
}
</script>

<style>
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
  transform:translate(-50%, -55%);
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

.Discount{
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

.Discount:hover{
  background-color: #000;
  color:#02fa97
}

.Bonus{
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

.Bonus:hover{
  background-color: #000;
  color:#02fa97
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
  font-size: 165px;
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