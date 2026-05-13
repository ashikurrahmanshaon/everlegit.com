import type { Metadata } from "next";
import Link from "next/link";
import { Briefcase, MapPin, Clock, ArrowRight, Building2, Globe, TrendingUp, Users } from "lucide-react";
import styles from "./careers.module.css";

export const metadata: Metadata = {
  title: "Careers | Join EverLegit Enterprise Ecommerce Infrastructure",
  description: "Build the future of enterprise ecommerce infrastructure at EverLegit. Explore open positions in commerce technology, operations, supplier management, and marketplace systems.",
};

const OPEN_ROLES = [
  { title: "Enterprise Commerce Operations Manager", dept: "Operations", location: "Remote / USA", type: "Full-time" },
  { title: "Marketplace Infrastructure Engineer", dept: "Technology", location: "Remote / USA", type: "Full-time" },
  { title: "Supplier Relationship Manager", dept: "Partnerships", location: "Remote", type: "Full-time" },
  { title: "B2B Commerce Analyst", dept: "Analytics", location: "Remote", type: "Full-time" },
  { title: "Ecommerce Platform Developer", dept: "Technology", location: "Remote", type: "Full-time" },
  { title: "Global Logistics Coordinator", dept: "Operations", location: "Remote / USA", type: "Full-time" },
];

const BENEFITS = [
  { icon: Globe, title: "Remote-First Culture", desc: "Work from anywhere as part of a globally distributed enterprise operations team." },
  { icon: TrendingUp, title: "Career Growth", desc: "Structured advancement paths in commerce technology, operations, and enterprise management." },
  { icon: Building2, title: "Enterprise Impact", desc: "Build infrastructure that powers real global commerce operations at significant scale." },
  { icon: Users, title: "Collaborative Teams", desc: "Work alongside experienced professionals in ecommerce, technology, and global operations." },
];

export default function CareersPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroOrb} />
        <div className="container">
          <div className={styles.heroInner}>
            <div className="section-label"><Briefcase size={12} />Careers</div>
            <h1 className={styles.heroTitle}>Build Enterprise Commerce Infrastructure</h1>
            <p className={styles.heroSub}>
              Join EverLegit and contribute to global ecommerce infrastructure, marketplace technology,
              and supplier operations that power modern digital commerce worldwide.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="text-center">
            <div className="section-label"><TrendingUp size={12} />Why EverLegit</div>
            <h2 className="section-title">Work at the Frontier of Commerce Technology</h2>
            <p className="section-subtitle">We offer meaningful work building real enterprise systems alongside talented global teams.</p>
          </div>
          <div className={styles.benefitsGrid}>
            {BENEFITS.map(({ icon: Icon, title, desc }) => (
              <div key={title} className={`enterprise-card ${styles.benefitCard}`}>
                <div className={styles.benefitIcon}><Icon size={22} /></div>
                <h3 className={styles.benefitTitle}>{title}</h3>
                <p className={styles.benefitDesc}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="text-center">
            <div className="section-label"><Briefcase size={12} />Open Positions</div>
            <h2 className="section-title">Current Opportunities</h2>
            <p className="section-subtitle">Explore available roles across operations, technology, and business development.</p>
          </div>
          <div className={styles.rolesList}>
            {OPEN_ROLES.map((role) => (
              <div key={role.title} className={styles.roleCard}>
                <div className={styles.roleInfo}>
                  <h3 className={styles.roleTitle}>{role.title}</h3>
                  <div className={styles.roleMeta}>
                    <span className={styles.roleDept}>{role.dept}</span>
                    <span className={styles.roleMeta2}><MapPin size={12} /> {role.location}</span>
                    <span className={styles.roleMeta2}><Clock size={12} /> {role.type}</span>
                  </div>
                </div>
                <Link href="mailto:careers@everlegit.com" className={styles.applyBtn}>
                  Apply <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
          <p style={{ textAlign: "center", marginTop: "2.5rem", color: "var(--foreground-muted)", fontSize: "0.875rem" }}>
            Don&apos;t see a fit?{" "}
            <Link href="mailto:careers@everlegit.com" style={{ color: "#00A99D", fontWeight: 600 }}>
              Send us your resume
            </Link>{" "}
            — we&apos;re always looking for exceptional talent.
          </p>
        </div>
      </section>
    </>
  );
}
