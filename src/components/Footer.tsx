import Link from "next/link";
import styles from "./Footer.module.css";
import { Globe, Shield, Building2, Network } from "lucide-react";
import { Logo } from "./Logo";

const FOOTER_LINKS = {
  Solutions: [
    { label: "Marketplace Infrastructure", href: "/#marketplace" },
    { label: "Enterprise Ecommerce", href: "/#ecommerce" },
    { label: "Supplier & B2B Commerce", href: "/#supplier" },
    { label: "Commerce Technology", href: "/#technology" },
  ],
  Company: [
    { label: "About EverLegit", href: "/about" },
    { label: "Operations", href: "/#operations" },
    { label: "Partnerships", href: "/partnerships" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ],
  "Trust & Legal": [
    { label: "Business Verification", href: "/verification" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms & Conditions", href: "/terms" },
    { label: "Compliance Policy", href: "/compliance" },
    { label: "Security Standards", href: "/security" },
    { label: "Vendor Terms", href: "/vendor-terms" },
  ],
  Infrastructure: [
    { label: "Client Portal", href: "/dashboard" },
    { label: "Supplier Portal", href: "/dashboard" },
    { label: "Trust Center", href: "/trust" },
    { label: "Operational Transparency", href: "/transparency" },
    { label: "Security Standards", href: "/security" },
  ],
};

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <div className="container">
          <div className={styles.footerGrid}>
            {/* Brand Column */}
            <div className={styles.brandCol}>
              <Link href="/" className={styles.logo}>
                <div className={styles.logoMark}>
                  <Logo />
                </div>
                <span className={styles.logoText}>EverLegit</span>
              </Link>

              <p className={styles.brandDesc}>
                EverLegit is a USA-based enterprise ecommerce infrastructure and marketplace
                technology company supporting scalable digital commerce operations, supplier
                ecosystems, enterprise marketplace systems, and modern business technologies
                worldwide.
              </p>

              <div className={styles.trustIndicators}>
                {[
                  { icon: Building2, label: "USA Operations" },
                  { icon: Shield, label: "Enterprise Security" },
                  { icon: Globe, label: "Global Reach" },
                  { icon: Network, label: "Marketplace Networks" },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className={styles.indicator}>
                    <Icon size={13} />
                    {label}
                  </div>
                ))}
              </div>
            </div>

            {/* Links */}
            {Object.entries(FOOTER_LINKS).map(([section, links]) => (
              <div key={section} className={styles.linkCol}>
                <h4 className={styles.colTitle}>{section}</h4>
                <ul className={styles.linkList}>
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className={styles.footerLink}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <div className="container">
          <div className={styles.bottomInner}>
            <p className={styles.copyright}>
              &copy; {new Date().getFullYear()} EverLegit LLC. All rights reserved. USA-based enterprise ecommerce infrastructure company.
            </p>
            <div className={styles.bottomLinks}>
              <Link href="/privacy">Privacy</Link>
              <Link href="/terms">Terms</Link>
              <Link href="/compliance">Compliance</Link>
              <Link href="/security">Security</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
