import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import { signup, login, logout } from './utils/session_api_util'


document.addEventListener ('DOMContentLoaded', () => {
  let store;
  
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: {[window.currentUser.id]: window.currentUser},
      },
      session: {id: window.currentUser.id},
    };
    store = configureStore (preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore ();
  }
  window.signup = signup;
  window.login = login;
  window.logout = logout;
  window.errors = errors;
  window.getState = store.getState;
  window.dispatch = store.dispatch;

  
  const root = document.getElementById ('root');
  ReactDOM.render (<Root store={store}/>, root);
});

// this.store = store;

// window.postUser = postUser;
// window.postSession = postSession;
// window.deleteSession = deleteSession;




