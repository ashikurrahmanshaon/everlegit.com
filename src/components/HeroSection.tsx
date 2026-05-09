"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Globe, Shield, Award } from "lucide-react";
import styles from "./HeroSection.module.css";

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroBackground}>
        <div className={styles.glow} />
      </div>
      
      <div className={`container ${styles.heroContainer}`}>
        <motion.div 
          className={styles.heroContent}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className={styles.badge}>
            <span className={styles.pulse}></span>
            Registered US Company
          </div>
          
          <h1 className={styles.title}>
            Global Commercial <br />
            <span className="text-accent">Excellence</span>
          </h1>
          
          <p className={styles.description}>
            Ever Legit LLC establishes trust, credibility, and long-term business relationships with clients, partners, and international brands through a premium corporate structure.
          </p>
          
          <div className={styles.actions}>
            <Link href="#contact" className="btn btn-primary">
              Partner With Us <ArrowRight size={18} />
            </Link>
            <Link href="#about" className="btn btn-outline">
              Discover Our Mission
            </Link>
          </div>
        </motion.div>

        <motion.div 
          className={styles.statsGrid}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className={styles.statCard}>
            <Globe className={styles.statIcon} />
            <h3>Global Reach</h3>
            <p>International operations & partnerships</p>
          </div>
          <div className={styles.statCard}>
            <Shield className={styles.statIcon} />
            <h3>Verified Trust</h3>
            <p>100% compliant business operations</p>
          </div>
          <div className={styles.statCard}>
            <Award className={styles.statIcon} />
            <h3>Premium Standards</h3>
            <p>Excellence in commercial services</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
