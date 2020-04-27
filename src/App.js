import React from 'react';
import logo from './logo.svg';
import './App.css';
import Body, { exportExample } from './Components/Body';

export default () => {
  const state = {
    "mike": "big",
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Body state={state} />
      <h5>
        Bringing exported data into App.js => {exportExample()}
      </h5>
    </div>
  );
};