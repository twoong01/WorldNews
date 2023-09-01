import styled, { keyframes } from 'styled-components';

// Header
export const HeaderWrap = styled.div`
  top: 0;
  width: 100%;
  left: 0;
  height: 75px;
  right: 0;
  color: ${(props) => (props.$scrolled ? 'white' : '#444649')};
  background-color: ${(props) =>
    props.$scrolled ? 'black' : ''}; /* 배경색 동적으로 변경 */
  font-weight: bold;
  display: flex;
  align-items: center;
  position: fixed; /* Header 고정 */
  z-index: 999; /* 다른 컴포넌트 위에 표시 */
  transition: background-color 0.3s ease; /* 배경색 변경을 부드럽게 애니메이션화 */
  @media (max-width: 768px) {
  }
`;

export const MenuButton = styled.div`
  display: none; // 초기에는 햄버거 아이콘 숨기기
  @media (max-width: 768px) {
    display: block; // 뷰포트 너비가 768px 이하일 때 햄버거 아이콘 보이기
    cursor: pointer;
  }
`;

export const TitleWrap = styled.h1`
  margin: 0;
  color: #fc4308;
  cursor: pointer;
`;

export const LeftHeader = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  margin-left: 30px;
`;
export const RightHeader = styled.div`
  margin-right: 30px;
`;
export const SearchBarWrap = styled.div`
  width: 400px;
  height: 48px;
  background-color: #f5f5f5;
  display: flex;
  align-items: center;
  border-radius: 12px;
  margin-right: 10px;
`;

export const SearchImg = styled.img.attrs((props) => ({
  src: props.$img,
}))`
  padding-left: 5px;
  padding-right: 5px;
`;

export const SearchInput = styled.input`
  background-color: transparent;
  border: none;
  outline: none;
  width: 100%;
  font-size: 20px;
  :focus {
    outline: none;
  }
`;

// Layout
export const LayoutWrap = styled.div``;
export const MainWrap = styled.main`
  width: 100%;
  height: 100%;
  padding-top: 50px;
`;

// Menu
export const MenuWrap = styled.nav`
  display: flex;
  justify-content: space-between;
  margin-left: 68px;
  @media (max-width: 768px) {
    display: ${(props) => (props.$open ? 'block' : 'none')};
    position: absolute;
    top: 100%; // 메뉴 아래에 배치
    background-color: white;
    width: 100%;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  }
`;
export const MenuItem = styled.div`
  font-size: 20px;
  padding-left: 68px;
  cursor: pointer;
  :hover {
    cursor: pointer;
  }
`;

export const DropDown = styled.div`
  position: absolute;
  top: 100%; /* Dropdown을 부모 요소 아래에 나타나도록 설정 */
  background-color: white; /* Dropdown 배경색 설정 */
  border: 1px solid #ccc;
  max-width: 200px; /* 최대 너비 설정 */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* 그림자 추가 */
  z-index: 1; /* 필요에 따라 z-index 설정 */
  display: flex;
  flex-direction: column;
  color: #444649;
  :hover {
    background-color: #ececec;
  }
`;

// HOME
export const HomePageWrap = styled.div``;

// NewsCard
export const NewsCardList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  @media (max-width: 1112px) {
    grid-template-columns: 1fr;
  }

  @media (min-width: 1112px) and (max-width: 1460px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1460px) and (max-width: 1704px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const NewsCardItemWrap = styled.div`
  margin-top: 20px;
  max-height: auto;
  display: inline-block; // 내부 요소의 크기에 맞추기 위함
  justify-self: center; // inline-block을 선언하고 grid의 중앙에 정렬하기 위함
`;

// Detail
export const TranslateBtn = styled.button`
  overflow: hidden;
  padding: 0;
  width: 120px;
  position: relative;
  border: none;
  font-weight: bold;
  border-radius: 10px;
  cursor: pointer;
  &.button--inverted {
    color: #fff;
  }

  &::before {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 120px;
    height: 42.19px;
    background: #fc4308;
    color: white;
    transform: translate3d(-100%, 0, 0);
    text-align: center;
  }

  > span {
    display: block;
    padding: 1em 2em;
  }

  &::before,
  > span {
    padding-top: 1em;
    transition: transform 0.3s;
    transition-timing-function: cubic-bezier(0.75, 0, 0.125, 1);
  }

  &:hover::before {
    transform: translate3d(0, 0, 0);
  }

  &:hover > span {
    transform: translate3d(0, 100%, 0);
  }
