import React from 'react';
import PropTypes from 'prop-types';
import { resolveEventHandler } from 'resolvers/components';

import './style.css';

const parserEvent = event => {
  event.preventDefault();
  event.stopPropagation();

  return event;
};

const eventHandler = resolveEventHandler(parserEvent);

const getClassName = ({ primary, secondary }) => {
  const classNames = ['btn'];

  if (primary) {
    classNames.push('btn-primary');
  }

  if (secondary) {
    classNames.push('btn-secondary');
  }

  return classNames.join(' ');
};

const Button = ({ children, onClick, primary, secondary }) => {
  return (
    <button className={getClassName({ primary, secondary })} onClick={eventHandler(onClick)}>
      {children}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  primary: PropTypes.bool,
  secondary: PropTypes.bool
};

export default Button;
