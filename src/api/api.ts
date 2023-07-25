//https://api.meteomatics.com/<validdatetime>/<parameters>/<location>/<format>?<optionals>
const username = 'hrudavenka_hrudavenka';
const password = '1n8Oj6TZ5i';
let headers = new Headers();
headers.set('Authorization', 'Basic ' + btoa(username + ':' + password));

type getTokenResponseType = {
  access_token: string;
  token_type: string;
};
type getWeatherResponseType = {};
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
  async getWeatherData() {
    //headers.set('access_token', access_token);
    const validdatetime = new Date().toISOString();
    return fetch(`https://api.meteomatics.com/${validdatetime}P3D:PT12H/t_2m:C/53.07,23.10/json`, {
      method: 'GET',
      headers: headers,
    })
      .then((res) => res.json())
      .then((data: getWeatherResponseType) => {
        console.log(data);
        return data;
      });
  },
};
