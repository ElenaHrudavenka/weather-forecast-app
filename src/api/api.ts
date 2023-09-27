//https://api.meteomatics.com/<validdatetime>/<parameters>/<location>/<format>?<optionals>

import { WeatherResponseType } from '../store/reducers/weatherReducer';
import { TokenResponseType } from '../store/reducers/appReducer';
import { getInitialTime } from '../services/getInitialTime';

const API_KEY = 'e30e635a317940f3ac501140e4c0f591';
const username = 'hrudavenka_hrudavenka';
const password = '1n8Oj6TZ5i';
let headers = new Headers();
headers.set('Authorization', 'Basic ' + btoa(username + ':' + password));
headers.set('Host', 'login.meteomatics.com');

export const AppAPI = {
  // Получаю токен для авторизации на meteomatics.com
  getToken() {
    return fetch('https://login.meteomatics.com/api/v1/token', {
      method: 'GET',
      credentials: 'include',
      headers: headers,
    })
      .then((res) => {
        if (!res.ok || res.status > 399) {
          throw new Error(`Ошибка при получении токена. Статус код ${res.status}`);
        }
        return res.json();
      })
      .then((data: TokenResponseType) => {
        return data;
      });
  },
  // Получаю данные о погоде
  getWeatherData(access_token: string, lat: number, lon: number) {
    const initialTime = getInitialTime();
    const requestParameters: Array<string> = [
      `t_2m:C`, // Instantaneous temperature at 2m above ground in degrees Celsius (C), kelvin (K) or degree Fahrenheit (F)
      `wind_speed_10m:ms`, // Instantaneous wind speed at 10m above ground
      `wind_dir_10m:d`, // Instantaneous wind direction at 10m above ground in degrees
      `msl_pressure:hPa`, // Mean sea level pressure in hectopascal (hPa) or pascal (Pa)
      `precip_1h:mm`, // Precipitation accumulated over the past hour in millimeter (equivalent to litres per square meter)
      //`precip_24h:mm`, // Precipitation accumulated over the past 24 hours in millimeter (equivalent to litres per square meter)
      `t_max_2m_24h:C`, // Maximum temperature at 2m height in the previous 24h, in degrees Celsius (C), kelvin (K) or degree Fahrenheit (F)
      //`t_min_2m_24h:C`, // Minimum temperature at 2m height in the previous 24h, in degrees Celsius (C), kelvin (K) or degree Fahrenheit (F)
      `weather_symbol_1h:idx`, // Weather symbol giving an overall impression of the weather state of the past hour. (see this sectionfor more information)
      //`weather_symbol_24h:idx`, //Weather symbol giving an overall impression of the weather state of the past 24 hours. (see this section for more information)
      `uv:idx`, //UV index
      `sunrise:sql`, //Sunrise
      `sunset:sql`, //Sunset
    ];
    return fetch(
      `https://api.meteomatics.com/${initialTime}P5D:PT24H/${requestParameters}/${lat},${lon}/json?access_token=${access_token}`,
      {
        method: 'GET',
        headers: headers,
      },
    )
      .then((res) => {
        if (!res.ok || res.status > 399) {
          throw new Error(`Ошибка при получении данных с сервера api.meteomatics.com! Статус код ${res.status}`);
        }
        return res.json();
      })
      .then((data: WeatherResponseType) => {
        return data;
      });
  },
  // Получаю информацио о населенном пункте по широте и долготе
  getCurrentLocation(lat: number, lon: number) {
    return fetch(`https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${lon}&apiKey=${API_KEY}`)
      .then((res) => {
        if (!res.ok || res.status > 399) {
          throw new Error(
            `Ошибка при получении местоположения по координатам с api.geoapify.com! Статус код ${res.status}`,
          );
        }
        return res.json();
      })
      .then((result) => {
        if (result.features.length) {
          return result;
        } else {
          console.log('Местоположение не определено.');
        }
      });
  },
  // Получаю информацию о населенном пункте по его названию
  getLocationOfCity(cityName: string) {
    return fetch(`https://api.geoapify.com/v1/geocode/search?text=${cityName}&format=json&apiKey=${API_KEY}`)
      .then((res) => {
        if (!res.ok || res.status > 399) {
          throw new Error('Ошибка при получении местоположения с api.geoapify.com!');
        }
        return res.json();
      })
      .then((result) => {
        return result;
      });
  },
};
