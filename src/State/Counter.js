import { Component } from "react";

export default class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            min: 0,
            age: 25
        }
    }
    componentDidMount() {
        setInterval(() => { // had setInterval katkhaliha kt3awd 
            if (this.state.counter === 60) {

                this.setState({ counter: 0 })
                this.setState({ min: this.state.min + 1 })
            }
            else { this.setState({ counter: this.state.counter + 1 }) }
        }, 1000)

    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log(nextState.age);
        if (nextState.age !== this.state.age) {
            return false
        }
        return true
    }
    render() {
        return <div>
            il y a {this.state.min} min {this.state.counter} secondes
        </div>
    }
}