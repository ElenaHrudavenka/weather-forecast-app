import style from './index.module.scss';

type CurrWeatherInfPropsType = {
  temperature?: number;
  windSpeed?: number;
  msl_pressure?: number;
  precip_1h?: number;
  t_max_2m_24h?: number;
};
const CurrWeatherInf = ({ temperature, windSpeed, msl_pressure, precip_1h, t_max_2m_24h }: CurrWeatherInfPropsType) => {
  return (
    <div className={style.currWeatherInfBlock}>
      <ul>
        <h3>Main weather indicators for today:</h3>
        <li>
          <span>Air Temperature:</span>
          <span className={style.currWeatherInfBlock_temperature} data-item={'C'}>
            {temperature}
          </span>
        </li>
        <li>
          <span>Wind Speed:</span>
          <span>
            {windSpeed} {` m/s`}
          </span>
        </li>
        <li>
          <span>Pressure:</span>
          <span>
            {msl_pressure}
            {` Pa`}
          </span>
        </li>
        <li>
          <span>Precipitation:</span>
          <span>
            {precip_1h}
            {` mm`}
          </span>
        </li>
        <li>
          <span>Maximum Temperature:</span>
          <span className={style.currWeatherInfBlock_temperature} data-item={'C'}>
            {t_max_2m_24h}
          </span>
        </li>
      </ul>
    </div>
  );
};

export default CurrWeatherInf;
