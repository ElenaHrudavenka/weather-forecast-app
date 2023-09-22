import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from '../index';
import CityDescription from '../../LocationContainer/CityDescription';

export const PATH = {
  WEATHER: '/',
  DESCRIPTION_CITY: '/city',
};

const Routing = () => {
  return (
    <Routes>
      <Route path={PATH.DESCRIPTION_CITY} element={<CityDescription />} />
      <Route path={PATH.WEATHER} element={<Layout />}></Route>
    </Routes>
  );
};

export default Routing;
