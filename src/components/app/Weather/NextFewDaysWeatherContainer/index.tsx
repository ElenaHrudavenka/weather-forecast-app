import React from 'react';
import { NextFewDaysWeather } from './NextFewDaysWeather';
import { useSelector } from 'react-redux';
import { AppRootStateType } from '../../../../store/store';
import { DatesItemType } from '../../../../store/reducers/weatherReducer';
import Loader from '../../../generic/Loader';

export const NextFewDaysWeatherContainer = () => {
  // const weatherData = useSelector<AppRootStateType, Array<WeatherDataType>>((state) => state.weather.data);
  const isLoading = useSelector<AppRootStateType, boolean>((state) => state.app.isLoading);
  const dates = useSelector<AppRootStateType, Array<DatesItemType>>(
    (state) => state.weather.data[0].coordinates[0].dates,
  );
  const weather_symbol_1h = useSelector<AppRootStateType, number | undefined>(
    (state) =>
      state.weather.data.find((item) => item.parameter == 'weather_symbol_1h:idx')?.coordinates[0].dates[0].value,
  );
  return <>{isLoading ? <Loader /> : <NextFewDaysWeather dates={dates} weather_symbol_1h={weather_symbol_1h} />}</>;
};
