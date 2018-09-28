import * as types from './actionTypes';
import store from '../store/configureStore';
export function handleClick(e){
    let id = e.currentTarget.id;
    switch(id){
        case 'start_stop':
        return {type:types.START_STOP};
        case 'reset':
        return {type:types.RESET};
        case 'break-increment':
        return {type:types.INCREMENT_BREAK};
        case 'break-decrement':
        return {type:types.DECREMENT_BREAK};
        case 'session-increment':
        return {type:types.INCREMENT_SESSION};
        case 'session-decrement':
        return {type:types.DECREMENT_SESSION};

        default:
        return;
    }
}

export function handleTimer(e){
    switch (e.type) {
        case 'FLIP_START_FLAG':
        return{type:types.START_STOP};
        case 'RUN_TIMER':
        return {type:types.DECREMENT};
        default:
        return;
    }
}