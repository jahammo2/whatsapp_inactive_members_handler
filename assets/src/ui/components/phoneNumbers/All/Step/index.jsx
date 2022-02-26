import React from 'react';

import * as basePropTypes from 'src/lib/constants/propTypes/base';

import styles from './styles.module.scss';

function PhoneNumberRow(props) {
  const {
    children,
    title,
  } = props;

  return (
    <div className={ styles.Root }>
      <h3>{ title }</h3>

      { children }
    </div>
  );
}

PhoneNumberRow.propTypes = {
  children : basePropTypes.children,
  title    : basePropTypes.title,
};

export default PhoneNumberRow;
