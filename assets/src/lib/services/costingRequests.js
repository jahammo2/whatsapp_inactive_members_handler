import camelCaseData from './shared/camelCaseData';
import handleError from './shared/handleError';

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
