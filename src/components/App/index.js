import React from 'react';
import bem from 'bem-cn';

import './style.css';

const block = bem('app');

const App = ({ children }) => {
  return <div className={block()}>{children}</div>;
};

export default App;
