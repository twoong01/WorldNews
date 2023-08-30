import React from 'react';
import { useSelector } from 'react-redux';
import { NewsCardItemWrap, NewsCardList } from '../../../styles/StyleSheet';
import NewsCardItem from './NewsCardItem';
import CurrentInfo from './CurrentInfo';

const NewsCard = () => {
  const article_list = useSelector((state) => state.article.article_list);
  const filteredArticleList = article_list.filter((value) => value.title !== null);

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
    </>
  );
};

export default NewsCard;
