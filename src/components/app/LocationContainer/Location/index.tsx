import React, { ChangeEvent, useState } from 'react';
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
  // useEffect(() => {

  // })
  const changeCityValue = (e: ChangeEvent<HTMLInputElement>) => {
    setCityName(e.currentTarget.value);
  };
  const cityNameHandler = () => {
    dispatch(getCityLocation(cityName));
  };
  return (
    <div className={s.block}>
      <div className={s.blockLocation}>
        <label>
          City
          <input onChange={changeCityValue} value={cityName} />
        </label>
        <button onClick={cityNameHandler}>
          <IoMdSearch className={s.icon} />
        </button>
        <button onClick={getCurrentLocation}>
          <FaLocationDot className={s.icon} />
        </button>
      </div>
    </div>
  );
};
