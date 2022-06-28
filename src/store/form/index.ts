import { Module } from 'vuex';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';
import { FormState } from './types';
import { RootState } from '../types';
import { Location, Package } from '@/types';

export const state: FormState = {
  form: {
    name: '',
    age: 0,
    location: Location.HONG_KONG,
    plan: Package.STANDARD,
  },
  error: false,
  step: 0,
};

const namespaced: boolean = true;

export const form: Module<FormState, RootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations,
};
