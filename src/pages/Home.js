import React, { useEffect } from 'react';



function Home() {

    useEffect(() => {
        console.log("Home page")
    },[])

    return (
        <h1>
            Home page
        </h1>
    );
}

export default Home;