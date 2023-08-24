import React, { useState, useEffect } from 'react';
import {
  HeaderWrap,
  TitleWrap,
  MenuWrap,
  MenuItem,
  LeftHeader,
  RightHeader,
  SearchBar,
  SearchImg,
  SearchInput,
} from '../../styles/StyleSheet';
import SearchIcon from '../../assets/SearchIcon.svg';

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
        <MenuWrap>
          <MenuItem>Category</MenuItem>
          <MenuItem>Pages</MenuItem>
          <MenuItem>Contact Us</MenuItem>
          <MenuItem>About Us</MenuItem>
        </MenuWrap>
      </LeftHeader>
      <RightHeader>
        <SearchBar>
          <SearchImg $img={SearchIcon} />
          <SearchInput placeholder="Search" />
        </SearchBar>
      </RightHeader>
    </HeaderWrap>
  );
};

export default Header;
