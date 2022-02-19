// 该文件用于创建vuex中最为核心的store

import Vuex from 'vuex'
import Vue from 'vue'

// 使用Vuex插件
Vue.use(Vuex)

// 准备actions,用于相应组件中的动作
const actions = {
    addWhenOdd(context, value) {
        if (context.state.sum % 2) {
            context.commit("ADDWHENODD", value);
        }
    },
    addLater(context, value) {
        setTimeout(() => {
            context.commit("ADDLATER", value);
        }, 3000);
    }

};
// 准备mutations,用于操作数据（state）
const mutations = {
    ADD(state, value) {
        state.sum += value;
    },
    MINUS(state, value) {
        state.sum -= value;
    },
    ADDWHENODD(state, value) {
        state.sum += value;
    },
    ADDLATER(state, value) {
        state.sum += value;
    }
}
// 准备state,用于存储数据（state）
const state = {
    sum: 0,
    school: "尚硅谷",
    address: "南京",
    name: "墨非白"
}

const getters = {
    bigSum(state) {
        return state.sum * 10;
    }
}



// 创建并暴露store
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})

