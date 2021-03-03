import React from 'react';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import { history } from '../core/store/configureStore';

import Home from '../components/home/home';
import Character from '../components/character/character';
import Species from '../components/species/species';
import Planet from '../components/planet/planet';
import Starship from '../components/starship/starship';
import Vehicles from '../components/vehicles/vehicles';
import Films from '../components/films/films';
import Details from '../components/detail/detail';

import './app.scss';

function App(props) {
  return (
    <>
     <ConnectedRouter history={history}>
        <>
          <Switch>
            <Route exact path="/start-wars" render={props => <Home match={props.match} {...props}/>} />
            <Route path="/start-wars/character" render={props => <Character match={props.match} {...props}/>} />
            <Route path="/start-wars/species" render={props => <Species match={props.match} {...props}/>} />
            <Route path="/start-wars/planets" render={props => <Planet match={props.match} {...props}/>} />
            <Route path="/start-wars/starships" render={props => <Starship match={props.match} {...props}/>} />
            <Route path="/start-wars/vehicles" render={props => <Vehicles match={props.match} {...props}/>} />
            <Route path="/start-wars/films" render={props => <Films match={props.match} {...props}/>} />
            <Route path="/start-wars/details/:type/:id" render={props => <Details match={props.match} {...props}/>} />
            <Route render={props => (<div>404</div>)} />
          </Switch>
        </>
    	</ConnectedRouter>
    </>
  );
}

export default App;
