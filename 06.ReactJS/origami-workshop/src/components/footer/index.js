import React from 'react';
import Link from '../link';
import styles from './index.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div>
                <Link title="Going to 1" href="#" type="footer" />
                <Link title="Going to 2" href="#" type="footer" />
                <Link title="Going to 3" href="#" type="footer" />
                <Link title="Going to 4" href="#" type="footer" />
                <Link title="Going to 5" href="#" type="footer" />
                <Link title="Going to 6" href="#" type="footer" />
                <Link title="Going to 7" href="#" type="footer" />
            </div>
            <p className={styles["footer-text"]}>Software University &copy; 2020</p>
        </footer>
    )
}

export default Footer;