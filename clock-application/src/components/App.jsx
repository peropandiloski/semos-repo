import React, { useState } from "react";
import Heading from './Heading'
import Copyright from './Copyright'

function App() {
    setInterval(updateTime, 1000);

    const now = new Date().toLocaleTimeString();

    const [time, setTime] = useState(now);

    function updateTime() {
        const newTime = new Date().toLocaleTimeString();
        setTime(newTime);
    }

    return (

        <div>
            <Heading />
            <h1>{time}</h1>
            <Copyright />
        </div>
    );
}

export default App;
