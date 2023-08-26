import React from 'react';
import { TopCardImg, TopCardItemWrap, TopCardTitle } from '../../../styles/StyleSheet';

const TopCardItem = ({value}) => {
  return(
    <TopCardItemWrap>
      <TopCardImg $url={value.urlToImage} />
      <TopCardTitle>{value.title}</TopCardTitle>
    </TopCardItemWrap>
  )
}

export default TopCardItem;