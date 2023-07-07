import { defineStore } from 'pinia';
import { ref } from 'vue';

export default defineStore('settings', () => {
  const freeDeliveryPrice = ref(5000);
  const minimalDeliveryPrice = ref(1000);
  const deliveryPrice = ref(400);

  return { freeDeliveryPrice, minimalDeliveryPrice, deliveryPrice };
});
