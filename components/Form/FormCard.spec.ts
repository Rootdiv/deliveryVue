import { shallowMount } from '@vue/test-utils';
import FormCard from './FormCard.vue';

describe('FormCard', () => {
  test('Инициализация слота', () => {
    const formCard = shallowMount(FormCard, {
      slots: {
        default: '<p>Начальное значение</p>',
      },
    });

    expect(formCard.find('p').text()).toBe('Начальное значение');
  });
});
