<template>
  <div>
    <div class="InfoBox">
      <div class="InfoText">  
        구매할 정보를 기입해줘 !
      </div>
    </div>

    <div class="WhatMoney">
      <span class="CashShop">
        캐시 아이템
        <span v-if="IscashOption[0] == true && Persent > 0"> ( 할인 적용 ) </span>
        <span v-if="IscashOption[1] == true && Persent > 0"> ( 추가 증정 적용 ) </span>

        <div> {{ cashoption(Cash,Persent) }} 원 ( {{readinput( cashoption(Cash,Persent) ) }} 원 )</div>
      </span>

      <span class="Auction">
        아이템 금액
        <div>( 게임 머니 )</div>
      </span>
    </div>

    <div class="WhenSell">
      <span class="CashSell">
        캐시 아이템 금액 입력
        <div>
          <input  class="CashInput" maxlength="11" v-model="Cash">
          <div class="UnderBar_left">
            <div>
              <img src="../assets/images/UnderBar.gif">
            </div>
            
          </div>
          <div>
            <div> {{readinput(Cash)}} 원</div>
          </div>
        </div>
      </span>

      <span class="AuctionSell">
        아이템 판매 금액 입력
        <div>
          <input class="AuctionInput" maxlength='11' v-model="Money"> 
          <div class="UnderBar_right">
            <img src="../assets/images/UnderBar.gif" >
          </div>
          <div>
            <div> {{ readinput(Money) }} 머니</div>
          </div>
        </div>
      </span>
    </div>


    <div class="ExchangeBox">
      1 =
      <span class="ExchangeInputBox">
        <input class="ExchangeInput" maxlength='6'>
      </span>
      {{ readinput(Exchange) }}
    </div>

    <div class="SetBox">

      <div class="GiftCardOption">
        상품권 옵션 설정
      </div>
        <div class="CashRatio">
          현금 거래 비율
          <!-- <span class="CashRatioText" v-if="isReverse == false">( 원 : 게임머니 )</span> -->
          <!-- <span class="CashRatioText" v-if="isReverse == true">( 게임머니 : 원 )</span> -->
        </div>
      <div class="GiftCardInputBox">
        <span>
          <input class="GiftCardInput" maxlength='4' v-model="Persent"> <div class="Persent"> % </div>
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

      <div class="CashRatioInputBox">
        <span>
          <div class="Ratio"> 1 </div> <div class="Colon"> : </div><input class="CashRatioInput" maxlength='6'>
          <img src="../assets/images/UnderBar.gif" class="CashRatioInput_Under" >
        </span>

        <div class="WhatPersent">
          <div>
            <button class="Reverse" @click="Reverse">REVERSE</button>
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
      Exchange: '',
      IscashOption: [true, false],
      DiscountBack: '',
      DiscountColor: '',
      BonusBack: '',
      BonusColor: '',
      isReverse: false,
    }
  },
  methods:{
    readinput(cash) {
      if(cash < 10000){
        return cash
      }
      if(cash >= 10000 && cash < 100000000){
        if(cash % 10000 == 0){
          return Math.floor(cash / 10000) + ' 만 '
        }
        return Math.floor(cash / 10000) + ' 만 ' + cash % 10000
      }
      if(cash >= 100000000){
        if(cash % 100000000 == 0){
          return Math.floor(cash / 100000000) + ' 억 '
        }
        if(cash % 10000 == 0){
          return Math.floor(cash / 100000000) + ' 억 ' + Math.floor(cash % 100000000 / 10000) + ' 만 '
        }
        
        if(Math.floor( cash / 10000 ) % 10000 == 0){
          return Math.floor(cash / 100000000) + ' 억 ' + cash % 10000
        }

        return Math.floor(cash / 100000000) + ' 억 ' + Math.floor(cash % 100000000 / 10000) + ' 만 ' + cash % 10000
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
    Reverse(){
      if(this.isReverse == false){
        this.isReverse = true
      }
      else{
        this.isReverse = false
      }
    }
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
  position: absolute;
  top: 125%;
  width: 100%;
  font-family: "Galmuri11";
  font-size: 30px;
  color: #9b9b9b;
}

.CashSell{
  position: absolute;
  left: 5%;
}

.CashInput{
  width: 500px;
  height: 180px;
  color:#9b9b9b;
  font-size: 180px;
  font-family: "MorganiteBold";
  outline: none;
  border: none;
}

.UnderBar_left{
  margin-top: -50px;
}

.AuctionSell{
  position: absolute;
  right: 5%;
  text-align: right;
}


.AuctionInput{
  width: 500px;
  height: 180px;
  color:#9b9b9b;
  font-size: 180px;
  font-family: "MorganiteBold";
  text-align: right;
  outline: none;
  border: none;
}

.UnderBar_right{
  margin-top: -50px;
}

.ExchangeBox{
  position : absolute;
  top:160%;
  width: 40%;
  right: 5%;
  height: 50px;
  color:#fff;
  font-size: 25px;
  border: 1px solid;
  font-family: 'Galmuri11';
}

.ExchangeInput{
  height: 50px;
  width: 10%;
  font-family: 'Galmuri11';
  color:#fff;
  font-size: 25px;
}

/* .Exchange_img{
  position: absolute;
  background-color: gray;
  right:0;
  cursor: pointer;
} */

.SetBox{
  position: absolute;
  top:170%;
  width: 100%;
  height: 250px;
  background-color: gray;
}

.GiftCardOption{
  position: absolute;
  left:22.5%;
  transform:translate(-22.5%, 0);
  color: #fff;
  font-size: 25px;
  background-color: gray;
  font-family: 'Galmuri11';
  z-index: 1;
}

.CashRatio{
  position: absolute;
  right:22.5%;
  transform:translate(22.5%, 0);
  color: #fff;
  font-size: 25px;
  background-color: gray;
  font-family: 'Galmuri11';
  z-index: 1;
}

.GiftCardInputBox{
  position: absolute;
  height: 200px;
  width: 40%;
  left: 5%;
  top: 15%;
  background-color: #000;
}

.GiftCardInput{
  position: absolute;
  left:15%;
  width: 165px;
  font-size: 165px;
  color: #fff;
  font-family: "MorganiteBold";
  outline: none;
  border: none; 
  z-index: 0;
}

.Persent{
  position: absolute;
  left:40%;
  margin-left:100px;
  font-size: 165px;
  color: #fff;
  font-family: "MorganiteBold";
  z-index: 0;
}

.GiftCardInput_Under{
  position: absolute;
  left:40%;
  bottom:20%;
  font-size: 200px;
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
  left:0;
  width: 50%;
  height: 100%;
  font-size: 20px;
}

.Discount:hover{
  background-color: #000;
  color:#02fa97
}

.Bonus{
  position: absolute;
  background-color: gray;
  font-family: 'Galmuri11';
  right:0;
  width: 50%;
  height: 100%;
  font-size: 20px;
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
  height: 100%;
  font-size: 20px;
}

.Reverse:hover{
  background-color: #000;
  color: #fff
}

.CashRatioInputBox{
  position: absolute;
  height: 200px;
  width: 40%;
  right: 5%;
  top: 15%;
  background-color: #000;
}

.Ratio{
  position: absolute;
  color:#fff;
  font-size: 165px;
  font-family: "MorganiteBold";
  left:25%;
  z-index: 0;
}

.Colon{
  position: absolute;
  color:#fff;
  font-size: 165px;
  font-family: "MorganiteBold";
  left:50%;
  z-index: 1;
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
}

.CashRatioInput_Under{
  position: absolute;
  right:15%;
  bottom: 20%;
}
</style>