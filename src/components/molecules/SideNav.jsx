import { motion } from 'framer-motion';
import styles from './SideNav.module.css';

const LABELS = {
  hero: 'HOME',
  about: 'ABOUT',
  skills: 'SKILLS',
  projects: 'PROJECTS',
  cv: 'CV',
  contact: 'CONTACT',
};

export default function SideNav({ sections, current, goTo }) {
  return (
    <nav className={styles.sideNav} aria-label="Section navigation">
      <div className={styles.track}>
        {sections.map((section, i) => (
          <button
            key={section}
            className={`${styles.dot} ${i === current ? styles.active : ''}`}
            onClick={() => goTo(i)}
            title={LABELS[section] || section}
            aria-label={LABELS[section] || section}
          >
            <span className={styles.dotInner} />
            <span className={styles.label}>{LABELS[section]}</span>
          </button>
        ))}
        {/* Vertical connector line */}
        <div className={styles.line} />
        {/* Moving active indicator */}
        <motion.div
          className={styles.activeLine}
          animate={{ top: `${current * (100 / sections.length)}%` }}
          transition={{ duration: 0.7, ease: [0.77, 0, 0.175, 1] }}
          style={{ height: `${100 / sections.length}%` }}
        />
      </div>
    </nav>
  );
}
