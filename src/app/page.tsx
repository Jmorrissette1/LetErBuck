
import Head from "next/head";
import Image from "next/image";
import styles from "./page.module.css";
import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";


export default function Home() {
  return (
    
    <div>
     
    <div>
 
    </div>
      <main className={styles.main}>
      <Nav />
        <div>
          <video autoPlay muted loop className={styles.videoBackground}>
            <source src="/LEB_Web_Background.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
      </div>
      <div className={styles.content}>
        <div className={styles.homeBanner}>
          <p className={styles.ryeFont}>Unlimited</p>
          <p className={styles.ryeFont}>Monthly</p>
          <p className={styles.ryeFont}>Washes</p>
          <Image src="/banner-arrow.png" alt="blue sign me up button" width={200} height={25}></Image>
          <p className={styles.startingAt}>Starting at Just</p>
          <h2 className={styles.bannerPrice}>$20/Mo.</h2>
          <p className={styles.startingAt}><em>Stay clean for Less!</em></p>
          <Image src="/learn-more-btn.png" alt="blue sign me up button" width={170} height={30} className={styles.bannerBtn}></Image>
          <Image src="/sign-me-up-btn.png" alt="blue sign me up button" width={170} height={30} className={styles.bannerBtn}></Image>
         
        </div>
      </div>
      
      </main>
      <footer className={styles.footer}>
        <Footer />
      </footer>
    </div>
  );
}
