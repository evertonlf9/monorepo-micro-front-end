import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';

(window as any).renderMyapp = (containerId: string, history: any): void => {
  ReactDOM.render(
    <React.StrictMode>
      <App history={history} />
    </React.StrictMode>,
    document.getElementById(containerId),
  );
};

// unmount micro frontend function
(window as any).unmountMyapp = (containerId: string): void => {
  ReactDOM.unmountComponentAtNode(document.getElementById(containerId) as any);
};

// Mount to root if it is not a micro frontend
if (!document.getElementById('Myapp-container')) {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root'),
  );
}
