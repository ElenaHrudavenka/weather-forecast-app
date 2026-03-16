import style from './index.module.scss';
import WeatherIcon from '../../../../generic/WeatherIcon';
import { getDate } from '../../../../../services/getDate';

type ForecastItemPropsType = {
  date: string;
  temperature: number;
  weather_symbol_1h?: number;
};
export const ForecastItem = ({ date, temperature, weather_symbol_1h }: ForecastItemPropsType) => {
  const dateStr = getDate(date);
  if (!dateStr) {
    return <div>No Data</div>;
  }
  return (
    <div className={style.ForecastItemBlock}>
      <div className={style.ForecastItemBlock__frame}>
        <h3>{dateStr}</h3>
        <WeatherIcon weather_symbol_1h={weather_symbol_1h} />
        <p>{temperature}</p>
      </div>
    </div>
  );
};
