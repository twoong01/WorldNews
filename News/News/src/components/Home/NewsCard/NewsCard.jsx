import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setArticleList, setArticleTCList } from '../../../store/slices/articleSlice';
import { setTopArticle } from '../../../store/slices/topSlice';
import { NewsCardItemWrap, NewsCardList } from '../../../styles/StyleSheet';
import NewsCardItem from './NewsCardItem';
import CurrentInfo from './CurrentInfo';

const NewsCard = () => {
  const apiKey = '21389cfb13fd4f64a1143c0bfed8aedd';
  const country = useSelector((state) => state.article.country);
  const article_list = useSelector((state) => state.article.article_list);
  const dispatch = useDispatch();
  useEffect(() => {
    const config1 = {
      headers: {
        'X-Api-Key': apiKey,
      },
      params: {
        country: country,
      },
    };

    // 헤드라인 30개 api
    axios
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
      });
  }, [country]);

  return (
    <>
      <CurrentInfo />
      <NewsCardList>
        {article_list &&
          article_list.map((value, index) => (
            <NewsCardItemWrap key={index}>
              <NewsCardItem key={index} value={value} articleNum={index} />
            </NewsCardItemWrap>
          ))}
      </NewsCardList>
    </>
  );
};

export default NewsCard;
