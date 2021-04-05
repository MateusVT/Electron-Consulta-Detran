import React, { useContext, useEffect, useState } from 'react';
import {
    Toast, ToastBody, ToastHeader
} from 'reactstrap';
import { Context } from '../ComponentContext';
const ToastDisplay = ({ }: any) => {
    const context = useContext(Context)
    const [variable, setVariable] = useState(false);

    //ComponentDidMount()
    useEffect(() => {
    }, []);

    useEffect(() => {
    }, [variable]);

    const handler = () => { };

    return (
        <Toast isOpen={true} style={{ position: "absolute", right: 0, bottom: 0 }}>
            <ToastHeader icon="success">
                Reactstrap
                </ToastHeader>
            <ToastBody>
                This is a toast with a primary icon — check it out!
                    </ToastBody>
        </Toast>
    );
};


export default ToastDisplay;
