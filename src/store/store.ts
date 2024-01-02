import { createStore, Store } from 'vuex';

interface State {
    Money: string;
    Cash: string;
    Ratio: string;
    Persent: string;
    ExchangeRatio: string;
    isCashOption: [boolean, boolean];
    isExchange: boolean;
    compair: string;
    compairpersent: string;
    leftresult: string;
    rightresult: string;
    fontchange: string[];
    isWin: [boolean, boolean];
}

const store: Store<State> = createStore({
    state(): State {
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
            fontchange: [],
            isWin: [false, false],
        }
    },
    getters: {
<<<<<<< HEAD:src/store/store.ts
        cashOption(state: any): number{
            if(state.isCashOption[0] == true){ // 할인일 때
=======
        cashOption(state){
            if(state.isCashOption[0] == true){
>>>>>>> parent of b7ae80d (계산 완성):src/store/store.js
                return Math.floor( state.Cash - state.Cash * state.Persent / 100 )
            }
            else if(state.isCashOption[1] == true){
                return Math.floor( state.Cash * ( 1 + state.Persent / 100 ) )
            }
        },
<<<<<<< HEAD:src/store/store.ts

        cashResult(state:any):string {
            state.leftresult = state.Money * state.Ratio //좌측 계산
=======
        cashResult(state) {
            state.leftresult = state.Money / state.Ratio //좌측 계산
>>>>>>> parent of b7ae80d (계산 완성):src/store/store.js

            if(state.isCashOption[0] == true && state.Persent > 0){ // 할인 셜정
                state.rightresult = Math.floor( state.Cash - state.Cash * state.Persent / 100 )
            }
            else if(state.isCashOption[1] == true && state.Persent > 0){ // 추가증정 설정
                state.rightresult = Math.floor( state.Cash - state.Cash * state.Persent / 100 )
            }
            else{ // 비설정
                state.rightresult = state.Cash
            }

            if(state.isExchange == true && state.ExchangeRatio > 0){ // 거래 비율 조정
                state.rightresult = state.rightresult / state.ExchangeRatio
            }

            // ------------------------------------- 중간선 --------------------------------------

            console.log("left 할인 완료", state.leftresult)
            console.log("right 계산 완료", state.rightresult)
            if(state.leftresult > state.rightresult && state.Cash !== '' && state.Money !== '' && state.Ratio !== '')
            { //leftresult가 더 비쌀 때
                state.isWin = [false,true]
                state.fontchange = ['','#02fa97']
                state.compair = ( state.leftresult - state.rightresult).toFixed(1)
                
                if(state.isCashOption[0] == true){
                    state.compairpersent = ( state.rightresult / state.leftresult ).toFixed(1)
                }
                if(state.isCashOption[1] == true){
                    state.compairpersent = ( state.compair / state.leftresult * 100).toFixed(1)
                }
                return state.compair
            }

            if(state.leftresult < state.rightresult && state.Cash !== '' && state.Money !== '' && state.Ratio !== '')
            { // rightresult 가 더 비쌀 때
                state.isWin = [true,false]
                state.fontchange = ['#02fa97', '']

                state.compair = (state.rightresult - state.leftresult).toFixed(1)

                if(state.isCashOption[0] == true){
                    state.compairpersent = (state.leftresult / state.rightresult).toFixed(1)
                }
                if(state.isCashOption[1] == true){
                    state.compairpersent = (state.compair / state.leftresult * 100).toFixed(1)
                }
                return state.compair
            }

            if(state.leftresult == state.rightresult && state.Cash !== '' && state.Money !== '' && state.Ratio !== ''){
                state.isWin = [true, true]
                state.fontchange = ['#02fa97','#02fa97']
                state.compair = state.compairpersent = 0
                return state.compair
            }
        },
        readinput: () => (payload:any) => { //getter factory
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


export default store;