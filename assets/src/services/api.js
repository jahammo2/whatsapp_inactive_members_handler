import axios from 'axios';

function init() {
  const api = axios.create({
    baseURL : '',
  });

  return api;
}

export default init();
