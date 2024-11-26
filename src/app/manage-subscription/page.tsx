import React from "react";
import Nav from "@/app/components/nav/Nav";
import Footer from "@/app/components/footer/Footer";
import ContentBox from "@/app/components/contentBox/ContentBox";
import SpecialsBanner from "@/app/components/specialsBanner/SpecialsBanner";
import ManageSubForm from "@/app/components/manageSubForm/ManageSubForm";
import styles from "@/app/page.module.css";

const ManageSubscription: React.FC = () => {
  return (
    <div className={styles.page}>
      <Nav />
      <main className={styles.main}>
        <div className={styles.pageHeader}>
          <h1 className={styles.pageH1}>Manage Your Subscription</h1>
        </div>
        <div className={styles.contentContainer}>
          <ContentBox>
            <div className={styles.pageBox}>
              <p className={styles.contentP}>
                Upgrade or Downgrade, changing your pass is easy.
              </p>
              <p className={styles.contentP}>
                Looking to change your credit card information or transfer your
                pass to a new vehicle? Please stop by any Let ‘Er Buck location.
              </p>
            </div>
            <div className={styles.contactForm}>
              <ManageSubForm />
            </div>
            <h3 className={styles.contentH4}>
              <strong>Are you looking to cancel your membership?</strong>
            </h3>
            <p className={styles.contentP}>
              Check out our other pass options below or click the button to get
              in touch about cancellation.
            </p>
          </ContentBox>
          <SpecialsBanner />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ManageSubscription;
