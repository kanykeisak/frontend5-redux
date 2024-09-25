import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {increment, decrement, reset} from "../../store/counterSlice";

const CounterPage = () => {

    const dispatch = useDispatch()

    const count = useSelector(state => state.counterReducer.value)

    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <button onClick={() => dispatch(reset())}>Reset</button>
        </div>
    );
};

export default CounterPage;