import Link from "next/link";
import { Briefcase, Mail, MapPin, Phone } from "lucide-react";
import styles from "./Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerGrid}`}>
        <div className={styles.footerCol}>
          <Link href="/" className={styles.logo}>
            <Briefcase className={styles.logoIcon} />
            <span>Ever Legit LLC</span>
          </Link>
          <p className={styles.description}>
            A modern, professional, and globally focused commercial company designed to establish trust, credibility, transparency, and long-term business relationships.
          </p>
        </div>

        <div className={styles.footerCol}>
          <h3>Quick Links</h3>
          <ul className={styles.linksList}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="#about">About Us</Link></li>
            <li><Link href="#services">Services</Link></li>
            <li><Link href="/dashboard">Client Dashboard</Link></li>
            <li><Link href="#contact">Contact</Link></li>
          </ul>
        </div>

        <div className={styles.footerCol}>
          <h3>Legal</h3>
          <ul className={styles.linksList}>
            <li><Link href="/privacy">Privacy Policy</Link></li>
            <li><Link href="/terms">Terms & Conditions</Link></li>
          </ul>
        </div>

        <div className={styles.footerCol}>
          <h3>Contact Info</h3>
          <ul className={styles.contactInfo}>
            <li>
              <Mail size={18} className={styles.icon} />
              <a href="mailto:info@everlegit.com">info@everlegit.com</a>
            </li>
            <li>
              <MapPin size={18} className={styles.icon} />
              <span>1309 Coffeen Avenue STE 19438<br/>Sheridan, Wyoming 82801<br/>United States</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className={styles.footerBottom}>
        <div className="container">
          <p>&copy; {currentYear} Ever Legit LLC. All rights reserved. Registration Number: 2026-001921880</p>
        </div>
      </div>
    </footer>
  );
}
