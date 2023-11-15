import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import instanceAxios from "../../interceptors/userInterceptor";
import { UserFormData } from "../../forms/insertUserForm";

//create an asynchronous action
// const fetchController = new AbortController();
let source = axios.CancelToken.source();

export const updateUser  = createAsyncThunk('user/updateUser',async (formData: UserFormData) => {
    try{
        const response = await instanceAxios.post("https://localhost:44322/User/UpdateUser", formData);
        return response;
    } catch(error){
        throw error;
    }
});

export default source;

