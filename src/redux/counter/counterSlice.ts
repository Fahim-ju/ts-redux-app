
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface counterState{
    value: number;
}

const initialState: counterState = {
    value: 0,
};

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialState,
    reducers:{
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload;
        },
    }
});

export const {increment, decrement, incrementByAmount} = counterSlice.actions;
export default counterSlice.reducer;