import React from 'react';
import bem from 'bem-cn';

import './style.css';

const block = bem('grid');

const Grid = ({ children }) => {
  return <div className={block()}>{children}</div>;
};

export default Grid;
