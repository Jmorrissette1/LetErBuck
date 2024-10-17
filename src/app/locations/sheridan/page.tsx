import React from "react";
import Nav from "@/app/components/nav/Nav";
import Footer from "@/app/components/footer/Footer";
import ContentBox from "@/app/components/contentBox/ContentBox";
import styles from "@/app/page.module.css";
const AboutPage: React.FC = () => {
  return (
    <div className={styles.page}>
      <Nav />
      <main className={styles.main}>
        <div className={styles.pageHeader}>
          <h1 className={styles.pageH1}>Sheridan Location</h1>
        </div>
        <ContentBox>
          <div className={styles.locationBox}>
            <p className={styles.contentP}>Phone: 307-675-1935</p>
          </div>
        </ContentBox>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
