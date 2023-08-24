import React from 'react';
import Header from './Header';
import { LayoutWrap, MainWrap } from '../../styles/StyleSheet';

const Layout = (props) => {
  return (
    <LayoutWrap>
      <Header />
      <MainWrap>{props.children}</MainWrap>
    </LayoutWrap>
  );
};

export default Layout;
