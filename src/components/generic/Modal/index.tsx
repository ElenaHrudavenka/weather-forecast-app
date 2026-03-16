import style from './index.module.scss';
import cl from 'classnames';

type ModalPropsType = {
  active: boolean;
  setActive: () => void;
  children?: React.ReactNode;
};

export const Modal = ({ active, setActive, children }: ModalPropsType) => {
  return (
    <div className={active ? cl(style.modal, style.active) : style.modal} onClick={setActive}>
      <div
        className={active ? cl(style.modal__content, style.active) : style.modal__content}
        onClick={(e) => {
          e.stopPropagation();
        }}>
        <div className={style.modal__buttonBox}>
          <button type='button' className={style.modal__buttonBox_button} onClick={setActive}>
            <span className={style.modal__buttonBox_text}>Close</span>
            <span className={style.modal__buttonBox_cross}></span>
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};
