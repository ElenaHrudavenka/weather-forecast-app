import React, { useEffect, useState } from 'react';
import s from './index.module.scss';
import { Weather } from '../Weather';
import { AppDispatch, AppRootStateType } from '../../../store/store';
import { getTokenTC } from '../../../store/reducers/appReducer';
import Header from '../Header';

export const Layout = () => {
  const dispatch = AppDispatch();

  // Получение токена для meteomatics.com
  useEffect(() => {
    dispatch(getTokenTC());
  }, []);

  return (
    <div className={s.layoutBlock}>
      <Header />
      <main className={s.layoutBlock__main}>
        <Weather />
      </main>
    </div>
  );
};
