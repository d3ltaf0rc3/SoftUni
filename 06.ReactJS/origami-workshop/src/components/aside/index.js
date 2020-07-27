import React, { Component } from 'react'
import styles from './index.module.css'
import Link from '../link';
import getNavigation from '../../utils/navigation';
import UserContext from '../../Context';

class Aside extends Component {
    static contextType = UserContext;

    render() {
        const {
            isLoggedIn,
            user
        } = this.context;
        const links = getNavigation(isLoggedIn, user);

        return (
            <aside className={styles.container}>
                {links.map((link, index) => <Link key={index} title={link.title} href={link.link} type="aside" />)}
            </aside>
        )
    }
}

export default Aside;