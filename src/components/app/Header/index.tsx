import React, { useState } from 'react';
import s from './index.module.scss';
import { LocationContainer } from '../LocationContainer';
import { AiFillSetting } from 'react-icons/ai';
import { Modal } from '../../generic/Modal';

const Index = () => {
  const [isActiveOptions, setIsActiveOptions] = useState<boolean>(false);
  const showOptionsModal = () => {
    setIsActiveOptions(!isActiveOptions);
  };
  return (
    <header className={s.headerBlock}>
      <LocationContainer />
      <div className={s.headerBlock_options}>
        <button className={s.headerBlock_button} onClick={showOptionsModal}>
          <AiFillSetting className={s.headerBlock_buttonIcon} />
        </button>
        <Modal active={isActiveOptions} setActive={showOptionsModal}>
          <span>Here will be a measure items list.</span>
        </Modal>
      </div>
    </header>
  );
};

export default Index;
