import Vue from "vue";
import Vuex from "vuex";
import router from '../router';
import * as ACTION from '../store/action-types';
import * as MUT from '../store/mutations-types';
import * as API from '../components/API/api';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    player: null,
    boards: null,
    error: null,
    error_create_board: null,
  },
  mutations: {
    [MUT.SET_PLAYER](state, payload) {
      state.player = payload;
      localStorage.player = payload.name;
    },
    [MUT.BOARDS](state, payload) {
      state.boards = payload;
    },
    [MUT.ERROR](state, payload) {
      state.error = payload;
    },
    [MUT.ERROR_BOARD](state, payload) {
      state.error_create_board = payload;
    },
    [MUT.RESET_ERROR](state) {
      state.error = null;
    },
  },
  actions: {
    async [ACTION.CREATE_PLAYER]({ commit }, payload) {
      const response = await API.createPlayerApi(payload);
      if (response.status === 200) {
        const { id, name } = response.data;
        commit(MUT.SET_PLAYER, { id, name });
        router.push('/listPlayersBoards');
      }
      else {
        commit(MUT.ERROR, "ERROR, Check URL");
      }
    },
    async [ACTION.CREATE_BOARD]({ commit, dispatch }) {
      const response = await API.createBoardApi();
      if (response.status === 200) {
        dispatch(ACTION.LIST_OF_BOARDS);
      }
      else {
        commit(MUT.ERROR_BOARD, "ERROR ,creating a board, check URL");
      }
    },
    async [ACTION.LIST_OF_BOARDS]({ commit }) {
      const response = await API.listOfBoardsApi();
      if (response.status === 200) {
        commit(MUT.BOARDS, response.data);
      }
      else {
        // TODO BETTER ERROR HANDLING, 
        commit(MUT.ERROR_BOARD, "ERROR ,creating a board, check URL");
      }
    },

  },
  getters: {
    errorGet(state) {
      return state.error;
    },
    error_create_boardGet(state) {
      return state.error_create_board;
    },
    boardsGet(state) {
      return state.boards;
    },
    playerGet(state) {
      return state.player ?? { name: localStorage.player };
    },

  },
  modules: {},
});
