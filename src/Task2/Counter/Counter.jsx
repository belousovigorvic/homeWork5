import {Component} from "react";

class Counter extends Component {

    constructor() {
        super();
        this.state = {
            count: 0
        }
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        const {count} = nextState;
        return count >= 0 && count <= 5;
    }

    handleIncrement = () => {
        this.setState(prev => ({count: prev.count + 1}))
    }

    handleDecrement = () => {
        this.setState(prev => ({count: prev.count - 1}))
    }

    render() {
        return (
            <div>
                <h2>{this.state.count}</h2>
                <button onClick={this.handleIncrement}>+</button>
                <button onClick={this.handleDecrement}>-</button>
            </div>
        )
    }
}

export default Counter