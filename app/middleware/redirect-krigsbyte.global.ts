export default defineNuxtRouteMiddleware((to, from) => {
    if (to.path === '/krigsbyte' || to.path === '/krigsbyte/') {
        return navigateTo('/krigsbyte/search')
    }
})
