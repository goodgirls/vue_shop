import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../components/Login.vue";
import Home from "../components/Home.vue";
import Welcome from "../components/Welcome.vue";
import User from "../components/user/User.vue";
import Rights from "../components/power/Rights.vue";
import Roles from "../components/power/Roles.vue";
import Cate from "../components/goods/Cate.vue";
import Params from "../components/goods/Params.vue";
import List from "../components/goods/List.vue";
import Add from "../components/goods/Add.vue";
import Order from "../components/order/Order.vue";
import Report1 from "../components/report/Report1.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      // 路由重定向
      path: "/",
      redirect: "/login",
    },

    {
      path: "/login",
      component: Login,
    },
    {
      path: "/home",
      component: Home,
      redirect: "/welcome",
      children: [
        {
          path: "/welcome",
          component: Welcome,
        },
        {
          path: "/users",
          component: User,
        },
        {
          path: "/rights",
          component: Rights,
        },
        {
          path: "/roles",
          component: Roles,
        },
        {
          path: "/categories",
          component: Cate,
        },
        {
          path: "/params",
          component: Params,
        },
        {
          path: "/goods",
          component: List,
        },
        {
          path: "/goods/add",
          component: Add,
        },
        {
          path: "/orders",
          component: Order,
        },
        {
          path: "/reports",
          component: Report1,
        },
      ],
    },
  ],
});

// 挂在路由导航守卫
router.beforeEach((to, from, next) => {
  if (to.path === "/login") return next();
  if (!window.sessionStorage.getItem("token")) return next("login");
  next();
});

export default router;
