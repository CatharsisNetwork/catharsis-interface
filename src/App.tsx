import React from 'react'
import './App.scss';
import {Navigation} from './components/Navigation';
import {MainPage} from './views/MainPage';
import bgtitle from './img/headerBg.png';

function App() {
  return (
    <>
      <div className="App">
        <div className="mainPage">
          <div className="bgShadow">
          </div>
          </div>
          <Navigation/>
          <MainPage/>
          
       
      </div>
    </>
  );
}

export default App;
