import type { Metadata } from "next";
import { Shield, CheckCircle2 } from "lucide-react";
import styles from "../legal.module.css";

export const metadata: Metadata = {
  title: "Privacy Policy | EverLegit",
  description: "Privacy Policy for EverLegit Enterprise Ecommerce Infrastructure.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroOrb} />
        <div className="container">
          <div className={styles.heroInner}>
            <div className={styles.badge}><Shield size={16} /> Legal & Compliance</div>
            <h1 className={styles.heroTitle}>Privacy Policy</h1>
            <p className={styles.heroSub}>
              Last Updated: May 2026. This Privacy Policy outlines how EverLegit collects, uses, and protects your information across our enterprise infrastructure.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className="container">
          <div className={styles.contentCard}>
            <div className={styles.contentBlock}>
              <h2 className={styles.contentTitle}>1. Information We Collect</h2>
              <p className={styles.contentText}>
                EverLegit collects information to provide and improve our enterprise ecommerce infrastructure, marketplace systems, and supplier operations. This includes:
              </p>
              <ul className={styles.contentList}>
                <li className={styles.contentItem}>
                  <CheckCircle2 size={16} style={{ color: "#00A99D", flexShrink: 0, marginTop: "4px" }} />
                  <span><strong>Business Information:</strong> Company name, registration details, tax identification numbers, and business contact information.</span>
                </li>
                <li className={styles.contentItem}>
                  <CheckCircle2 size={16} style={{ color: "#00A99D", flexShrink: 0, marginTop: "4px" }} />
                  <span><strong>Operational Data:</strong> Supply chain data, marketplace integration details, inventory records, and fulfillment information.</span>
                </li>
                <li className={styles.contentItem}>
                  <CheckCircle2 size={16} style={{ color: "#00A99D", flexShrink: 0, marginTop: "4px" }} />
                  <span><strong>Technical Information:</strong> IP addresses, browser types, API usage logs, and system interaction data.</span>
                </li>
              </ul>
            </div>

            <div className={styles.contentBlock}>
              <h2 className={styles.contentTitle}>2. How We Use Information</h2>
              <p className={styles.contentText}>
                We utilize collected information solely for enterprise operations and service delivery:
              </p>
              <ul className={styles.contentList}>
                <li className={styles.contentItem}>
                  <CheckCircle2 size={16} style={{ color: "#00A99D", flexShrink: 0, marginTop: "4px" }} />
                  <span>Facilitating marketplace infrastructure and managing supplier ecosystems.</span>
                </li>
                <li className={styles.contentItem}>
                  <CheckCircle2 size={16} style={{ color: "#00A99D", flexShrink: 0, marginTop: "4px" }} />
                  <span>Ensuring compliance with international trade and ecommerce regulations.</span>
                </li>
                <li className={styles.contentItem}>
                  <CheckCircle2 size={16} style={{ color: "#00A99D", flexShrink: 0, marginTop: "4px" }} />
                  <span>Enhancing operational security and preventing fraudulent activities.</span>
                </li>
              </ul>
            </div>

            <div className={styles.contentBlock}>
              <h2 className={styles.contentTitle}>3. Data Security & Enterprise Standards</h2>
              <p className={styles.contentText}>
                EverLegit implements enterprise-grade security measures to protect business and operational data. We utilize encrypted data transmission, secure data centers, and continuous risk monitoring. Our infrastructure aligns with SOC 2 standards to ensure the highest level of data protection for our global partners.
              </p>
            </div>

            <div className={styles.contentBlock}>
              <h2 className={styles.contentTitle}>4. Contact Us</h2>
              <p className={styles.contentText}>
                For privacy-related inquiries or to exercise your data rights, please contact our Compliance Team at <strong>compliance@everlegit.com</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
