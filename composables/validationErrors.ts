import { ref, watch, computed } from 'vue';

export const useValidationErrors = (validationData: any) => {
  const errorsLocal = ref([]);

  watch(validationData, (value) => {
    errorsLocal.value = value.$errors || [];
  });

  const errors = computed(() => {
    const result: any = {};
    errorsLocal.value.forEach((item) => {
      const { $property: property = '', $message: message = '' } = item;
      result[property] = message;
    });
    return result;
  });

  return { errors };
};

export const serverValidationErrors = () => [];
