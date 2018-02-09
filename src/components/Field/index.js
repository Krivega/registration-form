import React from 'react';
import InputMask, { conformToMask } from 'react-text-mask';
import PropTypes from 'prop-types';
import bem from 'bem-cn';
import { resolveEventHandler } from 'resolvers/components';

import './style.css';

const block = bem('field');

const renderLabel = ({ id, label }) => {
  if (label !== undefined) {
    return (
      <label className={block('label')()} htmlFor={id}>
        {label}
      </label>
    );
  }
};

const prepareMask = mask => {
  if (typeof mask === 'function') {
    mask = mask();
  }

  return mask;
};

const renderPrepend = children => {
  if (children !== undefined) {
    return <div className={block('prepend')()}>{children}</div>;
  }
};

const conformValueToMask = mask => value => {
  mask = prepareMask(mask);

  if (mask) {
    return conformToMask(value, mask, { guide: false }).conformedValue;
  } else {
    return value;
  }
};

const renderInput = props => {
  const value = conformValueToMask(props.mask)(props.value);

  if (props.mask) {
    return (
      <InputMask
        {...props}
        className={block('input')()}
        value={value}
        onChange={props.onChange}
        mask={props.mask}
        guide={false}
      />
    );
  } else {
    return <input {...props} className={block('input')()} value={value} />;
  }
};

const resolveParseStringByMask = string => mask => {
  if (typeof mask === 'string') {
    return string.replace(mask, '');
  } else {
    return string;
  }
};

const resolveRemoveMask = mask => {
  mask = prepareMask(mask);

  return string => {
    if (mask) {
      string = mask.reduce((string, itemMask) => {
        const parseStringByMask = resolveParseStringByMask(string);

        return parseStringByMask(itemMask);
      }, string);
    }

    return string;
  };
};

const getBemMods = ({ children }) => {
  const mods = { prepended: !!children };

  return mods;
};

const resolveParserEventValue = mask => {
  const removeMask = resolveRemoveMask(mask);

  return event => {
    let value = event.target.value;

    return removeMask(value);
  };
};

const Field = ({
  value,
  type,
  children,
  label,
  min,
  max,
  mask,
  step,
  readOnly,
  autoFocus,
  disabled,
  placeholder,
  id,
  required,
  onChange,
  onFocus,
  onBlur
}) => {
  const parserEventValue = resolveParserEventValue(mask);
  const eventHandler = resolveEventHandler(parserEventValue);
  const inputProps = {
    type,
    min,
    max,
    step,
    value,
    readOnly,
    placeholder,
    autoFocus,
    disabled,
    id,
    required,
    mask,
    onChange: eventHandler(onChange),
    onFocus: eventHandler(onFocus),
    onBlur: eventHandler(onBlur)
  };

  return (
    <div>
      {renderLabel({ id, label })}
      <div className={block(getBemMods({ children }))()}>
        {renderPrepend(children)}
        {renderInput(inputProps)}
      </div>
    </div>
  );
};

Field.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  readOnly: PropTypes.bool,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  autoFocus: PropTypes.bool,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  onChange: PropTypes.func
};

Field.defaultProps = {
  type: 'text'
};

export default Field;
