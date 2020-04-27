import { combineReducers } from 'redux';
import { templateReducer } from './template.reducer';
import { deploymentReducer } from './deployment.reducer';


const rootReducer = combineReducers({
  templateReducer,
  deploymentReducer,
});

export default rootReducer;