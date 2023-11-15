import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import instanceAxios from "../../interceptors/userInterceptor";

//create an asynchronous action
// const fetchController = new AbortController();
let source = axios.CancelToken.source();

export const getAllUser  = createAsyncThunk('user/getAllUser',async () => {
    try{
        const response = await instanceAxios.get("https://localhost:44322/User/GetUsers");
        return response.data;
    } catch(error){
        throw error;
    }
});


