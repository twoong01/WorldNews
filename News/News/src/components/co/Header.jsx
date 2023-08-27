import React, { useEffect, useState } from 'react';
import {
  HeaderWrap,
  LeftHeader,
  RightHeader,
  TitleWrap,
  MenuButton,
} from '../../styles/StyleSheet';
import Menu from './Menu';
import SearchBar from './SearchBar';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

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

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    console.log(menuOpen);
  };

  return (
    <HeaderWrap $scrolled={scrolled}>
      <LeftHeader>
        <TitleWrap onClick={() => navigate('/')}>BREAKING.news</TitleWrap>
        <MenuButton onClick={toggleMenu}>
          <span>&#9776;</span>
        </MenuButton>
        <Menu />
      </LeftHeader>
      <RightHeader>
        <SearchBar />
      </RightHeader>
    </HeaderWrap>
  );
};

export default Header;
