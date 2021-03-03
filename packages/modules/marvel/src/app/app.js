import React from 'react';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import { history } from '../core/store/configureStore';

import './app.scss';

import Home from '../components/home/home';
import Characters from '../components/characters/characters';
import Comics from '../components/comics/comics';
import Series from '../components/series/series';
import Creators from '../components/creators/creators';
import Events from '../components/events/events';
import Details from '../components/details/details';
import Notfound from '../components/notfound/notfound';

function App(props) {
  return (
    <>
     <ConnectedRouter history={history}>
        <>
          <Switch>
            <Route exact path="/marvel" render={props => <Home match={props.match} {...props}/>} />
            <Route exact path="/marvel/home" render={props => <Home match={props.match} {...props}/>} />
            <Route path="/marvel/characters" render={props => <Characters match={props.match} {...props}/>} />
            <Route path="/marvel/comics" render={props => <Comics match={props.match} {...props}/>} />
            <Route path="/marvel/series" render={props => <Series match={props.match} {...props}/>} />
            <Route path="/marvel/creators" render={props => <Creators match={props.match} {...props}/>} />
            <Route path="/marvel/events" render={props => <Events match={props.match} {...props}/>} />
            <Route path="/marvel/details/:type/:id" render={props => <Details match={props.match} {...props}/>} />
            <Route render={props => (<Notfound match={props.match} {...props}/>)} />
          </Switch>
        </>
    	</ConnectedRouter>
    </>
  );
}
export default App;