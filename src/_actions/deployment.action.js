import {deploymentService} from '../_services';
import {deploymentConstants} from '../_constants';
import {history} from '../_helpers';


export const addDeployment = (dispatch) => (deployment, callback) => {
  deploymentService.add(deployment)
    .then(
      newDeployment => {
        history.push('/deployments');
        callback(true);
        dispatch({type: deploymentConstants.addDeployment, payload: [newDeployment]});
      }
    ).catch(e => {
    callback(false);
    console.log(e)
  });
}

export const getDeployments = (dispatch) => (query) => {
  deploymentService.getAll(query)
    .then(
      result => {
        dispatch({type: deploymentConstants.getAll, payload: result.deployments || []});
      }
    ).catch(e => console.log(e));
}

export const deleteDeployment = (dispatch) => (_id) => {
  deploymentService.deleteOne(_id)
    .then(
      result => {
        dispatch({type: deploymentConstants.deleteDeployment, payload: _id});
      }
    ).catch(e => console.log(e));
}