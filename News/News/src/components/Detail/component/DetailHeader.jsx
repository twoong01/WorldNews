import React from 'react';
import {
  ArticleAuthor,
  ArticleHeaderWrap,
  ArticleSite,
  ArticleTime,
  ArticleTitle,
  DetailInfo,
} from '../../../styles/StyleSheet';

const DetailHeader = ({ data, date }) => {
  return (
    <ArticleHeaderWrap>
      <ArticleSite>{data.siteName}</ArticleSite>
      <ArticleTitle>{data.title}</ArticleTitle>
      <DetailInfo>
        <ArticleTime>{date.slice(0, 10)}</ArticleTime>
        <ArticleAuthor>{data.author ? data.author : '익명'}</ArticleAuthor>
      </DetailInfo>
    </ArticleHeaderWrap>
  );
};

export default DetailHeader;
