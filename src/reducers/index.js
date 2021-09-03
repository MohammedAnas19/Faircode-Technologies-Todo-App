import authReducer from './auth.reducers';
import todoReducer from './todo.reducers';
import {combineReducers} from 'redux';

const rootReducer=combineReducers({
    auth:authReducer,
    todo:todoReducer,
});
export default rootReducer;