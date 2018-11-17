import { createTypes, asyncAction } from 'redux-action-types';
import { flatMap } from 'lodash';
import actionConstants from '../../domain/action_types_constants';

export default (namespace, ...args) => {
  let finalNamespace = namespace;
  if(finalNamespace) finalNamespace = '@@' + finalNamespace + '/';
  return createTypes(finalNamespace,
    flatMap(args, (item) => [item].concat(asyncAction(item, [ actionConstants.START, actionConstants.SUCCESS, actionConstants.ERROR])))
  );
};