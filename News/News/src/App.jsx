import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const apiKey = '21389cfb13fd4f64a1143c0bfed8aedd';
  const [topHeadlinesData, setTopHeadlinesData] = useState(null);
  const [Country, setCountry] = useState('us');
  const countryList = [
    'ae',
    'ar',
    'at',
    'au',
    'be',
    'bg',
    'br',
    'ca',
    'ch',
    'cn',
    'co',
    'cu',
    'cz',
    'de',
    'eg',
    'fr',
    'gb',
    'gr',
    'hk',
    'hu',
    'id',
    'ie',
    'il',
    'in',
    'it',
    'jp',
    'kr',
    'lt',
    'lv',
    'ma',
    'mx',
    'my',
    'ng',
    'nl',
    'no',
    'nz',
    'ph',
    'pl',
    'pt',
    'ro',
    'rs',
    'ru',
    'sa',
    'se',
    'sg',
    'si',
    'sk',
    'th',
    'tr',
    'tw',
    'ua',
    'us',
    've',
    'za',
  ];
  useEffect(() => {
    const config1 = {
      headers: {
        'X-Api-Key': apiKey,
      },
      params: {
        country: Country,
      },
    };

    // To query /v2/top-headlines
    axios
      .get(`https://newsapi.org/v2/top-headlines`, config1)
      .then((response) => {
        console.log('Top Headlines:', response.data);
        setTopHeadlinesData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });

    const config2 = {
      headers: {
        'X-Api-Key': apiKey,
      },
      params: {
        q: 'tesla',
        language: 'en',
      },
    };

    axios
      .get('https://newsapi.org/v2/everything', config2)
      .then((res) => {
        console.log('All :', res);
      })
      .catch((err) => {
        console.log('Error fetching data:', err);
      });
  }, [Country]);

  return (
    <div className="App">
      <select value={Country} onChange={(e) => setCountry(e.target.value)}>
        {countryList.map((country, index) => (
          <option value={country} key={index}>
            {country}
          </option>
        ))}
      </select>
      {topHeadlinesData && (
        <div>
          <h2>Top Headlines:</h2>
          <pre>{JSON.stringify(topHeadlinesData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default App;
