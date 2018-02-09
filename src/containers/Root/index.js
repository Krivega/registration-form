import React from 'react';
import { Provider } from 'react-redux';

import configureStore from 'configureStore';
import App from 'components/App';
import RegistrationForm from 'containers/RegistrationForm';

const store = configureStore();

const Root = () => (
  <Provider store={store}>
    <App>
      <RegistrationForm />
    </App>
  </Provider>
);

export default Root;
