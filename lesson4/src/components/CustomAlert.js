import React from 'react';
import {Alert} from 'react-bootstrap'

const CustomAlert = ({showAlert, variant}) => {

    if (!showAlert) return null;

    return (
        <>
            <Alert variant={variant}>
                This is a {variant} alert—check it out!
            </Alert>
        </>
    );
};

export default CustomAlert;