import HomePage from '../components/Home/HomePage';
import DetailPage from '../components/Detail/DetailPage';
import AboutPage from '../components/About/AboutPage';

const routes = [
  {
    path: '/',
    Component: HomePage,
  },
  {
    path: `/topheadlines/detail/:articleNum`,
    Component: DetailPage,
  },
  {
    path: '/about',
    Component: AboutPage,
  },
];

export default routes;
