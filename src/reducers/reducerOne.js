import initialState from './initialState';
import * as types from '../actions/actionTypes';
import store from '../store/configureStore';

function reducer(state=initialState,action){
    let upstate = Object.assign({},state);

    switch(action.type){
        case types.START_STOP:
        //* if timer is inactive, start timer and SET isActive flag
        if(!upstate.isActive){
            
            upstate.nyc = setInterval(function () {
                store.dispatch({type:types.DECREMENT});
                return upstate;
            }, 1000);
        }
        //* If timer is active, pause timer
        if(upstate.isActive){
            upstate.isActive=false;
            clearInterval(upstate.nyc);
            return upstate;
        }
                
        upstate.isActive = !upstate.isActive;
        return upstate;

        case types.DECREMENT:
        
        //* if sec value 00, rset to 59
        if (upstate.sec == 0){
            console.log(upstate.min,upstate.sec);
            if(upstate.min==0 && upstate.sec==0){
                console.log('in');

                //* if min value 00, reset timer to alternate timer, and initiate alarm
                //* BEEP BOOP, BEEP BOOP

                //* if timer is session, switch to break
                if (upstate.session=='session'){

                    upstate.min = upstate.breakLength;
                    upstate.session = 'break';
                    return upstate;
                }
                
                //* if timer is break, switch to session
                else if (upstate.session=='break'){

                    upstate.min = upstate.sessionLength;
                    upstate.session = 'session';
                    return upstate;
                }

                //TODO deploy alarm

            }
            
            upstate.sec = 59;
            return upstate;
        } 
        //* if values of min or sec are less than 10, append a leading '0'
        if(upstate.min <=9 || upstate.sec<=9){
            if(upstate.min <=9 && upstate.min.length==1){
                upstate.min = '0'.concat(upstate.min);
            }
            if(upstate.sec <=9 && upstate.min.length==1){
                upstate.sec = '0'.concat(upstate.sec);
            }

        }
        
        upstate.sec -= 1;

        return upstate;
        
        case types.RESET:
        clearInterval(upstate.nyc);

        //TODO rewind alarm position to start

        upstate = initialState;
        upstate.resetFlag = !upstate.resetFlag;
        upstate.min = upstate.sessionLength;
        upstate.sec = '00';
        return upstate;
                

        //Settings: Increments and Decrements

        case types.INCREMENT_BREAK:
        if(upstate.breakLength>=60){
            return upstate;
        }
        upstate.breakLength++;
        return upstate;


        case types.DECREMENT_BREAK:
        if(upstate.breakLength<=1){
            return upstate;
        }
        upstate.breakLength--;
        return upstate;
        
        
        case types.INCREMENT_SESSION:
        if(upstate.sessionLength>=60){
            return upstate;
        }
        upstate.sessionLength++;
        upstate.min = upstate.sessionLength;
        upstate.sec = '00';
        return upstate;
        
        
        case types.DECREMENT_SESSION:
        if(upstate.sessionLength<=1){
            return upstate;
        }
        upstate.sessionLength--;
        upstate.min = upstate.sessionLength;
        upstate.sec = '00';
        return upstate;
        
        
        default:
        return upstate;
    }
}

export default reducer;