import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import s from './App.module.scss';
import { Layout } from './components/app/Layout';
import { AppDispatch, AppRootStateType } from './store/store';
import { getTokenTC, getWeatherDataTC } from './store/reducers/appReducer';

function App() {
  const access_token = useSelector<AppRootStateType, string>((state) => state.app.access_token);
  const dispatch = AppDispatch();

  useEffect(() => {
    dispatch(getTokenTC());
  }, []);

  useEffect(() => {
    dispatch(getWeatherDataTC(access_token));
  }, [access_token, dispatch]);
  return (
    <div className={s.App}>
      <Layout />
    </div>
  );
}

export default App;
