import ImmutablePropTypes from 'react-immutable-proptypes';
import { PropTypes } from 'prop-types';

export const costingRequest = ImmutablePropTypes.contains({
  boxFileLocation : PropTypes.string.isRequired,
  crliCount       : PropTypes.number,
  id              : PropTypes.number.isRequired,
  opportunityId   : PropTypes.string.isRequired,
});

export const costingRequests = ImmutablePropTypes.listOf(costingRequest);
