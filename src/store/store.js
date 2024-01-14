import { createStore } from 'vuex';

export default createStore({
    state() {
        return {
            Money : '', // 게임 머니
            Cash : '', // 현금
            Ratio : '', // 왼쪽 비율
            ExchangeRatio : '', // 오른쪽 비율
            Persent : '', // 할인,추가증정 %
            isCashOption: [true, false],
            isExchange: false, // 비율 변경 여부
            compair: '',
            compairpersent: '',
            leftresult : '',
            rightresult: '',
            fontchange: [],
            isWin: [false, false],
        }
    },
    getters: {
        cashOption(state){
            if(state.isCashOption[0] == true){ // 할인일 때
                return Math.floor( state.Cash - state.Cash * state.Persent / 100 )
            } // 이상없음
            else if(state.isCashOption[1] == true){ // 추가 지급 일 때
                return Math.floor( state.Cash * ( 1 + state.Persent / 100 ) )
            } // 이상없음
        },

        cashResult(state) {
            if(state.Cash > 0 && state.Money > 0 && state.Ratio > 0 && state.Persent < 100){
                if(state.ExchangeRatio > 0){
                    state.leftresult = state.Money / state.Ratio * state.ExchangeRatio
                }else{
                    state.leftresult = state.Money / state.Ratio
                }

                if(state.Persent > 0){
                    state.rightresult = Math.floor( state.Cash - state.Cash * state.Persent / 100 )
                // }else if(state.Persent > 0 && state.isCashOption[1] == true){
                //     state.rightresult = state.Cash - state.Cash * ( 1 + state.Persent / 100 )
                }else{
                    state.rightresult = state.Cash
                }

                if(state.rightresult == state.leftresult){
                    state.compair = 0
                    state.compairpersent = 0
                    state.isWin = [true, true];
                    state.fontchange = ["#02fa97", "#02fa97"];
                    return 0;
                }else if(state.rightresult < state.leftresult){
                    state.compair = state.leftresult - state.rightresult
                    state.compairpersent = ((state.compair / state.rightresult) * 100).toFixed(1);
                    state.isWin = [false, true];
                    state.fontchange = ["", "#02fa97"];
                    return state.compair.toFixed(1);
                }else if(state.rightresult > state.leftresult){
                    state.compair = state.rightresult - state.leftresult
                    state.compairpersent = ((state.compair / state.leftresult) * 100).toFixed(1);
                    state.isWin = [true, false];
                    state.fontchange = ["#02fa97", ""];
                    return state.compair.toFixed(1);
                }
            }else{
                state.isWin = [false, false]
                state.fontchange = ["", ""]
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
    },
    mutations : {
        updateMoney(state, payload){
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
        updateisExchange(state, payload){
            state.isExchange = payload
        },
        updateisCashOption(state, payload){
            state.isCashOption = payload
        },
    },
    actions: {
        updateMoney(context, payload) {
            context.commit('updateMoney', payload)
        },
        updateCash(context, payload){
            context.commit('updateCash', payload)
        },
        updateRatio(context, payload){
            context.commit('updateRatio', payload)
        },
        updatePersent(context, payload){
            context.commit('updatePersent', payload)
        },
        updateExchangeRatio(context, payload){
            context.commit('updateExchangeRatio', payload)
        },
        updateisExchange(context, payload){
            context.commit('updateisExchange', payload)
        },
        updateisCashOption(context, payload){
            context.commit('updateisCashOption', payload)
        },
    },
})