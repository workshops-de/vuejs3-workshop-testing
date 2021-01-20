import { ActionContext, ActionTree } from 'vuex';
import { Book, BookState } from './types';
import { RootState } from '../../types';
import { getBooks } from '@/api/books';

type BookContext = ActionContext<BookState, RootState>;

const actions: ActionTree<BookState, RootState> = {
  SET_BOOKS({ commit }: BookContext, books: Book[]) {
    commit('UPDATE_BOOKS', books);
  },
  async GET_BOOKS({ commit }: BookContext) {
    const books = await getBooks();
    commit('UPDATE_BOOKS', books);
  }
};

export default actions;
