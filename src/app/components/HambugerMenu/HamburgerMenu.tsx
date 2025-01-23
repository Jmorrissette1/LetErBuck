"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import styles from "./HamburgerMenu.module.css";

const HamburgerMenu: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={styles.mobileNav}>
      <div className="flex-between">
        <Image
          src="/LEB-Logo.svg"
          alt="Cowboy riding a car"
          width={100}
          height={100}
          className={styles.navLogo}
        ></Image>
        <button onClick={toggleMenu} className={styles.menuButton}>
          ☰
        </button>
        <div
          className={styles.menuLinks}
          style={{ display: isMenuOpen ? "block" : "none" }}
        >
          <Link href="/packages">Packages</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default HamburgerMenu;
