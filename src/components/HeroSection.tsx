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
              <span className={styles.badgeText}>Templates Are Free</span>
              <ArrowRight size={14} className={styles.badgeIcon} />
            </div>
          </div>
          
          {/* Main Title */}
          <h1 className={styles.title}>
            Idea to website
          </h1>
          
          {/* Subtitle */}
          <p className={styles.description}>
            Generate Websites Instantly, Customize to Perfection.
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
                <span className="font-medium">AI Website Builder</span>
              </div>
              <textarea 
                className={styles.promptInput} 
                placeholder="What do you want to build? E.g., A modern portfolio for a freelance designer..."
                rows={3}
              ></textarea>
              <div className={styles.promptFooter}>
                <button className="btn btn-ghost" style={{ fontSize: '0.875rem' }}>
                  <Video size={16} /> Watch Demo
                </button>
                <button className={`btn btn-primary ${styles.generateBtn}`}>
                  Generate <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
