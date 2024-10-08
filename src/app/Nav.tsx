import React from 'react';
import Link from 'next/link';
import styles from './Nav.module.css';


const Nav: React.FC = () => {
    return (
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link href="/">
              Packages
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/anotherPage">
              Fundrasing
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/anotherPage">
              Logo
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/anotherPage">
              About Us
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/anotherPage">
              Locations
            </Link>
          </li>
        </ul>
      </nav>
    );
  };

  
export default Nav;