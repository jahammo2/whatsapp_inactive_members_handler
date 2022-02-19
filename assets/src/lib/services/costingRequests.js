import camelCaseData from './shared/camelCaseData';
import handleError from './shared/handleError';

import apiService from './api';

export default {
  create(params) {
    return apiService
      .post('/phone_numbers', params)
      .then(({ data }) => camelCaseData(data))
      .catch(handleError);
  },

  getAll() {
    return apiService
      .get('/phone_numbers')
      .then(({ data }) => camelCaseData(data))
      .catch(handleError);
  },
};
