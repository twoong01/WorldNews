const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
const request = require('request');
const async = require('async');

let corsOptions = {
  origin: 'http://localhost:5173',
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());

require('dotenv').config({ path: './.env' });

app.post('/translate', async function (req, res) {
  const textArray = req.body.text;
  // console.log(req.body.source);
  async.map(
    textArray,
    (item, callback) => {
      // Translate each item in the array

      const api_url = 'https://openapi.naver.com/v1/papago/n2mt';
      const options = {
        url: api_url,
        form: { source: req.body.source, target: req.body.target, text: item.content },
        headers: {
          'X-Naver-Client-Id': process.env.CLIENT_ID,
          'X-Naver-Client-Secret': process.env.CLIENT_SECRET,
        },
      };

      request.post(options, (error, response, body) => {
        // console.log(error);
        // console.log(body);
        if (!error && response.statusCode == 200) {
          const translatedData = JSON.parse(body);
          item.translatedContent = translatedData.message.result.translatedText;
          callback(null, item);
        } else {
          callback(error);
        }
      });
    },
    (err, translatedArray) => {
      if (err) {
        res.status(500).send('Translation error');
      } else {
        res.json(translatedArray);
      }
    }
  );
});

app.listen(8080, () => {
  console.log('listening on 8080');
});
