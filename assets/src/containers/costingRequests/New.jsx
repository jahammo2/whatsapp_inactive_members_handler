import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { useCallback } from 'react';

import * as basePropTypes from 'src/constants/propTypes/base';
import * as costingRequestsActionCreators from 'src/actions/costingRequests';

import CostingRequestsNew from 'src/components/costingRequests/New';
import snakeCaseParams from 'src/shared/snakeCaseParams';

function FunctionalCostingRequests(props) {
  const {
    actions,
  } = props;

  const handleSubmit = useCallback(values => {
    return actions.costingRequests.create({ costing_request: snakeCaseParams(values) });
  }, []);

  return (
    <CostingRequestsNew
      handleSubmit={ handleSubmit }
      { ...props }
    />
  );
}

function mapStateToProps() {
  return {
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
  actions : basePropTypes.actions.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(FunctionalCostingRequests);
