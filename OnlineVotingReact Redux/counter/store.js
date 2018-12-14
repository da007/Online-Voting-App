import { createStore,compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

// import reducer here

import reducerMain from './reducers/combineReducer.js';
//data getting here

import signup from './data/signupData.js';
import votername from './data/voternameData.js';
import votingfinal from './data/voterfinalData.js';
//create object for the default data
const defaultState = {
  signup,
  votername,
  votingfinal
}; 



const store = createStore(reducerMain,defaultState);
export const history=syncHistoryWithStore(browserHistory,store);


export default store;