import config from 'config';
import axios from 'axios';

export const deploymentService = {
  add,
  getAll,
  deleteOne
};

function add(deployment) {
  return axios.post(`${config.apiUrl}/api/v1/deployments`, {deployment})
    .then(result => {
      return result.data;
    });
}

function getAll(query = {}) {
  return axios.get(`${config.apiUrl}/api/v1/deployments`,)
    .then(result => {
      return result.data;
    });
}


function deleteOne(_id) {
  return axios.delete(`${config.apiUrl}/api/v1/deployments?_id=${_id}`)
    .then(result => {
      return result.data;
    });
}
