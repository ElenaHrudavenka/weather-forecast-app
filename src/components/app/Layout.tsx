import React from 'react';
import s from '../app/Layout.module.scss';
import Location from '../location/Location'
import Weather from "../weather/Weather";

export const Layout = () => {
  return (
    <>
      <header>Weather Dashboard</header>
      <main className={s.mainBlock}>
          <Location/>
          <Weather/>
      </main>
      <footer className={s.footerBlock}>
        <span>Here will be a description.</span>
      </footer>
    </>
  );
};
