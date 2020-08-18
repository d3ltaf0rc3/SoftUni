import React from 'react';
import styles from './submit.module.css';

const SubmitButton = (props) => {
    return (
        <button onClick={props.onClick} className={styles.submit}>{props.title}</button>
    )
};

export default SubmitButton;