<template>
  <NuxtLayout />
</template>

<script setup>
  import userTemplateStore from '@/store/modules/template.ts';

  const root = useNuxtApp();
  const { template: TemplateModel } = root.$models;

  console.log('TemplateModel: ', TemplateModel.getInfo());
  console.log('userTemplateStore: ', userTemplateStore);
</script>
