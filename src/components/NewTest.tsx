import axios from "axios";
import { apiRequestsFormat } from "../interceptors/axiosRequests";


let source = axios.CancelToken.source();

export default function TestButton(){

    const handleCallApi= () =>{
        const response =  apiRequestsFormat.getRequest('https://jsonplaceholder.typicode.com/users',source.token);
        console.log(response);
    }
    const handleCancleApi = () => {
        source.cancel();
    }

    return (
    <div>
        <button onClick={handleCallApi}>Call api </button>
        <button onClick={handleCancleApi}>cancel api </button>
    </div>
    );
}

///api call cannot be processed after a single time request cancellation.