// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    pageTransition: { name: 'page' },
    layoutTransition: { name: 'layout' },
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @import "@/assets/styles/global/colors.scss";
            @import "@/assets/styles/global/vars.scss";
            @import "@/assets/styles/global/mixins.scss";
          `,
        },
      },
    },
  },
  css: [{ src: '~/assets/styles/index.scss', lang: 'scss' }],
  modules: ['@nuxtjs/stylelint-module', '@nuxtjs/eslint-module', ['@pinia/nuxt', { disableVuex: false }], 'nuxt-icons'],
});
