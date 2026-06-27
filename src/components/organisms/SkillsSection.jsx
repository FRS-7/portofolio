import { motion } from 'framer-motion';
import { skills } from '../../data/portfolioData';
import SectionTitle from '../atoms/SectionTitle';
import styles from './SkillsSection.module.css';

export default function SkillsSection() {
  return (
    <section id="skills" className={`section ${styles.skills}`}>
      <div className="rune-bg" aria-hidden="true" />
      <div className="container">
        <SectionTitle label="Abilities & Mastery" title="Skills" />

        <div className={styles.categoriesGrid}>
          {skills.map((category, catIdx) => (
            <motion.div
              key={category.category}
              className={styles.categoryCard}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: catIdx * 0.12, duration: 0.6 }}
            >
              <div className="corner-bracket tl" />
              <div className="corner-bracket br" />

              <h3 className={styles.categoryName}>
                <span className={styles.categoryIcon}>◈</span>
                {category.category}
              </h3>

              <div className={styles.skillList}>
                {category.items.map((skill, idx) => (
                  <motion.div
                    key={skill.name}
                    className={styles.skillItem}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: catIdx * 0.1 + idx * 0.08, duration: 0.5 }}
                  >
                    <div className={styles.skillHeader}>
                      <span className={styles.skillName}>{skill.name}</span>
                      <span className={styles.skillLevel}>{skill.level}%</span>
                    </div>

                    <div className={styles.gaugeTrack}>
                      <motion.div
                        className={styles.gaugeFill}
                        style={{ '--skill-color': skill.color }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{
                          delay: catIdx * 0.1 + idx * 0.1 + 0.3,
                          duration: 1,
                          ease: [0.25, 0.46, 0.45, 0.94],
                        }}
                      />
                      {/* Gauge segments (game-style) */}
                      <div className={styles.gaugeSegments} aria-hidden="true">
                        {Array.from({ length: 10 }).map((_, i) => (
                          <span key={i} className={styles.gaugeSegment} />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
