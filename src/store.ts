import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
const SET_CURRENT_PAGE_TITLE = 'SET_CURRENT_PAGE_TITLE';

export default new Vuex.Store({
  state: {
    currentPageTitle: '',
  },
  mutations: {
    [SET_CURRENT_PAGE_TITLE](s, title) {
      s.currentPageTitle = title;
    },
  },
  actions: {
    setCurrentPageTitle({ commit }, title) {
      commit(SET_CURRENT_PAGE_TITLE, title);
    },
  },
});
