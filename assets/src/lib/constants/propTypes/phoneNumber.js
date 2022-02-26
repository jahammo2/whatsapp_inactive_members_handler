import ImmutablePropTypes from 'react-immutable-proptypes';
import { PropTypes } from 'prop-types';

export const phoneNumber = PropTypes.string;
export const phoneNumbers = ImmutablePropTypes.listOf(phoneNumber);
