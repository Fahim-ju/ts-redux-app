import axios, {InternalAxiosRequestConfig,AxiosResponse} from 'axios';
import { user } from "../redux/user/data";

let cnt = 0;

const instanceAxios = axios.create({baseURL: ''});

instanceAxios.interceptors.request.use((reqConfig : InternalAxiosRequestConfig) => {
  console.log("API request is ongoing");
    return reqConfig;
  });
  
  instanceAxios.interceptors.response.use((response : AxiosResponse ) => {
    //response.data.push(user); // my data inserted to response
    //console.log(response + " "+cnt++);
    return response;
  }, error => {
    return Promise.reject(error);
  });

  export default instanceAxios;