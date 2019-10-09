import HomePage from './components/pages/HomePage';
import DynamicRoutePage from './components/pages/DynamicRoutePage';
import LoginPage from './components/pages/LoginPage';
import SidebarPage from './components/pages/SidebarPage';

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
    path: '/sidebar',
    component: SidebarPage,
  },
  {
    path: '/dynamic-route/blog/:blogId/post/:postId/',
    component: DynamicRoutePage,
  },
];
