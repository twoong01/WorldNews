import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { DropDown, MenuItem, MenuWrap } from "../../styles/StyleSheet";
import { categories } from "../../utils/constans";

const Menu = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  const country = useSelector((state) => state.article.country);
  const API_KEY = `21389cfb13fd4f64a1143c0bfed8aedd`;
  const handleDropDown = () => {
    setShowDropDown(!showDropDown);
  }
  const changeCategory = (category) => {
    axios
      .get(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${API_KEY}`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
  }
  return(
    <MenuWrap>
      <MenuItem>
        <div onClick={handleDropDown}>Category</div>
          {showDropDown && (
            <DropDown>
              {categories.map((category, index) => (
                <Link key={index} onClick={() => changeCategory(category)}>
                  {category}
                </Link>
              ))}
            </DropDown>
          )}
      </MenuItem>
      <MenuItem>Contact Us</MenuItem>
      <MenuItem>About Us</MenuItem>
    </MenuWrap>
  );
}

export default Menu;