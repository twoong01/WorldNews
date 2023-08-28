import React from 'react';
import { useSelector } from 'react-redux';
import { NewsCardItemWrap, NewsCardList } from '../../../styles/StyleSheet';
import NewsCardItem from './NewsCardItem';
import CurrentInfo from './CurrentInfo';

const NewsCard = () => {
  const article_list = useSelector((state) => state.article.article_list);
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
