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
      </div>
    </div>
  );
};

export default SpecialsBanner;
