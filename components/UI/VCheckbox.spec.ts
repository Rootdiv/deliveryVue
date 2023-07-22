import { shallowMount } from '@vue/test-utils';
import VCheckbox from './VCheckbox.vue';

describe('VCheckbox', () => {
  test('Инициализация label', () => {
    const label = 'Правила';
    const vCheckbox = shallowMount(VCheckbox, {
      props: {
        label,
      },
    });
    expect(vCheckbox.find('.label').text()).toBe(label);
  });

  test('Правильное отображение error', () => {
    const label = 'Правила';
    const error = 'Ошибка 1';
    const vCheckbox = shallowMount(VCheckbox, {
      props: {
        label,
        error,
      },
    });

    expect(vCheckbox.find('.checkbox__error-message').exists()).toBe(true);
    expect(vCheckbox.find('.checkbox__error-message').text()).toBe(error);
  });

  test('событие ', async () => {
    const label = 'Правила';
    const vCheckbox = shallowMount(VCheckbox, {
      props: {
        label,
        modelValue: false,
      },
    });

    const checkbox = vCheckbox.find('.checkbox');
    await checkbox.trigger('click');
    await checkbox.trigger('input');
    const emittedEvent = vCheckbox.emitted();

    expect('update:model-value' in emittedEvent).toBe(true);
    expect((emittedEvent['update:model-value'] as unknown[][])[0][0]).toBe(true);
  });
});
