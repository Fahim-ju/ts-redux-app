import {combineReducers} from '@reduxjs/toolkit';
import counterReducer from './counter/counterSlice';
import usersReducer from './user/userSlice';

const rootReducer = combineReducers({
    counter: counterReducer,
    user: usersReducer,
});

export default rootReducer;