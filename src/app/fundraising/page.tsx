import React from "react";
import Image from "next/image";

import Nav from "../components/nav/Nav";
import SpecialsBanner from "../components/specialsBanner/SpecialsBanner";
import ContentBox from "../components/contentBox/ContentBox";
import FundraisingForm from "../components/contactForm/FundraisingForm";
import Footer from "../components/footer/Footer";
import styles from "../page.module.css";

const Fundraising: React.FC = () => {
  return (
    <div className={styles.page}>
      <Nav />
      <main className={styles.main}>
        <div className={styles.pageHeader}>
          <h1 className={styles.pageH1}>Fundraising</h1>
          <h2 className={styles.pageH2}>
            Learn more about partnering with Let&apos;Er Buck to raise money!
          </h2>
        </div>
        <div className={styles.contentContainer}>
          <ContentBox>
            <p className={styles.contentP}>
              Thank you for considering Let’er Buck Car Wash to help you raise
              funds for your organization. We love helping our community as much
              as we can. Here are the options we offer to assist:
            </p>
            <h4 className={styles.contentH4}>1. ON-SITE FUNDRAISING</h4>
            <p className={styles.contentP}>
              We are excited to offer to host your next fundraising event at
              Let’Er Buck! Make your event worry-free by inviting others to get
              a wash while they support your cause. We will donate either $1 per
              vehicle or $300 during the fundraiser, whichever is higher! Fill
              out the form below and get in touch with us to discuss how we can
              help raise money for your program.
            </p>
            <h4 className={styles.contentP}>
              2. RAFFLE/SILENT AUCTION DONATIONS
            </h4>
            <p className={styles.contentP}>
              Raise some extra dollars by picking up free wash cards! If your
              organization is doing a raffle or silent auction, Let’Er Buck Car
              Wash will donate ten free wash cards to the organization. Please
              inform us at least a week beforehand so we’re able to print off a
              number of cards for you featuring your organization’s logo.
            </p>
            <Image
              src="/images/leb_fundraisers_2.png"
              alt="fund raising photo"
              width={650}
              height={285}
              className={styles.fundrasingImg}
            ></Image>

            <div className={styles.contactForm}>
              <FundraisingForm></FundraisingForm>
            </div>
          </ContentBox>
          <SpecialsBanner />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Fundraising;
