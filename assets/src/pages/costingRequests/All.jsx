import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { useEffect } from 'react';

import * as basePropTypes from 'src/lib/constants/propTypes/base';
import * as costingRequestPropTypes from 'src/lib/constants/propTypes/costingRequest';
import * as costingRequestsActionCreators from 'src/lib/actions/costingRequests';

import CostingRequestsAll from 'src/ui/components/costingRequests/All';

function FunctionalCostingRequests(props) {
  useEffect(() => props.actions.costingRequests.getAll(), []);

  return <CostingRequestsAll { ...props } />;
}

function mapStateToProps({ costingRequests }) {
  return {
    costingRequests : costingRequests.getIn(['loaded', 'costingRequests']),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions : {
      costingRequests : bindActionCreators(costingRequestsActionCreators, dispatch),
    },
  };
}

FunctionalCostingRequests.propTypes = {
  actions         : basePropTypes.actions.isRequired,
  costingRequests : costingRequestPropTypes.costingRequests.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(FunctionalCostingRequests);
