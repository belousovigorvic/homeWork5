import './App.css'
import {Component} from "react";
import Input from "./Task1/Input/Input.jsx";
import Counter from "./Task2/Counter/Counter.jsx";

class App extends Component {

    render() {
        return (
            <>
                <Input/>
                <Input/>
                <Counter/>
            </>
        )
    }
}

export default App