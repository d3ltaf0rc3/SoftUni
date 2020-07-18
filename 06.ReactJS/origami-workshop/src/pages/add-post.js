import React from 'react';
import styles from './post.module.css';
import Wrapper from '../components/wrapper';
import Title from '../components/title';
import SubmitButton from '../components/button/submit';
import Origamis from '../components/origamis';

const AddPost = () => {
    return (
        <Wrapper>
            <div className={styles.input}>
                <div>
                    <Title title="Share your thoughts..." />
                    <textarea></textarea>
                    <SubmitButton title="Post" />
                </div>
                <div>
                    <h2>Last 3 posts on your wall</h2>
                    <Origamis count="3"/>
                </div>
            </div>
        </Wrapper>
    )
};

export default AddPost;