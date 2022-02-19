import React from 'react';
import { Route, Switch } from 'react-router-dom';

import CostingRequestsAll from 'src/pages/costingRequests/All';

function Routes() {
  /* eslint-disable max-len */
  return (
    <>
      <Switch>
        <Route component={ CostingRequestsAll } exact path={ ['/', '/costing-requests'] } />
      </Switch>
    </>
  );
  /* eslint-enable max-len */
}

export default Routes;
