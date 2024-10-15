// pages/about.tsx
import React from 'react';
import Nav from '../components/nav/Nav';
import Footer from '../components/footer/Footer';
import styles from '../page.module.css';


const Fundraising: React.FC = () => {
  return (
    <div className={styles.page}>
      <Nav />
      <main className={styles.main}>
        <div>
          <h1>Fundraising</h1>
          <p>Learn more about partnering with Let'Er Buck to raise money!</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Fundraising;