import React, { useContext, useEffect, useState } from 'react';

const Hook = ({ }: any) => {
    // const context = useContext(ComponentContext)

    const [variable, setVariable] = useState(false);

    //ComponentDidMount()
    useEffect(() => {
    }, []);

    useEffect(() => {
    }, [variable]);

    const handler = () => { };

    return (
        <>
        </>
    );
};


export default Hook;
