import { fetchUsers } from "./userActions";
import {createSlice, isAction, PayloadAction} from '@reduxjs/toolkit';
import { user } from './data';

interface User{
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        };
    };
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    };
};

interface userState{
    data: User[],
    status: string,
    error: any
}

const initialState: userState = {
    data: [],
    status: 'idle',
    error: null,
}

const usersReducer = createSlice({
    name: 'users',
    initialState: initialState,
    reducers: { },
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(fetchUsers.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.data = action.payload;
        })
        .addCase(fetchUsers.rejected, (state,action) =>{
            state.status = 'failed';
           // state.error = action.error.message;
        });
    }
});

export default usersReducer.reducer;