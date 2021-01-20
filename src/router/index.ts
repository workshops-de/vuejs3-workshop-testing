import About from '@/views/About.vue';
import NotFound from '@/views/NotFound.vue';
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
const Books = () => import(/* webpackChunkName: "books" */ '@/views/Books.vue');
const BookList = () =>
  import(/* webpackChunkName: "books" */ '@/views/BookList.vue');
const BookDetail = () =>
  import(/* webpackChunkName: "books" */ '@/views/BookDetail.vue');
const BookEdit = () =>
  import(/* webpackChunkName: "books" */ '@/views/BookEdit.vue');
const BookNew = () =>
  import(/* webpackChunkName: "books" */ '@/views/BookNew.vue');
const InfoBox = () =>
  import(/* webpackChunkName: "info" */ '@/components/InfoBox.vue');

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/books'
  },
  {
    path: '/books',
    component: Books,
    children: [
      {
        path: '',
        name: 'Books',
        component: BookList
      },
      {
        path: 'create',
        name: 'BookNew',
        component: BookNew
      },
      {
        path: ':isbn',
        name: 'BookDetail',
        component: BookDetail
      },
      {
        path: ':isbn/edit',
        name: 'BookEdit',
        component: BookEdit
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/info-box',
    name: 'Info Box',
    component: InfoBox
  },
  {
    path: '/:pathMatch(.*)*',
    component: NotFound
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
