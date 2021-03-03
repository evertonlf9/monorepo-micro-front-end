import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';

import characters from './characters';

const createRootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    characters,
  });

export default createRootReducer;
