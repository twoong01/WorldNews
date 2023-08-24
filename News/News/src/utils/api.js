import { useDispatch } from 'react-redux';
import { setArticleList, setArticleTCList } from '../store/slices/articleSlice';
import axios from 'axios';

export const handleTranslate = () => {
  const translationData = {
    source: countryToLanguageMap[Country],
    target: 'ko',
    text: target,
  };
  fetch('http://localhost:8080/translate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
      'X-Naver-Client-Id': 'VA1Dqme8_ikTwNa4vpbO',
      'X-Naver-Client-Secret': 'tMWp1oPrXN',
    },
    body: JSON.stringify(translationData),
    mode: 'cors',
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => console.error(error));
};
