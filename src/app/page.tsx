import styles from "./page.module.css";
import Link from "next/link";
import Nav from "./components/nav/Nav";
import HomeBanner from "./components/homeBanner/HomeBanner";
import Footer from "./components/footer/Footer";


export default function Home() {
  return (
    <div>
    
      <main className={styles.main}>
        
        <Nav />
        <div>
          <video autoPlay muted loop className={styles.videoBackground}>
            <source src="/videos/LEB_Web_Background.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
          <div className={styles.mobileHome}>
              <h3 className={styles.homeH3}>WELCOME TO</h3>
              <h1 className={styles.homeH1}>LET’ER BUCK CAR WASH</h1> 
              <p className={styles.homeP}>This ain’t your average wash, we give your car the cowboy treatment. Tough, fast, and clean every dang time.</p>
        </div>
        <div className={styles.homeBtnBox}>
          <div>

          </div>
          <Link href="/whyUnlimited"><button className={styles.learnMoreBtn}>Learn More</button></Link>
          <Link href="https://www.carwashlogin.com/leterbuckcarwash/customerportal/signupforunlimited.aspx"><button className={styles.signMeUpBtn}>Sign Me Up</button></Link>
        </div>
        <div className={styles.bannerM}>
        <HomeBanner />
      </div>
      </main>
      <footer className={styles.footer}>
        <Footer />
      </footer>
    </div>
  );
}
