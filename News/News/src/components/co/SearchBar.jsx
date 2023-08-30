import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import SearchIcon from '../../assets/SearchIcon.svg';
import { setArticleList, setCategory, setCountry } from '../../store/slices/articleSlice';
import { SearchBarWrap, SearchImg, SearchInput } from '../../styles/StyleSheet';
import { useNavigate } from 'react-router-dom';
import { setIsLoading } from '../../store/slices/utilSlice';

const SearchBar = () => {
  const [value, setValue] = useState(null);
  const API_KEY = '21389cfb13fd4f64a1143c0bfed8aedd';
  const curDate = new Date();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const SearchFetch = async () => {
    dispatch(setIsLoading(true));
    await axios
      .get(
        `https://newsapi.org/v2/everything?q=${value}&from=${curDate}&sortBy=publishedAt&apiKey=${API_KEY}`
      )
      .then((res) => {
        console.log(res.data);
        navigate(`/search/${value}`, { state: { keyword: value } });
        dispatch(setCategory(value));
        dispatch(setCountry('전 세계'));
        dispatch(setArticleList(res.data.articles));
        setValue(null);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        dispatch(setIsLoading(false));
      });
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      SearchFetch(); // 엔터 키를 누르면 검색 실행
      setValue(null);
    }
  };

  return (
    <SearchBarWrap>
      <SearchImg
        $img={SearchIcon}
        onClick={() => {
          SearchFetch();
          setValue(null);
        }}
      />
      <SearchInput
        placeholder="Search"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyPress}
      />
    </SearchBarWrap>
  );
};

export default SearchBar;
