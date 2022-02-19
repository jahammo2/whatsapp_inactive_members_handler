import React from 'react';
import { Route, Switch } from 'react-router-dom';

import PhoneNumbersAll from 'src/pages/phoneNumbers/All';

function Routes() {
  /* eslint-disable max-len */
  return (
    <Switch>
      <Route component={ PhoneNumbersAll } exact path={ ['/', '/phone-numbers'] } />
    </Switch>
  );
  /* eslint-enable max-len */
}

export default Routes;
