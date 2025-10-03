import React from "react";
import Nav from "../components/nav/Nav";
import Link from "next/link";
import Footer from "../components/footer/Footer";
import styles from "../page.module.css";


const Packages: React.FC = () => {
  return (
    <div className={styles.page}>
      <Nav />
      <main className={styles.main}>
        <div>
          <h1 className={styles.pageH1}>Wash Packages</h1>
        </div>

        <div className={styles.packageSection}>
          <div className={styles.packageCard}>
            <div className={styles.packageCardHeader}>
              <h1 className={styles.packageH1}>
                <em>Wyoming Works</em>
              </h1>
            </div>
            <div className={styles.packagePriceRow}>
              <div className={styles.packagePrice}>
                <p className={styles.price}>
                  $25<span className={styles.text2xl}>ea.</span>
                </p>
                <p className={styles.priceType}>Single Wash</p>
              </div>
              <div className={styles.verticalLine}></div>
              <div className={styles.packagePrice}>
                <p className={styles.price}>
                  $35<span className={styles.text2xl}>/mo.</span>
                </p>
                <p className={styles.priceType}>Unlimited Wash</p>
              </div>
                 
            </div>
          <Link href="https://www.carwashlogin.com/leterbuckcarwash/customerportal/signupforunlimited.aspx"><button className={styles.packageBtn}>Sign Me Up</button></Link>
          </div>
          
          <div className={styles.packageList}>
            <div className={styles.packageCol}>
              <p className={styles.packageH3}>Carnauba Wax</p>
              <p className={styles.packageH3}>Ceramic Hi-Foam</p>
              <p className={styles.packageH3}>Ceramic Sealant</p>
              <p className={styles.packageH3}>Dash Wipe</p>
              <p className={styles.packageH3}>Tri Color</p>
              <p className={styles.packageH3}>Wheel Cleaner</p>
              <p className={styles.packageH3}>Underbody Rinse</p>
              <p className={styles.packageH3}>Bug Buster</p>
              <p className={styles.packageH3}>Foam Bath</p>
              <p className={styles.packageH3}>High Pressure Rinse</p>
              <p className={styles.packageH3}>Vortex Dry</p>
           
            </div>
          </div>
        </div>
       
        <div className={styles.packageSection}>
          <div className={styles.packageCard}>
            <div className={`${styles.packageCardHeader} ${styles.steamBoat}`}>
              <h1 className={`${styles.packageH1}`}>
                <em>SteamBoat Ceramic</em>
              </h1>
            </div>
            <div className={styles.packagePriceRow}>
              <div className={styles.packagePrice}>
                <p className={styles.price}>
                  $22<span className={styles.text2xl}>ea.</span>
                </p>
                <p className={styles.priceType}>Single Wash</p>
              </div>
              <div className={styles.verticalLine}></div>
              <div className={styles.packagePrice}>
                <p className={styles.price}>
                  $32<span className={styles.text2xl}>/mo.</span>
                </p>
                <p className={styles.priceType}>Unlimited Wash</p>
              </div>
            </div>
           <Link href="https://www.carwashlogin.com/leterbuckcarwash/customerportal/signupforunlimited.aspx"><button className={styles.packageBtn}>Sign Me Up</button></Link>
          </div>
          <div className={styles.packageList}>
            <div className={styles.packageCol}>
              <p className={styles.packageH3}>Ceramic Hi-Foam</p>
              <p className={styles.packageH3}>Ceramic Sealant</p>
              <p className={styles.packageH3}>Dash Wipe</p>
              <p className={styles.packageH3}>Tri Color</p>
              <p className={styles.packageH3}>Wheel Cleaner</p>
              <p className={styles.packageH3}>Underbody Rinse</p>
              <p className={styles.packageH3}>Bug Buster</p>
              <p className={styles.packageH3}>Foam Bath</p>
              <p className={styles.packageH3}>High Pressure Rinse</p>
              <p className={styles.packageH3}>Vortex Dry</p>
              
            </div>
          </div>
        </div>

          <div className={styles.packageSection}>
          <div className={styles.packageCard}>
            <div className={`${styles.packageCardHeader} ${styles.bigHorn}`}>
              <h1 className={`${styles.packageH1}`}>
                <em>Big Horn Experience</em>
              </h1>
            </div>
            <div className={styles.packagePriceRow}>
              <div className={styles.packagePrice}>
                <p className={styles.price}>
                  $17<span className={styles.text2xl}>ea.</span>
                </p>
                <p className={styles.priceType}>Single Wash</p>
              </div>
              <div className={styles.verticalLine}></div>
              <div className={styles.packagePrice}>
                <p className={styles.price}>
                  $27<span className={styles.text2xl}>/mo.</span>
                </p>
                <p className={styles.priceType}>Unlimited Wash</p>
              </div>
            </div>
             <Link href="https://www.carwashlogin.com/leterbuckcarwash/customerportal/signupforunlimited.aspx"><button className={styles.packageBtn}>Sign Me Up</button></Link>
          </div>
          <div className={styles.packageList}>
            <div className={styles.packageCol}>
               <p className={styles.packageH3}>Carnauba Wax</p>
              <p className={styles.packageH3}>Dash Wipe</p>
              <p className={styles.packageH3}>Tri Color</p>
              <p className={styles.packageH3}>Wheel Cleaner</p>
              <p className={styles.packageH3}>Underbody Rinse</p>
              <p className={styles.packageH3}>Bug Buster</p>
              <p className={styles.packageH3}>Foam Bath</p>
              <p className={styles.packageH3}>High Pressure Rinse</p>
              <p className={styles.packageH3}>Vortex Dry</p>
              
            </div>
          </div>
        </div>
        
          <div className={styles.packageSection}>
          <div className={styles.packageCard}>
            <div className={`${styles.packageCardHeader} ${styles.blackTooth}`}>
              <h1 className={`${styles.packageH1}`}>
                <em>Black Tooth Deluxe</em>
              </h1>
            </div>
            <div className={styles.packagePriceRow}>
              <div className={styles.packagePrice}>
                <p className={styles.price}>
                  $17<span className={styles.text2xl}>ea.</span>
                </p>
                <p className={styles.priceType}>Single Wash</p>
              </div>
              <div className={styles.verticalLine}></div>
              <div className={styles.packagePrice}>
                <p className={styles.price}>
                  $20<span className={styles.text2xl}>/mo.</span>
                </p>
                <p className={styles.priceType}>Unlimited Wash</p>
              </div>
            </div>
            <Link href="https://www.carwashlogin.com/leterbuckcarwash/customerportal/signupforunlimited.aspx"><button className={styles.packageBtn}>Sign Me Up</button></Link>
          </div>
          <div className={styles.packageList}>
            <div className={styles.packageCol}>
              <p className={styles.packageH3}>Dash Wipe</p>
              <p className={styles.packageH3}>Tri Color</p>
              <p className={styles.packageH3}>Foam Bath</p>
              <p className={styles.packageH3}>High Pressure Rinse</p>
              <p className={styles.packageH3}>Vortex Dry</p>
              <p className={styles.packageH3}>Clean & Dry</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Packages;
