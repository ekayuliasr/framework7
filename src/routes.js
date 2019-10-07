import HomePage from './components/pages/HomePage';
import DynamicRoutePage from './components/pages/DynamicRoutePage';
import LoginPage from './components/pages/LoginPage';

export default [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/login',
    component: LoginPage,
  },
  {
    path: '/dynamic-route/blog/:blogId/post/:postId/',
    component: DynamicRoutePage,
  },
];
