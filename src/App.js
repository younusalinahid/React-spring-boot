import React, {Component} from "react"
import FirstComponent from './components/learning-examples/FistComponent'
import SecondComponent from './components/learning-examples/SecondComponent'
import ThirdComponent from './components/learning-examples/ThirdComponent'
import CounterButton from "./components/counter/Counter";
import './App.css'
import Counter from "./components/counter/Counter";
import TodoApp from "./components/todo/TodoApp";


class App extends Component {
    render() {
        return (
            <div className="App">
                {/*<Counter/>*/}
                <TodoApp/>
            </div>
        );
    }
}


class LearningComponent extends Component {
    render() {
        return (
            <div className="LearningComponents">
                My Hello World
                <FirstComponent></FirstComponent>
                <SecondComponent></SecondComponent>
                <ThirdComponent></ThirdComponent>
            </div>
        );
    }
}

export default App
