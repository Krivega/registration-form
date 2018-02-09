import React from 'react';
import PropTypes from 'prop-types';
import Field from 'components/Field';

const resolveGetMaskPhone = code => () => {
  const codeArr = code.split('');

  return codeArr.concat([
    ' ',
    /\d/,
    /\d/,
    /\d/,
    ' ',
    /\d/,
    /\d/,
    /\d/,
    '-',
    /\d/,
    /\d/,
    /\d/,
    /\d/
  ]);
};

const resolveGetPlaceholderPhone = code => () => {
  return `${code} 495 123-45-67`;
};

const PhoneField = props => {
  const { children, phoneCode } = props;
  const getMaskPhone = resolveGetMaskPhone(phoneCode);
  const getPlaceholderPhone = resolveGetPlaceholderPhone(phoneCode);

  return (
    <Field {...props} mask={getMaskPhone()} placeholder={getPlaceholderPhone()}>
      {children}
    </Field>
  );
};

PhoneField.propTypes = {
  phoneCode: PropTypes.string.isRequired
};

export default PhoneField;
