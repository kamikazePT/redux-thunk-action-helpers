import { asyncAction } from 'redux-action-types';
import actionConstants from '../domain/action_types_constants';
import { createActionCreator, createErrorActionCreator } from 'redux-simple-action-helpers';

export default (type, fn) => {
  const types = asyncAction(type, [ actionConstants.START, actionConstants.SUCCESS, actionConstants.ERROR]);

  const actionStart = createActionCreator(types[0]);
  const actionSuccess = createActionCreator(types[1]);
  const actionError = createErrorActionCreator(types[2]);

  return (...args) => {
    return (dispatch, getState, extra) => {
      const resolved = data => {
        dispatch(actionSuccess(data));
      };
    
      const rejected = err => {
        dispatch(actionError(err));
      };

      dispatch(actionStart());
      let result;
      try{
        result = Promise.resolve(fn(...args, { dispatch, getState, extra }));
      }catch(err){
        return Promise.reject(err).catch(rejected);
      }

      return result.then(resolved).catch(rejected);
    };
  };
};