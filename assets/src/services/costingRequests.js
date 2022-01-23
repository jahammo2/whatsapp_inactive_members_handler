import camelCaseData from 'src/services/shared/camelCaseData';
import handleError from 'src/services/shared/handleError';

import apiService from './api';

export default {
  create(params) {
    return apiService
      .post('/costing_requests', params)
      .then(({ data }) => camelCaseData(data))
      .catch(handleError);
  },

  getAll() {
    return apiService
      .get('/costing_requests')
      .then(({ data }) => camelCaseData(data))
      .catch(handleError);
  },
};
