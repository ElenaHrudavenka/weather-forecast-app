import React from 'react';
import s from './index.module.scss';
import { DatesItemType } from '../../../../../store/reducers/weatherReducer';
import { ForecastItem } from '../ForecastItem';
type NextFewDaysWeatherPropsType = {
  dates: Array<DatesItemType>;
  weather_symbol_1h?: number;
};
export const NextFewDaysWeather = ({ dates, weather_symbol_1h }: NextFewDaysWeatherPropsType) => {
  return (
    <div className={s.nextWeatherBlock}>
      {dates.map((item) => (
        <ForecastItem key={item.date} date={item.date} temperature={item.value} weather_symbol_1h={weather_symbol_1h} />
      ))}
    </div>
  );
};
