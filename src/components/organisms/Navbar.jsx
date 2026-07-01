import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import styles from './Navbar.module.css';

const navLinks = [
  { label: 'Home',     id: 'hero' },
  { label: 'About',    id: 'about' },
  { label: 'Skills',   id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'CV',       id: 'cv' },
  { label: 'Contact',  id: 'contact' },
];

export default function Navbar({ currentSection = 'hero', onNavClick }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = (id) => {
    if (onNavClick) onNavClick(id);
    setMenuOpen(false);
  };

  return (
    <motion.nav
      className={styles.navbar}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className={styles.navInner}>
        {/* Logo */}
        <button onClick={() => handleClick('hero')} className={styles.logo}>
          <span className={styles.logoIcon}>⬡</span>
          <span className={styles.logoText}>FRS7</span>
          <span className={styles.logoSub}>.DEV</span>
        </button>

        {/* Desktop Links */}
        <ul className={styles.navLinks}>
          {navLinks.map((link) => (
            <li key={link.label}>
              <button
                className={`${styles.navLink} ${currentSection === link.id ? styles.active : ''}`}
                onClick={() => handleClick(link.id)}
              >
                <span className={styles.navLinkText}>{link.label}</span>
                {currentSection === link.id && (
                  <motion.span
                    className={styles.navLinkUnderline}
                    layoutId="navUnderline"
                    transition={{ duration: 0.3 }}
                  />
                )}
              </button>
            </li>
          ))}
        </ul>

        {/* Right: 3D Gallery CTA (External Link) */}
        <a href="https://your-3d-web-link.com" target="_blank" rel="noopener noreferrer" className={styles.galleryBtn}>
          <span className={styles.galleryBtnIcon}>◈</span>
          <span>3D Gallery</span>
        </a>

        {/* Mobile Toggle */}
        <button
          className={styles.menuToggle}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map((link) => (
              <button
                key={link.label}
                className={`${styles.mobileLink} ${currentSection === link.id ? styles.mobileLinkActive : ''}`}
                onClick={() => handleClick(link.id)}
              >
                {link.label}
              </button>
            ))}
            <a href="https://your-3d-web-link.com" target="_blank" rel="noopener noreferrer" className={styles.mobileLinkGold}>
              ◈ 3D Gallery
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
