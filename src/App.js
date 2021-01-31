import React from 'react';
//import logo from './logo.svg';
//import './App.css';
import {Provider} from 'react-redux';
import store from './store';

import Players from './components/Players';
import OfficialTeam from './components/Officialteam';

import "./styles/styles.scss";

/* function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
} */

const App = () => (
  <Provider store={store}>
    <main>
      <h1>StarTeam</h1>
      <Players/>
      <OfficialTeam/>
    </main>
  </Provider>
)

export default App;
