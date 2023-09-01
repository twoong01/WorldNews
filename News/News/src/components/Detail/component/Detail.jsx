import axios from 'axios';
import React, { useEffect, useState, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { ArticleContent, TranslateBtn } from '../../../styles/StyleSheet';
import DetailHeader from './DetailHeader';
import { useDispatch } from 'react-redux';
import LoadingSpinner from '../../co/LoadingSpinner';
import translateimg from '../../../assets/translate.png';

const Detail = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const url = location.state.url;
  const date = location.state.date;
  const [data, setData] = useState(null);
  const [translatedData, setTranslatedData] = useState({
    texts: null,
    isTranslated: false,
  });
  const fetchData = useCallback(async (url) => {
    const option1 = {
      params: {
        url,
        js_timeout: 30,
        media: true,
      },
      headers: {
        'X-RapidAPI-Key': '3e13ce544amsh582435356ba1ee2p1486a2jsn919bd3c3b46c',
        'X-RapidAPI-Host': 'lexper.p.rapidapi.com',
      },
    };

    await axios
      .get('https://lexper.p.rapidapi.com/v1.1/extract', option1)
      .then((res) => {
        setData(res.data.article);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  const translate = useCallback(async () => {
    const option = {
      data: {
        html: data.html,
      },
    };
    await axios
      .post('http://localhost:8080/translate', option)
      .then((res) => {
        setTranslatedData({
          isTranslated: true,
          texts: res.data[0].texts,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [data, dispatch]);

  useEffect(() => {
    if (data === null) {
      fetchData(url);
    }
  }, []);
  return (
    <>
      {data && !translatedData.isTranslated && (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <DetailHeader data={data} date={date} />
          <TranslateBtn onClick={translate} data-text={'번역'}>
            <span>Translate</span>
          </TranslateBtn>
          <ArticleContent dangerouslySetInnerHTML={{ __html: data.html }} />
        </div>
      )}
      {translatedData.isTranslated && (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <DetailHeader data={data} date={date} />
          <ArticleContent dangerouslySetInnerHTML={{ __html: translatedData.texts }} />
        </div>
      )}
      {data === null && !translatedData.isTranslated && <LoadingSpinner />}
    </>
  );
};

export default Detail;
