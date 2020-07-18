import React from 'react';
import styles from './submit.module.css';

const SubmitButton = (props) => {
    return (
        <button className={styles.submit}>{props.title}</button>
    )
};

export default SubmitButton;