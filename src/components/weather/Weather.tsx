import React, {useEffect} from 'react';
import s from './Weather.module.scss'
import {useSelector} from "react-redux";
import {AppDispatch, AppRootStateType} from "../../store/store";
import CurrentWeatherContainer from './currentWeather/CurrentWeatherContainer';
import {getTokenTC} from "../../store/reducers/appReducer";
import { getWeatherDataTC } from '../../store/reducers/weatherReducer';
import NextFewDaysWeather from "./nextFewDaysWeather/NextFewDaysWeather";
import NextFewDaysWeatherContainer from "./nextFewDaysWeather/NextFewDaysWeatherContainer";
const Weather = () => {
    const access_token = useSelector<AppRootStateType, string>((state) => state.app.access_token);
    const dispatch = AppDispatch();

    useEffect(() => {
        dispatch(getTokenTC());
    }, []);

    useEffect(() => {
        dispatch(getWeatherDataTC(access_token));
    }, [access_token, dispatch]);
    return (
        <div className={s.wrapper}>
            <CurrentWeatherContainer/>
            <NextFewDaysWeatherContainer/>
        </div>
    );
};

export default Weather;