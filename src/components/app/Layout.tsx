import React from 'react';
import s from '../app/Layout.module.scss';
import Weather from "../weather/Weather";
import LocationContainer from "../location/LocationContainer";

export const Layout = () => {
  return (
    <>
      <header>Weather Dashboard</header>
      <main className={s.mainBlock}>
          <LocationContainer/>
          <Weather/>
      </main>
      <footer className={s.footerBlock}>
        <span>Here will be a description.</span>
      </footer>
    </>
  );
};
