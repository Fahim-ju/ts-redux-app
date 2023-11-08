import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import {  RootState} from '../redux/store';
import { fetchUsers } from "../redux/user/userActions";

function UserList(){
    const dispatch = useAppDispatch();
    const users   = useAppSelector((state) => state.user.data);
    const status = useAppSelector((state) => state.user.status);

    useEffect( () => {
        if(status === 'idle'){
            dispatch( fetchUsers() );  
        }
    }, [status, dispatch] );


    if(status === 'loading'){
        return (<div> Loading.. </div>);
    }
    else if(status === 'failed'){
        return (<div> Error: An Error occurred while fetching users</div>);
    }

    return (
        <div>
            <h2>User List</h2>
            <ul>
                {users.map((user) => (
                <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default UserList;