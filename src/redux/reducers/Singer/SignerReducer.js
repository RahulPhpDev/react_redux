import {GET_SINGER} from '../../ActionCreator/Singer/SingerActions';
const reducers = (state = {} , action) => {
    switch(action.type)
    {
        case GET_SINGER:
           return  Object.assign([], state, [ 
                {id : 1, name :'Narender Singh Negi'},
                {id : 2, name : 'BK Samant'}
            ])
    }
    return state;
} 

export default reducers;