import { ChangeEvent, useEffect, useState } from 'react';
import style from './index.module.scss';
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
    <div className={style.block}>
      <div className={style.blockLocation}>
        <div className={style.blockLocation__label}>
          <label htmlFor='city'>City</label>
        </div>
        <input
          className={style.blockLocation__input}
          onChange={onChangeCityValue}
          value={cityName}
          id='city'
          placeholder='Enter city'
        />
        <button
          className={style.blockLocation__button}
          onClick={cityNameHandler}
          data-descr={'Search by location name'}>
          <IoMdSearch className={style.blockLocation__icon} />
        </button>
        <button
          className={style.blockLocation__button}
          onClick={getCurrentLocation}
          data-descr={'Determine my location'}>
          <FaLocationDot className={style.blockLocation__icon} />
        </button>
      </div>
    </div>
  );
};
