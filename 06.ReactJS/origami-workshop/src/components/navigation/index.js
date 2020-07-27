import React, { Component } from 'react';
import styles from './index.module.css';
import Link from '../link/index';
import logo from '../../images/white-origami-bird.png'
import getNavigation from '../../utils/navigation';
import UserContext from '../../Context';

class Header extends Component {
    static contextType = UserContext;
    
    render() {
        const {isLoggedIn, user} = this.context;
        
        const links = getNavigation(isLoggedIn, user);

        return (
            <header className={styles.navigation}>
                <img className={styles.logo} src={logo} alt="logo" />
                {links.map((link, index) => <Link key={index} title={link.title} href={link.link} type="header" />)}
            </header>
        )
    }
};

export default Header;