import style from './index.module.scss';
import { useNavigate, useParams } from 'react-router-dom';
import { PATH } from '../../Layout/Routing/Routing';
import Header from '../../Header';

const CityDescription = () => {
  const navigate = useNavigate();
  const { city } = useParams();
  const onClickNavigateMain = () => {
    navigate(PATH.WEATHER);
  };

  return (
    <div className={style.cityDescriptionBlock}>
      <Header />
      <div className={style.cityDescriptionBlock__wrapper}>
        <div className={style.cityDescriptionBlock__wrapper_list}>
          <ul>
            <h2>{`City Information ${city}`}</h2>
            <li>
              <span>Country:</span>
              <span>country</span>
            </li>
            <li>
              <span>Former Name:</span>
              <span>former name</span>
            </li>
            <li>
              <span>Postcode:</span>
              <span>postcode</span>
            </li>
            <li>
              <span>Latitude:</span>
              <span>latitude</span>
            </li>
            <li>
              <span>Longitude:</span>
              <span>longitude</span>
            </li>
          </ul>
          <button onClick={onClickNavigateMain}>Home</button>
        </div>
      </div>
    </div>
  );
};

export default CityDescription;
