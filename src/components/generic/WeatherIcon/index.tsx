import React from 'react';
import { IconContext } from 'react-icons';
import s from './index.module.scss';
import { getIconElement } from '../../../services/getIconElement';

type WeatherIconPropsType = {
  weather_symbol_1h?: number;
  color?: string;
  size?: string;
};

const WeatherIcon = ({ weather_symbol_1h, color = '#DDA346', size = '4rem' }: WeatherIconPropsType) => {
  const [icon_description, icon_el] = getIconElement(weather_symbol_1h ? weather_symbol_1h : 0);
  return (
    <div className={s.iconBox} data-descr={icon_description}>
      <IconContext.Provider value={{ color: `${color}`, size: `${size}` }}>{icon_el}</IconContext.Provider>
    </div>
  );
};

export default WeatherIcon;
