import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    
    <div>
      <main className={styles.main}>
        <div>
          <video autoPlay muted loop className={styles.videoBackground}>
            <source src="/LEB_Web_Background.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className={styles.pageContent}>
              <h1>Welcome to the Specific Page</h1>
              <p>This page has a video background.</p>
            </div>
      </div>
      </main>
      <footer>
        
      </footer>
    </div>
  );
}
