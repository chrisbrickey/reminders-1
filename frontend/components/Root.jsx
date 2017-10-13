// this component wraps App component in the provider which (via connect) provides access to the store to all components and their children
// Root.jsx receives the store as a prop

import React from 'react';
import { Provider } from 'react-redux';
import App from './app.jsx';

const Root = ({ store }) => (
  <Provider store={ store }>
    <App />
  </Provider>
);

export default Root;
