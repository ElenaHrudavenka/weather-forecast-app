import React from 'react';
import s from './index.module.scss';
import WeatherIcon from '../../../../generic/WeatherIcon';
import { useNavigate } from 'react-router-dom';
import { PATH } from './../../../Layout/Routing/Routing';
import { AiFillInfoCircle } from 'react-icons/ai';
import { IconContext } from 'react-icons';

type CurrWeatherVisualPropsType = {
  city: string;
  temperature?: number;
  weather_symbol_1h?: number;
};

const CurrWeatherVisual = ({ city, temperature, weather_symbol_1h }: CurrWeatherVisualPropsType) => {
  const navigate = useNavigate();
  const onClickDescribe = () => {
    navigate(PATH.DESCRIPTION_CITY);
  };
  return (
    <div className={s.currWeatherVisualBlock}>
      <div
        onClick={onClickDescribe}
        className={s.currWeatherVisualBlock__cityDescr}
        data-descr={'Подробная информация о населенном пункте.'}>
        <IconContext.Provider value={{ color: `#33678E`, size: `100%` }}>
          <AiFillInfoCircle />
        </IconContext.Provider>
      </div>
      <h2 className={s.currWeatherVisualBlock__cityInf}>
        {`${city}   `}
        {temperature}
      </h2>
      <WeatherIcon weather_symbol_1h={weather_symbol_1h} color={'#DDA346'} size={'6rem'} />
    </div>
  );
};

export default CurrWeatherVisual;
