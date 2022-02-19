import React, { useRef } from 'react';

import * as basePropTypes from 'src/lib/constants/propTypes/base';

import styles from './styles.module.scss';

function TextField(props) {
  const {
    disabled,
    htmlFor,
    name,
    placeholder,
    register,
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
  htmlFor       : basePropTypes.htmlFor.isRequired,
  name          : basePropTypes.name.isRequired,
  placeholder   : basePropTypes.placeholder,
  register      : basePropTypes.register.isRequired,
};

export default TextField;
