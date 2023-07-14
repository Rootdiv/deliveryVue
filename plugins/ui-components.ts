import { nuxtContext } from '@nuxt/types';

import VSlider from '@/components/UI/VSlider.vue';
import VCheckbox from '@/components/UI/VCheckbox.vue';
import VInput from '@/components/UI/VInput.vue';
import VRadioGroup from '@/components/UI/VRadioGroup.vue';
import VSelect from '@/components/UI/VSelect.vue';

const UIComponents = [
  { name: 'VSlider', component: VSlider },
  { name: 'VCheckbox', component: VCheckbox },
  { name: 'VInput', component: VInput },
  { name: 'VRadioGroup', component: VRadioGroup },
  { name: 'VSelect', component: VSelect },
];

export default defineNuxtPlugin((context: nuxtContext) => {
  UIComponents.forEach((uiItem) => {
    context.vueApp.component(uiItem.name, uiItem.component);
  });
});
