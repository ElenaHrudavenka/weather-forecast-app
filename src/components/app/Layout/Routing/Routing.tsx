import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from '../index';
import CityDescription from '../../LocationContainer/CityDescription';

export const PATH = {
  WEATHER: '/weather-forecast-app/',
  DESCRIPTION_CITY: '/weather-forecast-app/city',
};

const Routing = () => {
  return (
    <Routes>
      <Route path={PATH.DESCRIPTION_CITY} element={<CityDescription />}>
        <Route path={':city'} element={<CityDescription />} />
      </Route>
      <Route path={PATH.WEATHER} element={<Layout />} />
    </Routes>
  );
};

export default Routing;
