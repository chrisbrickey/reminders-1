import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

import { receiveAllReminders,
         receiveSingleReminder } from './actions/reminder_actions';


document.addEventListener("DOMContentLoaded", () => {
  const preloadedState = localStorage.state ? JSON.parse(localStorage.state) : {};
  const store = configureStore(preloadedState);

  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.receiveAllReminders = receiveAllReminders;
  window.receiveSingleReminder = receiveSingleReminder;

  const root = document.getElementById('react');
  ReactDOM.render(
    <div>on entry.jsx</div>, root);
});
