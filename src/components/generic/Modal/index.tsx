import React from 'react';
import s from './index.module.scss';
import cl from 'classnames';

type ModalPropsType = {
  active: boolean;
  setActive: () => void;
  children?: React.ReactNode;
};

export const Modal = ({ active, setActive, children }: ModalPropsType) => {
  return (
    <div className={active ? cl(s.modal, s.active) : s.modal} onClick={setActive}>
      <div
        className={active ? cl(s.modal__content, s.active) : s.modal__content}
        onClick={(e) => {
          e.stopPropagation();
        }}>
        <div className={s.modal__buttonBox}>
          <button type='button' className={s.modal__buttonBox_button} onClick={setActive}>
            <span className={s.modal__buttonBox_text}>Close</span>
            <span className={s.modal__buttonBox_cross}></span>
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};
