import React from 'react';
import { Route, Switch } from 'react-router-dom';

import CostingRequestsAll from 'src/pages/costingRequests/All';
import Header from 'src/ui/components/navigation/Header';

// TODO: move Header
function Routes() {
  /* eslint-disable max-len */
  return (
    <>
      <Header />

      <Switch>
        <Route component={ CostingRequestsAll } exact path={ ['/', '/costing-requests'] } />
      </Switch>
    </>
  );
  /* eslint-enable max-len */
}

export default Routes;
