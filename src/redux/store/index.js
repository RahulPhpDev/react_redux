// import UserReducers from '../reducers/Users/UserReducers';
import Reducers from '../reducers/Index';
import {store,createStore, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const storeConfig = createStore(Reducers, composeWithDevTools());
export default storeConfig;