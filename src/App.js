import React, { Component } from 'react';
import Header from './Components/Header';
import Main from './pages/main';
import Routes from './routes';

import './styles.css';

const App = () => (
    <div className="app">
      <Header />
      <Routes />
    </div>
);


export default App;
