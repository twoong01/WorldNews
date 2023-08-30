import React, { useCallback, useEffect } from 'react';
import { HomePageWrap } from '../../styles/StyleSheet';
import NewsCard from './NewsCard/NewsCard';
import Layout from '../co/Layout';
import { useSelector, useDispatch } from 'react-redux';
import {
  setCategory,
  setArticleList,
  setArticleTCList,
} from '../../store/slices/articleSlice';
import { setTopArticle } from '../../store/slices/topSlice';
import axios from 'axios';
import { setIsLoading } from '../../store/slices/utilSlice';

const HomePage = () => {
  const apiKey = import.meta.env.VITE_APP_NEWS_API_KEY;
  const country = useSelector((state) => state.article.country);
  const category = useSelector((state) => state.article.category);
  const dispatch = useDispatch();

  const fetchData = useCallback(async () => {
    if (category === null) {
      dispatch(setIsLoading(true));
      dispatch(setCategory(null));
      const config1 = {
        headers: {
          'X-Api-Key': apiKey,
        },
        params: {
          country: country,
        },
      };

      // 헤드라인 30개 api
      await axios
        .get(`https://newsapi.org/v2/top-headlines`, config1)
        .then((response) => {
          console.log('Top Headlines:', response.data);
          dispatch(setArticleList(response.data.articles));
          const extractData = response.data.articles.map((article) => ({
            title: article.title,
            content: article.content,
          }));
          dispatch(setArticleTCList(extractData));
          dispatch(setTopArticle(response.data.articles.slice(0, 3)));
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        })
        .finally(() => {
          dispatch(setIsLoading(false));
        });
    }
  }, [country, category, dispatch]);
  useEffect(() => {
    fetchData();
  }, [country, category]);

  return (
    <HomePageWrap>
      <Layout>
        <NewsCard />
      </Layout>
    </HomePageWrap>
  );
};

export default HomePage;
