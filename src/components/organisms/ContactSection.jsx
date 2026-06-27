import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Sparkles } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';
import SectionTitle from '../atoms/SectionTitle';
import styles from './ContactSection.module.css';

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    // Simulate sending message
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <section id="contact" className={`section ${styles.contact}`}>
      <div className="rune-bg" aria-hidden="true" />
      <div className="container">
        <SectionTitle label="Establish Connection" title="Send a Message" />

        <div className={styles.grid}>
          {/* Info Panels */}
          <motion.div
            className={styles.infoColumn}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-card" style={{ padding: '32px', marginBottom: '20px' }}>
              <div className="corner-bracket tl" />
              <div className="corner-bracket br" />
              <h3 className={styles.infoTitle}>Summoning Details</h3>
              <p className={styles.infoDesc}>
                Apakah Anda memiliki proyek menarik, tawaran kolaborasi, atau sekadar ingin menyapa? Hubungi saya kapan saja.
              </p>

              <div className={styles.contactDetails}>
                <div className={styles.contactItem}>
                  <Mail className={styles.contactIcon} size={18} />
                  <div>
                    <span className={styles.itemLabel}>Direct Inquiry</span>
                    <a href={`mailto:${personalInfo.email}`} className={styles.itemValue}>
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <div className={styles.contactItem}>
                  <MapPin className={styles.contactIcon} size={18} />
                  <div>
                    <span className={styles.itemLabel}>Location</span>
                    <span className={styles.itemValue}>{personalInfo.location}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className={styles.formColumn}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-card" style={{ padding: '32px' }}>
              <div className="corner-bracket tr" />
              <div className="corner-bracket bl" />

              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.inputGroup}>
                  <label htmlFor="name" className={styles.label}>Your Identifier</label>
                  <input
                    type="text"
                    id="name"
                    required
                    placeholder="Enter name..."
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={styles.input}
                  />
                </div>

                <div className={styles.inputGroup}>
                  <label htmlFor="email" className={styles.label}>Return Coordinates (Email)</label>
                  <input
                    type="email"
                    id="email"
                    required
                    placeholder="Enter email..."
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={styles.input}
                  />
                </div>

                <div className={styles.inputGroup}>
                  <label htmlFor="message" className={styles.label}>Message Contents</label>
                  <textarea
                    id="message"
                    required
                    rows="5"
                    placeholder="Type your message here..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={styles.textarea}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="btn-gold"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  {status === 'sending' ? (
                    <span>Casting Message...</span>
                  ) : status === 'success' ? (
                    <>
                      <Sparkles size={16} />
                      <span>Transmission Sent!</span>
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      <span>Transmit Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
