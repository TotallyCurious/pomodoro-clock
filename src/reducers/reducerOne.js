import initialState from './initialState';
import * as types from '../actions/actionTypes';

function reducer(state=initialState,action){
    let upstate = Object.assign({},state);

    switch(action.type){
        case types.START_STOP:
        upstate.isActive = !upstate.isActive;
        return upstate;

        case types.DECREMENT:
        upstate.sec -= 1;
        return upstate;
        
        case types.RESET:
        return upstate=initialState;
        // upstate.resetFlag = !upstate.resetFlag;
        return upstate;
        


        
        case types.INCREMENT_BREAK:
        upstate.breakLength++;
        return upstate;
        case types.DECREMENT_BREAK:
        upstate.breakLength--;
        return upstate;
        case types.INCREMENT_SESSION:
        upstate.sessionLength++;
        return upstate;
        case types.DECREMENT_SESSION:
        upstate.sessionLength--;
        return upstate;
        default:
        return upstate;
    }
}

export default reducer;