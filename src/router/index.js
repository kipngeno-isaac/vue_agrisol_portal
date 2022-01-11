import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/auth',
    name: 'auth',
    component: () => import('@/views/layouts/Authentication'),
    children: [
      {
        path: "/register",
        name: "register",
        component: () => import("@/components/auth/Register"),
      },
      {
        path: "/login",
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
        component: () => import("@/components/app/crops/Index")
      },
      {
        path: "add-crop",
        name: "add-crop",
        component: () => import("@/components/app/crops/Add")
      },
      {
        path: "crops/:id",
        name: "show-crop",
        component: () => import("@/components/app/crops/Show")
      },
      {
        path: "produce",
        name: "produce",
        component: () => import("@/components/app/produce/Index")
      },
      {
        path: "market",
        name: "market",
        component: () => import("@/components/app/market/Index")
      }
    ]
  }
];

const router = new VueRouter({
  routes
})

export default router
