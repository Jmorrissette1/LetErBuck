import React from "react";
import Nav from "@/app/components/nav/Nav";
import Footer from "@/app/components/footer/Footer";
import ContentBox from "@/app/components/contentBox/ContentBox";
import SpecialsBanner from "@/app/components/specialsBanner/SpecialsBanner";
import styles from "@/app/page.module.css";
import Hours from "@/app/components/hours/Hours";

const CasperPage: React.FC = () => {
  return (
    <div className={styles.page}>
      <Nav />
      <main className={styles.main}>
        <div className={styles.pageHeader}>
          <h1 className={styles.pageH1}>Casper Location</h1>
        </div>
        <div className={styles.contentContainer}>
          <ContentBox>
            <div className={styles.locationBox}>
              <p className={styles.contentP}>Phone: 307-675-1935</p>
              <p className={styles.contentP}>
                Email: info@leterbuckcarwash.com
              </p>
              <p className={styles.contentP}>
                Address: 4320 East 2nd Street, Casper, WY 82609
              </p>
              <Hours />
            </div>
            <div className="google-map">
              <iframe
                style={{ border: 0 }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2925.1215003237835!2d-106.27217048437063!3d42.849167612064804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8760bbf5d8472749%3A0xd3c51237784c5a3a!2s4320+E+2nd+St%2C+Casper%2C+WY+82609!5e0!3m2!1sen!2sus!4v1553600168261"
                width="400"
                height="300"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
            <p className={styles.contentP}>
              Address: 4320 East 2nd Street, Casper, WY 82609
            </p>
            <Hours />
            <div className="google-map">
              <iframe
                style={{ border: 0 }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2926.323541976283!2d-106.36956308434053!3d42.82377901368231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8760a4bdb4262653%3A0x2aef7c0d0770f98a!2s3712%20CY%20Ave%2C%20Casper%2C%20WY%2082604!5e0!3m2!1sen!2sus!4v1614202831109!5m2!1sen!2sus"
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

export default CasperPage;
