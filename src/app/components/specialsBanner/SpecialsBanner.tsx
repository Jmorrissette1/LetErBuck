import Image from "next/image";
import React from "react";
import classNames from "classnames";
import styles from "./SpecialsBanner.module.css";

const SpecialsBanner = () => {
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
              <p className={styles.topLine}>unlimited</p>
              <p className={styles.middleLine}>Monthly</p>
              <p className={styles.bottomLine}>Washes</p>
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
              <div>
                <em>Keep your car clean for</em>
              </div>
              <div className="p">
                <em>a fraction of the cost!</em>
              </div>
            </div>
          </div>
          <div className="flex justify-around mb-2">
            <div className="text-center">
              <div className={classNames("font-l", styles.packageP)}>
                The Wyoming
              </div>
              <div className="p font-l">Works</div>
            </div>
            <div>
              <div className="text-center">$35/MO.</div>
              <Image
                src="/images/sign-up.png"
                alt="Blue Sign up button"
                width={120}
                height={25}
              />
            </div>
          </div>
          <div className="flex justify-around mb-2">
            <div className="text-center">
              <div className="p font-l">Steamboat</div>
              <div className="p font-l">Ceramic</div>
            </div>
            <div className="text-center">
              <div className="text-center">$32/MO.</div>
              <Image
                src="/images/sign-up.png"
                alt="Blue Sign up button"
                width={120}
                height={25}
              />
            </div>
          </div>
          <div className="flex justify-around mb-2">
            <div className="text-center">
              <div className="p font-l">Big Horn</div>
              <div className="p font-l">Experience</div>
            </div>
            <div>
              <div className="text-center">$27/MO.</div>
              <Image
                src="/images/sign-up.png"
                alt="Blue Sign up button"
                width={120}
                height={25}
              />
            </div>
          </div>
          <div className="flex justify-around">
            <div className="text-center">
              <div className="p font-l">Black Tooth</div>
              <div className="p font-l">Deluxe</div>
            </div>
            <div>
              <div className="text-center mb-2">$20/MO.</div>
              <Image
                src="/images/sign-up.png"
                alt="Blue Sign up button"
                width={120}
                height={25}
              />
            </div>
          </div>
          <div className="flex-col ml-4 mt-4">
            <h2>Why join a wash club?</h2>
            <ul>
              <li>Always have a clean car!</li>
              <li>Exlusive perks!</li>
              <li>Fast LANE!</li>
              <li>Paid for in two washes!</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialsBanner;
