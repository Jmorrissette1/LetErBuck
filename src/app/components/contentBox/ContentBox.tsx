import React from "react";
import styles from "./ContentBox.module.css";

interface ContentBoxProps {
  children: React.ReactNode;
}

const ContentBox: React.FC<ContentBoxProps> = ({ children }) => {
  return (
    <div className={styles.test}>
      <div className={styles.test}>
        <div className={`${styles.contentContainer} ${styles.column}`}>
          <div className={styles.contentBox}> {children} </div>
        </div>
      </div>
    </div>
  );
};

export default ContentBox;
