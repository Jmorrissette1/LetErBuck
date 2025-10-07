import styles from "./page.module.css";
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
              <h3>WELCOME TO</h3>
              <h1>LET’ER BUCK CAR WASH</h1> 
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
