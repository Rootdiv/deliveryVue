import { nuxtContext } from '@nuxt/types';

export default (context: nuxtContext) => {
  const constants = {
    restaurants: [
      { value: '1', text: 'Ресторан 1' },
      { value: '2', text: 'Ресторан 2' },
      { value: '3', text: 'Ресторан 3' },
    ],
    payments: [
      { text: 'Онлайн оплата', value: 'onlinePayment' },
      { text: 'Оплата картой', value: 'courierByCard' },
      { text: 'Наличные', value: 'cash' },
    ],
  };

  context.$configs.constants = constants;
};
