import React from 'react';

import * as phoneNumberPropTypes from 'src/lib/constants/propTypes/phoneNumber';

import styles from './styles.module.scss';

function PhoneNumberRow(props) {
  const {
    phoneNumber,
  } = props;

  return (
    <li className={ styles.Root }>
      <div className={ styles.Value }>@{ phoneNumber },</div>
    </li>
  );
}

PhoneNumberRow.propTypes = {
  phoneNumber : phoneNumberPropTypes.phoneNumber.isRequired,
};

export default PhoneNumberRow;
