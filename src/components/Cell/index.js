import React from 'react';
import PropTypes from 'prop-types';
import bem from 'bem-cn';

import './style.css';

const block = bem('cell');

const getBemMods = ({ equal }) => {
  const mods = {
    equal: !!equal
  };

  return mods;
};

const Cell = ({ children, equal }) => {
  return <div className={block(getBemMods({ equal }))()}>{children}</div>;
};

Cell.propTypes = {
  equal: PropTypes.bool
};

export default Cell;
