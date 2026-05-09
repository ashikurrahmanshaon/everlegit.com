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
            Source winning products for Amazon, Walmart, and your e-commerce stores effortlessly.
          </p>

          {/* AI Prompt Input UI (Webild style) */}
          <motion.div 
            className={styles.promptContainer}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <div className={styles.promptBox}>
              <div className={styles.promptHeader}>
                <Sparkles size={18} className="text-accent" />
                <span className="font-medium">AI Product Sourcing</span>
              </div>
              <textarea 
                className={styles.promptInput} 
                placeholder="What products are you looking for? E.g., High-margin electronics for Amazon FBA..."
                rows={3}
              ></textarea>
              <div className={styles.promptFooter}>
                <button className="btn btn-ghost" style={{ fontSize: '0.875rem' }}>
                  <Video size={16} /> Watch Demo
                </button>
                <button className={`btn btn-primary ${styles.generateBtn}`}>
                  Start Sourcing <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
