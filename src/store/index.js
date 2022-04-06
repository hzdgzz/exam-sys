//该文件用于创建Vuex中最为核心的store
import Vue from 'vue'
//引入Vuex
import Vuex from 'vuex'
import tab from './tab'

// 引入数据持久化插件
import createPersistedState from "vuex-persistedstate";
//应用Vuex插件
Vue.use(Vuex)
// 模块化store
export default new Vuex.Store({
  modules: {
    tab,
  },
  plugins: [createPersistedState({
    storage: window.localStorage,
    paths: ['tab']
  }),
  ]
})