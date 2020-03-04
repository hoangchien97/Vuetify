import Vue from "vue";
import Router from "vue-router";
// Lazy loading for component and chunkalize
const HomePage = () => import("@/components/HomePage");
const Contact = () => import("@/components/Contact");
const User = () => import("@/components/user/_id");
const ProductDetail = () => import("@/components/ProductDetail");
const ListEmployees = () => import("@/components/Employees/index");
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
    },
    {
      path: "/user/:username",
      name: "profile",
      component: User
    },
    {
      path: "/products/:id",
      name: "ProductDetail",
      component: ProductDetail,
      props: true
    },
    {
      path: "/employees",
      name: "ListEmployees",
      component: ListEmployees
    }
  ]
});

export default router;
