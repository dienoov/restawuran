import CONFIG from './config';

const ENDPOINTS = {
  LIST: `${CONFIG.API_URL}list`,
  DETAIL: (id) => `${CONFIG.API_URL}detail/${id}`,
  SEARCH: (query) => `${CONFIG.API_URL}search?q=${query}`,
  REVIEW: `${CONFIG.API_URL}review`,
};

export default ENDPOINTS;
