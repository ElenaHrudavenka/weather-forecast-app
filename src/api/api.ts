//https://api.meteomatics.com/<validdatetime>/<parameters>/<location>/<format>?<optionals>
import {WeatherResponseType} from "../store/reducers/weatherReducer";

const username = 'hrudavenka_hrudavenka';
const password = '1n8Oj6TZ5i';
let headers = new Headers();
headers.set('Authorization', 'Basic ' + btoa(username + ':' + password));
type getTokenResponseType = {
  access_token: string;
  token_type: string;
};

export const AppAPI = {
  getToken() {
    return fetch('https://login.meteomatics.com/api/v1/token', {
      method: 'GET',
      headers: headers,
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Error');
        }
        return res.json();
      })
      .then((data: getTokenResponseType) => {
        return data;
      });
  },
  getWeatherData(access_token: string) {
    const validdatetime = new Date().toISOString();
    const requestParameters: Array<string> = [
        `t_2m:C`, // Instantaneous temperature at 2m above ground in degrees Celsius (C), kelvin (K) or degree Fahrenheit (F)
        `wind_speed_10m:ms`, // Instantaneous wind speed at 10m above ground
        `wind_dir_10m:d`, // Instantaneous wind direction at 10m above ground in degrees
        `msl_pressure:hPa`, // Mean sea level pressure in hectopascal (hPa) or pascal (Pa)
        `precip_1h:mm`, // Precipitation accumulated over the past hour in millimeter (equivalent to litres per square meter)
        //`precip_24h:mm`, // Precipitation accumulated over the past 24 hours in millimeter (equivalent to litres per square meter)
        `t_max_2m_24h:C`, // Maximum temperature at 2m height in the previous 24h, in degrees Celsius (C), kelvin (K) or degree Fahrenheit (F)
        `t_min_2m_24h:C`, // Minimum temperature at 2m height in the previous 24h, in degrees Celsius (C), kelvin (K) or degree Fahrenheit (F)
        //`weather_symbol_1h:idx`, // Weather symbol giving an overall impression of the weather state of the past hour. (see this sectionfor more information)
        //`weather_symbol_24h:idx`, //Weather symbol giving an overall impression of the weather state of the past 24 hours. (see this section for more information)
        `uv:idx`, //UV index
        `sunrise:sql`, //Sunrise
        `sunset:sql`, //Sunset
    ]
    return fetch(`https://api.meteomatics.com/${validdatetime}P4D:PT24H/${requestParameters}/53.07,23.10/json?access_token=${access_token}`, {
      method: 'GET',
      headers: headers,
    })
      .then((res) => res.json())
      .then((data: WeatherResponseType) => {
        return data;
      });
  },
  getCurrentLocation(lat: number,lon: number) {
      const API_KEY = 'e30e635a317940f3ac501140e4c0f591'
      return fetch(`https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${lon}&apiKey=${API_KEY}`)
          .then(response => response.json())
          .then(result => {
              if (result.features.length) {
                  return result;
                  //console.log(result.features[0].properties.formatted);
              } else {
                  console.log("No address found");
              }
          })
          .catch((error)=>{
              console.log(error)
          });
  }
};
