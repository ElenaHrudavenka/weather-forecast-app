import React, { ChangeEvent, useEffect, useState } from 'react';
import s from './index.module.scss';
import { AppDispatch } from '../../../../store/store';
import { getCityLocation } from '../../../../store/reducers/locationReducer';
import { FaLocationDot } from 'react-icons/fa6';
import { IoMdSearch } from 'react-icons/io';

type LocationProps = {
  getCurrentLocation: () => void;
  latitude: number | null;
  longitude: number | null;
  city: string;
};
export const Location = ({ getCurrentLocation, latitude, longitude, city }: LocationProps) => {
  const [cityName, setCityName] = useState<string>(city);
  const dispatch = AppDispatch();

  useEffect(() => {
    getCurrentLocation();
  }, []);

  const onChangeCityValue = (e: ChangeEvent<HTMLInputElement>) => {
    setCityName(e.currentTarget.value);
  };
  const cityNameHandler = () => {
    dispatch(getCityLocation(cityName));
  };
  return (
    <div className={s.block}>
      <div className={s.blockLocation}>
        <div className={s.blockLocation__label}>
          <label htmlFor='city'>Город</label>
        </div>
        <input
          className={s.blockLocation__input}
          onChange={onChangeCityValue}
          value={cityName}
          id='city'
          placeholder='Введите город'
        />
        <button
          className={s.blockLocation__button}
          onClick={cityNameHandler}
          data-descr={'Искать по названию населенного пункта'}>
          <IoMdSearch className={s.blockLocation__icon} />
        </button>
        <button
          className={s.blockLocation__button}
          onClick={getCurrentLocation}
          data-descr={'Определить мое местоположение'}>
          <FaLocationDot className={s.blockLocation__icon} />
        </button>
      </div>
    </div>
  );
};
