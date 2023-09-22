import React from 'react';
import s from './Loader.module.scss';

const Loader = () => {
  return (
    <div className={s.loaderBox}>
      <div className={s.loaderBox__circle}></div>
    </div>
  );
};

export default Loader;
