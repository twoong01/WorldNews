import React from 'react';
import { useSelector } from 'react-redux';
import { TopCardWrap } from '../../../styles/StyleSheet';
import TopCardItem from './TopCardItem';

const TopCard = () => {
  const topArticles = useSelector((state) => state.top.article_list);
  
  return(
    <TopCardWrap>
        {topArticles.map((value, index) => (
          <TopCardItem key={index} value={value} />
        ))}
    </TopCardWrap>
  );
}

export default TopCard;