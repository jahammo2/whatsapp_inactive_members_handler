import React from 'react';

import * as basePropTypes from 'src/lib/constants/propTypes/base';

import styles from './styles.module.scss';

function ButtonSubmit(props) {
  const {
    disabled,
    value,
  } = props;

  return (
    <div className={ styles.Root }>
      <input
        className={ styles.Button }
        disabled={ disabled }
        type="submit"
        value={ value }
      />
    </div>
  );
}

ButtonSubmit.propTypes = {
  disabled    : basePropTypes.disabled,
  value       : basePropTypes.value.isRequired,
};

export default ButtonSubmit;
