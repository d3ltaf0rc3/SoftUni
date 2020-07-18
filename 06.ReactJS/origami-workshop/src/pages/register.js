import React, { Component } from 'react'
import styles from './register.module.css';
import Wrapper from '../components/wrapper';
import Title from '../components/title';
import SubmitButton from '../components/button/submit';
import Input from '../components/input';

class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            rePassword: ""
        }
    }

    onChange = (event, type) => {
        const newState = {};
        newState[type] = event.target.value;

        this.setState(newState)
    }

    render() {
        const {email, password, rePassword} = this.state;
        
        return (
            <Wrapper>
                <div className={styles.container}>
                    <Title title="Register Page" />
                    <form>
                        <Input title="Email" type="text" id="email" value={email} onChange={(e) => this.onChange(e, "email")}/>
                        <Input title="Password" type="password" id="password" value={password} onChange={(e) => this.onChange(e, "password")}/>
                        <Input title="Re-password" type="password" id="rePassword" value={rePassword} onChange={(e) => this.onChange(e, "rePassword")}/>
                        <SubmitButton title="Register" />
                    </form>
                </div>
            </Wrapper>
        )
    }
};

export default Register;