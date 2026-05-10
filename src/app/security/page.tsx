import type { Metadata } from "next";
import { Shield, Lock, CheckCircle2 } from "lucide-react";
import styles from "../legal.module.css";

export const metadata: Metadata = {
  title: "Security Standards | EverLegit",
  description: "Security Standards and Infrastructure Protection at EverLegit.",
};

export default function SecurityPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroOrb} />
        <div className="container">
          <div className={styles.heroInner}>
            <div className={styles.badge}><Lock size={16} /> Trust & Transparency</div>
            <h1 className={styles.heroTitle}>Security Standards</h1>
            <p className={styles.heroSub}>
              EverLegit prioritizes operational security, system stability, commerce reliability, and infrastructure performance through enterprise-focused technologies.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className="container">
          <div className={styles.contentCard}>
            <div className={styles.contentBlock}>
              <h2 className={styles.contentTitle}>Enterprise Infrastructure Security</h2>
              <p className={styles.contentText}>
                Our digital commerce infrastructure is built on a foundation of "security-first" architecture. We deploy advanced cloud security measures to protect the integrity, confidentiality, and availability of our clients' operational data.
              </p>
              <ul className={styles.contentList}>
                <li className={styles.contentItem}>
                  <CheckCircle2 size={16} style={{ color: "#00A99D", flexShrink: 0, marginTop: "4px" }} />
                  <span><strong>End-to-End Encryption:</strong> All data transmitted across our network is encrypted using TLS 1.3. Data at rest is secured using AES-256 encryption.</span>
                </li>
                <li className={styles.contentItem}>
                  <CheckCircle2 size={16} style={{ color: "#00A99D", flexShrink: 0, marginTop: "4px" }} />
                  <span><strong>Access Controls:</strong> We utilize strict Role-Based Access Control (RBAC), Multi-Factor Authentication (MFA), and Principle of Least Privilege (PoLP) across all internal and client-facing systems.</span>
                </li>
                <li className={styles.contentItem}>
                  <CheckCircle2 size={16} style={{ color: "#00A99D", flexShrink: 0, marginTop: "4px" }} />
                  <span><strong>Continuous Monitoring:</strong> Our infrastructure is monitored 24/7 by automated threat detection systems and our dedicated security operations team.</span>
                </li>
              </ul>
            </div>

            <div className={styles.contentBlock}>
              <h2 className={styles.contentTitle}>Compliance Frameworks</h2>
              <p className={styles.contentText}>
                EverLegit's security practices are aligned with leading industry standards, including SOC 2 Type II principles, to ensure robust internal controls over security, availability, and processing integrity.
              </p>
            </div>

            <div className={styles.contentBlock}>
              <h2 className={styles.contentTitle}>Incident Response & Continuity</h2>
              <p className={styles.contentText}>
                We maintain comprehensive Business Continuity and Disaster Recovery (BCDR) plans. In the event of an infrastructure disruption, our systems are designed to failover to redundant data centers to maintain our 99.9% SLA. Our incident response team is prepared to rapidly identify, contain, and remediate any security events.
              </p>
            </div>

            <div className={styles.contentBlock}>
              <h2 className={styles.contentTitle}>Vulnerability Reporting</h2>
              <p className={styles.contentText}>
                We welcome reports from the security research community. If you have identified a potential security vulnerability in our infrastructure, please report it securely to <strong>tech@everlegit.com</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
