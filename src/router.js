import Vue from "vue";
import Router from "vue-router";
// Lazy loading for component and chunkalize
const HomePage = () => import("@/components/HomePage");
const Contact = () => import("@/components/Contact");
Vue.use(Router);

const router = new Router({
  mode: "hash",
  routes: [
    {
      path: "/homepage",
      name: "homepage",
      component: HomePage
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact
    }
  ]
});

export default router;
