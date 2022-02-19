import camelCaseData from './shared/camelCaseData';
import handleError from './shared/handleError';

import apiService from './api';

export default {
  getAll() {
    return apiService
      .get('/phone_numbers')
      .then(({ data }) => camelCaseData(data))
      .catch(handleError);
  },
};
