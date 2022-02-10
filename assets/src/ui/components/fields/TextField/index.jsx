import React, { useRef } from 'react';

import * as basePropTypes from 'src/lib/constants/propTypes/base';

import styles from './styles.module.scss';

function TextField(props) {
  const {
    disabled,
    errorMessages,
    htmlFor,
    name,
    placeholder,
    register,
    type,
  } = props;

  const inputRef = useRef(null);

  function setUpRef(el) {
    if (register) register(el);
    inputRef.current = el;
  }

  return (
    <label className={ styles.Root } htmlFor={ htmlFor }>
      <input
        className={ styles.Field }
        disabled={ disabled }
        name={ name }
        placeholder={ placeholder }
        ref={ setUpRef }
        type="text"
      />
    </label>
  );
}

TextField.propTypes = {
  disabled      : basePropTypes.disabled.isRequired,
  errorMessages : basePropTypes.errorMessages,
  htmlFor       : basePropTypes.htmlFor.isRequired,
  name          : basePropTypes.name.isRequired,
  placeholder   : basePropTypes.placeholder,
  type          : basePropTypes.type.isRequired,
};

export default TextField;
