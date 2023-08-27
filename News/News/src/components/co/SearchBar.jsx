import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import SearchIcon from '../../assets/SearchIcon.svg';
import { setArticleList } from "../../store/slices/articleSlice";
import { SearchBarWrap, SearchImg, SearchInput } from "../../styles/StyleSheet";

const SearchBar = () => {
  const [value, setValue] = useState(null);
  const API_KEY = '21389cfb13fd4f64a1143c0bfed8aedd'
  const curDate = new Date();
  const dispatch = useDispatch();

  const SearchFetch = () => {
    axios
      .get(`https://newsapi.org/v2/everything?q=${value}&from=${curDate}&sortBy=publishedAt&apiKey=${API_KEY}`)
      .then((res) => {
        dispatch(setArticleList(res.data.articles));
        setValue(null);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      SearchFetch(); // 엔터 키를 누르면 검색 실행
    }
  };


  return(
    <SearchBarWrap>
          <SearchImg $img={SearchIcon} onClick={SearchFetch} />
          <SearchInput placeholder="Search" value={value} onChange={(e) => setValue(e.target.value)} onKeyDown={handleKeyPress} />
    </SearchBarWrap>
  );
}

export default SearchBar;