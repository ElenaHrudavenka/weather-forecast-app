import React, { useEffect } from 'react';
import s from './index.module.scss';
import { useSelector } from 'react-redux';
import { AppDispatch, AppRootStateType } from '../../../store/store';
import { CurrentWeatherContainer } from './CurrentWeatherContainer';
import { getWeatherDataTC } from '../../../store/reducers/weatherReducer';
import { NextFewDaysWeatherContainer } from './NextFewDaysWeatherContainer';

export const Weather = () => {
  const access_token = useSelector<AppRootStateType, string>((state) => state.app.access_token);
  const latitude = useSelector<AppRootStateType, number | null>((state) => state.location.latitude);
  const longitude = useSelector<AppRootStateType, number | null>((state) => state.location.longitude);
  const dispatch = AppDispatch();
  //Запрос погоды
  useEffect(() => {
    console.log(access_token);
    latitude && longitude && access_token && dispatch(getWeatherDataTC(access_token, latitude, longitude));
  }, [latitude, longitude, access_token, dispatch]);
  return (
    <div className={s.wrapper}>
      <CurrentWeatherContainer />
      <NextFewDaysWeatherContainer />
    </div>
  );
};
