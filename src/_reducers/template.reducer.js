import {templateConstants} from '../_constants';

export function templateReducer(state = {templates: []}, action) {
  switch (action.type) {
    case templateConstants.addTemplate:
      return {
        ...state,
        templates: [...state.templates, ...action.payload]
      };
    case templateConstants.getAll:
      return {
        ...state,
        templates: [...action.payload]
      };
    default:
      return state
  }
}