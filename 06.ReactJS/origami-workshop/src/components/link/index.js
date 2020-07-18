import React from "react";
import styles from "./index.module.css";
import { Link } from 'react-router-dom';

const LinkComponent = (props) => {
    return (
        <div className={styles[`${props.type}-list-item`]}>
            <Link className={styles[`${props.type}-link`]} to={props.href}>{props.title}</Link>
        </div>
    )
};

export default LinkComponent;