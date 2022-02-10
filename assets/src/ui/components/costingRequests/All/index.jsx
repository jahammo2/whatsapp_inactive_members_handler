import React from 'react';

import * as costingRequestPropTypes from 'src/lib/constants/propTypes/costingRequest';
import Header from 'src/ui/components/navigation/Header';

import CostingRequestRow from './CostingRequestRow';
import styles from './styles.module.scss';

function CostingRequestsAll(props) {
  const {
    costingRequests,
  } = props;

  return (
    <div className={ styles.Root }>
      <Header />

      <h3>Costing Requests:</h3>

      <ul>
        <For each="costingRequest" of={ costingRequests }>
          <CostingRequestRow
            costingRequest={ costingRequest }
            key={ costingRequest.get('id') }
          />
        </For>
      </ul>
    </div>
  );
}

CostingRequestsAll.propTypes = {
  costingRequests : costingRequestPropTypes.costingRequests.isRequired,
};

export default CostingRequestsAll;
