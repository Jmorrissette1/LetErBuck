import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./HomeBanner.module.css";

const HomeBanner: React.FC = () => {
  return (
    <div className={styles.content}>
      <div className={styles.homeBanner}>
        <p className={styles.topLine}>Unlimited</p>
        <p className={styles.middleLine}>Monthly</p>
        <p className={styles.bottomLine}>Washes</p>
        <Image
          src="/banner-arrow.png"
          alt="blue sign me up button"
          width={200}
          height={25}
        ></Image>
        <p className={styles.startingAt}>Starting at Just</p>
        <h2 className={styles.bannerPrice}>$20/Mo.</h2>
        <p className={styles.stayClean}>
          <em>Stay clean for Less!</em>
        </p>
        <Image
          src="/learn-more-btn.png"
          alt="blue sign me up button"
          width={170}
          height={30}
          className={styles.bannerBtn}
        ></Image>
        <Link href="https://www.carwashlogin.com/leterbuckcarwash/customerportal/signupforunlimited.aspx">
          <Image
            src="/sign-me-up-btn.png"
            alt="blue sign me up button"
            width={170}
            height={30}
            className={styles.bannerBtn}
          ></Image>
        </Link>
      </div>
    </div>
  );
};

export default HomeBanner;
