import Vue from "vue";
import VueRouter from "vue-router";
import Signup from "../components/Signup.vue";
// import Signin from "../components/Signin.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Signup",
    component: Signup,
  },
  {
    path: "/Signin",
    name: "Signin",
    component: () => import ('../components/Signin.vue')
  }
  // {
  //   // path: "/about",
  //   // name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   // component: () =>
  //   //   import(/* webpackChunkName: "about" */ "../views/About.vue"),
  // },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
