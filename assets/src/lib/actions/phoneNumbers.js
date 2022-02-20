import actionTypes from 'src/lib/constants/actionTypes';
import phoneNumbersService from 'src/lib/services/phoneNumbers';

export function findInactiveContacts(params) { // eslint-disable-line import/prefer-default-export
  return dispatch => {
    dispatch({ type : actionTypes.PHONE_NUMBER__FIND_INACTIVE_CONTACTS_START });

    return phoneNumbersService
      .findInactiveContacts(params)
      .then(({ phoneNumbers }) => {
        dispatch({
          type    : actionTypes.PHONE_NUMBER__FIND_INACTIVE_CONTACTS_SUCCESS,
          payload : { phoneNumbers },
        });
      })
      .catch(error => {
        dispatch({
          type    : actionTypes.PHONE_NUMBER__FIND_INACTIVE_CONTACTS_FAILURE,
          payload : { error },
        });
      });
  };
}
