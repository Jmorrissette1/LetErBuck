import React from "react";
import Link from "next/link";
import Image from "next/image";
import Nav from "../components/nav/Nav";
import Footer from "../components/footer/Footer";
import ContentBox from "../components/contentBox/ContentBox";
import SpecialsBanner from "../components/specialsBanner/SpecialsBanner";
import styles from "../page.module.css";

const AboutPage: React.FC = () => {
  return (
    <div className={styles.page}>
      <Nav />
      <main className={styles.main}>
        <div className={styles.pageHeader}>
          <h1 className={styles.pageH1}>About Let&apos;er Buck Car Wash</h1>
          <h2 className={styles.pageH2}>
            Welcome To Let&apos;er buck country!
          </h2>
        </div>
        <div className={styles.contentContainer}>
          <ContentBox>
            <p className={styles.contentP}>
              {" "}
              <em>
                Let’Er Buck Car Wash was designed specifically with the folks of
                Wyoming in mind. Our “tunnel” conveyor car wash is capable of
                cleaning your car in four minutes or less—all year round. Our
                name was chosen to honor Wyoming’s western tradition, to pay
                homage to America’s #1 State: Wyoming, and the battle cry of
                UW’s Cowboy football team!
              </em>
            </p>
            <h3 className={styles.contentH4}>
              <strong>THE LET’ER BUCK EXPERIENCE</strong>
            </h3>
            <p className={styles.contentP}>
              Our customers have the choice to go straight into the “wash stack”
              lane to have their car washed, or to first visit our FREE vacuum
              bays, featuring powerful suction nozzles under well lit
              canopies—no more weak, low-power vacuums that drain you of your
              change!
            </p>
            <p className={styles.contentP}>
              Choose from four wash packages as you enter our car wash lane and
              pay with your choice of credit/debit card, cash, unlimited wash
              club membership, or gift card.
            </p>
            <p className={styles.contentP}>
              Once you enter the wash tunnel, a trained associate will assist
              you and your vehicle onto the conveyor. Then they will instruct
              you to place your car into neutral, take your hands from the
              wheel, and sit back and relax while our industry-leading equipment
              does all the work!
            </p>
            <p className={styles.contentP}>
              The car wash experience at Let’Er Buck allows for operation in
              almost any weather. Over 7,000 square feet of concrete is heated
              at both the entrance and exit of the wash. The loading area is
              located inside the wash to assist with inclement and freezing
              weather, while the tunnel and vacuum areas are well lit so our
              customers feel safe and comfortable while on site.
            </p>
            <p className={styles.contentP}>
              In addition, we felt Let’Er Buck needed to incorporate the most
              robust technologies for conservation. As a result, Let ‘Er Buck
              utilizes variable frequency drive motors or VFD to conserve energy
              as well as recycling and purifying the water used to wash cars. It
              was not only the smart thing to do but the right thing to do.
            </p>
            <p className={styles.contentP}>
              We invite you to come and enjoy the car wash experience. We save
              energy and water, we’re fast, friendly and give you a clean, shiny
              ride to boot!
            </p>
            <Link href="/packages">
              <Image
                src="/images/view-packages.png"
                alt="View Packages"
                width={200}
                height={25}
                className={styles.aboutBtn}
              />
            </Link>
          </ContentBox>
          <SpecialsBanner />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
