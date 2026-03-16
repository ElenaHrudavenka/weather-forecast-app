import { useEffect} from 'react';
import style from './index.module.scss';
import { Weather } from '../Weather';
import { AppDispatch } from '../../../store/store';
import { getTokenTC } from '../../../store/reducers/appReducer';
import Header from '../Header';

export const Layout = () => {
  const dispatch = AppDispatch();

  useEffect(() => {
    dispatch(getTokenTC());
  }, []);

  return (
    <div className={style.layoutBlock}>
      <Header />
      <main className={style.layoutBlock__main}>
        <Weather />
      </main>
    </div>
  );
};
