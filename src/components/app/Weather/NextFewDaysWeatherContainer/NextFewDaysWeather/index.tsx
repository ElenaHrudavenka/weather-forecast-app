import React from 'react';
import s from './index.module.scss';
import { DatesItemType } from '../../../../../store/reducers/weatherReducer';
import { ForecastItem } from '../ForecastItem';
import { useSelector } from 'react-redux';
import { AppRootStateType } from '../../../../../store/store';
type NextFewDaysWeatherPropsType = {
  dates: Array<DatesItemType>;
  weather_symbol_1h?: number;
};
export const NextFewDaysWeather = ({ dates, weather_symbol_1h }: NextFewDaysWeatherPropsType) => {
  const weather_symbols = useSelector<AppRootStateType, Array<DatesItemType> | undefined>(
    (state) => state.weather.data.find((item) => item.parameter == 'weather_symbol_1h:idx')?.coordinates[0].dates,
  );
  return (
    <div className={s.nextWeatherBlock}>
      {dates.map((item, index) => {
        return (
          <ForecastItem
            key={item.date}
            date={item.date}
            temperature={item.value}
            weather_symbol_1h={weather_symbols ? weather_symbols[index].value : 0}
          />
        );
      })}
    </div>
  );
};
