import React from 'react';
import styles from './index.module.css';
import image from '../../images/blue-origami-bird.png'

const Origami = (props) => {
    return (
        <div className={styles.container}>
            <img className={styles["origami-image"]} src={image} alt="blue bird" />
            <p className={styles.description}>
                <span>{props.index} - </span>
                {props.description}
            </p>
            <div>
                <span className="user">
                    <small>Author: </small>{props.author.username}
                </span>
            </div >
        </div >
    )
};

export default Origami;