import type { Metadata } from "next";
import { ShieldCheck, Lock, CheckCircle2, Award } from "lucide-react";
import styles from "../legal.module.css";

export const metadata: Metadata = {
  title: "Trust Center | EverLegit",
  description: "EverLegit Trust Center - Enterprise Security & Compliance.",
};

export default function TrustCenterPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroOrb} />
        <div className="container">
          <div className={styles.heroInner}>
            <div className={styles.badge}><ShieldCheck size={16} /> Enterprise Trust</div>
            <h1 className={styles.heroTitle}>Trust Center</h1>
            <p className={styles.heroSub}>
              Security, Compliance, and Reliability are the core pillars of EverLegit's enterprise commerce infrastructure.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className="container">
          <div className={styles.contentCard}>
            <div className={styles.contentBlock}>
              <h2 className={styles.contentTitle}>Our Commitment to Trust</h2>
              <p className={styles.contentText}>
                At EverLegit, we understand that enterprise commerce requires a foundation of absolute trust. Our Trust Center provides transparency into how we secure our infrastructure, manage compliance, and ensure high availability for global marketplace operations.
              </p>
            </div>

            <div className={styles.contentBlock}>
              <h2 className={styles.contentTitle}>Security Architecture</h2>
              <p className={styles.contentText}>
                Our systems are designed to protect sensitive business data and operational workflows. We employ defense-in-depth strategies, including continuous monitoring, automated threat detection, and regular third-party penetration testing.
              </p>
              <ul className={styles.contentList}>
                <li className={styles.contentItem}>
                  <CheckCircle2 size={16} style={{ color: "#00A99D", flexShrink: 0, marginTop: "4px" }} />
                  <span>End-to-End Encryption for all data in transit and at rest.</span>
                </li>
                <li className={styles.contentItem}>
                  <CheckCircle2 size={16} style={{ color: "#00A99D", flexShrink: 0, marginTop: "4px" }} />
                  <span>Enterprise Identity and Access Management (IAM) controls.</span>
                </li>
              </ul>
            </div>

            <div className={styles.contentBlock}>
              <h2 className={styles.contentTitle}>Compliance Certifications</h2>
              <p className={styles.contentText}>
                We align our operations with rigorous international standards to meet the compliance requirements of our enterprise partners. We maintain compliance protocols that support SOC 2 Type II principles and global data privacy regulations.
              </p>
            </div>
            
             <div className={styles.contentBlock}>
              <h2 className={styles.contentTitle}>Contact the Trust Team</h2>
              <p className={styles.contentText}>
                For detailed security whitepapers, compliance reports, or specific inquiries, please contact our team at <strong>compliance@everlegit.com</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
