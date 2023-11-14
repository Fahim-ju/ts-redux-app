import {combineReducers} from '@reduxjs/toolkit';
import counterReducer from './counter/counterSlice';
import usersReducer from './user/userSlice';
import lawsReducer from './law/lawSlice'

const rootReducer = combineReducers({
    counter: counterReducer,
    user: usersReducer,
    law: lawsReducer,
});

export default rootReducer;