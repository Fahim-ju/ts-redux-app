import axios, { CancelToken } from "axios";
import instanceAxios from "./userInterceptor";

export const apiRequestsFormat = {
  getRequest: function (url: string, cancelToken?: CancelToken) {
    let config = { cancelToken: cancelToken };
    return instanceAxios.get(url,config)
      .then(function (res) {
        return res;
      })
      .catch(function (error) {
        if (axios.isCancel(error)) {
          console.log("axios request cancelled", error.message, url);
        } else {
          if (error.response) {
            if (error.response.status === 500) {
              window.alert("internal server error");
            } else if (error.response.status === 404) {
              window.alert("Resource not found");
            } else if (error.response.status === 401) {
              window.alert("Unauthorized user");
            }
          } else if (error.request) {
            console.log("error.request", error.request);
          } else {
            window.alert(error.message);
          }
        }
      });
  }
};