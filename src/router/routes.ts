import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('pages/IndexPage.vue'),
      },
      {
        path: 'project/:id',
        name: 'project',
        component: () => import('pages/ProjectPage.vue'),
      },
      {
        path: 'admin/sign-in',
        name: 'sign-in',
        component: () => import('pages/admin/SignInPage.vue'),
      },
    ],
  },

  {
    path: '/admin',
    component: () => import('layouts/AdminLayout.vue'),
    children: [
      {
        path: 'home',
        name: 'admin',
        component: () => import('pages/admin/HomePage.vue'),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
