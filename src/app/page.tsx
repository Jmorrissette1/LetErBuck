
import styles from "./page.module.css";
import Nav from "./Nav";
import Footer from "./Footer";

export default function Home() {
  return (
    
    <div>
      <main className={styles.main}>
      <Nav />
        <div>
          <video autoPlay muted loop className={styles.videoBackground}>
            <source src="/LEB_Web_Background.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
      </div>
      <Footer />
      </main>
      <footer>
     
      </footer>
    </div>
  );
}
