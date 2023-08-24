import React from 'react';
import s from './index.module.scss';

type ForecastItemPropsType = {
  date: string;
  temperature: number;
};
export const ForecastItem = ({ date, temperature }: ForecastItemPropsType) => {
  return (
    <div className={s.ForecastItemBlock}>
      <span>{date}</span>
      <p>{temperature}</p>
    </div>
  );
};
