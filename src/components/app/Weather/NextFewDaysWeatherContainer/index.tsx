import React from 'react';
import { NextFewDaysWeather } from './NextFewDaysWeather';
import { useSelector } from 'react-redux';
import { AppRootStateType } from '../../../../store/store';
import { DatesItemType, WeatherDataType } from '../../../../store/reducers/weatherReducer';

export const NextFewDaysWeatherContainer = () => {
  const weatherData = useSelector<AppRootStateType, Array<WeatherDataType>>((state) => state.weather.data);
  const dates = useSelector<AppRootStateType, Array<DatesItemType>>(
    (state) => state.weather.data[0].coordinates[0].dates,
  );
  return <NextFewDaysWeather weatherData={weatherData} dates={dates} />;
};
