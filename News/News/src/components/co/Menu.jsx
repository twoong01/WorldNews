import axios from 'axios';
import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DropDown, MenuItem, MenuWrap } from '../../styles/StyleSheet';
import { categories, countryNames } from '../../utils/constans';
import {
  setCountry,
  setCategory,
  setCategoryReset,
  setArticleList,
} from '../../store/slices/articleSlice';
import { useNavigate } from 'react-router-dom';
import { setIsLoading } from '../../store/slices/utilSlice';

const Menu = ({ open }) => {
  const dispatch = useDispatch();
  const [dropDownState, setDropDownState] = useState({
    category: false,
    country: false,
  });
  const navigate = useNavigate();

  const country = useSelector((state) => state.article.country);
  const API_KEY = import.meta.env.VITE_APP_NEWS_API_KEY;
  const handleDropDown = (menu) => {
    setDropDownState((prevState) => ({
      ...Object.keys(prevState).reduce(
        (acc, key) => ({
          ...acc,
          [key]: key === menu ? !prevState[key] : false,
        }),
        {}
      ),
    }));
  };
  const changeCategory = useCallback(async (category) => {
    dispatch(setIsLoading(true));
    await axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${API_KEY}`
      )
      .then((res) => {
        console.log(res.data);
        dispatch(setArticleList(res.data.articles));
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        dispatch(setIsLoading(false));
      });
  });
  const handleCategory = (category) => {
    navigate('/');
    dispatch(setCategory(category));
    changeCategory(category);
    setDropDownState({ country: false, category: false });
  };

  const changeCountry = (countryCode) => {
    navigate('/');
    dispatch(setCountry(countryCode));
    dispatch(setCategoryReset());
    setDropDownState({ country: false, category: false });
  };

  return (
    <MenuWrap>
      <MenuItem>
        <div onClick={() => handleDropDown('country')}>Country</div>
        {dropDownState.country && (
          <DropDown>
            {Object.entries(countryNames).map(([countryCode, countryName], index) => (
              <div key={index} onClick={() => changeCountry(countryCode)}>
                {countryName}
              </div>
            ))}
          </DropDown>
        )}
      </MenuItem>
      <MenuItem>
        <div onClick={() => handleDropDown('category')}>Category</div>
        {dropDownState.category && (
          <DropDown>
            {Object.entries(categories).map(([category, displayName], index) => (
              <div key={index} onClick={() => handleCategory(category)}>
                {displayName}
              </div>
            ))}
          </DropDown>
        )}
      </MenuItem>
      <MenuItem onClick={() => navigate('/about')}>About Us</MenuItem>
    </MenuWrap>
  );
};

export default Menu;
