import React from 'react';
import { BsFillSunriseFill, BsFillSunsetFill } from 'react-icons/bs';
import s from './index.module.scss';
import { getTime } from '../../../../../services/getTime';
import { GiSundial } from 'react-icons/gi';
import { IconContext } from 'react-icons';

type CurrWeatherSunPropsType = {
  sunrise?: string;
  sunset?: string;
  uv?: number;
};

const CurrWeatherSun = ({ sunrise, sunset, uv }: CurrWeatherSunPropsType) => {
  const timeSunrise = sunrise && getTime(sunrise);
  const timeSunset = sunset && getTime(sunset);

  return (
    <div className={s.currWeatherSunBlock}>
      <div className={s.currWeatherSunBlock__item} data-descr='Рассвет'>
        <IconContext.Provider value={{ color: '#DDA346', size: `2.5rem` }}>
          <BsFillSunriseFill />
        </IconContext.Provider>
        <span>{timeSunrise}</span>
      </div>
      <div className={s.currWeatherSunBlock__item} data-descr='Закат'>
        <IconContext.Provider value={{ color: '#DDA346', size: `2.5rem` }}>
          <BsFillSunsetFill />
        </IconContext.Provider>
        <span>{timeSunset}</span>
      </div>
      <div className={s.currWeatherSunBlock__item} data-descr='UV-активность'>
        <IconContext.Provider value={{ color: '#DDA346', size: `2.5rem` }}>
          <GiSundial />
        </IconContext.Provider>
        <span>{uv}</span>
      </div>
    </div>
  );
};

export default CurrWeatherSun;
