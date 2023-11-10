import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import source, {fetchUsers} from "../redux/user/userActions";
import { Link } from "react-router-dom";

function UserList(){
    const dispatch = useAppDispatch();
    const users   = useAppSelector((state) => state.user.data);
    const status = useAppSelector((state) => state.user.status);
    
    useEffect( () => {
        console.log("UserList is running..." + status);
        if(status === 'idle'){
            dispatch( fetchUsers() ); 
        }

        return () => {
            console.log("return of useEffect");
            //source.cancel("The call is cancelled from useEFFEct");
        }

    }, );
    

    if(status === 'loading'){
        return (<div> Loading.. </div>);
    }
    else if(status === 'failed'){
        return (<div> Error: An Error occurred while fetching users</div>);
    }

    return (
        <div>
            <h1>User List</h1>
            <Link to='/counter'> Counter </Link> 
            <ul>
                {users.map((user) => (
                <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default UserList;