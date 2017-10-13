import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root.jsx';


import { receiveAllReminders,
         receiveSingleReminder } from './actions/reminder_actions';

import { allReminderArray } from './reducers/selectors.js';


document.addEventListener("DOMContentLoaded", () => {
  const preloadedState = localStorage.state ? JSON.parse(localStorage.state) : {};
  const store = configureStore(preloadedState);

  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.receiveAllReminders = receiveAllReminders;
  window.receiveSingleReminder = receiveSingleReminder;
  window.allReminderArray = allReminderArray;

  const root = document.getElementById('react');
  ReactDOM.render(<Root store={store} />, root);
});
