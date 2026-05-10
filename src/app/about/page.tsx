import type { Metadata } from "next";
import Link from "next/link";
import { Building2, Globe, Shield, TrendingUp, Users, Award, CheckCircle2, ArrowRight, Network } from "lucide-react";
import styles from "./about.module.css";

export const metadata: Metadata = {
  title: "About EverLegit | USA-Based Enterprise Ecommerce Infrastructure Company",
  description: "Learn about EverLegit — a USA-based enterprise ecommerce infrastructure and marketplace technology company operating since 2017. Our mission, values, and global operational philosophy.",
};

const MILESTONES = [
  { year: "2017", title: "Company Founded", desc: "EverLegit established as a USA-based digital commerce infrastructure company." },
  { year: "2019", title: "Marketplace Expansion", desc: "Launched enterprise marketplace infrastructure supporting multi-vendor commerce ecosystems." },
  { year: "2021", title: "Global Operations", desc: "Extended supplier networks and commerce operations across 40+ countries worldwide." },
  { year: "2023", title: "Enterprise Platform", desc: "Deployed enterprise-grade commerce technology infrastructure supporting 500+ business partners." },
  { year: "2025", title: "Infrastructure Scaling", desc: "Advanced B2B commerce operations and supplier management systems for global enterprise growth." },
];

const VALUES = [
  { icon: Shield, title: "Operational Integrity", desc: "We build and manage commerce systems with transparency, accountability, and professional standards." },
  { icon: TrendingUp, title: "Scalable Infrastructure", desc: "Every system is designed for long-term growth, supporting enterprises as they expand globally." },
  { icon: Globe, title: "Global Commerce Focus", desc: "Our infrastructure connects suppliers, marketplaces, and enterprise businesses across global commerce ecosystems." },
  { icon: Users, title: "Partner-First Operations", desc: "We prioritize the success of our business partners through dedicated operational support and technology." },
  { icon: Award, title: "Technology Excellence", desc: "Enterprise-grade systems built to perform reliably at scale with secure and optimized architecture." },
  { icon: Network, title: "Ecosystem Connectivity", desc: "Integrated platforms that unify suppliers, vendors, commerce operators, and enterprise organizations." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroOrb} />
        <div className={styles.gridOverlay} />
        <div className="container">
          <div className={styles.heroInner}>
            <div className="section-label"><Building2 size={12} />About EverLegit</div>
            <h1 className={styles.heroTitle}>
              Enterprise Commerce Infrastructure<br />
              <span className={styles.heroAccent}>Built on 8 Years of Operations</span>
            </h1>
            <p className={styles.heroSub}>
              EverLegit is a USA-based enterprise ecommerce infrastructure and marketplace technology
              company focused on scalable digital commerce systems, supplier operations, enterprise
              marketplace technologies, and global ecommerce management solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className={`section ${styles.missionSection}`}>
        <div className="container">
          <div className={styles.missionGrid}>
            <div className={styles.missionLeft}>
              <div className="section-label"><Award size={12} />Our Mission</div>
              <h2 className="section-title" style={{ textAlign: "left" }}>
                Powering Global Commerce Infrastructure
              </h2>
              <p style={{ color: "var(--foreground-muted)", lineHeight: 1.8, marginBottom: "1.5rem" }}>
                Established in 2017, EverLegit supports modern businesses through advanced marketplace
                infrastructure, operational automation, supplier integration systems, and enterprise-grade
                commerce technologies designed for scalable global growth.
              </p>
              <p style={{ color: "var(--foreground-muted)", lineHeight: 1.8, marginBottom: "2rem" }}>
                Our ecosystem combines digital commerce operations, ecommerce infrastructure, marketplace
                management, and business technology solutions to help organizations streamline online
                operations, expand marketplace capabilities, and optimize digital business performance worldwide.
              </p>
              <Link href="#contact" className="btn btn-primary">
                Work With Us <ArrowRight size={16} />
              </Link>
            </div>
            <div className={styles.missionRight}>
              <div className={styles.missionStats}>
                {[
                  { value: "2017", label: "Year Founded" },
                  { value: "500+", label: "Enterprise Partners" },
                  { value: "40+", label: "Countries Served" },
                  { value: "99.9%", label: "Infrastructure Uptime" },
                ].map((s) => (
                  <div key={s.label} className={styles.missionStat}>
                    <span className={styles.statVal}>{s.value}</span>
                    <span className={styles.statLabel}>{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className={`section ${styles.valuesSection}`}>
        <div className="container">
          <div className="text-center">
            <div className="section-label"><Award size={12} />Core Values</div>
            <h2 className="section-title">Our Operational Philosophy</h2>
            <p className="section-subtitle">
              The principles that guide every system, every partnership, and every decision at EverLegit.
            </p>
          </div>
          <div className={styles.valuesGrid}>
            {VALUES.map(({ icon: Icon, title, desc }) => (
              <div key={title} className={`enterprise-card ${styles.valueCard}`}>
                <div className={styles.valueIcon}><Icon size={20} /></div>
                <h3 className={styles.valueTitle}>{title}</h3>
                <p className={styles.valueDesc}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className={`section ${styles.timelineSection}`}>
        <div className="container">
          <div className="text-center">
            <div className="section-label"><TrendingUp size={12} />Company History</div>
            <h2 className="section-title">Our Journey Since 2017</h2>
          </div>
          <div className={styles.timeline}>
            {MILESTONES.map((m, i) => (
              <div key={m.year} className={`${styles.timelineItem} ${i % 2 === 0 ? styles.left : styles.right}`}>
                <div className={styles.timelineContent}>
                  <span className={styles.timelineYear}>{m.year}</span>
                  <h3 className={styles.timelineTitle}>{m.title}</h3>
                  <p className={styles.timelineDesc}>{m.desc}</p>
                </div>
                <div className={styles.timelineDot} />
              </div>
            ))}
            <div className={styles.timelineLine} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <div className={styles.ctaBanner}>
            <div className={styles.ctaOrb} />
            <h2 className={styles.ctaTitle}>Ready to Partner with EverLegit?</h2>
            <p className={styles.ctaSub}>
              Connect with our enterprise operations team to discuss infrastructure, marketplace systems, and commerce technology solutions.
            </p>
            <div className={styles.ctaBtns}>
              <Link href="/#contact" className="btn btn-primary">Request Enterprise Consultation <ArrowRight size={16} /></Link>
              <Link href="/#solutions" className="btn btn-outline">Explore Solutions</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
