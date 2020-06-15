// import  UserReducers from './UserReducers';
// import { useReducer } from 'react';

import { combineReducers } from 'redux';
import UserReducers from './Users/UserReducers';
import SignerReducer from './Singer/SignerReducer';
const reducers = combineReducers( {
    users: UserReducers,
    singers : SignerReducer
});

// const reducers = combineReducers({
//     ...combinesReducers,
//     ...templatesReducers,
//   });
// export default  red
  export default  reducers;
  
//   export * from './combine.actions';