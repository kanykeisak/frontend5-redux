import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {changeInputAction, changeTitle, changeTitleWithParams, deleteTitle} from "../../store/mainSlice";


const MainPage = () => {
    const dispatch = useDispatch()

    const {title, inputValue} = useSelector(state => state.mainReducer)

    const changeTitleFunc = () => {
        dispatch(changeTitle())
    }

    const withParams = () => {
        dispatch(changeTitleWithParams(inputValue) )
    }

    const changeInput = (event) => {
        dispatch(changeInputAction(event.target.value))
    }

    return (
        <div>
            <h1>{title}</h1>
            {/*<button onClick={changeTitleFunc}>change title</button>*/}
            {/*<button onClick={withParams}>change title with params</button>*/}
            <input type="text" value={inputValue} onChange={changeInput}/>
            <button onClick={withParams}>add</button>
            <button onClick={() => dispatch(deleteTitle())}>delete</button>
        </div>
    );
};

export default MainPage;