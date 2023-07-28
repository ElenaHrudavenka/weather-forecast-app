import React from 'react';
import CurrentWeather from "./CurrentWeather";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../../store/store";

const CurrentWeatherContainer = () => {
    const city = useSelector<AppRootStateType, string>((state) => state.location.locationData.properties.city)
    const temperature = useSelector<AppRootStateType, number>((state) => state.weather.data[0].coordinates[0].dates[0].value)
    return (
        <CurrentWeather city={city} temperature={temperature}/>
    );
};

export default CurrentWeatherContainer;