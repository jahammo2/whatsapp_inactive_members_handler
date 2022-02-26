import Immutable from 'immutable';

import actionTypes from 'src/lib/constants/actionTypes';
import INITIAL_STATE from './initialState';

export default function (state = INITIAL_STATE, { payload, type }) {
  switch (type) {
    case actionTypes.PHONE_NUMBER__FIND_INACTIVE_CONTACTS_FAILURE:
      return state.withMutations(map => {
        map.set('hasError', true);
        map.set('isActive', false);
        map.setIn(['loaded', 'phoneNumbers'], Immutable.fromJS([]));
      });

    case actionTypes.PHONE_NUMBER__FIND_INACTIVE_CONTACTS_START:
      return state.withMutations(map => {
        map.set('hasError', false);
        map.set('isActive', true);
      });

    case actionTypes.PHONE_NUMBER__FIND_INACTIVE_CONTACTS_SUCCESS:
      return state.withMutations(map => {
        const { phoneNumbers } = payload;

        map.set('isActive', false);
        map.set('hasError', false);
        map.setIn(['loaded', 'phoneNumbers'], Immutable.fromJS(phoneNumbers || []));
      });

    default:
      return state;
  }
}
