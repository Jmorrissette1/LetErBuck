import React from 'react';
import Image from 'next/image';
import styles from './ContentBox.module.css';


interface ContentBoxProps {
  children: React.ReactNode;
}

const ContentBox: React.FC<ContentBoxProps> = ({children}) => {
    return (
      <div className={styles.row}>
          <div className={`${styles.contentContainer} ${styles.column}`}>
          <div className={styles.contentBox}> {children} </div>
          </div>
          <div><Image src="/images/specials-banner.svg" alt="banner image" width={300} height={700}></Image></div> 
      </div>
    );
      
  
  };

  
export default ContentBox;