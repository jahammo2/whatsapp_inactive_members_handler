import ImmutablePropTypes from 'react-immutable-proptypes';
import { PropTypes } from 'prop-types';

export const actions = PropTypes.objectOf(PropTypes.objectOf(PropTypes.func));
export const buttonText = PropTypes.string;
export const children = PropTypes.node;
export const disabled = PropTypes.bool;
export const errorMessages = ImmutablePropTypes.list;
export const errors = ImmutablePropTypes.mapOf(PropTypes.array);
export const floatRight = PropTypes.bool;
export const handleClick = PropTypes.func;

export const history = PropTypes.shape({
  push : PropTypes.func.isRequired,
});

export const htmlFor = PropTypes.string;
export const isActive = PropTypes.bool;
export const isSecondary = PropTypes.bool;

export const location = PropTypes.shape({
  state : PropTypes.shape({
    pathFrom : PropTypes.string,
  }),
});

export const name = PropTypes.string;
export const placeholder = PropTypes.string;
export const text = PropTypes.string;
export const to = PropTypes.string;
export const type = PropTypes.string;
export const value = PropTypes.string;
export const withArrow = PropTypes.bool;
