// pages/about.tsx
import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import styles from '../page.module.css';


const AboutPage: React.FC = () => {
  return (
    <div className={styles.page}>
      <Nav />
      <main className={styles.main}>
        <div>
          <h1>About Us</h1>
          <p>This is the about page.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;