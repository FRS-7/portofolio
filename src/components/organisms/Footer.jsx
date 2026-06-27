import { personalInfo } from '../../data/portfolioData';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.line} aria-hidden="true" />
      <div className={`container ${styles.content}`}>
        <p className={styles.copy}>
          &copy; {currentYear} {personalInfo.name}. All Rights Reserved.
        </p>
        <div className={styles.watermark}>
          <span>✦ VALIANT REALM ✦</span>
        </div>
      </div>
    </footer>
  );
}
