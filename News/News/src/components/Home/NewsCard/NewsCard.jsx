import React, { useState, useEffect, useCallback } from 'react';
import NewsCardItem from './NewsCardItem';
import { countryList, countryToLanguageMap } from '../../../utils/constans.js';
import { setArticleTCList } from '../../../store/slices/articleSlice';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { NewsCardItemWrap, NewsCardList } from '../../../styles/StyleSheet';

const NewsCard = () => {
  const apiKey = '21389cfb13fd4f64a1143c0bfed8aedd';
  const [country, setCountry] = useState('us');
  const dispatch = useDispatch();
  const [article_list, setArticleList] = useState(null);
  useEffect(() => {
    const config1 = {
      headers: {
        'X-Api-Key': apiKey,
      },
      params: {
        country: country,
      },
    };

    // To query /v2/top-headlines
    axios
      .get(`https://newsapi.org/v2/top-headlines`, config1)
      .then((response) => {
        console.log('Top Headlines:', response.data);
        setArticleList(response.data.articles);
        const extractData = response.data.articles.map((article) => ({
          title: article.title,
          content: article.content,
        }));
        dispatch(setArticleTCList(extractData));
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [country]);

  return (
    <>
      <select value={country} onChange={(e) => setCountry(e.target.value)}>
        {countryList.map((countryName, index) => (
          <option value={countryName} key={index}>
            {countryName}
          </option>
        ))}
      </select>
      <NewsCardList>
        {article_list &&
          article_list.map((value, index) => (
            <NewsCardItemWrap key={index}>
              <NewsCardItem key={index} value={value} articleNum={index} />
            </NewsCardItemWrap>
          ))}
      </NewsCardList>
    </>
  );
};

export default NewsCard;
