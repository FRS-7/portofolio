import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, GitBranch, Eye } from 'lucide-react';
import { projects } from '../../data/portfolioData';
import SectionTitle from '../atoms/SectionTitle';
import styles from './ProjectsSection.module.css';

const FILTERS = ['All', 'React', 'Laravel', 'Node.js'];

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [hovered, setHovered] = useState(null);

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.tags.some(t => t.includes(activeFilter)));

  return (
    <section id="projects" className={`section ${styles.projects}`}>
      <div className="rune-bg" aria-hidden="true" />
      <div className="container">
        <SectionTitle label="Chronicles of Creation" title="Projects" />

        {/* Filter Tabs */}
        <div className={styles.filterBar}>
          {FILTERS.map(f => (
            <button
              key={f}
              className={`${styles.filterBtn} ${activeFilter === f ? styles.filterActive : ''}`}
              onClick={() => setActiveFilter(f)}
            >
              {f}
              {activeFilter === f && (
                <motion.span className={styles.filterUnderline} layoutId="filterLine" />
              )}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div className={styles.grid} layout>
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.article
                key={project.id}
                className={`${styles.card} ${project.featured ? styles.featured : ''}`}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: i * 0.06, duration: 0.4 }}
                onHoverStart={() => setHovered(project.id)}
                onHoverEnd={() => setHovered(null)}
                whileHover={{ y: -6 }}
              >
                <div className="corner-bracket tl" />
                <div className="corner-bracket tr" />
                <div className="corner-bracket bl" />
                <div className="corner-bracket br" />

                {/* Card Header / Image Area */}
                <div className={styles.cardHeader}>
                  <div className={styles.cardHeaderBg} />
                  <div className={styles.cardHeaderIcon}>
                    {project.featured && (
                      <span className={styles.featuredBadge}>◆ Featured</span>
                    )}
                    <div className={styles.projectNumber}>
                      {String(project.id).padStart(2, '0')}
                    </div>
                  </div>

                  {/* Hover Overlay */}
                  <AnimatePresence>
                    {hovered === project.id && (
                      <motion.div
                        className={styles.cardOverlay}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className={styles.overlayActions}>
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.overlayBtn}
                            title="Live Demo"
                          >
                            <ExternalLink size={16} />
                            <span>Live Demo</span>
                          </a>
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.overlayBtnOutline}
                            title="Source Code"
                          >
                          <GitBranch size={16} />
                            <span>Code</span>
                          </a>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Card Body */}
                <div className={styles.cardBody}>
                  <h3 className={styles.cardTitle}>{project.title}</h3>
                  <p className={styles.cardDesc}>{project.description}</p>

                  <div className={styles.tagRow}>
                    {project.tags.map(tag => (
                      <span key={tag} className="tag-badge">{tag}</span>
                    ))}
                  </div>

                  {/* Bottom Actions */}
                  <div className={styles.cardActions}>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.actionLink}
                    >
                      <Eye size={14} />
                      <span>Visit Project</span>
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.actionLinkMuted}
                    >
                      <GitBranch size={14} />
                      <span>Repository</span>
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
