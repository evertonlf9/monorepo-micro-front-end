import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import 'react-app-polyfill/ie9';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import configureStore from './core/store/configureStore';

import App from './app/app';
import 'antd/dist/antd.css';
import './index.scss';

const store = configureStore();

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
(window as any).renderStarWars = (containerId: any, history: any) => {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App history={history} />
      </Provider>
    </React.StrictMode>,
    document.getElementById(containerId),
  );
};

// unmount micro frontend function
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
(window as any).unmountStarWars = (containerId: string) => {
  ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};

// Mount to root if it is not a micro frontend
if (!document.getElementById('StarWars-container')) {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
    document.getElementById('root'),
  );
}
