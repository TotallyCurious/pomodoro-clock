import initialState from './initialState';
import * as types from '../actions/actionTypes';
import store from '../store/configureStore';

function reducer(state=initialState,action){
    let upstate = Object.assign({},state);

    switch(action.type){
        case types.START_STOP:
        //* if timer is inactive, start timer and SET isActive flag
        if(!upstate.isActive){
            
            var counter = 10;
            upstate.nyc = setInterval(function () {
                console.log(counter);
                counter--;
                store.dispatch({type:types.DECREMENT});
                if (counter === 0) {
                    console.log("HAPPY NEW YEAR!!");
                    clearInterval(upstate.nyc);
                }
                return upstate;
            }, 1000);
        }
        //* If timer is active, pause timer
        if(upstate.isActive){
            clearInterval(upstate.nyc);
        }
        //*since pause timer function is clearInterval - which is inside the main function, 
        //* update a flag to trigger the clearInterval function conditional.
        
        
        
        upstate.isActive = !upstate.isActive;
        return upstate;

        case types.DECREMENT:
        upstate.sec -= 1;
        return upstate;
        
        case types.RESET:
        clearInterval(upstate.nyc);
        upstate.resetFlag = !upstate.resetFlag;
        return upstate=initialState;
                
        case types.INCREMENT_BREAK:
        upstate.breakLength++;
        return upstate;
        case types.DECREMENT_BREAK:
        upstate.breakLength--;
        return upstate;
        case types.INCREMENT_SESSION:
        upstate.sessionLength++;
        upstate.min = upstate.sessionLength;
        upstate.sec = '00';
        return upstate;
        case types.DECREMENT_SESSION:
        upstate.sessionLength--;
        upstate.min = upstate.sessionLength;
        upstate.sec = '00';
        return upstate;
        default:
        return upstate;
    }
}

export default reducer;