
import Head from "next/head";
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
        <div className={styles.testBox}>
          <p className={styles.ryeFont}>Test Box</p>
        </div>
      </div>
      
      </main>
      <footer className={styles.footer}>
        <Footer />
      </footer>
    </div>
  );
}
