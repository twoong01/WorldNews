import React from 'react';
import Header from './Header';
import { LayoutWrap, MainWrap } from '../../styles/StyleSheet';
import LoadingSpinner from './LoadingSpinner';
import { useSelector } from 'react-redux';

const Layout = (props) => {
  const isLoading = useSelector((state) => state.util.isLoading);
  return (
    <LayoutWrap>
      <Header />
      <MainWrap $isLoading={isLoading}>
        {isLoading ? <LoadingSpinner /> : props.children}
      </MainWrap>
    </LayoutWrap>
  );
};

export default Layout;
