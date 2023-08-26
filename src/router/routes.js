const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/IndexPage.vue') }],
  },
  {
    path: '/stopwatch',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/StopWatchPage.vue') },
    ],
  },
  {
    path: '/countdown',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/CountDownPage.vue') },
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
