import type { Metadata } from "next";
import { CheckCircle2, ShieldCheck } from "lucide-react";
import styles from "../legal.module.css";

export const metadata: Metadata = {
  title: "Business Verification | EverLegit",
  description: "Operational transparency and business verification for EverLegit LLC.",
};

export default function VerificationPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroOrb} />
        <div className="container">
          <div className={styles.heroInner}>
            <div className={styles.badge}><ShieldCheck size={16} /> Trust & Transparency</div>
            <h1 className={styles.heroTitle}>Business Verification</h1>
            <p className={styles.heroSub}>
              EverLegit maintains professional operational structures and infrastructure systems focused on transparency, reliability, and secure commerce management.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className="container">
          <div className={styles.contentCard}>
            <div className={styles.contentBlock}>
              <h2 className={styles.contentTitle}>Corporate Entity Verification</h2>
              <p className={styles.contentText}>
                EverLegit is a fully registered and compliant corporate entity operating within the United States. We maintain strict adherence to federal and international commerce regulations, ensuring a secure and reliable foundation for our global enterprise partners.
              </p>
              <ul className={styles.contentList}>
                <li className={styles.contentItem}>
                  <CheckCircle2 size={16} style={{ color: "#00A99D", flexShrink: 0, marginTop: "4px" }} />
                  <span><strong>Entity Status:</strong> Active and in Good Standing</span>
                </li>
                <li className={styles.contentItem}>
                  <CheckCircle2 size={16} style={{ color: "#00A99D", flexShrink: 0, marginTop: "4px" }} />
                  <span><strong>Jurisdiction:</strong> United States of America</span>
                </li>
                <li className={styles.contentItem}>
                  <CheckCircle2 size={16} style={{ color: "#00A99D", flexShrink: 0, marginTop: "4px" }} />
                  <span><strong>Operations:</strong> Global Ecommerce Infrastructure & Marketplace Technology</span>
                </li>
              </ul>
            </div>

            <div className={styles.contentBlock}>
              <h2 className={styles.contentTitle}>Operational Transparency</h2>
              <p className={styles.contentText}>
                We believe that enterprise trust is built on transparency. EverLegit regularly undergoes internal audits and compliance checks to verify that our operations, supplier management systems, and financial handling processes meet the highest corporate standards.
              </p>
            </div>

            <div className={styles.contentBlock}>
              <h2 className={styles.contentTitle}>Verification Inquiries</h2>
              <p className={styles.contentText}>
                Enterprise partners, marketplace platforms, and financial institutions requiring official documentation (such as W-9 forms, Certificates of Good Standing, or specific compliance records) can submit a request to our Compliance Department. 
              </p>
              <p className={styles.contentText}>
                Contact: <strong>compliance@everlegit.com</strong>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
