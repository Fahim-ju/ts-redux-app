import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import instanceAxios from "../../interceptors/userInterceptor";
import { LawFormData } from "../../forms/insertLawForm";

//create an asynchronous action
// const fetchController = new AbortController();
let source = axios.CancelToken.source();

export const updateLaw  = createAsyncThunk('law/insertLaw',async (formData: LawFormData) => {
    try{
        const response = await instanceAxios.post(`https://localhost:44322/Law/UpdateLaw`, formData);
        return response;
    } catch(error){
        throw error;
    }
});

export default source;

