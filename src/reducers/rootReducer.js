import {combineReducers} from 'redux';
import one from './reducerOne';
import two from './reducerTwo';

const rootReducer = combineReducers({
    one,two
});

export default rootReducer;