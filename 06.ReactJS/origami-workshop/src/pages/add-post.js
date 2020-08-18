import React, { useState } from 'react';
import styles from './post.module.css';
import Wrapper from '../components/wrapper';
import Title from '../components/title';
import SubmitButton from '../components/button/submit';
import Origamis from '../components/origamis';

const AddPost = (props) => {
    const [post, setPost] = useState();

    const handleClick = () => {
        fetch("http://localhost:9999/api/origami", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include",
            body: JSON.stringify({
                description: post
            })
        })
            .then(() => props.history.push("/"))
            .catch(err => console.error(err));
    };

    return (
        <Wrapper>
            <div className={styles.input}>
                <div>
                    <Title title="Share your thoughts..." />
                    <textarea onChange={(e) => setPost(e.target.value)}></textarea>
                    <SubmitButton onClick={handleClick} title="Post" />
                </div>
                <div>
                    <h2>Last 3 posts on your wall</h2>
                    <Origamis count="3" />
                </div>
            </div>
        </Wrapper>
    )
};

export default AddPost;