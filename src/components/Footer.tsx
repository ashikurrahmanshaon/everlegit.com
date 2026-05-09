import Link from "next/link";
import { Wand2 } from "lucide-react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerTop}>
          <div className={styles.brandCol}>
            <Link href="/" className={styles.logo}>
              <div className={styles.logoIconWrapper}>
                <Wand2 size={16} />
              </div>
              <span>Everlegit</span>
            </Link>
            <p className="text-muted">Source Products Instantly, Scale Your E-commerce Empire.</p>
            <div className={styles.socials}>
              <a href="#" aria-label="Twitter">Twitter</a>
              <a href="#" aria-label="Github">Github</a>
              <a href="#" aria-label="LinkedIn">LinkedIn</a>
            </div>
          </div>
          
          <div className={styles.linksGrid}>
            <div>
              <h3>Product</h3>
              <ul>
                <li><Link href="#sourcing">Sourcing</Link></li>
                <li><Link href="#pricing">Pricing</Link></li>
                <li><Link href="#logistics">Logistics</Link></li>
              </ul>
            </div>
            <div>
              <h3>Resources</h3>
              <ul>
                <li><Link href="#docs">Documentation</Link></li>
                <li><Link href="#blog">Blog</Link></li>
                <li><Link href="#support">Support</Link></li>
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
