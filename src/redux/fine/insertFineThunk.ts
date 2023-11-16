import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import instanceAxios from "../../interceptors/userInterceptor";
import  {Fine}  from "../../forms/insertFineForm";

//create an asynchronous action
// const fetchController = new AbortController();
let source = axios.CancelToken.source();

export const insertFine  = createAsyncThunk('Fine/AddFine',async (fine: Fine) => {
    try{
        const response = await instanceAxios.post("https://localhost:44322/Fine/AddFine", fine);
        return response;
    } catch(error){
        throw error;
    }
});

export default source;

