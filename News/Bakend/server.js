const express = require('express');
const app = express();
const cors = require('cors');
const axios = require('axios');

let corsOptions = {
  origin: 'http://localhost:5173',
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());

require('dotenv').config({ path: './.env' });

// Express 엔드포인트
app.post('/translate', async (req, res) => {
  const options = {
    method: 'POST',
    url: 'https://ai-translate.p.rapidapi.com/translates',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': '3e13ce544amsh582435356ba1ee2p1486a2jsn919bd3c3b46c',
      'X-RapidAPI-Host': 'ai-translate.p.rapidapi.com',
    },
    data: {
      texts: [req.body.data.html],
      tls: ['ko'],
      sl: 'en',
    },
  };

  try {
    const response = await axios.request(options);
    res.send(response.data);
  } catch (error) {
    console.error(error);
  }
});

app.listen(8080, () => {
  console.log('listening on 8080');
});
