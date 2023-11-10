import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiRequestsFormat } from "../../interceptors/axiosRequests";
import axios from "axios";

//create an asynchronous action
// const fetchController = new AbortController();
let source = axios.CancelToken.source();

export const fetchUsers  = createAsyncThunk('user/fetchUsers',async () => {
    try{
        const response = await apiRequestsFormat.getRequest('https://jsonplaceholder.typicode.com/users',source.token);
        const data = await response?.data;
        return data;
    } catch(error){
        throw error;
    }
});

export default source;

