import React from 'react';
import { SearchPageWrap } from '../../styles/StyleSheet';
import NewsCard from './NewsCard/NewsCard';
import Layout from '../co/Layout';

const SearchedPage = () => {
  return (
    <SearchPageWrap>
      <Layout>
        <NewsCard />
      </Layout>
    </SearchPageWrap>
  );
};

export default SearchedPage;
