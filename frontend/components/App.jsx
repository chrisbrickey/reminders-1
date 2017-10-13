// this component holds all top-level concerns, does not need to receive any arguments because does not rely on props
import React from 'react';
import ReminderListContainer from './reminder_container.jsx';

const App = () => (
  <div className="app">
      <h3>coming to you from App.jsx</h3>
      <ReminderListContainer />
  </div>
);

export default App;
