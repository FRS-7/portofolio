import { motion } from 'framer-motion';


export default function SectionTitle({ label, title, highlight }) {
  return (
    <motion.div
      className="section-title-wrapper"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6 }}
    >
      <span className="section-label">{label}</span>
      <h2 className="section-heading">
        {highlight ? (
          <>
            {title.replace(highlight, '')}<span className="highlight">{highlight}</span>
          </>
        ) : title}
      </h2>
      <div className="section-divider">
        <span className="section-divider-line" />
        <span className="section-divider-diamond" />
        <span className="section-divider-line" />
      </div>
    </motion.div>
  );
}
