import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {asyncFunctionAction} from "../../redux/actions";

const AboutPage = () => {

    const title = useSelector(state => state.aboutReducer.aboutPageTitle);

    const dispatch = useDispatch()

    return (
        <div>
            <h1>{title}</h1>
            <button onClick={() => dispatch(asyncFunctionAction())}>after 2 sec</button>
        </div>
    );
};

export default AboutPage;