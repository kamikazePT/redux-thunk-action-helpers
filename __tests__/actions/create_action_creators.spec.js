import createActionCreator from '@/actions/create_action_creators';

describe('createActionCreator', () => {
  it('It should dispatch success with promise function', () => {
    const type = 'DEFAULT_TYPE';
    const typeStart = 'DEFAULT_TYPE_START';
    const typeSucess = 'DEFAULT_TYPE_SUCCESS';
    const data = 1;

    const actionCreator = createActionCreator(type, () => Promise.resolve(data));

    const expectedActions = [
      {
        type: typeStart,
        payload : undefined,
        meta : undefined,
        error : undefined
      },
      {
        type: typeSucess,
        payload : data,
        meta : undefined,
        error : undefined
      }
    ];

    let currentIdx = 0;
    const assertDispatch = (action) => expect(action).toEqual(expectedActions[currentIdx++]);
    actionCreator(data)(assertDispatch);
  });

  it('It should dispatch success', () => {
    const type = 'DEFAULT_TYPE';
    const typeStart = 'DEFAULT_TYPE_START';
    const typeSucess = 'DEFAULT_TYPE_SUCCESS';
    const data = 1;

    const actionCreator = createActionCreator(type, () => data);

    const expectedActions = [
      {
        type: typeStart,
        payload : undefined,
        meta : undefined,
        error : undefined
      },
      {
        type: typeSucess,
        payload : data,
        meta : undefined,
        error : undefined
      }
    ];

    let currentIdx = 0;
    const assertDispatch = (action) => expect(action).toEqual(expectedActions[currentIdx++]);
    actionCreator(data)(assertDispatch);
  });

  it('It should dispatch error with promise function', () => {
    const type = 'DEFAULT_TYPE';
    const typeStart = 'DEFAULT_TYPE_START';
    const typeError = 'DEFAULT_TYPE_ERROR';
    const error = new Error('test');

    const actionCreator = createActionCreator(type, () => Promise.reject(error));

    const expectedActions = [
      {
        type: typeStart,
        payload : undefined,
        meta : undefined,
        error : undefined
      },
      {
        type: typeError,
        payload : error,
        meta : undefined,
        error : true
      }
    ];

    let currentIdx = 0;
    const assertDispatch = (action) => expect(action).toEqual(expectedActions[currentIdx++]);
    actionCreator()(assertDispatch);
  });

  it('It should dispatch error', () => {
    const type = 'DEFAULT_TYPE';
    const typeStart = 'DEFAULT_TYPE_START';
    const typeError = 'DEFAULT_TYPE_ERROR';
    const error = new Error('test');

    const actionCreator = createActionCreator(type, () => { throw error; });

    const expectedActions = [
      {
        type: typeStart,
        payload : undefined,
        meta : undefined,
        error : undefined
      },
      {
        type: typeError,
        payload : error,
        meta : undefined,
        error : true
      }
    ];

    let currentIdx = 0;
    const assertDispatch = (action) => expect(action).toEqual(expectedActions[currentIdx++]);
    actionCreator()(assertDispatch);
  });
});