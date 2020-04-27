import {templateService} from '../_services';
import {templateConstants} from '../_constants';

export const addTemplate = (dispatch) => (template) => {
  templateService.add(template)
    .then(
      newTemplate => {
        dispatch({type: templateConstants.addTemplate, payload: [newTemplate]});
      }
    ).catch(e => console.log(e));
}

export const getTemplates = (dispatch) => (query) => {
  templateService.getAll(query)
    .then(
      result => {
        dispatch({type: templateConstants.getAll, payload: result.templates || []});
      }
    ).catch(e => console.log(e));
}