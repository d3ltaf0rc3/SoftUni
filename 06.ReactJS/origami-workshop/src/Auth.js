import React, { useEffect, useState } from 'react';
import UserContext from './Context';

function getCookie(name) {
    const value = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return value ? value[2] : null;
}

const Auth = (props) => {
    const [isLoggedIn, setLoggedIn] = useState(null);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const token = getCookie("x-auth-token");

        if (!token) {
            return logOut();
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
                    logIn(res.user);
                } else {
                    logOut();
                }
            })
            .catch((err) => console.error(err));
    })

    const logIn = (user) => {
        setLoggedIn(true);
        setUser(user);
    }

    const logOut = () => {
        document.cookie = "x-auth-token= ; expires = Thu, 01 Jan 1970 00:00:00 GMT"
        setLoggedIn(false);
        setUser(null);
    }

    if (isLoggedIn === null) {
        return (
            <div>Loading...</div>
        )
    }

    return (
        <UserContext.Provider value={{
            isLoggedIn,
            user,
            logIn,
            logOut
        }}>
            {props.children}
        </UserContext.Provider>
    );
};

export default Auth;