import { createStore, StoreOptions } from 'vuex';
import books from '@/store/modules/books/index';
import { RootState } from './types';

const store: StoreOptions<RootState> = {
  modules: {
    books
  },
  strict: process.env.NODE_ENV !== 'production'
};

export default createStore<RootState>(store);
