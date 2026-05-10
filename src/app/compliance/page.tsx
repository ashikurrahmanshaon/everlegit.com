import type { Metadata } from "next";
import { Shield, CheckCircle2 } from "lucide-react";
import styles from "../legal.module.css";

export const metadata: Metadata = {
  title: "Compliance Policy | EverLegit",
  description: "Compliance Policy for EverLegit Enterprise Ecommerce Infrastructure.",
};

export default function CompliancePage() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroOrb} />
        <div className="container">
          <div className={styles.heroInner}>
            <div className={styles.badge}><Shield size={16} /> Legal & Compliance</div>
            <h1 className={styles.heroTitle}>Compliance Policy</h1>
            <p className={styles.heroSub}>
              EverLegit is committed to maintaining the highest standards of operational compliance across all international commerce activities.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className="container">
          <div className={styles.contentCard}>
            <div className={styles.contentBlock}>
              <h2 className={styles.contentTitle}>1. Global Trade Compliance</h2>
              <p className={styles.contentText}>
                As a provider of global ecommerce infrastructure, EverLegit adheres to international trade laws, export controls, and customs regulations in all operational jurisdictions. We require our suppliers and marketplace partners to maintain the same standards of regulatory compliance.
              </p>
            </div>

            <div className={styles.contentBlock}>
              <h2 className={styles.contentTitle}>2. Anti-Money Laundering (AML) & KYC</h2>
              <p className={styles.contentText}>
                We implement robust Anti-Money Laundering (AML) and Know Your Customer (KYC) procedures. All enterprise clients and major suppliers undergo a rigorous onboarding process to verify their business identity and ensure they are not operating under any international sanctions.
              </p>
            </div>

            <div className={styles.contentBlock}>
              <h2 className={styles.contentTitle}>3. Ethical Sourcing & Labor Standards</h2>
              <p className={styles.contentText}>
                Our supplier ecosystem is monitored for compliance with ethical sourcing standards. We strictly prohibit the use of forced labor, child labor, and unsafe working conditions within our supply chain network. Suppliers found in violation will be immediately removed from our infrastructure platform.
              </p>
            </div>

            <div className={styles.contentBlock}>
              <h2 className={styles.contentTitle}>4. Environmental Responsibility</h2>
              <p className={styles.contentText}>
                We encourage our partners to adopt environmentally responsible practices. EverLegit works to optimize logistics and digital operations to minimize the environmental impact of global commerce.
              </p>
            </div>

            <div className={styles.contentBlock}>
              <h2 className={styles.contentTitle}>Report a Compliance Issue</h2>
              <p className={styles.contentText}>
                We maintain a zero-tolerance policy for compliance violations. If you suspect any operational or regulatory breach within our network, please contact our Compliance Officer immediately at <strong>compliance@everlegit.com</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
