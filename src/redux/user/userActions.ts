import { AnyAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import { User, user } from "./data";

//create an asynchronous action
export const fetchUsers = createAsyncThunk('user/fetchUsers',async () => {
    try{
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        const data = await response.data;
        return data;
    } catch(error){
        throw error;
    }
});

axios.interceptors.request.use(reqConfig => {
    return reqConfig;
  });
  
  axios.interceptors.response.use(response => {
      response.data.push(user); /// my data inserted to response
      console.log(response);
    return response;
  }, error => {
    return Promise.reject(error);
  });