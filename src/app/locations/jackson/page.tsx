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
              <p className={styles.contentP}>Phone: (307)201-5251</p>
              <p className={styles.contentP}>
                Email: info@leterbuckcarwash.com
              </p>
              <p className={styles.contentP}>
                Address: 660 W Broadway, Jackson, Wyoming 83001
              </p>

              <p className={styles.contentP}>**Wash Packages Unavilable at this location**</p>
              <div className="p-6 ml-4">
                <Hours />
              </div>
            </div>
            <div className="google-map p-6 ml-4">
              <iframe
                style={{ border: 0 }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2895.3199741953053!2d-110.7791251229271!3d43.47479237111111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53531a7100645453%3A0xf1dabcb4b46faa3d!2s660%20W%20Broadway%2C%20Jackson%2C%20WY%2083001!5e0!3m2!1sen!2sus!4v1759939342832!5m2!1sen!2sus"
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
