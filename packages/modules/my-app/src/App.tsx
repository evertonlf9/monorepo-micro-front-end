import React from 'react';

import { History, createBrowserHistory } from 'history';

import logo from './logo.svg';
import './App.css';

interface AppProps {
  history?: History;
}

const defaultHistory = createBrowserHistory();

const App: React.FC<AppProps> = ({ history }) => {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={`${process.env.REACT_APP_CONTENT_HOST}${logo}`}
          className="App-logo"
          alt="logo"
        />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
};

export default App;
