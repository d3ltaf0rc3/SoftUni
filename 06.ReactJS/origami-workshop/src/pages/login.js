import React, { Component } from 'react'
import styles from './register.module.css';
import Wrapper from '../components/wrapper';
import Title from '../components/title';
import SubmitButton from '../components/button/submit';
import Input from '../components/input';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: ""
        }
    }

    onChange = (event, type) => {
        const newState = {};
        newState[type] = event.target.value;

        this.setState(newState)
    }

    render() {
        const {email, password} = this.state;
        
        return (
            <Wrapper>
                <div className={styles.container}>
                    <Title title="Login Page" />
                    <form>
                        <Input title="Email" type="text" id="email" value={email} onChange={(e) => this.onChange(e, "email")}/>
                        <Input title="Password" type="password" id="password" value={password} onChange={(e) => this.onChange(e, "password")}/>
                        <SubmitButton title="Login" />
                    </form>
                </div>
            </Wrapper>
        )
    }
};

export default Login;