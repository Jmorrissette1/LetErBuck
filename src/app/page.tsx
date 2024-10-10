
import Head from "next/head";
import Image from "next/image";
import styles from "./page.module.css";
import Nav from "./Nav";
import Footer from "./Footer";

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
          <Image src="/learn-more-btn.png" alt="blue sign me up button" width={170} height={30} className="banner-btn"></Image>
          <Image src="/sign-me-up-btn.png" alt="blue sign me up button" width={170} height={30}></Image>
        </div>
      </div>
      
      </main>
      <footer className={styles.footer}>
        <Footer />
      </footer>
    </div>
  );
}
