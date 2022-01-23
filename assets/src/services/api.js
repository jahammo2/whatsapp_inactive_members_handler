import axios from 'axios';

function init() {
  const API_DOMAIN = process.env.API_DOMAIN ?
    process.env.API_DOMAIN :
    'localhost:4000';

  const API_PROTOCOL_SUFFIX = process.env.API_PROTOCOL_SUFFIX ?
    process.env.API_PROTOCOL_SUFFIX :
    '';

  const api = axios.create({
    baseURL : `http${API_PROTOCOL_SUFFIX}://${API_DOMAIN}/api`,
  });

  return api;
}

export default init();
