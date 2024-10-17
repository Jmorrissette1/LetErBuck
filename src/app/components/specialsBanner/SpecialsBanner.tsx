import Image from "next/image";
import React from "react";
import styles from "./SpecialsBanner.module.css";

const SpecialsBanner: React.FC = () => {
  return (
    <div className={styles.specialsBanner}>
      <div>
        <Image
          src="/images/best-value.png"
          alt="best value banner"
          width={75}
          height={75}
          className={styles.bestValueBtn}
        />
        <div className={styles.specialsBannersRow}>
          <div>
            <Image
              src="/images/LEB-Logo.svg"
              alt="let er buck logo"
              width={110}
              height={110}
            />
          </div>
          <div>
            <p className={styles.topLine}>unlimited</p>
            <p className={styles.middleLine}>Monthly</p>
            <p className={styles.bottomLine}>Washes</p>
          </div>
        </div>
        <Image
          src="/banner-arrow.png"
          alt="blue sign me up button"
          width={220}
          height={35}
        ></Image>
      </div>
    </div>
  );
};

export default SpecialsBanner;
