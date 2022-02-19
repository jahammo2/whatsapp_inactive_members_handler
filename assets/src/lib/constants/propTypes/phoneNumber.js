import ImmutablePropTypes from 'react-immutable-proptypes';
import { PropTypes } from 'prop-types';

export const phoneNumber = ImmutablePropTypes.contains({
});

export const phoneNumbers = ImmutablePropTypes.listOf(phoneNumber);
