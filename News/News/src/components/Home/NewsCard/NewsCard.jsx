import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { NewsCardItemWrap, NewsCardList } from '../../../styles/StyleSheet';
import NewsCardItem from './NewsCardItem';
import CurrentInfo from './CurrentInfo';
import axios from 'axios';

const NewsCard = () => {
  const article_list = useSelector((state) => state.article.article_list);
  const filteredArticleList = article_list.filter((value) => value.title !== null);

  const translate = useCallback(async () => {
    axios
      .post('http://localhost:8080/translate', {})
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <CurrentInfo />
      <NewsCardList>
        {filteredArticleList &&
          filteredArticleList.map((value, index) => (
            <NewsCardItemWrap key={index}>
              <NewsCardItem key={index} value={value} articleNum={index} />
            </NewsCardItemWrap>
          ))}
      </NewsCardList>
      <button onClick={translate}>번역</button>
    </>
  );
};

export default NewsCard;
