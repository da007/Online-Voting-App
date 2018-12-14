import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import signupReducer from './signupReducer.js';
import voternameReducer from './voternameReducer.js';
import voterfinalReducer from './voterfinalReducer.js';
const reducerMain=combineReducers({ signupReducer,voternameReducer,voterfinalReducer, routing: routerReducer});

export default reducerMain;