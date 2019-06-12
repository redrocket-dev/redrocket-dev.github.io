import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/career",
      name: "career",
      component: () =>
        import(/* webpackChunkName: "career" */ "./views/Career.vue")
    },
    {
      path: "/campusfund",
      name: "campusfund",
      component: () =>
        import(/* webpackChunkName: "campusfund" */ "./views/Campusfund.vue")
    },
    {
      path: "/faq",
      name: "faq",
      component: () => import(/* webpackChunkName: "faq" */ "./views/FAQ.vue")
    }
  ]
});
