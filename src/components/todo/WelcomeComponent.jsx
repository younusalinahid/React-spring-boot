import React, {Component} from "react";
import {Link} from "react-router-dom";
import HelloWorldService from "../../api/todo/HelloWorldService";

class WelcomeComponent extends Component{

    constructor(props) {
        super(props);
        this.retrieveWelcomeMessage = this.retrieveWelcomeMessage.bind(this)
        this.state = {
            welcomeMessage: ''
        };
        this.handleSuccessfulResponse = this.handleSuccessfulResponse.bind(this)
        // this.handleError = this.handleError.bind(this)
    }

    render() {
        const { name } = this.props; // Destructure name from props

        return (
            <>
                <h1>Welcome!</h1>
                <div className="container">
                    {/* eslint-disable-next-line no-restricted-globals */}
                    Welcome {name}.
                    You can manage your todos <Link to="/todos">here</Link>
                </div>
                <div className="container">
                    Click here to get a customized welcome message.
                    <button onClick={this.retrieveWelcomeMessage}
                            className="btn btn-success">Get Welcome message</button>
                </div>
                <div className="container">
                    {this.state.welcomeMessage}
                </div>
            </>
        );
    }

    retrieveWelcomeMessage() {
        // HelloWorldService.executeHelloWorldService()
        // .then( response => this.handleSuccessfulResponse(response) )

        // HelloWorldService.executeHelloWorldBeanService()
        // .then( response => this.handleSuccessfulResponse(response) )

        HelloWorldService.executeHelloWorldPathVariableService(this.props.params.name)
            .then(response => this.handleSuccessfulResponse(response))
            //.catch(error => this.handleError(error))
    }

    handleSuccessfulResponse(response) {
        console.log(response)
        this.setState({welcomeMessage: response.data.message})
    }
}

export default WelcomeComponent;