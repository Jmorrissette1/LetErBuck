import React from "react";
import Nav from "@/app/components/nav/Nav";
import Footer from "@/app/components/footer/Footer";
import ContentBox from "@/app/components/contentBox/ContentBox";
import SpecialsBanner from "@/app/components/specialsBanner/SpecialsBanner";
import styles from "@/app/page.module.css";

const AboutPage: React.FC = () => {
  return (
    <div className={styles.page}>
      <Nav />
      <main className={styles.main}>
        <div className={styles.pageHeader}>
          <h1 className={styles.pageH1}>Sheridan Location</h1>
        </div>
        <div className={styles.contentContainer}>
          <ContentBox>
            <div className={styles.locationBox}>
              <p className={styles.contentP}>Phone: 307-675-1935</p>
              <p className={styles.contentP}>
                Email: info@leterbuckcarwash.com
              </p>
              <h1 className="text-3xl font-bold underline">Hello Test</h1>
            </div>
          </ContentBox>
          <SpecialsBanner />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
