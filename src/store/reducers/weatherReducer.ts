import { AppThunkType } from '../store';
import { AppAPI } from '../../api/api';
import { setIsLoading } from './appReducer';

type WeatherActionType = ReturnType<typeof setWeatherData>;

export type DatesItemType = {
  date: string;
  value: number;
};

export type WeatherDataType = {
  parameter: string;
  coordinates: [
    {
      dates: [DatesItemType];
      lat: number;
      lon: number;
    },
  ];
};

export type WeatherResponseType = {
  data: Array<WeatherDataType>;
  dateGenerated: string;
  status: string;
  user: string;
  version: string;
};

const initialState: WeatherResponseType = {
  data: [
    {
      parameter: '',
      coordinates: [
        {
          dates: [
            {
              date: '',
              value: 0,
            },
          ],
          lat: 0,
          lon: 0,
        },
      ],
    },
  ],
  dateGenerated: '',
  status: '',
  user: '',
  version: '',
};

export const weatherReducer = (state = initialState, action: WeatherActionType) => {
  switch (action.type) {
    case 'WEATHER/SET-WEATHER': {
      return {
        ...state,
        data: action.weatherData.data,
        dateGenerated: action.weatherData.dateGenerated,
        status: action.weatherData.status,
        user: action.weatherData.user,
        version: action.weatherData.version,
      };
    }
    default:
      return state;
  }
};
const setWeatherData = (weatherData: WeatherResponseType) => ({ type: 'WEATHER/SET-WEATHER', weatherData } as const);

export const getWeatherDataTC =
  (access_token: string, lat: number, lon: number): AppThunkType =>
  (dispatch) => {
    dispatch(setIsLoading(true));
    AppAPI.getWeatherData(access_token, lat, lon)
      .then((resData) => {
        dispatch(setWeatherData(resData));
        /*                    console.log('Data:');
                    console.dir(resData);*/
      })
      .catch((e) => console.log(e))
      .finally(() => {
        dispatch(setIsLoading(true));
      });
  };
