import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import { Route, NotPage } from '@shared/components';
import { History } from 'history';

import MicroFrontend from '../components/MicroFrontend';
import hostsConfig from '../config/hosts';
import Home from '../pages/home';

interface AppProps {
  history: History;
}

const Startwars: React.FC<AppProps> = ({ history }) => (
  <MicroFrontend
    history={history}
    host={hostsConfig.starwars}
    name="StarWars"
  />
);

const Myapp: React.FC<AppProps> = ({ history }) => (
  <MicroFrontend history={history} host={hostsConfig.myapp} name="Myapp" />
);

const Marvel: React.FC<AppProps> = ({ history }) => (
  <MicroFrontend history={history} host={hostsConfig.marvel} name="Marvel" />
);

const Routes: React.FC = () => (
  <Switch>
    <Redirect exact path="/" to="/home" />
    <Route path={['/home']} component={Home} />
    <Route path="/start-wars" component={Startwars} />
    <Route path="/marvel" component={Marvel} />
    <Route path="/myapp" component={Myapp} />
    <Route path="/" component={NotPage} />
  </Switch>
);

export default Routes;
