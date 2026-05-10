import type { Metadata } from "next";
import Link from "next/link";
import { Users, Globe, Briefcase, MapPin, ArrowRight, CheckCircle2, Network, TrendingUp } from "lucide-react";
import styles from "./partnerships.module.css";

export const metadata: Metadata = {
  title: "Partnerships | EverLegit Strategic Commerce Partnerships",
  description: "Partner with EverLegit for strategic ecommerce partnerships, supplier collaboration, marketplace integration, and enterprise commerce technology solutions.",
};

const PARTNER_TYPES = [
  {
    icon: Globe,
    title: "Marketplace Partners",
    desc: "Collaborate on multi-channel commerce infrastructure, vendor management systems, and marketplace technology integration.",
    benefits: ["Marketplace co-management", "Shared vendor networks", "Analytics integration", "Revenue optimization"],
  },
  {
    icon: Users,
    title: "Supplier Partners",
    desc: "Join our global supplier network to access enterprise procurement, B2B commerce systems, and operational support.",
    benefits: ["Vetted supplier listing", "Direct procurement access", "Payment infrastructure", "Quality management"],
  },
  {
    icon: Network,
    title: "Technology Partners",
    desc: "Integrate your commerce technology with EverLegit's enterprise infrastructure platform.",
    benefits: ["API integration", "Platform connectivity", "Co-development", "Technical support"],
  },
  {
    icon: Briefcase,
    title: "Enterprise Clients",
    desc: "Access full-stack ecommerce infrastructure for large-scale digital commerce operations and global marketplace management.",
    benefits: ["Dedicated account team", "Custom SLAs", "Priority operations", "Enterprise dashboard"],
  },
];

export default function PartnershipsPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroOrb} />
        <div className="container">
          <div className={styles.heroInner}>
            <div className="section-label"><Network size={12} />Strategic Partnerships</div>
            <h1 className={styles.heroTitle}>Build the Future of Commerce Together</h1>
            <p className={styles.heroSub}>
              EverLegit collaborates with ecommerce businesses, suppliers, commerce operators, digital brands,
              technology providers, and enterprise organizations to support scalable commerce operations and
              digital marketplace growth.
            </p>
            <div className={styles.heroCtas}>
              <Link href="#apply" className="btn btn-primary">Become a Partner <ArrowRight size={16} /></Link>
              <Link href="/#contact" className="btn btn-outline">Contact Partnerships Team</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="text-center">
            <div className="section-label"><Users size={12} />Partnership Types</div>
            <h2 className="section-title">How We Collaborate</h2>
            <p className="section-subtitle">Flexible partnership structures designed for meaningful, long-term business relationships.</p>
          </div>
          <div className={styles.partnerGrid}>
            {PARTNER_TYPES.map(({ icon: Icon, title, desc, benefits }) => (
              <div key={title} className={`enterprise-card ${styles.partnerCard}`}>
                <div className={styles.partnerIcon}><Icon size={22} /></div>
                <h3 className={styles.partnerTitle}>{title}</h3>
                <p className={styles.partnerDesc}>{desc}</p>
                <ul className={styles.benefitList}>
                  {benefits.map((b) => (
                    <li key={b} className={styles.benefitItem}>
                      <CheckCircle2 size={13} style={{ color: "#00A99D", flexShrink: 0 }} />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="apply" className={`section ${styles.applySection}`}>
        <div className="container">
          <div className={styles.applyBanner}>
            <div className={styles.applyOrb} />
            <div className="section-label" style={{ marginBottom: "1.25rem" }}><TrendingUp size={12} />Apply Now</div>
            <h2 className={styles.applyTitle}>Start a Partnership with EverLegit</h2>
            <p className={styles.applySub}>
              Submit your partnership inquiry and our business development team will respond within 2 business days.
            </p>
            <Link href="mailto:partnerships@everlegit.com" className="btn btn-primary" style={{ fontSize: "1rem", padding: "0.9375rem 2rem" }}>
              partnerships@everlegit.com <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
