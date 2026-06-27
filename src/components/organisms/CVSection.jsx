import { motion } from 'framer-motion';
import { Download, FileText, Calendar, Award } from 'lucide-react';
import { personalInfo, experience } from '../../data/portfolioData';
import SectionTitle from '../atoms/SectionTitle';
import styles from './CVSection.module.css';

export default function CVSection() {
  return (
    <section id="cv" className={`section ${styles.cv}`}>
      <div className="rune-bg" aria-hidden="true" />
      <div className="container">
        <SectionTitle label="Scroll of Credentials" title="Curriculum Vitae" />

        <div className={styles.wrapper}>
          <motion.div
            className={styles.questCard}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="corner-bracket tl" />
            <div className="corner-bracket tr" />
            <div className="corner-bracket bl" />
            <div className="corner-bracket br" />

            <div className={styles.cardHeader}>
              <div className={styles.badge}>
                <Award size={16} />
                <span>Active Quest: Career Summary</span>
              </div>
              <h3 className={styles.title}>Adventurer Credentials</h3>
              <p className={styles.subtitle}>Download formal parchment for off-site evaluation</p>
            </div>

            <div className={styles.timelineSummary}>
              {experience.slice(0, 3).map((item) => (
                <div key={item.id} className={styles.summaryItem}>
                  <div className={styles.itemIcon}>
                    {item.type === 'work' ? <FileText size={16} /> : <Calendar size={16} />}
                  </div>
                  <div className={styles.itemContent}>
                    <h4 className={styles.itemRole}>{item.role}</h4>
                    <p className={styles.itemMeta}>{item.company} | {item.period}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.actionArea}>
              <a
                href={personalInfo.cvFile}
                download
                className="btn-gold"
                title="Download PDF Parchment"
              >
                <Download size={16} />
                <span>Acquire Parchment (PDF)</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
