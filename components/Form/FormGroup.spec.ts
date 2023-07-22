import { shallowMount } from '@vue/test-utils';
import FormGroup from './FormGroup.vue';

describe('FormGroup', () => {
  test('Инициализация слота', () => {
    const formGroup = shallowMount(FormGroup, {
      slots: {
        default: '<p>Начальное значение</p>',
      },
    });

    expect(formGroup.find('p').text()).toBe('Начальное значение');
  });

  test('Правильное отображение title', () => {
    const title = 'Заголовок 1';
    const formGroup = shallowMount(FormGroup, {
      props: {
        title,
      },
    });

    expect(formGroup.find('.form-group__title').exists()).toBe(true);
    expect(formGroup.find('.form-group__title').text()).toBe(title);
  });

  test('Без передачи title', () => {
    const formGroup = shallowMount(FormGroup);

    expect(formGroup.find('.form-group__title').exists()).toBe(false);
  });
});
