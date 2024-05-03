import React, {Component} from "react"
import {BrowserRouter as Router, Route, Routes, Link, useParams} from 'react-router-dom'
import withNavigation from './WithNavigation.jsx'
import withParams from './WithParams.jsx'


class TodoApp extends Component {
    render() {
        const LoginComponentWithNavigation = withNavigation(LoginComponent);
        const WelcomeComponentWithParams = withParams(WelcomeComponent);
        return (
            <div className="TodoApp">
                <Router>
                    <Routes>
                        <Route path="/" element={<LoginComponentWithNavigation />} />
                        <Route path="/login" element={<LoginComponentWithNavigation />} />
                        <Route path="/welcome/:name" element={<WelcomeComponentWithParams />} />
                        <Route path="/todos" element={<ListTodosComponent />} />
                        <Route path="*" element={<ErrorComponent />} />
                    </Routes>
                </Router>
            </div>
        )
    }
}

class LoginComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: 'younusalinahid',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false
        }
        //this.handleUsernameChange = this.handleUsernameChange.bind(this)
        //this.handlePasswordChange = this.handlePasswordChange.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)
    }

    handleChange(event) {
        this.setState(
            {
                [event.target.name]: event.target.value
            }
        )
    }

    loginClicked() {
        if(this.state.username==='younusalinahid' && this.state.password==='dummy'){
            this.props.navigate(`/welcome/${this.state.username}`)
        }
        else {
            this.setState({showSuccessMessage:false})
            this.setState({hasLoginFailed:true})
        }
        console.log(this.state)
    }

    render() {
        return (
            <div>
                {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
                {this.state.showSuccessMessage && <div>Login Successful</div>}
                <div className="TodoApp">
                    User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
                    Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
                    <button onClick={this.loginClicked}>Login</button>
                </div>
            </div>
        )
    }
}

class ListTodosComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [
                    {id: 1, description: 'Learn React', done:false, targetData: new Date()},
                    {id: 2, description: 'Become an Expert at React', done:false, targetData: new Date()},
                    {id: 3, description: 'Visit India', done:false, targetData: new Date()}
            ]
        }
    }

    render() {
        return (
            <div>
                <h1>List Todos</h1>
                <table>
                    <thead>
                    <tr>
                        <th>id</th>
                        <th>description</th>
                        <th>Target Date</th>
                        <th>Is Completed?</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.todos.map(
                            todo =>
                                <tr>
                                    <td>{todo.id}</td>
                                    <td>{todo.description}</td>
                                    <td>{todo.done.toString()}</td>
                                    <td>{todo.targetData.toString()}</td>
                                </tr>
                        )
                    }
                    </tbody>
                </table>
            </div>
        );
    }
}

function WelcomeComponent() {
    const { name } = useParams();
    return (
        <div>
            Welcome {name}. You can manage your todos <Link to="/todos">here</Link>
        </div>
    );
}

function ErrorComponent() {
    return <div>An Error Occurred. I don't know what to do! Contact support at add-efe-kill</div>
}

export default TodoApp;