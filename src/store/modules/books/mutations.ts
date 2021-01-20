import { MutationTree } from 'vuex';
import { BookState, Book } from './types';

const mutations: MutationTree<BookState> = {
  UPDATE_BOOKS(state: BookState, books: Book[]) {
    state.books = books;
  }
};

export default mutations;
