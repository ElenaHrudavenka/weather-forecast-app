import React, { useEffect } from 'react';
import { Location } from './Location';
import { useSelector } from 'react-redux';
import { AppDispatch, AppRootStateType } from '../../../store/store';
import { getLocation, setCurrentCoordinates } from '../../../store/reducers/locationReducer';

export const LocationContainer = () => {
  const dispatch = AppDispatch();
  const latitude = useSelector<AppRootStateType, number | null>((state) => state.location.latitude);
  const longitude = useSelector<AppRootStateType, number | null>((state) => state.location.longitude);
  const city = useSelector<AppRootStateType, string>((state) => state.location.city);

  useEffect(() => {
    latitude && longitude && dispatch(getLocation(latitude, longitude));
  }, [latitude, longitude, dispatch]);

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        dispatch(setCurrentCoordinates(position.coords));
      });
    } else {
      alert('Не удается получить Ваше местоположение. Необходимо соответствующее разрешение.');
    }
  };
  return <Location getCurrentLocation={getCurrentLocation} latitude={latitude} longitude={longitude} city={city} />;
};
