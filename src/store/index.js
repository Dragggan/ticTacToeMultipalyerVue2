import Vue from "vue";
import Vuex from "vuex";
import router from '../router';
import * as ACTION from '../store/action-types';
import * as MUT from '../store/mutations-types';
import * as API from '../components/API/api';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    error: null,
  },
  mutations: {
    [MUT.ERROR](state, payload) {
      state.error = payload;
    },
    [MUT.RESET_ERROR](state, payload) {
      state.error = null;
    },
  },
  actions: {
    async [ACTION.CREATE_PLAYER]({ commit }, payload) {
      const response = API.createPlayerApi(payload);
      if (response.status === 200) {
        router.push('/listPlayersBoards');
      }
      else {
        commit(MUT.ERROR, "ERROR, Check URL");
      }
    },

  },
  getters: {
    errorGet(state) {
      return state.error;
    },

  },
  modules: {},
});
