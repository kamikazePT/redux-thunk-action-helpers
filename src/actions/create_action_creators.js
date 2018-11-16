import { asyncAction } from 'redux-action-types';
import { omit } from 'lodash';
import actionConstants from '../domain/action_types_constants';
import actionCreator from '../utils/action_creator_utils';

export default (type, fn) => {
  const types = asyncAction(type, [ actionConstants.START, actionConstants.SUCCESS, actionConstants.ERROR]);

  const actionStart = actionCreator(types[0]);
  const actionSuccess = actionCreator(types[1]);
  const actionError = actionCreator(types[2]);

  return (...args) => {
    return (dispatch, getState, extra) => {
      const resolved = data => {
        dispatch(actionSuccess(omit(...data, 'meta'), false, data.meta));
      };
    
      const rejected = err => {
        dispatch(actionError(err, true));
      };

      dispatch(actionStart());
      try{
        Promise.resolve(fn(...args, { dispatch, getState, extra })).then(resolved);
      }catch(err){
        Promise.reject(err).then(null, rejected);
      }
    };
  };
};