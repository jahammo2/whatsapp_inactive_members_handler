import Immutable from 'immutable';

import actionTypes from 'src/lib/constants/actionTypes';
import INITIAL_STATE from './initialState';

export default function (state = INITIAL_STATE, { payload, type }) {
  switch (type) {
    case actionTypes.COSTING_REQUEST__CREATE_FAILURE:
    case actionTypes.COSTING_REQUEST__GET_ALL_FAILURE:
      return state.withMutations(map => {
        map.set('errors', null);
        map.set('isActive', false);
      });

    case actionTypes.COSTING_REQUEST__CREATE_START:
    case actionTypes.COSTING_REQUEST__GET_ALL_START:
      return state.set('isActive', true);

    case actionTypes.COSTING_REQUEST__CREATE_SUCCESS:
      return state.withMutations(map => {
        const { costingRequest } = payload;

        map.set('isActive', false);
        map.setIn(['loaded', 'costingRequest'], Immutable.fromJS(costingRequest));
      });

    case actionTypes.COSTING_REQUEST__GET_ALL_SUCCESS:
      return state.withMutations(map => {
        const { phoneNumbers: costingRequests } = payload;

        map.set('isActive', false);
        map.setIn(['loaded', 'costingRequests'], Immutable.fromJS(costingRequests));
      });

    default:
      return state;
  }
}
