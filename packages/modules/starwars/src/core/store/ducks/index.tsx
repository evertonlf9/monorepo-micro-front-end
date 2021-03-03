import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import { combineReducers } from 'redux';

import starwars from './starwars';

const createRootReducer = (history: History<any>): any =>
  combineReducers({
    router: connectRouter(history),
    starwars,
  });

export default createRootReducer;
