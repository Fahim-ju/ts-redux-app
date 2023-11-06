import { createAsyncThunk } from "@reduxjs/toolkit";

//create an asynchronous action
export const fetchUsers = createAsyncThunk('user/fetchUsers',async () => {
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        return data;
    } catch(error){
        throw error;
    }
});