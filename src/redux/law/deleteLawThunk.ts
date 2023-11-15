import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import instanceAxios from "../../interceptors/userInterceptor";

//create an asynchronous action
// const fetchController = new AbortController();
let source = axios.CancelToken.source();

export const deleteLaw  = createAsyncThunk('law/deleteLaw',async (Id: number) => {
    try{
        const response = await instanceAxios.delete(`https://localhost:44322/Law/${Id}`);
        return response;
    } catch(error){
        throw error;
    }
});

export default source;

