import React from 'react';
import { HomePageWrap } from '../../styles/StyleSheet';
import NewsCard from './NewsCard/NewsCard';
import Layout from '../co/Layout';

const HomePage = () => {
  return (
    <HomePageWrap>
      <Layout>
        <NewsCard />
      </Layout>
    </HomePageWrap>
  );
};

export default HomePage;
