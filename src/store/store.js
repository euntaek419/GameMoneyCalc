import { createStore } from 'vuex';

export default createStore({
    state() {
        return {
            Cash : '',
            Money : '',
            Persent: '',
            Ratio : '',
            ExchangeRatio: '',
            isWin: [false, false],
            IsExchange: false,
            compair: '',
            compairpersent: '',
            IscashOption: [true, false],
            DiscountBack: '',
            DiscountColor: '',
            BonusBack: '',
            BonusColor: '',
            fontchange: '',
            fontchange2: '',
        }
    },
    getter: {

    },
    mutations : {
    },
})