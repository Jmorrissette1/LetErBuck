import Image from "next/image";
import styles from "./Footer.module.css";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <div className={styles.footerSection}>
      <Image
        src={"/images/footer.webp"}
        alt="brown mountain"
        width={1200}
        height={270}
        priority
        className={styles.footerMountian}/>
      <div className={styles.footerBody}>
        <div className={styles.addressBox}>
          
          <div className={styles.addressLine}>
            <h2 className={styles.footerH2}>Locations</h2>
            <div className={styles.row}>
            <Link href="/locations/sheridan"><p className={styles.footerP}>Brundage Ln | Sheridan, Wyoming</p></Link>
            </div>
            <div className={styles.row}>
             <Link href="/locations/casper2"> <p className={styles.footerP}>2nd St | Casper, Wyoming</p></Link>
            </div>
            <div className={styles.row}>
               <Link href="/locations/casper"> <p className={styles.footerP}>CY Ave | Casper, Wyoming</p></Link>
            </div>
              <div className={styles.row}>
               <Link href="/locations/gillette"> <p className={styles.footerP}>Boxelder RD  | Gillette, Wyoming</p></Link>
               </div>
            <div className={styles.row}>
               <Link href="/locations/jackson"> <p className={styles.footerP}>Broadway | Jackson, Wyoming</p></Link>
            </div>
          </div>
          <div>
              <Image src="/images/LEB-Logo.svg" width={200} height={220} alt="cowboy riding a car" className={styles.footerLogo} />
            </div>
          <div>
            
            <div className={styles.vaccumBox}>
             <h2 className={styles.footerH2}>PROUDLY OFFERING VACUUMS BY</h2>
            
              <div className={styles.vacutechImage}>
                <Link href="https://vacutechllc.com/"><Image
                  src="/images/vacutech.png"
                  alt="Vault Tech Vacums"
                  width={204}
                  height={41}
                /></Link>
               </div>
                <h2 className={styles.footerH2}>FOLLOW US ON SOCIAL!</h2>
                <Link href="https://www.facebook.com/LetErBuckCarWash/"><Image src="/images/facebook.png" width={42} height={42} alt="facebook icon" className={styles.socailIcon} /> </Link>
              </div>
           
          </div>
        </div>
         <div className={styles.addressBoxM}>
          <div className={styles.footerAddressBox}>
            <h3 className={styles.footerH3}>Sheridan</h3>
             <Link href="/locations/sheridan"><button className={styles.footerBtn}>Directions & More</button></Link>
            <h3 className={styles.footerH3}>2nd St Casper</h3>
             <Link href="/locations/casper"><button className={styles.footerBtn}>Directions & More</button></Link>
            <h3 className={styles.footerH3}>CY Ave Casper</h3>
            <Link href="/locations/casper"><button className={styles.footerBtn}>Directions & More</button></Link>
            <h3 className={styles.footerH3}>Gillette</h3>
             <Link href="/locations/gillette"><button className={styles.footerBtn}>Directions & More</button></Link>
            <h3 className={styles.footerH3}>Jackson</h3>
             <Link href="/locations/jackson"><button className={styles.footerBtn}>Directions & More</button></Link>
          </div>
         </div>
          
        <p className={styles.footerP}>
          Copyright © 2025 Let&apos;Er Buck Car Wash. All Rights Reserved.
        </p>
      </div>

    </div>
  );
};

export default Footer;
