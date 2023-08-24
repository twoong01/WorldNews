import HomePage from '../components/Home/HomePage';
import DetailPage from '../components/Detail/DetailPage';

const routes = [
  {
    path: '/',
    Component: HomePage,
  },
  {
    path: `/topheadlines/detail/:articleNum`,
    Component: DetailPage,
  },
];

export default routes;
