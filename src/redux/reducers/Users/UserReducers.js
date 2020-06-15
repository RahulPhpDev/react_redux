// import {redux } from 'redux';
import {GET_USER,GET_USER_ADDRESS} from '../../ActionCreator/Index';
const initialState = {
    name :'Reuben',
    address: 'Haridwar'
};

const reducers = (state = initialState, action) => {
    switch(action.type) {
        case GET_USER:
            return Object.assign({}, state, {name: 'Rahul'})   
        case GET_USER_ADDRESS:
            return Object.assign({}, state, {address: 'HINDOLAKHAL'})   
        default:
             return state;    
    }
    
}

export default reducers;