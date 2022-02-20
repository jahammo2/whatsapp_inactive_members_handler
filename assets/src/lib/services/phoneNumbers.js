import camelCaseData from './shared/camelCaseData';
import handleError from './shared/handleError';

import apiService from './api';

export default {
  findInactiveContacts(params) {
    return apiService
      .post('/find_inactive_contacts', params)
      .then(({ data }) => camelCaseData(data))
      .catch(handleError);
  },
};
