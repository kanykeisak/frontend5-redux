import React from 'react';
import {useSelector} from "react-redux";

const AboutPage = () => {

    const title = useSelector(state => state.aboutPageTitle);

    return (
        <div>
            <h1>{title}</h1>
        </div>
    );
};

export default AboutPage;