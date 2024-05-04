import {Component} from "react";

class AuthenticationService extends Component{
    registerSuccessfulLogin(username,password){
        console.log('registerSuccessfulLogin')
        sessionStorage.setItem('authenticatedUser', username);
    }

    logout() {
        sessionStorage.removeItem('authenticatedUser')
    }

    isUserLoggedIn() {
        let user = sessionStorage.getItem('authenticatedUser')
        if (user === null) return false
        return true
    }
}


// eslint-disable-next-line import/no-anonymous-default-export
export default new AuthenticationService()