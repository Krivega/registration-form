import { render } from 'react-dom';
import React from 'react';
import Root from 'containers/Root';

const rootEl = document.getElementById('root');

if (rootEl) {
  render(<Root />, rootEl);
}
