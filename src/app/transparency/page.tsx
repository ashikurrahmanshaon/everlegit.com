import type { Metadata } from "next";
import { Eye, CheckCircle2 } from "lucide-react";
import styles from "../legal.module.css";

export const metadata: Metadata = {
  title: "Operational Transparency | EverLegit",
  description: "Operational Transparency at EverLegit.",
};

export default function TransparencyPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroOrb} />
        <div className="container">
          <div className={styles.heroInner}>
            <div className={styles.badge}><Eye size={16} /> Trust & Transparency</div>
            <h1 className={styles.heroTitle}>Operational Transparency</h1>
            <p className={styles.heroSub}>
              Clear visibility into our commerce operations, supplier management, and infrastructure performance.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className="container">
          <div className={styles.contentCard}>
            <div className={styles.contentBlock}>
              <h2 className={styles.contentTitle}>System Performance</h2>
              <p className={styles.contentText}>
                We provide real-time visibility into the performance of our core marketplace infrastructure. Our target SLA is 99.9% uptime, ensuring our enterprise partners can conduct business without interruption.
              </p>
            </div>

            <div className={styles.contentBlock}>
              <h2 className={styles.contentTitle}>Supplier Ecosystem</h2>
              <p className={styles.contentText}>
                We maintain transparency regarding our supplier networks. We conduct regular audits of our global suppliers to verify compliance with our strict operational and ethical standards.
              </p>
              <ul className={styles.contentList}>
                <li className={styles.contentItem}>
                  <CheckCircle2 size={16} style={{ color: "#00A99D", flexShrink: 0, marginTop: "4px" }} />
                  <span>Regular factory and facility inspections.</span>
                </li>
                <li className={styles.contentItem}>
                  <CheckCircle2 size={16} style={{ color: "#00A99D", flexShrink: 0, marginTop: "4px" }} />
                  <span>Transparent reporting on supplier performance metrics.</span>
                </li>
              </ul>
            </div>

            <div className={styles.contentBlock}>
              <h2 className={styles.contentTitle}>Data Handling Practices</h2>
              <p className={styles.contentText}>
                We are open about how we collect, process, and secure operational data. Our practices are designed to protect partner confidentiality while enabling efficient global commerce.
              </p>
            </div>
            
            <div className={styles.contentBlock}>
              <h2 className={styles.contentTitle}>Inquiries</h2>
              <p className={styles.contentText}>
                 For specific operational reports or transparency inquiries, contact <strong>operations@everlegit.com</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
