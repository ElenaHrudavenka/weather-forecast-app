import React, { useState } from 'react';
import s from './index.module.scss';
import { Weather } from '../Weather';
import { AiFillSetting } from 'react-icons/ai';
import { Modal } from '../../generic/Modal';
import { LocationContainer } from '../LocationContainer';

export const Layout = () => {
  const [isActiveOptions, setIsActiveOptions] = useState<boolean>(false);
  const showOptionsModal = () => {
    setIsActiveOptions(!isActiveOptions);
  };
  return (
    <>
      <header className={s.headerBlock}>
        <LocationContainer />
        <div className={s.headerBlock_options}>
          <button onClick={showOptionsModal}>
            <AiFillSetting className={s.icon} />
          </button>
          <Modal active={isActiveOptions} setActive={showOptionsModal}></Modal>
        </div>
      </header>
      <main className={s.mainBlock}>
        <Weather />
      </main>
    </>
  );
};
