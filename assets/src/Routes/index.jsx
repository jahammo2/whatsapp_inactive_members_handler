import React from 'react';
import { Route, Switch } from 'react-router-dom';

import CostingRequestsAll from 'src/containers/costingRequests/All';
import CostingRequestsNew from 'src/containers/costingRequests/New';
import Header from 'src/components/navigation/Header';

function Routes() {
  /* eslint-disable max-len */
  return (
    <>
      <Header />

      <div>FOO</div>

      <Switch>
        <Route component={ CostingRequestsAll } exact path={ ['/', '/costing-requests'] } />
      </Switch>
    </>
  );
  /* eslint-enable max-len */
}

export default Routes;
