import React, { useContext } from 'react';
import styles from './index.module.css';
import Link from '../link';
import getNavigation from '../../utils/navigation';
import UserContext from '../../Context';

const Aside = () => {
    const { isLoggedIn, user } = useContext(UserContext);
    const links = getNavigation(isLoggedIn, user);

    return (
        <aside className={styles.container} >
            {links.map((link, index) => <Link key={index} title={link.title} href={link.link} type="aside" />)}
        </aside >
    )
};

export default Aside;