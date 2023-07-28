import React from 'react';
import s from './NextFewDaysWeather.module.scss'
import {DatesItemType, WeatherDataType} from "../../../store/reducers/weatherReducer";
import ForecastItem from "./forecastItem/ForecastItem";
type NextFewDaysWeatherPropsType = {
    weatherData: Array<WeatherDataType>,
    dates: Array<DatesItemType>,
}
const NextFewDaysWeather = ({weatherData, dates}: NextFewDaysWeatherPropsType) => {
    return (
        <div className={s.nextWeatherBlock}>
            {dates.map(item => <ForecastItem key = {item.date} date={item.date} temperature={item.value}/>)}
        </div>
    );
};

export default NextFewDaysWeather;