import Image from "next/image";
import React from "react";
import Link from "next/link";
import styles from "./Nav.module.css";

const Nav: React.FC = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.weatherStrip}>Test</div>
      <div className={styles.navBar}>
        <ul className={styles.navList}>
          <li className={`${styles.navItem} ${styles.dropdown}`}>
            <Link href="/packages">Packages</Link>
            <ul className={styles.dropdownMenu}>
              <li className={styles.dropdownItem}>
                <Link href="/packages">Packages</Link>
              </li>
              <li className={styles.dropdownItem}>
                <Link href="/whyUnlimited">Why Unlimited?</Link>
              </li>
            </ul>
          </li>
          <li className={styles.navItem}>
            <Link href="/fundraising">Fundraising</Link>
          </li>
          <li className={styles.navLogo}>
            <Link href="/">
              <Image
                src="/LEB-Logo.svg"
                alt="Cowboy riding a car"
                width={208}
                height={230}
                className={styles.navLogo}
              ></Image>
            </Link>
          </li>
          <li className={`${styles.navItem} ${styles.dropdown}`}>
            <Link href="/about">About Us</Link>
            <ul className={styles.dropdownMenu}>
              <li className={styles.dropdownItem}>
                <Link href="/packages">Packages</Link>
              </li>
              <li className={styles.dropdownItem}>
                <Link href="/whyUnlimited">Why Unlimited?</Link>
              </li>
            </ul>
          </li>

          <li className={`${styles.navItem} ${styles.dropdown}`}>
            <Link href="/locations/sheridan">Locations</Link>
            <ul className={styles.dropdownMenu}>
              <li className={styles.dropdownItem}>
                <Link href="/packages">Packages</Link>
              </li>
              <li className={styles.dropdownItem}>
                <Link href="/whyUnlimited">Why Unlimited?</Link>
              </li>
              <li className={styles.dropdownItem}>
                <Link href="/whyUnlimited">Why Unlimited?</Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
