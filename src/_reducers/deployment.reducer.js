import {deploymentConstants} from '../_constants';

export function deploymentReducer(state = {deployments: []}, action) {
  switch (action.type) {
    case deploymentConstants.addTemplate:
      return {
        ...state,
        deployments: [...state.deployments, ...action.payload]
      };
    case deploymentConstants.getAll:
      return {
        ...state,
        deployments: [...action.payload]
      };

    case deploymentConstants.deleteDeployment:
      return {
        ...state,
        deployments: state.deployments.filter(deployment => deployment._id !== action.payload)
      };

    default:
      return state
  }
}