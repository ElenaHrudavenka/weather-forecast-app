import React from 'react';
import s from './index.module.scss';

type CurrWeatherInfPropsType = {
  temperature?: number;
  windSpeed?: number;
  msl_pressure?: number;
  precip_1h?: number;
  t_max_2m_24h?: number;
};
const CurrWeatherInf = ({ temperature, windSpeed, msl_pressure, precip_1h, t_max_2m_24h }: CurrWeatherInfPropsType) => {
  return (
    <div className={s.currWeatherInfBlock}>
      <ul>
        <h3>Основные показатели на сегодня:</h3>
        <li>
          <span>Температура воздуха:</span>
          <span className={s.currWeatherInfBlock_temperature} data-item={'C'}>
            {temperature}
          </span>
        </li>
        <li>
          <span>Скорость ветра:</span>
          <span>
            {windSpeed} {` м/с`}
          </span>
        </li>
        <li>
          <span>Давление: </span>
          <span>
            {msl_pressure}
            {` Па`}
          </span>
        </li>
        <li>
          <span>Количество осадков:</span>
          <span>
            {precip_1h}
            {` мм`}
          </span>
        </li>
        <li>
          <span>Максимальная температура:</span>
          <span className={s.currWeatherInfBlock_temperature} data-item={'C'}>
            {t_max_2m_24h}
          </span>
        </li>
      </ul>
    </div>
  );
};

export default CurrWeatherInf;
