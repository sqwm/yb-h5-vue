import Vue from 'vue';
import Router from 'vue-router';

const Home = () => import('@/views/Home.vue');
const Mine = () => import('@/views/Mine.vue');
const Register = () => import('@/views/Register.vue');
const Login = () => import('@/views/Login.vue');
const UserDetail = () => import('@/views/UserDetail');

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta: { level: 1, isTab: true, title: '首页' },
    },
    {
      path: '/mine',
      name: 'mine',
      component: Mine,
      meta: { level: 1, isTab: true, title: '我的' },
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      meta: { level: 2, title: '注册' },
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: { level: 1, title: '登录' },
    },
    {
      path: '/userDetail',
      name: 'userDetail',
      component: UserDetail,
      meta: { level: 3, title: '个人信息' },
    },
  ],
});
