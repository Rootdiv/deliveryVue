<template>
  <v-layout>
    <template #page-header>
      <block-header />
    </template>
    <template #page-content>
      <nuxt-page />
    </template>
    <template #page-footer>
      <block-footer />
    </template>
  </v-layout>
</template>

<script setup>
  import BlockHeader from '@/components/Layouts/BlockHeader.vue';
  import BlockFooter from '@/components/Layouts/BlockFooter.vue';
</script>
