import type { Metadata } from "next";
import Link from "next/link";
import { Mail, Globe, Building2, Shield, Cpu, Network, ArrowRight, Clock, MapPin, Phone } from "lucide-react";
import styles from "./contact.module.css";

export const metadata: Metadata = {
  title: "Contact EverLegit | Enterprise Commerce Operations",
  description: "Contact EverLegit for enterprise ecommerce systems, marketplace infrastructure, supplier operations, strategic partnerships, and business development inquiries.",
};

const DEPARTMENTS = [
  {
    icon: Building2,
    title: "Enterprise Operations",
    desc: "Business operations, enterprise commerce support, and general inquiries.",
    email: "operations@everlegit.com",
    response: "Within 1 business day",
  },
  {
    icon: Network,
    title: "Marketplace Partnerships",
    desc: "Marketplace collaboration, supplier relations, and partnership development.",
    email: "partnerships@everlegit.com",
    response: "Within 2 business days",
  },
  {
    icon: Cpu,
    title: "Technical Infrastructure",
    desc: "Commerce technologies, API integration, and operational systems support.",
    email: "tech@everlegit.com",
    response: "Within 1 business day",
  },
  {
    icon: Shield,
    title: "Compliance & Verification",
    desc: "Operational transparency, business verification, and compliance inquiries.",
    email: "compliance@everlegit.com",
    response: "Within 3 business days",
  },
];

export default function ContactPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroOrb} />
        <div className="container">
          <div className={styles.heroInner}>
            <div className="section-label"><Mail size={12} />Contact</div>
            <h1 className={styles.heroTitle}>Connect With EverLegit</h1>
            <p className={styles.heroSub}>
              Contact EverLegit regarding enterprise ecommerce systems, marketplace infrastructure,
              supplier operations, strategic partnerships, commerce technologies, and business development opportunities.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="text-center">
            <div className="section-label"><Building2 size={12} />Departments</div>
            <h2 className="section-title">Contact the Right Team</h2>
            <p className="section-subtitle">Route your inquiry to the appropriate department for the fastest response.</p>
          </div>
          <div className={styles.deptGrid}>
            {DEPARTMENTS.map(({ icon: Icon, title, desc, email, response }) => (
              <div key={title} className={`enterprise-card ${styles.deptCard}`}>
                <div className={styles.deptIcon}><Icon size={22} /></div>
                <h3 className={styles.deptTitle}>{title}</h3>
                <p className={styles.deptDesc}>{desc}</p>
                <a href={`mailto:${email}`} className={styles.deptEmail}>{email}</a>
                <div className={styles.responseTime}>
                  <Clock size={12} />
                  <span>Response: {response}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`section ${styles.infoSection}`}>
        <div className="container">
          <div className={styles.infoGrid}>
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}><Globe size={22} /></div>
              <h3 className={styles.infoTitle}>Headquarters</h3>
              <p className={styles.infoDesc}>United States of America</p>
              <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.8rem" }}>USA-registered enterprise operations</p>
            </div>
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}><Clock size={22} /></div>
              <h3 className={styles.infoTitle}>Operating Hours</h3>
              <p className={styles.infoDesc}>24/7 Infrastructure Support</p>
              <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.8rem" }}>Business operations Mon–Fri, 9AM–6PM EST</p>
            </div>
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}><Phone size={22} /></div>
              <h3 className={styles.infoTitle}>Office Phone</h3>
              <p className={styles.infoDesc}>+1 307 424 2312</p>
              <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.8rem" }}>Mon–Fri, 9AM–6PM EST</p>
            </div>
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}><MapPin size={22} /></div>
              <h3 className={styles.infoTitle}>Global Operations</h3>
              <p className={styles.infoDesc}>40+ Countries Supported</p>
              <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.8rem" }}>Commerce infrastructure across global markets</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
