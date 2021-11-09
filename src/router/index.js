import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/auth',
    name: 'AuthLayout',
    component: () => import('@/views/layouts/Authentication'),
    children: [
      {
        path: "register",
        name: "register",
        component: () => import("@/components/auth/Register"),
      },
      {
        path: "login",
        name: "login",
        component: () => import("@/components/auth/Login"),
      }
    ]
  },
  {
    path: "/",
    component: () => import("@/views/layouts/Application"),
    children: [
      {
        path: "crops",
        name: "crops",
        component: () => import("@/components/app/crops/Index"),
      }
    ]
  }
];

const router = new VueRouter({
  routes
})

export default router
