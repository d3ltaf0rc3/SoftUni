import React from 'react';
import styles from './index.module.css';
import Link from '../link/index';

const Header = () => {
    return (
        <header className={styles.navigation}>
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