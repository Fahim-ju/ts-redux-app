import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import instanceAxios from "../../interceptors/userInterceptor";

//create an asynchronous action
// const fetchController = new AbortController();
let source = axios.CancelToken.source();

export const insertFine  = createAsyncThunk('Fine/GetFines',async () => {
    try{
        const response = await instanceAxios.post("https://localhost:44322/Fine/GetFines");
        return response;
    } catch(error){
        throw error;
    }
});

export default source;

