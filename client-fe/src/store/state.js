import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

const storeData = {
    state: {
        cart: [],
        quantily : null
    },

    mutations: {
        addToCart(state, item) {
            let found = state.cart.find(product => product.id == item.id);
            if (found) {
                found.quantily++;
            } else {
                state.cart.push(item)
            }

        },
        removeToCart(state, item) {
            let i = state.cart.indexOf(item)
            state.cart.splice(i, 1)
        }
    }
}

const store = new Vuex.Store(storeData)
export default store