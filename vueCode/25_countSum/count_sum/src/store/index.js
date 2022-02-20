// 该文件用于创建vuex中最为核心的store

import Vuex from 'vuex'
import Vue from 'vue'
import countSumOptions from './count'
import personOptions from './person'

// 使用Vuex插件
Vue.use(Vuex)

// 创建并暴露store
export default new Vuex.Store({
    modules: {
        countSumOptions,
        personOptions
    }
})

