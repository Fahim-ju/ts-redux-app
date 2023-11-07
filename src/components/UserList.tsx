import { useEffect } from "react";
import {useSelector, useDispatch} from 'react-redux';
import { RootState, AppDispatch } from '../redux/store';
import { fetchUsers } from "../redux/user/userActions";

function UserList(){
    const dispatch = useDispatch<AppDispatch>();
    const users   = useSelector((state: RootState) => state.user.data);
    const status = useSelector((state: RootState) => state.user.status)

    useEffect( () => {
        if(status === 'idle'){
            dispatch( fetchUsers() as any);  ///type error
        }
    }, [status] );


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