import React from 'react';
import styles from './index.module.css';
import Header from '../navigation';
import Aside from '../aside';
import Footer from '../footer';

const Wrapper = (props) => {
    return (
        <div className={styles.app}>
            <Header />
            <div className={styles.container}>
                <Aside />
                <div className={styles["origamis-container"]}>
                    {props.children}
                </div>
            </div>
            <Footer />
        </div>
    )
};

export default Wrapper;