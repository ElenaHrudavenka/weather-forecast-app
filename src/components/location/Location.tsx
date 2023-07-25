import React from 'react';
import s from './Location.module.scss'

const Location = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.wrapperLocation}>
            <p>Enter a Sity Name</p>
            <input type="text"/>
            <button>Search</button>
            <p>or</p>
            <button>Use Current Location</button>
            </div>
        </div>
    );
};

export default Location;