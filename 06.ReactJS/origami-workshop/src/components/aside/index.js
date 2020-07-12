import React from 'react'
import styles from './index.module.css'
import Link from '../link';

const Aside = () => {
    return (
        <aside className={styles.container}>
            <Link title="Going to 1" href="#" type="aside" />
            <Link title="Going to 2" href="#" type="aside" />
            <Link title="Going to 3" href="#" type="aside" />
            <Link title="Going to 4" href="#" type="aside" />
            <Link title="Going to 5" href="#" type="aside" />
            <Link title="Going to 6" href="#" type="aside" />
        </aside>
    )
}

export default Aside;