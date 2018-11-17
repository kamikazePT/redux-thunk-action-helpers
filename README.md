[![npm version](https://badge.fury.io/js/redux-thunk-action-helpers.svg)](https://badge.fury.io/js/redux-thunk-action-helpers)
[![Build Status](https://travis-ci.org/kamikazePT/redux-thunk-action-helpers.svg?branch=master)](https://travis-ci.org/kamikazePT/redux-thunk-action-helpers)
[![Coverage Status](https://coveralls.io/repos/github/kamikazePT/redux-thunk-action-helpers/badge.svg?branch=master)](https://coveralls.io/github/kamikazePT/redux-thunk-action-helpers?branch=master)
[![Inline docs](http://inch-ci.org/github/kamikazePT/redux-thunk-action-helpers.svg?branch=master)](http://inch-ci.org/github/kamikazePT/redux-thunk-action-helpers)
[![Hit Count](http://hits.dwyl.io/kamikazePT/redux-thunk-action-helpers.svg)](http://hits.dwyl.io/kamikazePT/redux-thunk-action-helpers)
![Build Dependencies](https://david-dm.org/kamikazePT/redux-thunk-action-helpers.svg)
![Dev Dependencies](https://david-dm.org/kamikazePT/redux-thunk-action-helpers/dev-status.svg)

[![NPM](https://nodei.co/npm/redux-thunk-action-helpers.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/redux-thunk-action-helpers/)

[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/kamikazePT/redux-thunk-action-helpers/issues)

### Installation

install 

```sh
$ npm i redux-thunk-action-helpers 
$ yarn add redux-thunk-action-helpers
```

### Motivation

Thunk actions usually follow the same rules. Dispatch start action, run some code, 
dispatch the result on the sucess action or dispatch the error on the fail action

### Example

action types
```
import { createActionTypes } from 'redux-thunk-action-helpers';

export const userActionTypes = createActionTypes('my-app', 'FETCH', 'SUBMIT');

/*
 * userActionTypes = {
 *  FETCH : '@@my-app/FETCH',
 *  FETCH_START : '@@my-app/FETCH_START',
 *  FETCH_SUCCESS : '@@my-app/FETCH_SUCCESS',
 *  FETCH_ERROR : '@@my-app/FETCH_ERROR',
 *  SUBMIT : '@@my-app/SUBMIT',
 *  SUBMIT_START : '@@my-app/SUBMIT_START',
 *  SUBMIT_SUCCESS : '@@my-app/SUBMIT_SUCCESS',
 *  SUBMIT_ERROR : '@@my-app/SUBMIT_ERROR',
 * }
 */

```

action creator
```
import { createActionCreator } from 'redux-thunk-action-helpers';

export const doFetchUsers = createActionCreator('GET_USERS', (page, limit) => api.getUsers(page, limit));

```

### API

createActionTypes(namespace, ...types);

---

createActionCreator(type, fn);

fn = (...args, { dispatch, getState, extra }) => Promise/Value

License
----

MIT