import React from 'react';
import Image from 'next/image';
import styles from './ContentBox.module.css';


interface ContentBoxProps {
  children: React.ReactNode;
}

const ContentBox: React.FC<ContentBoxProps> = ({children}) => {
    return (<div className={`${styles.contentContainer} ${styles.column}`}>
        <div className={styles.contentBox}> {children} </div>
        
      </div>
    );
      
  
  };

  
export default ContentBox;