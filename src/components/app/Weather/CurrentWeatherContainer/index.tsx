import React from 'react';
import { useSelector } from 'react-redux';
import { AppRootStateType } from '../../../../store/store';
import { CurrentWeather } from './CurrentWeather';

export const CurrentWeatherContainer = () => {
  const city = useSelector<AppRootStateType, string>((state) => state.location.city);
  //const temperature = useSelector<AppRootStateType, number>((state) => state.weather.data[0].coordinates[0].dates[0].value)
  const temperature = useSelector<AppRootStateType, number | undefined>(
    (state) => state.weather.data.find((item) => item.parameter == 't_2m:C')?.coordinates[0].dates[0].value,
  );
  const windSpeed = useSelector<AppRootStateType, number | undefined>(
    (state) => state.weather.data.find((item) => item.parameter == 'wind_speed_10m:ms')?.coordinates[0].dates[0].value,
  );
  const weather_symbol_1h = useSelector<AppRootStateType, number | undefined>(
    (state) =>
      state.weather.data.find((item) => item.parameter == 'weather_symbol_1h:idx')?.coordinates[0].dates[0].value,
  );
  return (
    <CurrentWeather city={city} temperature={temperature} windSpeed={windSpeed} weather_symbol_1h={weather_symbol_1h} />
  );
};
