import {useSelector, useDispatch} from 'react-redux';
import * as counterAction from '../redux/counter/counterSlice';
import { RootState, AppDispatch } from '../redux/store';
import { Link } from 'react-router-dom';

function Counter(){
    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch<AppDispatch>();

    return (
        <div>
            <h1> Counter Application </h1>
            <Link to='/users'> Users</Link>
            <h2> Counter: {count} </h2>
            <button onClick={()=> dispatch(counterAction.increment())}> Increment </button>
            <button onClick={()=> dispatch(counterAction.decrement())}> Decrement</button>
            <button onClick={()=> dispatch(counterAction.incrementByAmount(5))}> Increase 5</button>
        </div>
    );
}

export default Counter;