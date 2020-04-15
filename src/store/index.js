import Vue from 'vue'
import Vuex from 'vuex'

import state from './module/state.js'
import mutations from './module/mutations.js'
import actions from './module/actions.js'
import getters from './module/getters.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters		 
})