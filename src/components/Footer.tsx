import Link from "next/link";

import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerTop}>
          <div className={styles.brandCol}>
            <Link href="/" className={styles.logo}>
              <div className={styles.logoIconWrapper} style={{ background: 'transparent', padding: 0 }}>
                <img src="/logo.png" alt="Everlegit Logo" style={{ width: '24px', height: '24px', borderRadius: '4px', objectFit: 'contain' }} />
              </div>
              <span>Everlegit</span>
            </Link>
            <p className="text-muted">Enterprise-grade supply chain management for scaling e-commerce brands.</p>
            <div className={styles.socials}>
              <a href="#" aria-label="Twitter">Twitter</a>
              <a href="#" aria-label="Github">Github</a>
              <a href="#" aria-label="LinkedIn">LinkedIn</a>
            </div>
          </div>
          
          <div className={styles.linksGrid}>
            <div>
              <h3>Services</h3>
              <ul>
                <li><Link href="#services">Product Sourcing</Link></li>
                <li><Link href="#logistics">Global Logistics</Link></li>
                <li><Link href="#quality-control">Quality Control</Link></li>
              </ul>
            </div>
            <div>
              <h3>Company</h3>
              <ul>
                <li><Link href="#about">About Us</Link></li>
                <li><Link href="#careers">Careers</Link></li>
                <li><Link href="#contact">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3>Legal</h3>
              <ul>
                <li><Link href="/privacy">Privacy Policy</Link></li>
                <li><Link href="/terms">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>&copy; {new Date().getFullYear()} Everlegit. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
