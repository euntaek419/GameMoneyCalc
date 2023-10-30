import { createStore } from 'vuex';

export default createStore({
    state() {
        return {
            isWin: [false, false],
            IsExchange: false,
            compair: '',
            compairpersent: '',
            fontchange: '',
            fontchange2: '',
        }
    },
//     getter: {
//     cashresult() {
//       if(this.IscashOption[0] == true || this.IscashOption[1] == true && this.Persent > 0){ // % 할인 또는 추가증정 활성화이며, 값이 0 이상일때 캐시 결과값 출력
//         return Math.floor( this.Cash * ( 1 + this.Persent/100 ) )
//       }
//       else{
//         return this.Cash
//       }
//     },
//     rightresult() {
//       if(this.IsExchange == true && this.ExchangeRatio > 0){ // 우측 환율 변경을 선택했을 때 환율 변경 적용
//         return this.cashresult / this.ExchangeRatio
//       }
//       else{
//         return this.cashresult
//       }
//     },

//     },
//     mutations : {
//     readinput(payload) {
//       if(payload < 10000){
//         return payload
//       }
//       if(payload >= 10000 && payload < 100000000){ 
//         if(payload % 10000 == 0){
//           return Math.floor(payload / 10000) + ' 만 ' 
//         }
//         return Math.floor(payload / 10000) + ' 만 ' + payload % 10000
//       }
//       if(payload >= 100000000){
//         if(payload % 100000000 == 0){
//           return Math.floor(payload / 100000000) + ' 억 '
//         }
//         if(payload % 10000 == 0){
//           return Math.floor(payload / 100000000) + ' 억 ' + Math.floor(payload % 100000000 / 10000) + ' 만 '
//         }
        
//         if(Math.floor( payload / 10000 ) % 10000 == 0){
//           return Math.floor(payload / 100000000) + ' 억 ' + payload % 10000
//         }

//         return Math.floor(payload / 100000000) + ' 억 ' + Math.floor(payload % 100000000 / 10000) + ' 만 ' + payload % 10000
//       }
//     },
//     limit(){
//       if(this.Persent > 100 && this.IscashOption[0] == true){
//         return this.Persent = 100
//       }
//     },
//     resultcalc(){
//       if(this.leftresult > this.rightresult && this.Cash !== '' && this.Money !== '' && this.Ratio !== ''){ // 좌측 계산값이 더 크고 값들이 비어있지 않으면 동작
//         this.isWin[0] = true
//         this.isWin[1] = false
//         this.fontchange = '#02fa97'
//         this.fontchange2 = ''
//         this.compair = (this.leftresult - this.rightresult).toFixed(1)
//         this.compairpersent = (this.compair / this.rightresult * 100).toFixed(1)
//       }

//       if(this.rightresult > this.leftresult && this.Cash !== '' && this.Money !== '' && this.Ratio !== ''){ // 우측 계산값이 더 크고 값들이 비어있지 않으면 동작
//         this.isWin[0] = false
//         this.isWin[1] = true
//         this.fontchange2 = '#02fa97'
//         this.fontchange = ''
//         this.compair = (this.rightresult - this.leftresult).toFixed(1)
//         this.compairpersent = (this.compair / this.leftresult * 100).toFixed(1)
//       }

//       if(this.rightresult == this.leftresult && this.Cash !== '' && this.Money !== '' && this.Ratio !== ''){ // 계산값이 같으며, 값들이 비어있지 않으면 동작
//         this.isWin[0] = true
//         this.isWin[1] = true
//         this.fontchange2 = '#02fa97'
//         this.fontchange = '#02fa97'
//         this.compair = 0
//         this.compairpersent = 0
//       }
//     },
//     cashoption(cash, persent){
//       if(this.IscashOption[0] == true){
//         this.DiscountBack = '#000'
//         this.DiscountColor = '#02fa97'
//         this.BonusBack = ''
//         this.BonusColor = ''
//         return Math.floor( cash - cash * persent/100 )
//       }
      
//       if(this.IscashOption[1] == true){
//         this.BonusBack = '#000'
//         this.BonusColor = '#02fa97'
//         this.DiscountBack = ''
//         this.DiscountColor = ''
//         return Math.floor( cash * ( 1 + persent/100 ) )
//       }
//     },
//     },
})