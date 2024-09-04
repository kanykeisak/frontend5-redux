import React from 'react';
import {useDispatch, useSelector} from "react-redux";

const CounterPage = () => {
    const count = useSelector(state => state.counter)
    const dispatch = useDispatch()

    const increment = (amount) => {
        dispatch({
            type: 'INCREMENT',
            payload: amount
        })
    }
    const decrement = (amount) => {
        dispatch({
            type: 'DECREMENT',
            payload: amount
        })
    }

    const reset = (amount) => {
        dispatch({
            type: 'RESET',
            payload: amount
        })
    }


    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => increment(1)}> +1</button>
            <button onClick={() => increment(10)}> +10</button>
            <button onClick={() => decrement(1)}> -1</button>
            <button onClick={() => decrement(10)}> -10</button>
            <button onClick={reset}>Reset</button>

        </div>
    );
};

export default CounterPage;