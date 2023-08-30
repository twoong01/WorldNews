import React from 'react';
import { SearchPageWrap, SearchMount } from '../../styles/StyleSheet';
import NewsCard from './NewsCard/NewsCard';
import Layout from '../co/Layout';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

const SearchedPage = () => {
  const articles = useSelector((state) => state.article.article_list);
  const location = useLocation();
  const keyword = location.state.keyword;
  return (
    <SearchPageWrap>
      <Layout>
        <div>
          <SearchMount>
            "{keyword}"관련 기사 {articles.length}건이 검색되었습니다.
          </SearchMount>
          <NewsCard />
        </div>
      </Layout>
    </SearchPageWrap>
  );
};

export default SearchedPage;
