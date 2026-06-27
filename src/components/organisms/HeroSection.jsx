import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Download, ChevronDown, GitBranch, Briefcase, Camera } from 'lucide-react';
import { personalInfo, socialLinks } from '../../data/portfolioData';
import styles from './HeroSection.module.css';

const ROLES = [
  'Full Stack Developer',
  'UI / UX Enthusiast',
  '3D Artist (Blender)',
  'Digital Craftsman',
];

const ICON_MAP = { GitBranch, Briefcase, Camera };

function useTypewriter(words, speed = 100, pause = 2000) {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(current.slice(0, text.length + 1));
        if (text.length === current.length) {
          setTimeout(() => setIsDeleting(true), pause);
        }
      } else {
        setText(current.slice(0, text.length - 1));
        if (text.length === 0) {
          setIsDeleting(false);
          setWordIndex((i) => i + 1);
        }
      }
    }, isDeleting ? speed / 2 : speed);
    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, speed, pause]);

  return text;
}

export default function HeroSection() {
  const typedText = useTypewriter(ROLES);
  const containerRef = useRef(null);

  const iconLinks = socialLinks.map(s => ({
    ...s,
    Icon: ICON_MAP[s.icon] || Github,
  }));

  return (
    <section id="hero" className={styles.hero} ref={containerRef}>
      {/* Radial glow behind content */}
      <div className={styles.heroGlow} />

      {/* Rune ring decoration */}
      <div className={styles.runeRing} aria-hidden="true">
        <div className={styles.runeRingInner} />
        <div className={styles.runeRingOuter} />
      </div>

      <div className={`container ${styles.heroContent}`}>
        <motion.div
          className={styles.heroText}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Pre-title */}
          <motion.p
            className={styles.preTitle}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <span className={styles.preLine} />
            Welcome to my realm
            <span className={styles.preLine} />
          </motion.p>

          {/* Main Title */}
          <motion.h1
            className={styles.mainTitle}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            <span className={styles.titleI}>I&apos;m</span>{' '}
            <span className={styles.titleName}>{personalInfo.name}</span>
          </motion.h1>

          {/* Typewriter Role */}
          <motion.div
            className={styles.roleWrapper}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <span className={styles.rolePrefix}>{'> '}</span>
            <span className={styles.roleText}>{typedText}</span>
            <span className={styles.cursor} aria-hidden="true">|</span>
          </motion.div>

          {/* Bio */}
          <motion.p
            className={styles.bio}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            {personalInfo.bio}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className={styles.ctaGroup}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
          >
            <a href={personalInfo.cvFile} download className="btn-gold">
              <Download size={16} />
              <span>Download CV</span>
            </a>
            <a href="#projects" className="btn-outline">
              <span>View Projects</span>
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className={styles.socialRow}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.5 }}
          >
            {iconLinks.map((s) => (
              <a
                key={s.id}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                title={s.label}
              >
                <s.Icon size={18} />
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Avatar / Emblem */}
        <motion.div
          className={styles.avatarWrapper}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8, ease: 'easeOut' }}
        >
          <div className={styles.avatarRing}>
            <div className={styles.avatarFrame}>
              {personalInfo.avatar ? (
                <img src={personalInfo.avatar} alt={personalInfo.name} className={styles.avatarImg} />
              ) : (
                <div className={styles.avatarPlaceholder}>
                  <span className={styles.avatarInitial}>
                    {personalInfo.name.split(' ').map(w => w[0]).join('')}
                  </span>
                </div>
              )}
            </div>
            {/* Orbital rings */}
            <div className={styles.orbitalRing1} />
            <div className={styles.orbitalRing2} />
          </div>

          {/* Location badge */}
          <div className={styles.locationBadge}>
            <span>◉</span>
            <span>{personalInfo.location}</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        className={styles.scrollIndicator}
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
      >
        <ChevronDown size={22} />
      </motion.a>
    </section>
  );
}
