import { useEffect } from "react";
import {useSelector, useDispatch} from 'react-redux';
import { RootState, AppDispatch, useAppDispatch } from '../redux/store';
import { fetchUsers } from "../redux/user/userActions";
import { ThunkDispatch } from "@reduxjs/toolkit";

function UserList(){
    const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
    const users   = useSelector((state: RootState) => state.user.data);
    const status = useSelector((state: RootState) => state.user.status)

    useEffect( () => {
        if(status === 'idle'){
            dispatch( fetchUsers() );  ///type error
        }
    }, [] );


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