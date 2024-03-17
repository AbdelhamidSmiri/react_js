import { useEffect, useState } from "react"

export default function Inputs() {
    const [listFruit, setListFruit] = useState([]);
    const [fruit, setfruit] = useState("");


    useEffect(() => {
        console.log("coco from use effect from inputs")
    }, [])

    const displaytable = () => listFruit.map((fruit, index) =>
        <li key={index}>{fruit}</li>
    );

    const handelInput = () => {
        setfruit(document.querySelector("#fruit_input").value)
        console.log(fruit)
    }

    const saveFruits = (e) => {
        e.preventDefault()
        setListFruit([...listFruit, fruit])
    }


    return (
        <>
            <form>
                <label for="" class="form-label">Fruits</label>
                <input
                    type="text"
                    class="form-control"
                    name=""
                    id="fruit_input"
                    aria-describedby="helpId"
                    placeholder=""
                    onChange={handelInput}
                />
                <input type="submit" onClick={saveFruits} value="send" />
            </form >

            <ul>
                {displaytable()}
            </ul>
        </>
    )
}

/*
import { Component } from "react";

export default class Inputs extends Component {
    render() {
        return <>
            <label for="" class="form-label">Name</label>
            <input
                type="text"
                class="form-control"
                name=""
                id=""
                aria-describedby="helpId"
                placeholder=""
            />
            <small id="helpId" class="form-text text-muted">{this.props.children}</small>
        </>
    }
}
*/