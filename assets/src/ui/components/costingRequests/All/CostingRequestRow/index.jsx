import React from 'react';

import * as costingRequestPropTypes from 'src/lib/constants/propTypes/costingRequest';

import styles from './styles.module.scss';

function CostingRequestRow(props) {
  const {
    costingRequest,
  } = props;

  return (
    <li className={ styles.Root }>
      <div className={ styles.Value }>{ costingRequest.get('id') }</div>
      <div className={ styles.Value }>{ costingRequest.get('opportunityId') }</div>
    </li>
  );
}

CostingRequestRow.propTypes = {
  costingRequest : costingRequestPropTypes.costingRequest.isRequired,
};

export default CostingRequestRow;
