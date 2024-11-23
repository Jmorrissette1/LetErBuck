import React from "react";
import Nav from "../components/nav/Nav";
import Footer from "../components/footer/Footer";
import ContentBox from "../components/contentBox/ContentBox";
import SpecialsBanner from "../components/specialsBanner/SpecialsBanner";
import styles from "../page.module.css";

const WhyUnlimited: React.FC = () => {
  return (
    <div className={styles.page}>
      <Nav />
      <main className={styles.main}>
        <div className={styles.pageHeader}>
          <h1 className={styles.pageH1}>Why Join the Unlimited Club?</h1>
          <h2 className={styles.pageH2}>
            Welcome To Let&apos;er buck country!
          </h2>
        </div>
        <div className={styles.contentContainer}>
          <ContentBox>
            <p className={styles.contentP}>
              It’s not just about having a clean car. The benefits of being a
              member of an unlimited car wash club doesn’t stop at your ride
              always looking bright and shiny—our members will attest to
              numerous other reasons why they chose to join:
            </p>
            <h3 className={styles.contentH4}>
              <strong>1. YOUR CAR WILL ALWAYS BE CLEAN</strong>
            </h3>
            <p className={styles.contentP}>
              Being part of an unlimited car wash club means that you can wash
              your car as many times as you wish. Seriously. Sit back and
              enjoy—as often as you like—the quality, convenience, and value all
              wrapped up in the delightful experience that is Let’Er Buck.
            </p>
            <h3 className={styles.contentH4}>
              <strong>2. MOTHER NATURE DOESN’T WIN</strong>
            </h3>
            <p className={styles.contentP}>
              Car wash experiences aren’t just for warm weather months anymore.
              Rain, shine, sleet, or snow, you can conquer Mother Nature and the
              Wyoming elements by taking advantage of weather prep that protects
              your vehicle year-round from bugs, dust, ice, and grime.
            </p>
            <h3 className={styles.contentH4}>
              <strong>3. WE HOPE YOU’RE AROUND UNTIL THE COWS COME HOME</strong>
            </h3>
            <p className={styles.contentP}>
              But if you’re looking for a great experience with no long-term
              commitment, have no fear. There’s no year-long requirement here.
              Come see for yourself the value and quality we have to offer, and
              decide how long you want to stick around. Month to month? No
              problem. However, be sure to check out our savings opportunities
              with yearly options!
            </p>
            <h3 className={styles.contentH4}>
              <strong>4. IT’S EASY TO RENEW</strong>
            </h3>
            <p className={styles.contentP}>
              We offer automatic billing options for carefree renewal—so your
              experience as an unlimited wash member will never end! Pay once a
              month, and sit back while your car enjoys unlimited washing!
            </p>
            <h3 className={styles.contentH4}>
              <strong>5. ENJOY MEMBER-EXCLUSIVE PERKS</strong>
            </h3>
            <p className={styles.contentP}>
              Enjoy upgraded seasonal wash opportunities and other services at
              lower, member-only rates.
            </p>
            <h3 className={styles.contentH4}>
              <strong>6. LIVE IN THE FAST LANE!</strong>
            </h3>
            <p className={styles.contentP}>
              As an unlimited member, take advantage of using the “Fast Lane”
              when you come in to wash your car. Line skipping is totally
              acceptable here – get in, get out, and get back on the road.
              Experience life in the fast lane!
            </p>
            <h3 className={styles.contentH4}>
              <strong>7. THE “CONSISTENTLY CLEAN” EXPERIENCE</strong>
            </h3>
            <p className={styles.contentP}>
              Don’t worry about who (or what) might be getting into your car at
              any moment. With the unlimited wash experience, you’ll always have
              a clean and tidy vehicle that can welcome anyone—and have room for
              anything!—at all times. No more last-minute hustling or brushing
              crumbs off the seats to ready your car for passengers. Enjoy a
              clean car, always
            </p>
          </ContentBox>
          <SpecialsBanner />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default WhyUnlimited;
