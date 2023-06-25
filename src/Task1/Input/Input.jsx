import {Component} from "react";
import H2 from "../H2/H2.jsx";

class Input extends Component {
    constructor() {
        super();
        this.state = {
            value: '',
            show: false
        }
    }

    handleChange = (event) => {
        this.state.value || this.setState({show: false})
        this.setState({value: event.target.value})
    }

    handleClick = () => {
        this.setState(prevState => (this.state.value !== '' ? {
            show: !prevState.show
        } : null));
    }

    render() {

        const {show, value} = this.state

        return (
            <div className="inputBlock">
                {show && <H2>{value}</H2>}
                <input onChange={this.handleChange} value={this.state.value} type="text"/>
                <button onClick={this.handleClick}>{value !== '' ? (show ? "Hide" : "Show") : "Show"}</button>
            </div>
        )
    }
}

export default Input