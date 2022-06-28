import Vue from "vue";
import Vuex from "vuex";
import { form } from "./form";
import { RootState } from "./types";

Vue.use(Vuex);

export default new Vuex.Store<RootState>({
  state: {
    version: "1.0.0",
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    form,
  },
});
