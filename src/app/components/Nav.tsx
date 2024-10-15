import Image from 'next/image';
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
            <Link href="/about">
              Fundrasing
            </Link>
          </li>
          <li className={styles.navLogo}>
            <Link href="/">
              <Image src="/LEB-Logo.svg" alt="Cowboy riding a car" width={208} height={230} className={styles.navLogo}></Image>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/about">
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