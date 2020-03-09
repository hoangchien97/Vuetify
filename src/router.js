import Vue from "vue";
import Router from "vue-router";
// Lazy loading for component and chunkalize
const HomePage = () => import("@/components/HomePage");
const Contact = () => import("@/components/Contact");
const User = () => import("@/components/user/_id");
const ProductDetail = () => import("@/components/ProductDetail");
const ListEmployees = () => import("@/components/Employees/index");
const Learning = () => import("@/components/Learning");
const StyleAndAnimation = () => import("@/components/StyleAndAnimation/index");
const Color = () => import("@/components/StyleAndAnimation/Color");
const BlockQuote = () => import("@/components/StyleAndAnimation/BlockQuote");
const Transition = () => import("@/components/StyleAndAnimation/Transition");
const TodoList = () => import("@/components/StyleAndAnimation/TodoList");
const UIComponent = () => import("@/components/UIComponent/index");
const CardActions = () => import("@/components/UIComponent/CardActions");
const Steppers = () => import("@/components/UIComponent/Steppers");
const FormControls = () => import("@/components/Forms/index");
const VComplete = () => import("@/components/Forms/VComplete");
const Checkbox = () => import("@/components/Forms/Checkbox");
Vue.use(Router);

const router = new Router({
  mode: "history",
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
    },
    {
      path: "/learning",
      name: "Learning",
      component: Learning
    },
    {
      path: "/style-animation",
      name: "StyleAndAnimation",
      component: StyleAndAnimation,
      props: true,
      children: [
        {
          path: "color",
          name: "Color",
          component: Color
        },
        {
          path: "blockquote",
          name: "BlockQuote",
          component: BlockQuote
        },
        {
          path: "/transition",
          name: "Transition",
          component: Transition
        },
        {
          path: "/todo-list",
          name: "TodoList",
          component: TodoList
        }
      ]
    },
    {
      path: "/ui-component",
      name: "UIComponent",
      component: UIComponent,
      children: [
        {
          path: "card-actions",
          name: "CardActions",
          component: CardActions
        },
        {
          path: "steppers",
          name: "Steppers",
          component: Steppers
        }
      ]
    },
    {
      path: "/form-controls",
      name: "FormControls",
      component: FormControls,
      children: [
        {
          path: "v-complete",
          name: "VComplete",
          component: VComplete
        },
        {
          path: "checkbox",
          name: "Checkbox",
          component: Checkbox
        }
      ]
    }
  ]
});

export default router;
