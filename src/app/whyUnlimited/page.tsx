import React from "react";
import Nav from "../components/nav/Nav";
import Footer from "../components/footer/Footer";
import ContentBox from "../components/contentBox/ContentBox";
import styles from "../page.module.css";

const WhyUnlimited: React.FC = () => {
  return (
    <div className={styles.page}>
      <Nav />
      <main className={styles.main}>
        <div>
          <h1 className={styles.pageH1}>Why Join the Unlimited Club?</h1>
        </div>
        <ContentBox>
          <p>Place Holder</p>
        </ContentBox>
      </main>
      <Footer />
    </div>
  );
};

export default WhyUnlimited;
