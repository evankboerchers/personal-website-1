import React from 'react';
import {useEffect}from 'react';


function Aboutme() {

    useEffect(() => {
        console.log("About Me")
    },[])

    return (
        <h1>
            About Me
        </h1>
    );
}

export default Aboutme;