// import { Component } from "react";

import { useEffect, useState } from "react";

export default function Counter() {

    const [counter, setCounter] = useState(0);
    const [min, setMin] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(incrementCounter, 1000);
        return () => clearInterval(intervalId);
    }, [])
    useEffect(() => {
        console.log("use Effect will update changed")
    }, [min])

    const incrementCounter = () => {
        if (counter === 60) {
            setCounter(0)
            setMin((prevMin) => prevMin + 1);
        }
        else {
            console.log(counter)
            setCounter((prevCounter) => prevCounter + 1);
        }

    }

    return (<div>
        il y a {min} min {counter} secondes
    </div>)

}