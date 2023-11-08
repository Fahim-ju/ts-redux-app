import { AnyAction, createAsyncThunk } from "@reduxjs/toolkit";
import instanceAxios from "../../interceptors/userInterceptor";
import { User } from "./data";

//create an asynchronous action
export const fetchUsers  = createAsyncThunk('user/fetchUsers',async () => {
    try{
        const response = await instanceAxios.get('https://jsonplaceholder.typicode.com/users');
        const data = await response.data;
        return data;
    } catch(error){
        throw error;
    }
});

