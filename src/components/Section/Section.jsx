import React from 'react';
import styles from './Section.module.css';

const Section = ({ title, children }) => {
  return (
    <div className={styles.section}>
      <h1>{title}</h1>
      {children}
    </div>
  );
};

export default Section;
