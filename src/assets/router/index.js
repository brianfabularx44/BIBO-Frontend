import { createRouter, createWebHistory } from 'vue-router';
import Login from '../../pages/Login.vue';
import Test from '../../pages/Test.vue';
import AdminDashboard from '../../pages/AdminDashboard.vue';
import UsersEvent from '../../pages/UsersEvent.vue';
import UsersHome from '../../pages/UsersHome.vue';
import Registration from '../../pages/Registration.vue';
import AdminEventDetails from  '../../pages/AdminEventDetails.vue';


const routes = [
  {
    path: '/home', 
    name: 'UsersHome',
    component: UsersHome, 
  },
  {
    path: '/event', 
    name: 'UsersEvent',
    component: UsersEvent,
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: { hideNav: true }
  },
  {
    path: '/registration',
    name: 'registration',
    component: Registration,
    meta: { hideNav: true }
  },
  {
    path: '/adminhome', 
    name: 'AdminHome',
    component: AdminDashboard,
  },
  {
    path: '/adminevent', 
    name: 'AdminEventDetails',
    component: AdminEventDetails,
  },
  {
    path: '/test', 
    name: 'test',
    component: Test,
    meta: { hideNav: true }
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

