import React from 'react';
import s from './Location.module.scss'

type LocationProps = {
    getCurrentLocation: ()=>void,
    latitude: number|null,
    longitude: number|null,
    city: string,
}

const Location = ({getCurrentLocation, latitude, longitude, city}: LocationProps) => {
    return (
        <div className={s.wrapper}>
            <div className={s.wrapperLocation}>
            <p>Enter a Sity Name</p>
            <input type="text" value={city ? city : ''}/>
            <button>Search</button>
            <p>or</p>
            <button onClick={getCurrentLocation}>Use Current Location</button>
                {latitude && <span style={{fontSize: '0.7em'}}>{`${latitude}, ${longitude}`}</span>}
            </div>
        </div>
    );
};

export default Location;