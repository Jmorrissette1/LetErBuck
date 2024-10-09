import Image from 'next/image';

import styles from './Footer.module.css';


const Footer: React.FC = () => {
    return (
      <div className={styles.footerSection}>
        <Image src={'/footer.svg'}  alt='mountain' width={1200} height={270}/>
        <div className={styles.footerBody}>
            Test
        </div>
      </div>
      
    );
  };

  
export default Footer;