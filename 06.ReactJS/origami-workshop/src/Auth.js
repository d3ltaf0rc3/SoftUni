import React, { Component } from 'react';
import UserContext from './Context';

function getCookie(name) {
    const value = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return value ? value[2] : null;
}

class Auth extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn: null,
            user: null
        }
    }

    componentDidMount() {
        const token = getCookie("x-auth-token");

        if (!token) {
            this.logOut()
            return;
        }
        
        fetch("http://localhost:9999/api/user/verify", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                token
            })
        }).then(promise => promise.json())
        .then(res => {
            if (res.status) {
                this.logIn(res.user);
            } else {
                this.logOut();
            }
        })
        .catch((err) => console.error(err));
    }

    logIn = (user) => {
        this.setState({
            isLoggedIn: true,
            user
        });
    }

    logOut = () => {
        document.cookie = "x-auth-token= ; expires = Thu, 01 Jan 1970 00:00:00 GMT"
        this.setState({
            isLoggedIn: false,
            user: null
        })
    }

    render() {
        if (this.state.isLoggedIn === null) {
            return (
                <div>Loading...</div>
            )
        }
        
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