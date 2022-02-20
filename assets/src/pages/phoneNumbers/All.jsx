import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { useCallback, useEffect } from 'react';

import * as basePropTypes from 'src/lib/constants/propTypes/base';
import * as phoneNumberPropTypes from 'src/lib/constants/propTypes/phoneNumber';
import * as phoneNumbersActionCreators from 'src/lib/actions/phoneNumbers';

import buildValuesFromElementsWithFiles from 'src/lib/shared/buildValuesFromElementsWithFiles';
import PhoneNumbersAll from 'src/ui/components/phoneNumbers/All';

function FunctionalPhoneNumbers(props) {
  const handleSubmit = useCallback(async (values) => {
    const params = await buildValuesFromElementsWithFiles(values);

    // console.log('values', values);
    return props.actions.phoneNumbers
      .findInactiveContacts(params)
      .catch(() => null);
  }, []);

  return <PhoneNumbersAll handleSubmit={ handleSubmit } { ...props } />;
}

function mapStateToProps({ phoneNumbers }) {
  return {
    phoneNumbers : phoneNumbers.getIn(['loaded', 'phoneNumbers']),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions : {
      phoneNumbers : bindActionCreators(phoneNumbersActionCreators, dispatch),
    },
  };
}

FunctionalPhoneNumbers.propTypes = {
  actions         : basePropTypes.actions.isRequired,
  phoneNumbers : phoneNumberPropTypes.phoneNumbers.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(FunctionalPhoneNumbers);
