import React from 'react';
import s from './index.module.scss';
import { useNavigate, useParams } from 'react-router-dom';
import { PATH } from '../../Layout/Routing/Routing';
import Header from '../../Header';

const CityDescription = () => {
  const navigate = useNavigate();
  const { city } = useParams();
  const onClickNavigateMain = () => {
    navigate(PATH.WEATHER);
  };

  return (
    <div className={s.cityDescriptionBlock}>
      <Header />
      <div className={s.cityDescriptionBlock__wrapper}>
        <div className={s.cityDescriptionBlock__wrapper_list}>
          <ul>
            <h2>{`Информация о городе ${city}`}</h2>
            <li>
              <span>Страна:</span>
              <span>страна</span>
            </li>
            <li>
              <span>Старое название:</span>
              <span>старое название</span>
            </li>
            <li>
              <span>Почтовый код:</span>
              <span>код</span>
            </li>
            <li>
              <span>Широта:</span>
              <span>широта</span>
            </li>
            <li>
              <span>Долгота:</span>
              <span>долгота</span>
            </li>
          </ul>
          <button onClick={onClickNavigateMain}>На главную</button>
        </div>
      </div>
    </div>
  );
};

export default CityDescription;
