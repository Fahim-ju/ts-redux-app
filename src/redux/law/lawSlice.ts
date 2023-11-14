import { getAllLawthunk } from "./getAllLawThunk";
import {createSlice, isAction, PayloadAction} from '@reduxjs/toolkit';

interface Law{
    Id?: number;
  Name: string;
  Description: string;
};

interface lawState{
    data: Law[],
    status: string,
    error: any
}

const initialState: lawState = {
    data: [],
    status: 'idle',
    error: null,
}

const lawsReducer = createSlice({
    name: 'laws',
    initialState: initialState,
    reducers: { },
    extraReducers: (builder) => {
        builder.addCase(getAllLawthunk.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(getAllLawthunk.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.data = action.payload;
        })
        .addCase(getAllLawthunk.rejected, (state,action) =>{
            state.status = 'failed';
           // state.error = action.error.message;
        });
    }
});

export default lawsReducer.reducer;