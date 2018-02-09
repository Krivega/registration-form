import React from 'react';
import PropTypes from 'prop-types';
import bem from 'bem-cn';
import { resolveEventHandler } from 'resolvers/components';

import './style.css';

const block = bem('list-item');

const getBemMods = ({ onClick }) => {
  const mods = {
    linked: !!onClick
  };

  return mods;
};

const parserEvent = event => {
  event.preventDefault();
  event.stopPropagation();

  return event;
};

const eventHandler = resolveEventHandler(parserEvent);

const ListItem = ({ children, onClick }) => {
  return (
    <div tabIndex="0" className={block(getBemMods({ onClick }))()} onClick={eventHandler(onClick)}>
      {children}
    </div>
  );
};

ListItem.propTypes = {
  onClick: PropTypes.func
};

export default ListItem;
