import actionTypes from 'src/lib/constants/actionTypes';
import phoneNumbersService from 'src/lib/services/phoneNumbers';

export function getAll() { // eslint-disable-line import/prefer-default-export
  return dispatch => {
    dispatch({ type : actionTypes.PHONE_NUMBER__GET_ALL_START });

    return phoneNumbersService
      .getAll()
      .then(({ phoneNumbers }) => {
        dispatch({
          type    : actionTypes.PHONE_NUMBER__GET_ALL_SUCCESS,
          payload : { phoneNumbers },
        });
      })
      .catch(error => {
        dispatch({
          type    : actionTypes.PHONE_NUMBER__GET_ALL_FAILURE,
          payload : { error },
        });
      });
  };
}
