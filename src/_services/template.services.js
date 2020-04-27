import config from 'config';
import axios from 'axios';

export const templateService = {
  add,
  getAll,
};

function add(template) {
  return axios.post(`${config.apiUrl}/api/v1/templates`, {template})
    .then(result => {
      return result.data;
    });
}

function getAll(query = {}) {
  return axios.get(`${config.apiUrl}/api/v1/templates`,)
    .then(result => {
      return result.data;
    });
}