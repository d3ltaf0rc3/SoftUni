import React, { Component } from 'react';
import styles from './profile.module.css';
import Wrapper from '../components/wrapper';
import Origamis from '../components/origamis';

class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: null,
            posts: null
        };
    }


    componentDidMount() {
        this.getUser();
    }

    getUser = async () => {
        const res = await fetch(`http://localhost:9999/api/user?id=${this.props.match.params.userId}`);

        if(!res.ok) {
            this.props.history.push("/error");
        }

        const user = await res.json();

        this.setState({
            username: user.username,
            posts: user.posts && user.posts.length
        })
    }

    render() {
        if (!this.state.username) {
            return (
                <Wrapper>
                    <div>
                        Loading...
                    </div>
                </Wrapper>
            )
        }
        
        return (
            <Wrapper>
                <div className={styles.container}>
                    <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="profile pic"/>
                    <div className={styles["personal-info"]}>
                        <p>
                            <span>Email: </span>
                            {this.state.username}
                        </p>
                        <p>
                            <span>Posts: </span>
                            {this.state.posts}
                        </p>
                    </div>
                    <div>
                        <h2>3 of your recent posts</h2>
                        <Origamis count="3" />
                    </div>
                </div>
            </Wrapper>
        )
    }
};

export default Profile;