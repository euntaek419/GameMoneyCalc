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
        cashOption(state: any): number{
            if(state.isCashOption[0] == true){ // 할인일 때
                return Math.floor( state.Cash - state.Cash * state.Persent / 100 )
            }
            else if(state.isCashOption[1] == true){ // 추가 지급 일 때
                return Math.floor( state.Cash * ( 1 + state.Persent / 100 ) )
            }
        },

        cashResult(state:any):string {
            state.leftresult = state.Money * state.Ratio //좌측 계산

            if(state.Persent > 0){ // 할인 설정
                state.rightresult = Math.floor( state.Cash - state.Cash * state.Persent / 100 )
            }else{ // 비설정
                state.rightresult = state.Cash
            }

            if( state.isExchange == true ){ // 거래 비율 조정
                state.rightresult = state.rightresult * state.ExchangeRatio
            }

            // ------------------------------------- 중간선 --------------------------------------

            if(state.leftresult > state.rightresult && state.Cash !== '' && state.Money !== '' && state.Ratio !== '')
            { //leftresult가 더 비쌀 때
                state.isWin = [false,true]
                state.fontchange = ['','#02fa97']
                state.compair = ( state.leftresult - state.rightresult ).toFixed(1)
                state.compairpersent = ( state.compair / state.rightresult * 100).toFixed(1)
                // state.compairpersent = ( 100 - state.rightresult / state.leftresult * 100 )
                // state.compairpersent = ( state.leftresult / state.rightresult * 100 - 100 ).toFixed(1)
                
                //if(state.isCashOption[0] == true){
                    //state.compairpersent = ( 100 - state.rightresult / state.leftresult * 100 )
                    // state.compairpersent = ( state.leftresult / state.rightresult * 100 - 100 ).toFixed(1)
                //    state.compairpersent = ( state.compair / state.rightresult * 100).toFixed(1)
                //    if(state.isExchange == true && state.ExchangeRatio > 1){
                //        state.compairpersent = state.compairpersent * 100
                //    }
                //}else if(state.isCashOption[1] == true){
                //    state.compairpersent = ( state.compair / state.rightresult * 100).toFixed(1)
                //    if(state.isExchange == true && state.ExchangeRatio > 1){
                //        state.compairpersent = state.compairpersent * 100
                //    }
                //}
                
                if(state.isExchange == true && state.ExchangeRatio > 1){
                    state.compair = state.compairpersent * state.Cash / 100
                }

                return state.compair

            }else if(state.leftresult < state.rightresult && state.Cash !== '' && state.Money !== '' && state.Ratio !== '')
            { // rightresult 가 더 비쌀 때
                state.isWin = [true,false]
                state.fontchange = ['#02fa97', '']
                state.compair = ( state.rightresult - state.leftresult ).toFixed(1)
                state.compairpersent = ( state.compair / state.leftresult * 100).toFixed(1)

                // if(state.isCashOption[0] == true){
                //     state.compairpersent = (state.leftresult / state.rightresult  ).toFixed(1)
                //     state.compairpersent = ( state.rightresult / state.leftresult ).toFixed(1)
                //     if(state.isExchange == true && state.ExchangeRatio > 1){
                //         state.compairpersent = state.compairpersent * 100
                //     }
                // }
                // else if(state.isCashOption[1] == true){
                //     state.compairpersent = (state.compair / state.leftresult * 100).toFixed(1)
                //     if(state.isExchange == true && state.ExchangeRatio > 1){
                //         state.compairpersent = state.compairpersent * 100
                //     }
                // }
                if(state.isExchange == true){
                    state.compair = state.compairpersent * state.Cash / 100
                }
                
                return state.compair
            }

            else if(state.leftresult == state.rightresult && state.Cash !== '' && state.Money !== '' && state.Ratio !== ''){
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