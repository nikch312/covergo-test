import { Location, Package } from '@/types';
import { MutationTree } from 'vuex';
import { FormData, FormState } from './types';

export const mutations: MutationTree<FormState> = {
  setFormData(state, payload: FormData) {
    Object.assign(state.form, payload);
  },
  setStep(state, payload: number) {
    state.step = payload;
  },
  clearFormData(state) {
    state.form.name = "";
    state.form.age = 0;
    state.form.location = Location.HONG_KONG;
    state.form.plan = Package.STANDARD;
  }
};
