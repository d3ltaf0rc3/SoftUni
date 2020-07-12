import React from 'react';
import styles from './index.module.css';
import Link from '../link/index';
import logo from '../../images/white-origami-bird.png'

const Header = () => {
    return (
        <header className={styles.navigation}>
            <img className={styles.logo} src={logo} alt="logo" />
            <Link title="Going to 1" href="#" type="header" />
            <Link title="Going to 2" href="#" type="header" />
            <Link title="Going to 3" href="#" type="header" />
            <Link title="Going to 4" href="#" type="header" />
            <Link title="Going to 5" href="#" type="header" />
            <Link title="Going to 6" href="#" type="header" />
        </header>
    )
};

export default Header;