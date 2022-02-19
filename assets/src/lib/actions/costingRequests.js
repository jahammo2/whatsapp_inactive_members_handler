import actionTypes from 'src/lib/constants/actionTypes';
import costingRequestsService from 'src/lib/services/costingRequests';

export function getAll() { // eslint-disable-line import/prefer-default-export
  return dispatch => {
    dispatch({ type : actionTypes.COSTING_REQUEST__GET_ALL_START });

    return costingRequestsService
      .getAll()
      .then(({ phoneNumbers }) => {
        dispatch({
          type    : actionTypes.COSTING_REQUEST__GET_ALL_SUCCESS,
          payload : { phoneNumbers },
        });
      })
      .catch(error => {
        dispatch({
          type    : actionTypes.COSTING_REQUEST__GET_ALL_FAILURE,
          payload : { error },
        });
      });
  };
}

export function create(params) { // eslint-disable-line import/prefer-default-export
  return dispatch => {
    dispatch({ type : actionTypes.COSTING_REQUEST__CREATE_START });

    return costingRequestsService
      .create(params)
      .then(({ phoneNumber }) => {
        dispatch({
          type    : actionTypes.COSTING_REQUEST__CREATE_SUCCESS,
          payload : { phoneNumber },
        });
      })
      .catch(error => {
        dispatch({
          type    : actionTypes.COSTING_REQUEST__CREATE_FAILURE,
          payload : { error },
        });
      });
  };
}
