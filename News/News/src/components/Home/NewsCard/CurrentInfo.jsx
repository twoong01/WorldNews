import React from 'react';
import { CurrentCategory, CurInfo, CurrentCountry } from '../../../styles/StyleSheet';
import { useSelector } from 'react-redux';
import { countryNames, categories } from '../../../utils/constans';

const CurrentInfo = () => {
  const country = useSelector((state) => state.article.country);
  const category = useSelector((state) => state.article.category);
  return (
    <CurInfo>
      <CurrentCountry>국가 : {countryNames[country]}</CurrentCountry>
      <CurrentCategory>구분 : {categories[category]}</CurrentCategory>
    </CurInfo>
  );
};

export default CurrentInfo;
