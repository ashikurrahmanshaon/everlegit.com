"use client";

import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Video } from "lucide-react";
import styles from "./HeroSection.module.css";

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className="container">
        <motion.div 
          className={styles.heroContent}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Badge */}
          <div className={styles.badgeWrapper}>
            <div className={styles.badge}>
              <span className={styles.badgeNew}>NEW</span>
              <span className={styles.badgeText}>Global Sourcing Available</span>
              <ArrowRight size={14} className={styles.badgeIcon} />
            </div>
          </div>
          
          {/* Main Title */}
          <h1 className={styles.title}>
            Global E-commerce Sourcing
          </h1>
          
          {/* Subtitle */}
          <p className={styles.description}>
            Comprehensive sourcing, quality control, and global logistics for enterprise e-commerce brands on Amazon and Walmart.
          </p>

          {/* Corporate CTA Buttons */}
          <motion.div 
            className={styles.ctaContainer}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}
          >
            <button className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.1rem', borderRadius: 'var(--border-radius-pill)' }}>
              Schedule Consultation <ArrowRight size={18} style={{ marginLeft: '0.5rem', display: 'inline' }} />
            </button>
            <button className="btn btn-ghost" style={{ padding: '1rem 2rem', fontSize: '1.1rem', borderRadius: 'var(--border-radius-pill)', border: '1px solid var(--border)' }}>
              Explore Services
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
