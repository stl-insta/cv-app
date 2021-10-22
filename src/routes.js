import Home from './views/Home.vue'
import CV from './views/CV.vue'
import NotFound from './views/NotFound.vue'

/** @type {import('vue-router').RouterOptions['routes']} */
export let routes = [
  { path: '/', component: Home, meta: { title: `CV's app` } },
  { path: '/cv', component: CV, meta: { title: 'List CV' } },
  { path: '/:path(.*)', component: NotFound },
]
