import Image from "next/image";
import React from "react";
import Link from "next/link";
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
          <div className="flex justify-evenly mb-2">
            <div className="text-center">
              <div className={classNames("text-base", styles.packageP)}>
                The Wyoming
              </div>
              <div
                className={classNames("text-xl", "leading-4", styles.packageP)}
              >
                Works
              </div>
            </div>
            <div>
              <div
                className={classNames(
                  "text-lg",
                  "text-center",
                  "mb-1",
                  styles.packageP
                )}
              >
                $35/MO.
              </div>
              <Link href="/manage-subscription" target="_blank">
                <Image
                  src="/images/sign-up.png"
                  alt="Blue Sign up button"
                  width={120}
                  height={25}
                  className={styles.pulse}
                />
              </Link>
            </div>
          </div>
          <div className="flex justify-evenly mb-2">
            <div className="text-center ml-4">
              <div className={classNames("text-base", styles.packageP)}>
                Steamboat
              </div>
              <div
                className={classNames("text-xl", "leading-4", styles.packageP)}
              >
                Ceramic
              </div>
            </div>
            <div className="ml-5">
              <div
                className={classNames(
                  "text-lg",
                  "text-center",
                  "mb-1",
                  styles.packageP
                )}
              >
                $32/MO.
              </div>
              <Link href="/manage-subscription" target="_blank">
                <Image
                  src="/images/sign-up.png"
                  alt="Blue Sign up button"
                  width={120}
                  height={25}
                  className={styles.pulse}
                />
              </Link>
            </div>
          </div>
          <div className="flex justify-around mb-2">
            <div className="text-center ml-4">
              <div className={classNames("text-base", styles.packageP)}>
                Big Horn
              </div>
              <div
                className={classNames("text-xl", "leading-4", styles.packageP)}
              >
                Experience
              </div>
            </div>
            <div className="mr-2">
              <div
                className={classNames(
                  "text-lg",
                  "text-center",
                  "mb-1",
                  styles.packageP
                )}
              >
                $27/MO.
              </div>
              <Link href="/manage-subscription" target="_blank">
                <Image
                  src="/images/sign-up.png"
                  alt="Blue Sign up button"
                  width={120}
                  height={25}
                  className={styles.pulse}
                />
              </Link>
            </div>
          </div>
          <div className="flex justify-around">
            <div className="text-center ml-4">
              <div className={classNames("text-base", styles.packageP)}>
                Black Tooth
              </div>
              <div
                className={classNames("text-xl", "leading-4", styles.packageP)}
              >
                Deluxe
              </div>
            </div>
            <div className="mr-1">
              <div
                className={classNames(
                  "text-lg",
                  "text-center",
                  "mb-1",
                  styles.packageP
                )}
              >
                $20/MO.
              </div>
              <Link href="/manage-subscription" target="_blank">
                <Image
                  src="/images/sign-up.png"
                  alt="Blue Sign up button"
                  width={120}
                  height={25}
                  className={styles.pulse}
                />
              </Link>
            </div>
          </div>
          <div className="flex-col ml-4 mt-4">
            <h2 className={styles.specialsH2}>Why join a wash club?</h2>
            <ul className={styles.specialsList}>
              <li className={styles.specialsListItem}>Always have a clean car!</li>
              <li className={styles.specialsListItem}>Exlusive perks!</li>
              <li className={styles.specialsListItem}>Fast LANE!</li>
              <li className={styles.specialsListItem}>Paid for in two washes!</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialsBanner;
