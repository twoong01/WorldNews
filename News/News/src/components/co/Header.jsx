import React, { useEffect, useState } from 'react';
import {
  HeaderWrap,
  LeftHeader,
  RightHeader,
  TitleWrap,
} from '../../styles/StyleSheet';
import Menu from './Menu';
import SearchBar from './SearchBar';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        // 특정 스크롤 위치를 넘어섰을 때
        setScrolled(true); // 스크롤 클래스 추가
      } else {
        setScrolled(false); // 스크롤 클래스 제거
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <HeaderWrap $scrolled={scrolled}>
      <LeftHeader>
        <TitleWrap>BREAKING.news</TitleWrap>
        <Menu />
      </LeftHeader>
      <RightHeader>
        <SearchBar />
      </RightHeader>
    </HeaderWrap>
  );
};

export default Header;
