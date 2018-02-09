import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import allCountries from './data';

import './style.css';

const optionRender = ({ value }) => {
  const flagImageUrl = `/flags/${value}.png`;
  const optionStyle = {
    width: 30,
    height: 30
  };
  return <img src={flagImageUrl} style={optionStyle} alt={value} />;
};

const getValues = (all, filter = []) => {
  if (filter.length === 0) {
    return all;
  } else {
    return all.filter(({ value }) => filter.indexOf(value) !== -1);
  }
};

const resolveHandleChange = onSelect => ({ value }) => onSelect(value);

const CountrySelect = ({ value, countries, onSelect }) => {
  const handleChange = resolveHandleChange(onSelect);

  return (
    <Select
      placeholder="Search country.."
      value={value}
      options={getValues(allCountries, countries)}
      optionRenderer={optionRender}
      backspaceRemoves
      clearable={false}
      onChange={handleChange}
      valueRenderer={optionRender}
    />
  );
};

CountrySelect.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  countries: PropTypes.arrayOf(PropTypes.string),
  onSelect: PropTypes.func
};

export default CountrySelect;
