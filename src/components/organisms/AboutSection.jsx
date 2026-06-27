import { motion } from 'framer-motion';
import { MapPin, Star } from 'lucide-react';
import { personalInfo, stats, experience } from '../../data/portfolioData';
import SectionTitle from '../atoms/SectionTitle';
import styles from './AboutSection.module.css';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: 'easeOut' },
  }),
};

export default function AboutSection() {
  return (
    <section id="about" className={`section ${styles.about}`}>
      <div className="rune-bg" aria-hidden="true" />
      <div className="container">
        <SectionTitle label="Origin Story" title="About Me" />

        <div className={styles.grid}>
          {/* Left: Info Card */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className={styles.infoCard}
          >
            <div className="glass-card" style={{ padding: '32px' }}>
              <div className="corner-bracket tl" />
              <div className="corner-bracket tr" />
              <div className="corner-bracket bl" />
              <div className="corner-bracket br" />

              {/* Avatar */}
              <div className={styles.cardAvatar}>
                {personalInfo.avatar ? (
                  <img src={personalInfo.avatar} alt={personalInfo.name} />
                ) : (
                  <div className={styles.avatarFallback}>
                    {personalInfo.name.split(' ').map(w => w[0]).join('')}
                  </div>
                )}
              </div>

              <h3 className={styles.cardName}>{personalInfo.name}</h3>
              <p className={styles.cardTitle}>{personalInfo.title}</p>

              <div className={styles.cardMeta}>
                <span className={styles.metaItem}>
                  <MapPin size={13} />
                  {personalInfo.location}
                </span>
                <span className={styles.metaItem}>
                  <Star size={13} />
                  Available for hire
                </span>
              </div>

              <div className={styles.divider} />

              <p className={styles.cardBio}>{personalInfo.bio}</p>

              <a href={`mailto:${personalInfo.email}`} className={styles.emailLink}>
                {personalInfo.email}
              </a>
            </div>
          </motion.div>

          {/* Right: Stats + Timeline */}
          <div className={styles.rightColumn}>
            {/* Stats Grid */}
            <div className={styles.statsGrid}>
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className={styles.statCard}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  custom={i * 0.5}
                  viewport={{ once: true, amount: 0.3 }}
                  whileHover={{ scale: 1.04 }}
                >
                  <div className="corner-bracket tl" />
                  <div className="corner-bracket br" />
                  <span className={styles.statValue}>
                    {stat.value}<span className={styles.statSuffix}>{stat.suffix}</span>
                  </span>
                  <span className={styles.statLabel}>{stat.label}</span>
                </motion.div>
              ))}
            </div>

            {/* Experience Timeline */}
            <motion.div
              className={styles.timeline}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              custom={2}
              viewport={{ once: true, amount: 0.2 }}
            >
              <h3 className={styles.timelineTitle}>
                <span className={styles.timelineDot} />
                Journey
              </h3>
              <div className={styles.timelineItems}>
                {experience.map((exp, i) => (
                  <motion.div
                    key={exp.id}
                    className={styles.timelineItem}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    custom={i * 0.15}
                    viewport={{ once: true }}
                  >
                    <div className={styles.timelineMarker}>
                      <span className={`${styles.markerDot} ${exp.type === 'education' ? styles.education : ''}`} />
                      {i < experience.length - 1 && <span className={styles.markerLine} />}
                    </div>
                    <div className={styles.timelineBody}>
                      <div className={styles.timelineHeader}>
                        <h4 className={styles.timelineRole}>{exp.role}</h4>
                        <span className={styles.timelinePeriod}>{exp.period}</span>
                      </div>
                      <p className={styles.timelineCompany}>{exp.company}</p>
                      <p className={styles.timelineDesc}>{exp.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
