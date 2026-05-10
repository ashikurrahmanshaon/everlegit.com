import type { Metadata } from "next";
import { Shield, CheckCircle2 } from "lucide-react";
import styles from "../legal.module.css";

export const metadata: Metadata = {
  title: "Vendor Terms | EverLegit",
  description: "Terms and Requirements for Vendors within the EverLegit ecosystem.",
};

export default function VendorTermsPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroOrb} />
        <div className="container">
          <div className={styles.heroInner}>
            <div className={styles.badge}><Shield size={16} /> Legal & Compliance</div>
            <h1 className={styles.heroTitle}>Vendor Terms</h1>
            <p className={styles.heroSub}>
              Last Updated: May 2026. These terms outline the operational, quality, and compliance requirements for suppliers participating in the EverLegit ecosystem.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className="container">
          <div className={styles.contentCard}>
            <div className={styles.contentBlock}>
              <h2 className={styles.contentTitle}>1. Supplier Onboarding & Verification</h2>
              <p className={styles.contentText}>
                All vendors must successfully complete the EverLegit verification process, which includes a comprehensive review of business licenses, facility audits, financial stability, and historical performance data. Approval is required before connecting to our marketplace infrastructure.
              </p>
            </div>

            <div className={styles.contentBlock}>
              <h2 className={styles.contentTitle}>2. Quality Control Standards</h2>
              <p className={styles.contentText}>
                Vendors must adhere to strict quality assurance protocols:
              </p>
              <ul className={styles.contentList}>
                <li className={styles.contentItem}>
                  <CheckCircle2 size={16} style={{ color: "#00A99D", flexShrink: 0, marginTop: "4px" }} />
                  <span>Maintain consistent product specifications as agreed upon in procurement contracts.</span>
                </li>
                <li className={styles.contentItem}>
                  <CheckCircle2 size={16} style={{ color: "#00A99D", flexShrink: 0, marginTop: "4px" }} />
                  <span>Permit EverLegit or designated third-party inspectors to conduct pre-shipment inspections.</span>
                </li>
                <li className={styles.contentItem}>
                  <CheckCircle2 size={16} style={{ color: "#00A99D", flexShrink: 0, marginTop: "4px" }} />
                  <span>Promptly address and remediate any quality defects identified during fulfillment.</span>
                </li>
              </ul>
            </div>

            <div className={styles.contentBlock}>
              <h2 className={styles.contentTitle}>3. Logistics & Fulfillment Compliance</h2>
              <p className={styles.contentText}>
                Vendors are required to meet specified lead times and packaging standards to ensure seamless integration with global logistics networks, including Amazon FBA and Walmart WFS compliance requirements.
              </p>
            </div>

            <div className={styles.contentBlock}>
              <h2 className={styles.contentTitle}>4. Termination of Partnership</h2>
              <p className={styles.contentText}>
                EverLegit reserves the right to suspend or terminate vendor relationships immediately upon discovery of material breach of these terms, ethical violations, repeated quality failures, or non-compliance with international trade laws.
              </p>
            </div>

            <div className={styles.contentBlock}>
              <h2 className={styles.contentTitle}>Contact Partnerships</h2>
              <p className={styles.contentText}>
                For questions regarding vendor requirements or to update your business profile, contact <strong>partnerships@everlegit.com</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
