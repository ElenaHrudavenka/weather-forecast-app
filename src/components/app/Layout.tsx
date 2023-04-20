import React from 'react';
import s from '../app/Layout.module.scss';

export const Layout = () => {
  return (
    <>
      <header>Here will be a header.</header>
      <main className={s.mainBlock}>
        <span>Here will be a main part.</span>
      </main>
      <footer className={s.footerBlock}>
        <span>Here will be a description.</span>
      </footer>
    </>
  );
};
