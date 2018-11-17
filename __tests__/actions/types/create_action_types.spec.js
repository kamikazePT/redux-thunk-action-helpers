import createActionTypes from '@/actions//types/create_action_types';

describe('createActionTypes', () => {
  it('It should create types', () => {
    const actionTypes = createActionTypes('test', 'SUBMIT', 'FETCH');

    const expectedActionTypes = {
      SUBMIT : '@@test/SUBMIT',
      SUBMIT_START : '@@test/SUBMIT_START',
      SUBMIT_SUCCESS : '@@test/SUBMIT_SUCCESS',
      SUBMIT_ERROR : '@@test/SUBMIT_ERROR',
      FETCH : '@@test/FETCH',
      FETCH_START : '@@test/FETCH_START',
      FETCH_SUCCESS : '@@test/FETCH_SUCCESS',
      FETCH_ERROR : '@@test/FETCH_ERROR'
    };

    expect(actionTypes).toEqual(expectedActionTypes);
  });
});