`;
// DetailPage
export const DetailWrap = styled.div``;

// DetailHeader
export const ArticleHeaderWrap = styled.div`
  margin-bottom: 2rem;
  border-bottom: 1px solid #dbdbdb;
`;

export const ArticleTitle = styled.div`
  font-size: 40px;
  font-weight: bold;
`;
export const DetailInfo = styled.p`
  padding-bottom: 1rem;
`;

export const ArticleAuthor = styled.span`
  border-right: 1px solid #dbdbdb;
  padding: 0 calc(1rem / 2);
`;
export const ArticleSite = styled.h2``;
export const ArticleTime = styled.span`
  color: #929294;
  border-right: 1px solid #dbdbdb;
  padding-right: calc(1rem / 2);
`;

export const ArticleImg = styled.img``;
export const ArticleContent = styled.div``;

// TopCard
export const TopCardWrap = styled.div`
  border-left: 1px solid #dbdbdb;
  margin-left: 1rem;
`;

// TopCardItem
export const TopCardItemWrap = styled.div`
  display: flex;
  flex-direction: row;
  width: 25rem;
  margin-bottom: 2rem;
  margin-left: 1rem;
`;

export const TopCardImg = styled.img.attrs((props) => ({
  src: props.$url,
}))`
  height: 5rem;
  margin-right: 1rem;
`;
export const TopCardTitle = styled.div`
  font-weight: bold;
`;

// CurrentInfo
export const CurInfo = styled.div`
  display: flex;
  padding: 0 1rem;
`;

export const CurrentCountry = styled.span`
  font-size: 25px;
  font-weight: bold;
`;
export const CurrentCategory = styled.span`
  font-size: 25px;
  font-weight: bold;
`;

// About
export const AboutTitle = styled.div`
  font-size: 30pt;
  font-weight: bold;
`;
export const AboutLine = styled.div`
  height: 4px;
  width: 70px;
  background: #444649;
  margin: 25px 0 100px 0;
  @media (max-width: 600px) {
    margin: 25px 0 70px 0;
  }
`;
export const AboutContent = styled.div`
  font-size: 30pt;
  font-weight: bold;
`;
export const AboutRefernce = styled.div`
  font-size: 30pt;
  font-weight: bold;
`;
export const AboutWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Icon = styled.img.attrs((props) => ({
  src: props.$url,
}))``;

export const ContentWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
  max-width: 205px;
`;
export const Info = styled.p`
  font-size: 12pt;
  text-align: center;
`;

export const IconName = styled.div`
  font-size: 18pt;
  font-weight: bold;
`;

export const ApiName = styled.div`
  font-size: 18pt;
  font-weight: bold;
  padding: 0 2rem;
`;

// HashTag
export const HashTagWrap = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid #fc4308;
  border-radius: 6px;
  color: white;
  background: #fc4308;
  font-size: 20pt;
  font-weight: bold;
  margin-right: 10px;
`;

// SearchPage
export const SearchPageWrap = styled.div``;
export const SearchMount = styled.h3`
  margin-left: 1rem;
  margin-bottom: 2rem;
`;

// LoadingSpinner
const slide = keyframes`
  0% {
    left: -7rem;
  }

  50% {
    left: calc(100% - 3rem);
  }

  100% {
    left: -7rem;
  }
`;

export const Loader = styled.div`
  width: 120px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 50%;
`;

export const Bubble = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #fc4308;
`;

const pulse = keyframes`
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: .25;
    transform: scale(.75);
  }
`;

export const PulsingBubble = styled(Bubble)`
  animation: ${pulse} 0.4s ease infinite alternate;
  &:nth-child(1) {
    animation-delay: 0s;
  }
  &:nth-child(2) {
    animation-delay: 0.2s;
  }
  &:nth-child(3) {
    animation-delay: 0.4s;
  }
`;
