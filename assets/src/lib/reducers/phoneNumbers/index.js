import Immutable from 'immutable';

import actionTypes from 'src/lib/constants/actionTypes';
import INITIAL_STATE from './initialState';

export default function (state = INITIAL_STATE, { payload, type }) {
  switch (type) {
    case actionTypes.PHONE_NUMBER__GET_ALL_FAILURE:
      return state.withMutations(map => {
        map.set('errors', null);
        map.set('isActive', false);
      });

    case actionTypes.PHONE_NUMBER__GET_ALL_START:
      return state.set('isActive', true);

    case actionTypes.PHONE_NUMBER__GET_ALL_SUCCESS:
      return state.withMutations(map => {
        const { phoneNumbers } = payload;

        map.set('isActive', false);
        map.setIn(['loaded', 'phoneNumbers'], Immutable.fromJS(phoneNumbers || []));
      });

    default:
      return state;
  }
}
