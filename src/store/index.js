import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import user from './modules/user'
import common from './modules/common'
import demo from './modules/demo'
import lou from './modules/lou'
import count from './modules/count'
import time from './modules/time'
import student from './modules/student'
Vue.use(Vuex)
const store = new Vuex.Store({
  modules: {
    user,
    common,
    demo,
    lou,
    count,
    time,
    student
  },
  getters
})
export default store
