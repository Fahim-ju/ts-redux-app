import axios, {InternalAxiosRequestConfig,AxiosResponse} from 'axios';
import { user } from "../redux/user/data";




const instanceAxios = axios.create();

instanceAxios.interceptors.request.use((reqConfig : InternalAxiosRequestConfig) => {
    return reqConfig;
  });
  
  instanceAxios.interceptors.response.use((response : AxiosResponse ) => {
      response.data.push(user); /// my data inserted to response
      console.log(response);
    return response;
  }, error => {
    return Promise.reject(error);
  });

  export default instanceAxios;