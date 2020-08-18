import React, { useState, useContext, useEffect, useCallback } from 'react';
import styles from './profile.module.css';
import Wrapper from '../components/wrapper';
import Origamis from '../components/origamis';
import UserContext from '../Context';

const Profile = (props) => {
    const [username, setUsername] = useState(null);
    const [posts, setPosts] = useState(null);
    const context = useContext(UserContext);

    const getUser = useCallback(async () => {
        const res = await fetch(`http://localhost:9999/api/user?id=${props.match.params.userId}`);

        if (!res.ok) {
            props.history.push("/error");
        }

        const user = await res.json();

        setUsername(user.username);
        setPosts(user.posts && user.posts.length);
    }, [props.match.params.userId, props.history])

    useEffect(() => {
        getUser();
    }, [getUser]);

    const logOut = () => {
        context.logOut();
        props.history.push("/");
    }

    if (!username) {
        return (
            <Wrapper>
                <div>Loading...</div>
            </Wrapper>
        )
    }

    return (
        <Wrapper>
            <div className={styles.container}>
                <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="profile pic" />
                <div className={styles["personal-info"]}>
                    <p>
                        <span>Email: </span>
                        {username}
                    </p>
                    <p>
                        <span>Posts: </span>
                        {posts}
                    </p>
                    <button onClick={logOut}>Log out</button>
                </div>
                <div>
                    <h2>3 of your recent posts</h2>
                    <Origamis count="3" />
                </div>
            </div>
        </Wrapper>
    )
};

export default Profile;