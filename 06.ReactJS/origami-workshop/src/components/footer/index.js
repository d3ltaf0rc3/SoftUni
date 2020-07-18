import React from 'react';
import Link from '../link';
import styles from './index.module.css';
import getNavigation from '../../utils/navigation';

const Footer = () => {
    const links = getNavigation();
    
    return (
        <footer className={styles.footer}>
            <div>
            {links.map((link, index) => <Link key={index} title={link.title} href={link.link} type="footer" />)}
            </div>
            <p className={styles["footer-text"]}>Software University &copy; 2020</p>
        </footer>
    )
}

export default Footer;