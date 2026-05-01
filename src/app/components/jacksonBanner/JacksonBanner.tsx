import Image from "next/image";
import React from "react";
import styles from "./JacksonBanner.module.css";

const JacksonBanner = () => {
  return (
    <div className={styles.specialsBanner}>
      <div>
        <div className={styles.fadeIn}>
          <div className="flex ml-4">
            <div>
              <Image
                src="/images/LEB-Logo.svg"
                alt="let er buck logo"
                width={110}
                height={110}
              />
            </div>
            <div className="mt-4">
              <p className={styles.topLine}>Wash</p>
              <p className={styles.middleLine}>Packages</p>
              
            </div>
          </div>
          <div>
            <Image
              className="ml-8"
              src="/banner-arrow.png"
              alt="banner arrow"
              width={220}
              height={35}
            ></Image>
            <div className="text-center mb-2">
               <p className={styles.packageP}>Available Wash Packages</p>
            </div>
          </div>
          <div className={styles.priceBox}>
              <div className={styles.packageP}>
                Wyoming <br />Works
              </div>
              <div className={styles.packageP2}>
                $27
              </div>
          </div>
          <div className={styles.priceBox}>
              <div className={styles.packageP}>
                Steamboat <br /> Ceramic
              </div>
              <div className={styles.packageP1}>
                $24
              </div>
          </div>
          <div className={styles.priceBox}>
              <div className={styles.packageP}>
                Big Horn <br /> Experience
              </div>
              <div className={styles.packageP1}>
                $19
              </div> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default JacksonBanner;
