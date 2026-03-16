import style from './Loader.module.scss';

const Loader = () => {
  return (
    <div className={style.loaderBox}>
      <div className={style.loaderBox__circle}></div>
    </div>
  );
};

export default Loader;
