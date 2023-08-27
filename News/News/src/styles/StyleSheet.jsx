import styled from 'styled-components';

// Header
export const HeaderWrap = styled.div`
  top: 0;
  width: 100%;
  left: 0;
  height: 75px;
  right: 0;
  color: ${(props) => (props.$scrolled ? 'white' : 'black')};
  background-color: ${(props) =>
    props.$scrolled ? 'black' : ''}; /* 배경색 동적으로 변경 */
  font-weight: bold;
  display: flex;
  align-items: center;
  position: fixed; /* Header 고정 */
  z-index: 999; /* 다른 컴포넌트 위에 표시 */
  transition: background-color 0.3s ease; /* 배경색 변경을 부드럽게 애니메이션화 */
`;

export const TitleWrap = styled.h1`
  margin: 0;
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
  padding-top: 120px;
`;

// Menu
export const MenuWrap = styled.nav`
  display: flex;
  justify-content: space-between;
  margin-left: 68px;
`;
export const MenuItem = styled.div`
  font-size: 20px;
  padding-left: 68px;
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
  src: props.$url
}))`
  height: 5rem;
  margin-right: 1rem;
`;
export const TopCardTitle = styled.div`
  font-weight: bold;
`;