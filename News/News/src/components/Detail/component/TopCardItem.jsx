import React from 'react';
import { TopCardImg, TopCardItemWrap, TopCardTitle } from '../../../styles/StyleSheet';
import { useNavigate } from 'react-router-dom';

const TopCardItem = ({ value, index }) => {
  const navigate = useNavigate();
  return (
    <TopCardItemWrap
      onClick={() =>
        navigate(`/topheadlines/detail/${index}`, {
          state: { url: value.url, date: value.publishedAt },
        })
      }
    >
      <TopCardImg $url={value.urlToImage} />
      <TopCardTitle>{value.title}</TopCardTitle>
    </TopCardItemWrap>
  );
};

export default TopCardItem;
