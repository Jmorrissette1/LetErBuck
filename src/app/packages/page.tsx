import React from "react";
import Nav from "../components/nav/Nav";
import Footer from "../components/footer/Footer";
import styles from "../page.module.css";

const Packages: React.FC = () => {
  return (
    <div className={styles.page}>
      <Nav />
      <main className={styles.main}>
        <div>
          <h1>Wash Packages</h1>
        </div>

        <div className="package-section">
          <div className="package-card">
            <div className="package-card-header">
              <h1 className="package-h1">
                <em>Wyoming Works</em>
              </h1>
            </div>
            <div className="package-price-row">
              <div className="package-price">
                <p className="price">
                  $25<span className="text-2xl">ea.</span>
                </p>
                <p className="price-type">Single Wash</p>
              </div>
              <div className="vertical-line"></div>
              <div className="package-price">
                <p className="text-5xl">
                  $35<span className="text-2xl font-bold">/mo.</span>
                </p>
                <p className="price-type">Unlimited Wash</p>
              </div>
            </div>
          </div>
          <div className="package-list">
            <div className="package-col">
              <p className="package-h3">Carnauba Wax</p>
              <p className="package-h3">Ceramic Hi-Foam</p>
              <p className="package-h3">Ceramic Sealant</p>
              <p className="package-h3">Dash Wipe</p>
              <p className="package-h3">Tri Color</p>
            </div>
            <div className="package-col">
              <p className="package-h3">Wheel Cleaner</p>
              <p className="package-h3">Underbody Rinse</p>
              <p className="package-h3">Bug Buster</p>
              <p className="package-h3">Foam Bath</p>
              <p className="package-h3">High Pressure Rinse</p>
              <p>Vortex Dry</p>
              <button className="package-btn">Learn More</button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Packages;
