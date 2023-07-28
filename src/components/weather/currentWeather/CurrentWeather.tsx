import React from 'react';
import s from './CurrentWeather.module.scss'
type CurrentWeatherPropsType = {
    city: string,
    temperature: number,
}
const CurrentWeather = ({city, temperature}:CurrentWeatherPropsType) => {
    return (
        <div className={s.currentWeatherBlock}>
            <div className={s.currentWeatherBlockInform}>
                <h2>{city}</h2>
                <span>Temperature: {temperature}</span>
                <span>Wind:</span>

            </div>
            <div className={s.currentWeatherBlockVisual}></div>
        </div>
    );
};

export default CurrentWeather;