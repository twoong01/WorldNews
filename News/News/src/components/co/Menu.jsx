import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { DropDown, MenuItem, MenuWrap } from '../../styles/StyleSheet';
import { categories, countryNames } from '../../utils/constans';
import { setCountry, setCategory } from '../../store/slices/articleSlice';
import { useNavigate } from 'react-router-dom';

const Menu = ({ open }) => {
  const dispatch = useDispatch();
  const [dropDownState, setDropDownState] = useState({
    category: false,
    country: false,
  });
  const navigate = useNavigate();

  const country = useSelector((state) => state.article.country);
  const API_KEY = `21389cfb13fd4f64a1143c0bfed8aedd`;
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
  const changeCategory = (category) => {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${API_KEY}`
      )
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleCategory = (category) => {
    dispatch(setCategory(category));
    changeCategory(category);
  };

  return (
    <MenuWrap>
      <MenuItem>
        <div onClick={() => handleDropDown('category')}>Category</div>
        {dropDownState.category && (
          <DropDown>
            {Object.entries(categories).map(([category, displayName], index) => (
              <Link key={index} onClick={() => handleCategory(category)}>
                {displayName}
              </Link>
            ))}
          </DropDown>
        )}
      </MenuItem>
      <MenuItem>
        <div onClick={() => handleDropDown('country')}>Country</div>
        {dropDownState.country && (
          <DropDown>
            {Object.entries(countryNames).map(([countryCode, countryName], index) => (
              <div key={index} onClick={() => dispatch(setCountry(countryCode))}>
                {countryName}
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
