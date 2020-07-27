import React, { Component } from 'react';
import styles from './register.module.css';
import Wrapper from '../components/wrapper';
import Title from '../components/title';
import SubmitButton from '../components/button/submit';
import Input from '../components/input';
import UserContext from '../Context';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: ""
        };
    }

    static contextType = UserContext;

    handleChange = (event, type) => {
        const newState = {};
        newState[type] = event.target.value;

        this.setState(newState)
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const { username, password } = this.state;

        try {
            const promise = await fetch("http://localhost:9999/api/user/login", {
                method: "post",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username,
                    password
                })
            })

            const authToken = promise.headers.get("Authorization");
            document.cookie = `x-auth-token=${authToken}`;

            const response = await promise.json();

            if (response.username && authToken) {
                this.context.logIn(response);
                this.props.history.push("/");
            }
        } catch (error) {
            console.error(error);
        }
    }

    render() {
        const { username, password } = this.state;

        return (
            <Wrapper>
                <div className={styles.container}>
                    <Title title="Login Page" />
                    <form onSubmit={this.handleSubmit}>
                        <Input title="Username" type="text" id="username" value={username} onChange={(e) => this.handleChange(e, "username")} />
                        <Input title="Password" type="password" id="password" value={password} onChange={(e) => this.handleChange(e, "password")} />
                        <SubmitButton title="Login" />
                    </form>
                </div>
            </Wrapper>
        )
    }
};

export default Login;