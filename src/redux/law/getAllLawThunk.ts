import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import instanceAxios from "../../interceptors/userInterceptor";

//create an asynchronous action
// const fetchController = new AbortController();
let source = axios.CancelToken.source();

export const getAllLawthunk  = createAsyncThunk('law/insertLaw',async () => {
    try{
        const response = await instanceAxios.get("https://localhost:7010/api/Laws");
        return response.data;
    } catch(error){
        throw error;
    }
});


