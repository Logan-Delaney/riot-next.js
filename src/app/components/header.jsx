import React from 'react';
import styles from './header.module.css';

export default function Header() {
    return (
        <div className={styles.header}>
        <div>
        <h1 className={styles.header_title}>WLD Riot</h1>
        </div>
        <div>
            <p className={styles.header_title}>Login</p>
        </div>
        </div>
    );
}