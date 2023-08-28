import HomePage from '../components/Home/HomePage';
import DetailPage from '../components/Detail/DetailPage';
import AboutPage from '../components/About/AboutPage';
import SearchedPage from '../components/Home/SearchedPage';

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
  {
    path: '/search/:content',
    Component: SearchedPage,
  },
];

export default routes;
