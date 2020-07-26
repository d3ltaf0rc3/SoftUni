import React, { Component } from 'react';
import UserContext from './Context';

class Auth extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn: false,
            user: null
        }
    }

    logIn = (user) => {
        this.setState({
            isLoggedIn: true,
            user
        });
    }

    logOut = () => {
        this.setState({
            isLoggedIn: false,
            user: null
        })
    }

    render() {
        return (
            <UserContext.Provider value={{
                isLoggedIn: this.state.isLoggedIn,
                user: this.state.user,
                logIn: this.logIn,
                logOut: this.logOut
            }}>
                {this.props.children}
            </UserContext.Provider>
        );
    }
};

export default Auth;