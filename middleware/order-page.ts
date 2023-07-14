// eslint-disable-next-line consistent-return
export default defineNuxtRouteMiddleware(() => {
  if (!useCookie('order-page-access').value) {
    return navigateTo('/');
  }
});
