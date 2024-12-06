import React from "react";
import Nav from "@/app/components/nav/Nav";
import Footer from "@/app/components/footer/Footer";
import ContentBox from "@/app/components/contentBox/ContentBox";
import SpecialsBanner from "@/app/components/specialsBanner/SpecialsBanner";
import styles from "@/app/page.module.css";
import Hours from "@/app/components/hours/Hours";

const SheridanPage: React.FC = () => {
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
              <p className={styles.contentP}>
                Address: 624 East Brundage Lane, Sheridan, WY, 82801
              </p>
              <div className={styles.hoursBox}>
                <Hours />
              </div>
            </div>
            <div className="google-map">
              <iframe
                style={{ border: 0 }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2832.371112606473!2d-106.94764338485001!3d44.77323897909885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5335f06d1edc39df%3A0x9bdcbb5a199b232f!2s624+E+Brundage+Ln%2C+Sheridan%2C+WY+82801!5e0!3m2!1sen!2sus!4v1513121127458"
                width="400"
                height="300"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          </ContentBox>
          <SpecialsBanner />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SheridanPage;
