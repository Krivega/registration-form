import React from 'react';
import PropTypes from 'prop-types';
import bem from 'bem-cn';
import Loader from 'components/Loader';

import './style.css';

const block = bem('autocomplete');

const Autocomplete = ({ children, loading }) => {
  return (
    <div className={block()}>
      <Loader active={loading} />

      {children}
    </div>
  );
};

Autocomplete.propTypes = {
  loading: PropTypes.bool
};

export default Autocomplete;
