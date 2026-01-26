export default defineNuxtRouteMiddleware((to) => {
    if (to.path === '/') {
        return navigateTo('/search', { redirectCode: 301 })
    }
});
