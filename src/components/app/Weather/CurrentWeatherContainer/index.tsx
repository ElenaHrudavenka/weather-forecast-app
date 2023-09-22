import React from 'react';
import { useSelector } from 'react-redux';
import { AppRootStateType } from '../../../../store/store';
import s from './index.module.scss';
import CurrWeatherVisual from './CurrWeatherVisual';
import CurrWeatherInf from './CurrWeatherInf';
import CurrWeatherSun from './CurrWeatherSun';

export const CurrentWeatherContainer = () => {
  const city = useSelector<AppRootStateType, string>((state) => state.location.city);
  const temperature = useSelector<AppRootStateType, number | undefined>(
    (state) => state.weather.data.find((item) => item.parameter == 't_2m:C')?.coordinates[0].dates[0].value,
  );

  const windSpeed = useSelector<AppRootStateType, number | undefined>(
    (state) => state.weather.data.find((item) => item.parameter == 'wind_speed_10m:ms')?.coordinates[0].dates[0].value,
  );

  const weather_symbol_1h = useSelector<AppRootStateType, number | undefined>(
    (state) =>
      state.weather.data.find((item) => item.parameter == 'weather_symbol_1h:idx')?.coordinates[0].dates[0].value,
  );

  const msl_pressure = useSelector<AppRootStateType, number | undefined>(
    (state) => state.weather.data.find((item) => item.parameter == 'msl_pressure:hPa')?.coordinates[0].dates[0].value,
  );
  const precip_1h = useSelector<AppRootStateType, number | undefined>(
    (state) => state.weather.data.find((item) => item.parameter == 'precip_1h:mm')?.coordinates[0].dates[0].value,
  );
  const t_max_2m_24h = useSelector<AppRootStateType, number | undefined>(
    (state) => state.weather.data.find((item) => item.parameter == 't_max_2m_24h:C')?.coordinates[0].dates[0].value,
  );
  const sunrise = useSelector<AppRootStateType, any>(
    (state) => state.weather.data.find((item) => item.parameter == 'sunrise:sql')?.coordinates[0].dates[0].value,
  );
  const sunset = useSelector<AppRootStateType, any>(
    (state) => state.weather.data.find((item) => item.parameter == 'sunset:sql')?.coordinates[0].dates[0].value,
  );
  const uv = useSelector<AppRootStateType, number | undefined>(
    (state) => state.weather.data.find((item) => item.parameter == 'uv:idx')?.coordinates[0].dates[0].value,
  );

  return (
    <div className={s.currentWeatherBlock}>
      <CurrWeatherVisual city={city} temperature={temperature} weather_symbol_1h={weather_symbol_1h} />
      <CurrWeatherInf
        temperature={temperature}
        windSpeed={windSpeed}
        msl_pressure={msl_pressure}
        precip_1h={precip_1h}
        t_max_2m_24h={t_max_2m_24h}
      />
      <CurrWeatherSun sunrise={sunrise} sunset={sunset} uv={uv} />
    </div>
  );
};
