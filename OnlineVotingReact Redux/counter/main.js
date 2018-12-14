import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';
import Home from './components/Home.js';
import SignupPage from './components/signup/SignupPage.js';
import LoginPage from './components/login/LoginPage.js';
import Voting from './components/Voting.js';
import Appmodule from './mainApp.js';

import { Provider } from 'react-redux';

import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';

import store,{ history } from './store.js'




ReactDOM.render((
<Provider store={store}>
	<Router history = {browserHistory}>
          <Route path = "/" component = {Appmodule}>
              <IndexRoute component = {Home} />
              <Route path = "home" component = {Home} />
              <Route path = "signup" component = {SignupPage} />
              <Route path = "login" component = {LoginPage} />
              <Route path = "vote" component = {Voting} />
          </Route>
    </Router>
</Provider>
    ), document.getElementById('app'));