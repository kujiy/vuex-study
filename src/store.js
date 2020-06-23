import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        count: 0,
        mymsgDict: "mymsgDict init",
        mymsg: " mymsg init"
    },
    mutations: {
        increment(state) {
            state.count++
        },
        setMsgDict(state, payload) {
            state.mymsgDict = payload.message;
        },
        setMsg(state, payload) {
            state.mymsg = payload;
        }
    }
})
export default store