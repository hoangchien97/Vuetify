import Vue from "vue";
import Router from "vue-router";
// Lazy loading for component and chunkalize
const Login = () => import("@/components/Login");
const Dashboard = () => import("@/components/Dashboard");
import store from './store/index'
Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Dashboard",
      component: Dashboard,
      meta: { requiresAuth: true }
    },
    {
      path: "/login",
      name: "Login",
      component: Login
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      return {
        selector: to.hash
      }
    }
    return {
      x: 0,
      y: 0
    }
  },
});
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLogged) {
      next()
      return
    }
    next('/login')
  } else {
    next()
  }
})
export default router

