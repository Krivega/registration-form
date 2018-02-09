import React from 'react';
import bem from 'bem-cn';

import './style.css';

const block = bem('list');

const renderItem = Child => {
  return (
    <li className={block('item')()} key={Child.key}>
      {Child}
    </li>
  );
};

const List = ({ children }) => {
  return <ul className={block()}>{React.Children.map(children, renderItem)}</ul>;
};

export default List;
