import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import instanceAxios from "../../interceptors/userInterceptor";
import { LawFormData } from "../../forms/insertLawForm";

//create an asynchronous action
// const fetchController = new AbortController();
let source = axios.CancelToken.source();

export const insertLaw  = createAsyncThunk('law/insertLaw',async (formData: LawFormData) => {
    try{
        const response = await instanceAxios.post("https://localhost:7010/api/Laws", formData);
        return response;
    } catch(error){
        throw error;
    }
});

export default source;

