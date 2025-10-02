import React from "react";
import Nav from "@/app/components/nav/Nav";
import Footer from "@/app/components/footer/Footer";
import ContentBox from "@/app/components/contentBox/ContentBox";

import styles from "@/app/page.module.css";
import Hours from "@/app/components/shared/hours";

const JacksonHolePage: React.FC = () => {
  return (
    <div className={styles.page}>
      <Nav />
      <main className={styles.main}>
        <div className={styles.pageHeader}>
          <h1 className={styles.pageH1}>Jackson Location</h1>
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
              <div className="p-6 ml-4">
                <Hours />
              </div>
            </div>
            <div className="google-map p-6 ml-4">
              <iframe
                style={{ border: 0 }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2856.6142680005896!2d-105.49877358758255!3d44.276754711757235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5334942d37c4e66f%3A0xf7ebe04dbcb11256!2s617%20Boxelder%20Rd%2C%20Gillette%2C%20WY%2082718!5e0!3m2!1sen!2sus!4v1704748073501!5m2!1sen!2sus"
                width="400"
                height="300"
                frameBorder="0"
                allowFullScreen
                className={styles.googleMap}
              ></iframe>
            </div>
          </ContentBox>
         
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default JacksonHolePage;
