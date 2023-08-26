import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ArticleContent, ArticleImg } from '../../../styles/StyleSheet';
import DetailHeader from './DetailHeader';

const Detail = () => {
  const location = useLocation();
  const url = location.state.url;
  const date = location.state.date;
  const [data, setData] = useState(null);
  const fetchData = async (url) => {
    const options = {
      method: 'POST',
      url: 'https://magicapi-article-extraction.p.rapidapi.com/extract',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': 'b6eb25c754msh58d58aa9e10e52fp193e92jsnf059808792b3',
        'X-RapidAPI-Host': 'magicapi-article-extraction.p.rapidapi.com',
      },
      data: {
        url,
      },
    };

    try {
      const response = await axios.request(options);
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData(url);
  }, [url]);
  console.log(data);
  return (
    <>
      {data && (
        <div style={{ display: 'flex', flexDirection: 'column'}}>
          <DetailHeader data={data} date={date} />
          <ArticleImg src={data.topImage} />
          <ArticleContent dangerouslySetInnerHTML={{ __html: data.html }} />
        </div>
      )}
    </>
  );
};

export default Detail;
