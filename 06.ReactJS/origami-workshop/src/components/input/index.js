import React from 'react';
import styles from './index.module.css';

const Input = (props) => {
    return (
        <div className={styles["form-control"]}>
            <label htmlFor={props.id}>{props.title}</label>
            <input id={props.id} value={props.value} onChange={props.onChange} type={props.type} />
        </div>
    )
};

export default Input;