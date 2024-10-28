import Image from "next/image";
import styles from "./Footer.module.css";

const Footer: React.FC = () => {
  return (
    <div className={styles.footerSection}>
      <Image
        src={"/images/footer.svg"}
        alt="brown mountain"
        width={1200}
        height={270}
      />
      <div className={styles.footerBody}>
        <div className={styles.footerYellowBar}>
          <ul className={styles.footerNav}>
            <li className={`${styles.listItem}, ${styles.unlimited}`}>
              <Image
                src={"/images/join.svg"}
                alt="Join The Club"
                width={75}
                height={75}
              />
            </li>
            <li className={styles.listItem}>Package</li>
            <li className={styles.listItem}>Fundraising</li>
            <li className={styles.listItem}>About Us</li>
            <li className={styles.listItem}>Locations</li>
            <li className={styles.listItem}>Manage Your Subscription</li>
            <li>
              {" "}
              <Image
                src={"/images/gift-cards.png"}
                alt="gift card image"
                width={168}
                height={22}
              />
            </li>
          </ul>
        </div>
        <div className={styles.row}>
          <div>
            <div className={styles.row}>
              <p className={styles.footerP}>(360)675-1935 &bull;</p>
              <p className={styles.footerP}>624 East Brundage Lane &bull;</p>
              <p className={styles.footerP}>Sheridan, Wyoming 82801</p>
            </div>
          </div>
          <div>Test</div>
        </div>
        <p className={styles.footerP}>
          Copyright © 2024 Let&apos;Er Buck Car Wash. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
