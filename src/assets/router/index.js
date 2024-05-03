import { createRouter, createWebHistory } from 'vue-router';
import Login from '../../pages/Login.vue';
import Test from '../../pages/Test.vue';
import UsersEventGallery from '../../pages/UsersEventGallery.vue';
import UsersHome from '../../pages/UsersHome.vue';
import Registration from '../../pages/Registration.vue';
import AdminDashboard from '../../pages/AdminDashboard.vue';
import AdminEventDetails from  '../../pages/AdminEventDetails.vue';
import AdminEventGallery from '../../pages/AdminEventGallery.vue';
import EventManagement from '../../pages/EventManagement.vue';

const isAdmin = () => { 
  return true; 
};

const routes = [
  {
    path: '/', 
    name: 'UsersHome',
    component: UsersHome, 
  },
  {
    path: '/gallery', 
    name: 'UsersEventGallery',
    component: UsersEventGallery,
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
    path: '/admin', 
    name: 'AdminHome',
    component: AdminDashboard, 
    meta: { isAdmin: true, hideNav: true }
  },
  {
    path: '/adminevent',
    name: 'AdminEventDetails',
    component: AdminEventDetails,
    meta: { isAdmin: true, hideNav: true } 
  },
  {
    path: '/admingallery',
    name: 'AdminEventGallery',
    component: AdminEventGallery,
    meta: { isAdmin: true, hideNav: true } 
  },
  {
    path: '/test', 
    name: 'test',
    component: Test,
    meta: { hideNav: true }
  },
  {
    path: '/eventmanagement', 
    name: 'EventManagement',
    component: EventManagement,
    meta: { hideNav: true }
  },
];


const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

