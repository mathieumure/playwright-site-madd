import type { RouterConfig } from '@nuxt/schema'

// https://router.vuejs.org/api/interfaces/routeroptions.html
export default <RouterConfig> {
    routes: (_routes) => [
        {
            name: 'x',
            path: '/agents/-1',
            component: () => import('~/pages/agents/x.vue').then(r => r.default || r)
        },
        ..._routes
    ],
}
