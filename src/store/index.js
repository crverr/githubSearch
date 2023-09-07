import Vue from 'vue'
import Vuex from 'vuex'   //引入Vuex
import countOptions from './count'
import personOptions from './person'
import count from './count'
Vue.use(Vuex)    //应用Vuex
 
//创建并暴露store
export default new Vuex.Store({
  modules: {
    countAbout: countOptions,
    personAbout: personOptions
  },    
})