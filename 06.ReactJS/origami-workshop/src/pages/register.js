import React, { useState, useContext } from 'react';
import styles from './register.module.css';
import Wrapper from '../components/wrapper';
import Title from '../components/title';
import SubmitButton from '../components/button/submit';
import Input from '../components/input';
import UserContext from '../Context';

const Register = (props) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [rePassword, setRePassword] = useState("");

    const context = useContext(UserContext);

    const onChange = (event, type) => {
        if (type === "username") {
            setUsername(event.target.value);
        } else if (type === "password") {
            setPassword(event.target.value);
        } else if (type === "rePassword") {
            setRePassword(event.target.value);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password === rePassword) {
            try {
                const promise = await fetch("http://localhost:9999/api/user/register", {
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
                    context.logIn(response);
                    props.history.push("/")
                }
            } catch (error) {
                console.error(error);
            }
        }
    }

    return (
        <Wrapper>
            <div className={styles.container}>
                <Title title="Register Page" />
                <form onSubmit={handleSubmit}>
                    <Input title="Username" type="text" id="username" value={username} onChange={(e) => onChange(e, "username")} />
                    <Input title="Password" type="password" id="password" value={password} onChange={(e) => onChange(e, "password")} />
                    <Input title="Re-password" type="password" id="rePassword" value={rePassword} onChange={(e) => onChange(e, "rePassword")} />
                    <SubmitButton title="Register" />
                </form>
            </div>
        </Wrapper>
    )
};

export default Register;