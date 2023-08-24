import React from 'react';
import s from './index.module.scss';
import { IconContext } from 'react-icons';
import { WiCloudy, WiDayCloudy, WiDaySunny, WiDaySunnyOvercast, WiSnowflakeCold, WiRain, WiSnow } from 'react-icons/wi';
import { TbCloudQuestion } from 'react-icons/tb';
import { BsCloudRain } from 'react-icons/bs';

type CurrentWeatherPropsType = {
  city: string;
  temperature?: number;
  windSpeed?: number;
  weather_symbol_1h?: number;
};

type IconsType = {
  //idSymbol: number,
  description: string;
  icon: JSX.Element;
};

type SymbolsListType = {
  idSymbol: number;
  icon: IconsType;
};

const getIconElement = (symbol: number): Array<string | JSX.Element> => {
  if (symbol === 0) {
    return ['A weather code could not be determined', <TbCloudQuestion />];
  }
  if (symbol === 1) {
    return ['Clear sky', <WiDaySunny />];
  }
  if (symbol === 2) {
    return ['Light clouds', <WiDaySunnyOvercast />];
  }
  if (symbol === 3) {
    return ['Partly cloudy', <WiDayCloudy />];
  }
  if (symbol === 4) {
    return ['Cloudy', <WiCloudy />];
  }
  if (symbol === 5) {
    return ['Rain', <BsCloudRain />];
  }
  if (symbol === 6) {
    return ['Rain and snow / sleet', <WiSnow />];
  }
  if (symbol === 7) {
    return ['Snow', <WiSnowflakeCold />];
  }
  if (symbol === 8) {
    return ['Rain shower', <WiRain />];
  } else {
    return ['A weather code could not be determined', <TbCloudQuestion />];
  }
  /*    if (symbol === 9) {return ["Snow shower", </>]}
    if (symbol === 10) {return ["Sleet shower", </>]}
    if (symbol === 10) {return ["", </>]}*/
};

export const CurrentWeather = ({ city, temperature, windSpeed, weather_symbol_1h }: CurrentWeatherPropsType) => {
  const [icon_description, icon_el] = getIconElement(weather_symbol_1h ? weather_symbol_1h : 0);
  return (
    <div className={s.currentWeatherBlock}>
      <div className={s.currentWeatherBlockInform}>
        <h2>{city}</h2>
        <span>Temperature: {temperature}</span>
        <span>Wind: {windSpeed}</span>
      </div>
      <div className={s.currentWeatherBlockVisual}>
        <div className={s.currentWeatherBlockVisual_temperature}>{temperature}</div>
        <div className={s.currentWeatherBlockVisual_img}>
          <span>{icon_description}</span>
          <IconContext.Provider value={{ color: 'white', size: '6x' }}>{icon_el}</IconContext.Provider>
        </div>
      </div>
    </div>
  );
};
