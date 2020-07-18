import React from 'react'
import styles from './index.module.css'
import Link from '../link';
import getNavigation from '../../utils/navigation';

const Aside = () => {
    const links = getNavigation();
    
    return (
        <aside className={styles.container}>
            {links.map((link, index) => <Link key={index} title={link.title} href={link.link} type="aside" />)}
        </aside>
    )
}

export default Aside;