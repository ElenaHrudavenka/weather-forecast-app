import React from 'react';
import s from './App.module.scss';
import bgImage from './assets/img/background.jpg';
import Routing from './components/app/Layout/Routing/Routing';

function App() {
  const url = `url(${bgImage})`;

  const bgStyle = {
    backgroundImage: url,
  };
  return (
    <div className={s.App}>
      <div className={s.App__paralax} style={bgStyle}>
        <Routing />
      </div>
    </div>
  );
}

export default App;
