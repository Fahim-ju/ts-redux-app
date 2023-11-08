import { configureStore, getDefaultMiddleware, ThunkDispatch } from "@reduxjs/toolkit";
import rootReducer from './reducers';
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import thunk from "redux-thunk";


const store = configureStore({
    reducer: rootReducer,
    middleware: [thunk],
});

export type RootState = ReturnType< typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default store;