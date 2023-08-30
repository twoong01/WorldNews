import React from 'react';
import { HashTagWrap } from '../../styles/StyleSheet';
import { setCountryReset, setCategoryReset } from '../../store/slices/articleSlice';
import { useDispatch } from 'react-redux';

const HashTag = ({ tag, state }) => {
  const dispatch = useDispatch();
  const handleHashTag = (state) => {
    if (state === 'countryCode') {
      dispatch(setCountryReset());
    } else if (state === 'categoryCode') {
      dispatch(setCategoryReset());
    }
  };
  return <HashTagWrap onClick={() => handleHashTag(state)}>#{tag}</HashTagWrap>;
};

export default HashTag;
