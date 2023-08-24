import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const NewsCardItem = ({ value, articleNum }) => {
  const handleTranslate = () => {
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

  const navigate = useNavigate();

  const navigateNewPage = () => {
    navigate(`/topheadlines/detail/${articleNum}`, {
      state: { url: value.url, date: value.publishedAt },
    });
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea
        onClick={() => {
          navigateNewPage();
        }}
      >
        <CardMedia
          component="img"
          height="140px"
          image={value.urlToImage}
          alt="이미지 없음"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {value.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {value.publishedAt.slice(0, 10)}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default NewsCardItem;
