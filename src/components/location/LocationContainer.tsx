import React, {useEffect} from 'react';
import {CurrentCoordinatesType} from "../../store/reducers/locationReducer.type";
import Location from './Location'
import {useSelector} from "react-redux";
import {AppDispatch, AppRootStateType} from "../../store/store";
import {getLocation, setCurrentCoordinates} from "../../store/reducers/locationReducer";

const LocationContainer = () => {
    const dispatch = AppDispatch();
    //const location = useSelector<AppRootStateType, CurrentCoordinatesType|null>((state) => state.location.currentCoordinates)
    const latitude = useSelector<AppRootStateType, number|null>((state) => state.location.currentCoordinates.latitude)
    const longitude = useSelector<AppRootStateType, number|null>((state) => state.location.currentCoordinates.longitude)
    const city = useSelector<AppRootStateType, string>((state) => state.location.locationData.properties.city)

    useEffect(()=>{
        latitude && longitude && dispatch(getLocation(latitude, longitude))
    }, [latitude, longitude, dispatch])

    const getCurrentLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                dispatch(setCurrentCoordinates(position.coords));
            })
        } else {
            alert("Error")
        }
    }

    return (
        <>
            <Location getCurrentLocation={getCurrentLocation}
                      latitude={latitude}
                      longitude={longitude}
                      city={city}
            />
        </>
    );
};

export default LocationContainer;