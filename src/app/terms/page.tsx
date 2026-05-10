import type { Metadata } from "next";
import { Shield, CheckCircle2 } from "lucide-react";
import styles from "../legal.module.css";

export const metadata: Metadata = {
  title: "Terms & Conditions | EverLegit",
  description: "Terms and Conditions for EverLegit Enterprise Ecommerce Infrastructure.",
};

export default function TermsPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroOrb} />
        <div className="container">
          <div className={styles.heroInner}>
            <div className={styles.badge}><Shield size={16} /> Legal & Compliance</div>
            <h1 className={styles.heroTitle}>Terms & Conditions</h1>
            <p className={styles.heroSub}>
              Last Updated: May 2026. These Terms govern your access to and use of EverLegit's enterprise commerce infrastructure and marketplace systems.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className="container">
          <div className={styles.contentCard}>
            <div className={styles.contentBlock}>
              <h2 className={styles.contentTitle}>1. Enterprise Services Overview</h2>
              <p className={styles.contentText}>
                EverLegit provides enterprise ecommerce infrastructure, marketplace systems, and supplier operational management. By accessing our platform or utilizing our services, you agree to be bound by these Terms and Conditions. These terms apply to all enterprise clients, marketplace partners, and integrated suppliers.
              </p>
            </div>

            <div className={styles.contentBlock}>
              <h2 className={styles.contentTitle}>2. Operational Responsibilities</h2>
              <p className={styles.contentText}>
                As a partner or client utilizing EverLegit infrastructure, you agree to:
              </p>
              <ul className={styles.contentList}>
                <li className={styles.contentItem}>
                  <CheckCircle2 size={16} style={{ color: "#00A99D", flexShrink: 0, marginTop: "4px" }} />
                  <span>Maintain accurate business verification and compliance records.</span>
                </li>
                <li className={styles.contentItem}>
                  <CheckCircle2 size={16} style={{ color: "#00A99D", flexShrink: 0, marginTop: "4px" }} />
                  <span>Adhere to all applicable international trade and ecommerce regulations.</span>
                </li>
                <li className={styles.contentItem}>
                  <CheckCircle2 size={16} style={{ color: "#00A99D", flexShrink: 0, marginTop: "4px" }} />
                  <span>Utilize our infrastructure solely for legitimate, authorized commercial activities.</span>
                </li>
              </ul>
            </div>

            <div className={styles.contentBlock}>
              <h2 className={styles.contentTitle}>3. Infrastructure Access & Uptime SLA</h2>
              <p className={styles.contentText}>
                EverLegit strives to maintain a 99.9% uptime Service Level Agreement (SLA) for core marketplace and commerce systems. However, we reserve the right to temporarily suspend access for scheduled maintenance, emergency security updates, or in cases of suspected unauthorized access.
              </p>
            </div>

            <div className={styles.contentBlock}>
              <h2 className={styles.contentTitle}>4. Limitation of Liability</h2>
              <p className={styles.contentText}>
                EverLegit shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use our infrastructure systems.
              </p>
            </div>

            <div className={styles.contentBlock}>
              <h2 className={styles.contentTitle}>5. Contact Operations</h2>
              <p className={styles.contentText}>
                For inquiries regarding these terms, please contact our Legal Department at <strong>compliance@everlegit.com</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
