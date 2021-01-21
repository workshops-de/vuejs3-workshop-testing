import { createBook } from '@/services/book.api';
import BookNew from '@/views/BookNew.vue';
import { flushPromises, mount } from '@vue/test-utils';

jest.mock('@/services/book.api');
const mockCreateBook = createBook as jest.MockedFunction<typeof createBook>;

beforeEach(() => {
  jest.clearAllMocks();
});

describe('<BookNew />', () => {
  describe('When the title is shorter than 5 characters', () => {
    it('displays an error message', async () => {
      const wrapper = mount(BookNew);

      await wrapper.find('input[name=title]').setValue('A');

      expect(wrapper.find('[data-test=book-title--error]').isVisible()).toBe(
        true
      );

      expect(wrapper.find('[data-test=book-title--error]').text()).toBe(
        'The title must be at least 5 characters long.'
      );
    });
  });

  describe('When the title is longer than 5 characters', () => {
    it('displays no error message', async () => {
      const wrapper = mount(BookNew);

      await wrapper.find('input[name=title]').setValue('12345');

      expect(wrapper.find('[data-test=book-title--error]').exists()).toBe(
        false
      );
    });
  });

  describe('When the book is specified correctly', () => {
    it('displays a success message', async () => {
      const wrapper = mount(BookNew);
      mockCreateBook.mockResolvedValueOnce();

      await wrapper.find('input[name=title]').setValue('Vue Three');
      await wrapper
        .find('textarea[name=abstract]')
        .setValue('Progressive Web Framework');

      await wrapper.find('input[name=author]').setValue('Evan You');

      await wrapper.find('form').trigger('submit.prevent');

      await flushPromises();

      expect(wrapper.find('[data-test=book-form--success]').text()).toBe(
        'Successfully created new book.'
      );
    });
  });
});
