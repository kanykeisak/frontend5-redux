import React from 'react';
import {useDispatch} from "react-redux";
import {changeTitleAction} from "../../redux/actions";

const ChangeTitle = () => {

    const dispatch = useDispatch();

    const changeAboutTitle = () => {
        dispatch(changeTitleAction());
    }

    return (
        <div>
            <button onClick={() =>changeAboutTitle() }>Change about title</button>
        </div>
    );
};

export default ChangeTitle;