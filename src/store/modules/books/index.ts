import { Module } from 'vuex';
import state from './state';
import mutations from './mutations';
import actions from './actions';
import { BookState } from './types';
import { RootState } from '@/store/types';

const bookModule: Module<BookState, RootState> = {
  namespaced: true,
  state,
  mutations,
  actions
};

export default bookModule;
