
import axios from 'axios';

const API_KEY = '3f8501e64191058bbc51b2cdf290c47f';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

export const getWeatherData = async (city, country) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        q: `${city},${country}`,
        units: 'metric',
        appid: API_KEY,
      },
    });
    const { main, weather } = response.data;
    return {
      temperature: main.temp,
      description: weather[0].description,
    };
  } catch (error) {
    if (error.response) {
      console.error('Error fetching weather data', error.response.status, error.response.data);
    } else {
      console.error('Error fetching weather data', error.message);
    }
    return null;
  }
};


