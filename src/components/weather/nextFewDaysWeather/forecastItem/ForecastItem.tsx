import React from 'react';
import s from './ForecastItem.module.scss'

type ForecastItemPropsType = {
    date: string,
    temperature: number,
}
const ForecastItem = ({date, temperature}: ForecastItemPropsType) => {
    return (
        <div className={s.ForecastItemBlock}>
            <span>{date}</span>
            <p>{temperature}</p>
        </div>
    );
};

export default ForecastItem;