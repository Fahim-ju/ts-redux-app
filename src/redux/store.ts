import { configureStore } from "@reduxjs/toolkit";
import rootReducer from './reducers';
import { TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import thunk from "redux-thunk";


const store = configureStore({
    reducer: rootReducer,
});

export type RootState = ReturnType< typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;