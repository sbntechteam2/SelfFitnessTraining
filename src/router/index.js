import { createRouter, createWebHistory } from 'vue-router'
import Form from "../views/Form.vue"
import AdminLogin from "../views/AdminLogin.vue"
import AdminLogs from "../views/AdminLogs.vue"
import SessionEnd from "../views/SessionEnd.vue"
import SubmitSuccess from "../views/SubmitSuccess.vue"


const routes = [
  {
    path: '/',
    name: 'Form',
    component: Form
  },
  {
    path: '/AdminLogin',
    name: 'AdminLogin',
    component: AdminLogin
  },
  {
    path: '/AdminLogs',
    name: 'AdminLogs',
    component: AdminLogs
  },
  {
    path: '/SessionEnd',
    name: 'SessionEnd',
    component: SessionEnd,
  },
  {
    path: '/SubmitSuccess',
    name: 'SubmitSuccess',
    component: SubmitSuccess,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
