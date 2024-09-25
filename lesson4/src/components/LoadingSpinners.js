import React from 'react';
import {Spinner} from "react-bootstrap";

const LoadingSpinners = ({isLoading}) => {

    if (!isLoading) return null;

    return (
        <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner>
    );
};

export default LoadingSpinners;