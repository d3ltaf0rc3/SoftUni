import React from 'react';
import styles from './error.module.css';
import Wrapper from '../components/wrapper';
import Title from '../components/title';

const Error = () => {
    return (
        <Wrapper>
            <div className={styles.container}>
                <Title title="Something went wrong..." />
                <img src="https://www.elegantthemes.com/blog/wp-content/uploads/2020/02/000-404.png" alt="404" />
            </div>
        </Wrapper>
    )
};

export default Error;