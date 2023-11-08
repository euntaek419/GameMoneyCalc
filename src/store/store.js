import { createStore } from 'vuex';

export default createStore({
    state() {
        return {
            Money : '',
            Cash : '',
            Ratio : '',
            Persent : '',
            ExchangeRatio : '',
            isCashOption: [true, false],
            isExchange: false, // 비율 변경 여부
            compair: '',
            compairpersent: '',
            leftresult : '',
            rightresult: '',
            fontchange: '',
            fontchange2: '',
            isWin: [false, false],
        }
    },
    actions: {
    },
    getters: {
        cashResult(state) { // rightresult의 exchangeratio는 우측에 영향받기에 우측을 신경써서 코딩할 것
            
            state.leftresult = state.Money / state.Ratio

            if(state.isCashOption[0] == true || state.isCashOption[1] == true && state.Persent > 0){
                state.rightresult = Math.floor( state.Cash * ( 1 + state.Persent / 100 ) )
            }
            else{
                state.rightresult = state.Cash
            }

            if(state.isExchange == true && state.ExchangeRatio > 0){
                state.rightresult = state.rightresult / state.ExchangeRatio
            }

            // ------------------------------------- 중간선 --------------------------------------

            if(state.leftresult > state.rightresult && state.Cash !== '' && state.Money !== '' && state.Ratio !== ''){
                state.isWin[0] = true
                state.isWin[1] = false
                state.fontchange = '#02fa97'
                state.fontchange2 = ''
                state.compair = (state.leftresult - state.rightresult).toFixed(1)
                state.compairpersent = (state.compair / state.rightresult * 100).toFixed(1)
                console.log('좌측 승리')
                return (state.leftresult - state.rightresult).toFixed(1)
            }

            if(state.leftresult < state.rightresult && state.Cash !== '' && state.Money !== '' && state.Ratio !== ''){
                state.isWin[0] = false
                state.isWin[1] = true
                state.fontchange = ''
                state.fontchange2 = '#02fa97'
                state.compair = (state.rightresult - state.leftresult).toFixed(1)
                state.compairpersent = (state.compair / state.leftresult * 100).toFixed(1)
                console.log('우측 승리')
                return (state.rightresult - state.leftresult).toFixed(1)
            }

            if(state.leftresult == state.rightresult && state.Cash !== '' && state.Money !== '' && state.Ratio !== ''){
                state.isWin[0] = true
                state.isWin[1] = true
                state.fontchange = '#02fa97'
                state.fontchange2 = '#02fa97'
                state.compair = 0
                state.compairpersent = 0
                return 0
            }
        },
        readinput: () => (payload) => { //getter factory
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
        cashOption(state){
            if(state.isCashOption[0] == true){
                return Math.floor( state.Cash - state.Cash * state.Persent/100 )
            }
            if(state.isCashOption[1] == true){
                return Math.floor( state.Cash * ( 1 + state.Persent / 100 ) )
            }
        },
    },
    mutations : {
        updateMoney(state, payload) {
            state.Money = payload
        },
        updateCash(state, payload){
            state.Cash = payload
        },
        updateRatio(state, payload){
            state.Ratio = payload
        },
        updatePersent(state, payload){
            state.Persent = payload
        },
        updateExchangeRatio(state, payload){
            state.ExchangeRatio = payload
        },
        updateisCashOption(state, payload){
            state.isCashOption = payload
        },
    },
})