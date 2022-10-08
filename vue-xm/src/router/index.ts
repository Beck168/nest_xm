/*
 * @Author: beck
 * @Description:
 * @Date: 2022-10-06 11:28:11
 * @LastEditTime: 2022-10-08 13:21:10
 * @FilePath: \项目nestjs_vue_ts\vue-xm\src\router\index.ts
 */
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/home/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("@/views/about/AboutView.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("@/views/login/LoginView.vue"),
    },
  ],
});
router.beforeEach((to, from) => {
  const token = localStorage.getItem("token");
  if (!token && to.name !== "login") {
    return { name: "login" };
  }
  return true;
});

export default router;
