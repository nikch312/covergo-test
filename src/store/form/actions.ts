
import { ActionTree } from 'vuex';
import { FormState } from './types';
import { RootState } from '../types';


export const actions: ActionTree<FormState, RootState> = {
  goNextPage({ state, commit }): void {
    const step = state.step || 0;
    commit('setStep', step + 1);
  },
  goPrevPage({ state, commit }): void {
    const step = state.step || 0;
    commit('setStep', step - 1);
  },
  goFailPage({ commit }): void {
    commit('setStep', 3);
  },
  setFormData({ commit }, payload: FormData): void {
    commit('setFormData', payload);
  },
  initialize({ commit }): void {
    commit('clearFormData');
    commit('setStep', 0);
  }
};
