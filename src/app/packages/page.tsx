import React from "react";
import Image from "next/image";
import Nav from "../components/nav/Nav";
import Footer from "../components/footer/Footer";
import ContentBox from "../components/contentBox/ContentBox";
import styles from "../page.module.css";

const Packages: React.FC = () => {
  return (
    <div className={styles.page}>
      <Nav />
      <main className={styles.main}>
        <div>
          <h1>Wash Packages</h1>
        </div>
        <ContentBox>
          <div className="services-desktop clearfix">
            <div className="packages">
              <div className="top-package the-package selected">
                <span></span>
                <div className="flag"></div>
              </div>
              <div className="cloud-peak the-package">
                <span></span>
                <div className="flag"></div>
              </div>
              <div className="big-horn the-package">
                <span></span>
                <div className="flag"></div>
              </div>
              <div className="black-tooth the-package">
                <span></span>
                <div className="flag"></div>
              </div>
            </div>
            <ul className="active top-package">
              <li className="included">Carnauba Wax</li>
              <li className="included">Ceramic Hi-Foam</li>
              <li className="included">Ceramic Sealant</li>
              <li className="included">Dash Wipe</li>
              <li className="included">Tri Color</li>
              <li className="included">Wheel Cleaner</li>
              <li className="included">Underbody Rinse</li>
              <li className="included">Bug Buster</li>
              <li className="included">Foam Bath</li>
              <li className="included">High Pressure Rinse</li>
              <li className="included">Vortex Dry</li>
              <li className="price">
                <Image
                  src="/images/steamboat-ceramic.png"
                  alt="22 dollar single wash"
                  width={145}
                  height={150}
                ></Image>
              </li>
            </ul>
            <ul className="cloud-peak">
              <li className="not-included">Carnauba Wax</li>
              <li className="included">Ceramic Hi-Foam</li>
              <li className="included">Ceramic Sealant</li>
              <li className="included">Dash Wipe</li>
              <li className="included">Tri Color</li>
              <li className="included">Wheel Cleaner</li>
              <li className="included">Underbody Rinse</li>
              <li className="included">Clear Coat Protectant</li>
              <li className="included">Bug Buster</li>
              <li className="included">Foam Bath</li>
              <li className="included">High Pressure Rinse</li>
              <li className="included">Vortex Dry</li>
              <li className="price">
                <Image
                  src="/images/steamboatx.png"
                  alt="20 dollar single wash"
                  width={145}
                  height={150}
                ></Image>
              </li>
            </ul>
            <ul className="big-horn">
              <li className="included">Carnauba Wax</li>
              <li className="not-included">Ceramic Hi-Foam</li>
              <li className="not-included">Ceramic Sealant</li>
              <li className="included">Dash Wipe</li>
              <li className="included">Tri Color</li>
              <li className="included">Wheel Cleaner</li>
              <li className="included">Underbody Rinse</li>
              <li className="included">Clear Coat Protectant</li>
              <li className="included">Bug Buster</li>
              <li className="included">Foam Bath</li>
              <li className="included">High Pressure Rinse</li>
              <li className="included">Vortex Dry</li>
              <li className="price">
                <Image
                  src="/images/big-horn.png"
                  alt="17 dollar single wash"
                  width={145}
                  height={150}
                ></Image>
              </li>
            </ul>
            <ul className="black-tooth">
              <li className="not-included">Carnauba Wax</li>
              <li className="not-included">Ceramic Hi-Foam</li>
              <li className="not-included">Ceramic Sealant</li>
              <li className="not-included">Wheel Cleaner</li>
              <li className="not-included">Underbody Rinse</li>
              <li className="not-included">Clear Coat Protectant</li>
              <li className="not-included">Bug Buster</li>
              <li className="included">Dash Wipe</li>
              <li className="included">Tri Color</li>
              <li className="included">Foam Bath</li>
              <li className="included">High Pressure Rinse</li>
              <li className="included">Vortex Dry</li>
              <li className="included">Clean & Dry</li>
              <li className="price">
                <Image
                  src="/images/blacktooth.png"
                  alt="12 dollar single wash"
                  width={145}
                  height={150}
                ></Image>
              </li>
            </ul>
          </div>
        </ContentBox>
      </main>
      <Footer />
    </div>
  );
};

export default Packages;
