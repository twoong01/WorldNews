import React from 'react';
import { CurInfo } from '../../../styles/StyleSheet';
import { useSelector } from 'react-redux';
import { countryNames, categories } from '../../../utils/constans';
import HashTag from '../../co/HashTag';

const CurrentInfo = () => {
  const country = useSelector((state) => state.article.country);
  const category = useSelector((state) => state.article.category);
  return (
    <CurInfo>
      <HashTag
        tag={countryNames[country] ? countryNames[country] : country}
        state={'countryCode'}
      />
      {category !== null && (
        <HashTag
          tag={categories[category] ? categories[category] : category}
          state={'categoryCode'}
        />
      )}
    </CurInfo>
  );
};

export default CurrentInfo;
