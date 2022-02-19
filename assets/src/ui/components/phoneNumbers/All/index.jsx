import React from 'react';

import * as phoneNumberPropTypes from 'src/lib/constants/propTypes/phoneNumber';
import Header from 'src/ui/components/navigation/Header';

import PhoneNumberRow from './PhoneNumberRow';
import styles from './styles.module.scss';

function PhoneNumbersAll(props) {
  const {
    phoneNumbers,
  } = props;

  return (
    <div className={ styles.Root }>
      <Header />

      <h3>Phone Numbers:</h3>

      <If condition={ Boolean(phoneNumbers) }>
        <ul>
          <For each="phoneNumber" of={ phoneNumbers }>
            <PhoneNumberRow
              phoneNumber={ phoneNumber }
              key={ phoneNumber.get('id') }
            />
          </For>
        </ul>
      </If>
    </div>
  );
}

PhoneNumbersAll.propTypes = {
  phoneNumbers : phoneNumberPropTypes.phoneNumbers.isRequired,
};

export default PhoneNumbersAll;
