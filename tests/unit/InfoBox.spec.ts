import InfoBox from '@/components/InfoBox.vue';
import { mount } from '@vue/test-utils';

describe('<InfoBox />', () => {
  describe('When the box is rendered', () => {
    it('shows content', () => {
      const wrapper = mount(InfoBox);
      expect(wrapper.find('button').isVisible()).toBe(true);
      expect(wrapper.find('.container').isVisible()).toBe(true);
    });
  });

  describe('When the button of the box is clicked', () => {
    it('shows the content', async () => {
      const wrapper = mount(InfoBox);
      await wrapper.find('button').trigger('click');
      expect(wrapper.find('.container').isVisible()).toBe(false);
    });
  });
});
