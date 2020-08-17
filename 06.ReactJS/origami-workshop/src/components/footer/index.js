import React, { useContext } from 'react';
import Link from '../link';
import styles from './index.module.css';
import getNavigation from '../../utils/navigation';
import UserContext from '../../Context';

const Footer = () => {
    const { isLoggedIn, user } = useContext(UserContext);
    const links = getNavigation(isLoggedIn, user);

    return (
        <footer className={styles.footer} >
            <div>
                {links.map((link, index) => <Link key={index} title={link.title} href={link.link} type="footer" />)}
            </div>
            <p className={styles["footer-text"]}>Software University &copy; 2020</p>
        </footer>
    )

};

export default Footer;