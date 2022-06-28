import { GetterTree } from 'vuex';
import { FormState } from './types';
import { RootState } from '../types';

export const getters: GetterTree<FormState, RootState> = {
  currentStep(state: FormState): number {
    return state.step || 0;
  },
};
