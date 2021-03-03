import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Spin, Alert } from 'antd';

import Routes from './routes';

const App: React.FC = () => (
  <BrowserRouter>
    <Suspense
      fallback={(): any => (
        <Spin tip="Loading...">
          <Alert
            message="Alert message title"
            description="Further details about the context of this alert."
            type="info"
          />
        </Spin>
      )}
    >
      <Routes />
    </Suspense>
  </BrowserRouter>
);

export default App;
