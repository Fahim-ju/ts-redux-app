import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import instanceAxios from "../../interceptors/userInterceptor";
import { User } from "../../components/UserList";

//create an asynchronous action
// const fetchController = new AbortController();
let source = axios.CancelToken.source();

export const DeActivateUser  = createAsyncThunk('user/activateUser',async (formData: User) => {
    try{
        const response = await instanceAxios.post("https://localhost:44322/User/ActivateUser", formData);
        return response;
    } catch(error){
        throw error;
    }
});

export default source;

