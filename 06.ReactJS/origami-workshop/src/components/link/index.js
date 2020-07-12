import React from "react";
import styles from "./index.module.css";

const Link = (props) => {
    return (
        <div className={styles["list-item"]}>
            <a className={styles["header-link"]} href={props.href}>{props.title}</a>
        </div>
    )
};

export default Link;