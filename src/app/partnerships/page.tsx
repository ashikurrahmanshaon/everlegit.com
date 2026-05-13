"use client";

import Link from "next/link";
import {
  Users, Globe, Briefcase, ArrowRight, CheckCircle2,
  Network, TrendingUp, Zap, Shield, BarChart3, Star,
  Building2, Mail,
} from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import styles from "./partnerships.module.css";

const PARTNER_TYPES = [
  {
    icon: Globe,
    title: "Marketplace Partners",
    tag: "Most Popular",
    desc: "Collaborate on multi-channel commerce infrastructure, vendor management systems, and marketplace technology integration.",
    benefits: ["Marketplace co-management", "Shared vendor networks", "Analytics integration", "Revenue optimization"],
    color: "#00A99D",
  },
  {
    icon: Users,
    title: "Supplier Partners",
    tag: "High Demand",
    desc: "Join our global supplier network to access enterprise procurement, B2B commerce systems, and operational support.",
    benefits: ["Vetted supplier listing", "Direct procurement access", "Payment infrastructure", "Quality management"],
    color: "#0066cc",
  },
  {
    icon: Network,
    title: "Technology Partners",
    tag: "Growing Fast",
    desc: "Integrate your commerce technology with EverLegit's enterprise infrastructure platform for co-growth.",
    benefits: ["API integration", "Platform connectivity", "Co-development", "Technical support"],
    color: "#7c3aed",
  },
  {
    icon: Briefcase,
    title: "Enterprise Clients",
    tag: "Custom SLA",
    desc: "Access full-stack ecommerce infrastructure for large-scale digital commerce operations and global marketplace management.",
    benefits: ["Dedicated account team", "Custom SLAs", "Priority operations", "Enterprise dashboard"],
    color: "#f59e0b",
  },
];

const PROCESS_STEPS = [
  { step: "01", icon: Mail, title: "Submit Inquiry", desc: "Reach out through our partnerships team with your business profile and collaboration goals." },
  { step: "02", icon: Users, title: "Discovery Call", desc: "Our business development team schedules a discovery call to understand your needs." },
  { step: "03", icon: BarChart3, title: "Proposal & Review", desc: "We craft a tailored partnership proposal aligned with your operational objectives." },
  { step: "04", icon: Zap, title: "Go Live", desc: "Onboarding, integration, and launch — typically within 2–4 weeks of agreement." },
];

const STATS = [
  { value: "500+", label: "Active Partners", icon: Users },
  { value: "40+", label: "Countries", icon: Globe },
  { value: "$2B+", label: "Commerce Volume", icon: TrendingUp },
  { value: "99.9%", label: "Uptime SLA", icon: Shield },
];

export default function PartnershipsPage() {
  return (
    <div className="page-wrapper">
      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroOrb1} />
        <div className={styles.heroOrb2} />
        <div className={styles.gridOverlay} />
        <div className="container">
          <div className={styles.heroInner}>
            <div className="section-label"><Network size={12} />Strategic Partnerships</div>
            <h1 className={styles.heroTitle}>
              Build the Future of
              <br />
              <span className={styles.heroAccent}>Commerce Together</span>
            </h1>
            <p className={styles.heroSub}>
              EverLegit collaborates with ecommerce businesses, suppliers, technology providers,
              and enterprise organizations to support scalable commerce operations worldwide.
            </p>
            <div className={styles.heroCtas}>
              <Link href="#apply" className="btn btn-primary">
                Become a Partner <ArrowRight size={16} />
              </Link>
              <Link href="/contact" className="btn btn-outline">
                Talk to Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className={styles.statsSection}>
        <div className="container">
          <div className={styles.statsGrid}>
            {STATS.map(({ value, label, icon: Icon }, i) => (
              <AnimatedSection key={label} delay={i * 0.08} direction="up">
                <div className={styles.statItem}>
                  <div className={styles.statIcon}><Icon size={18} /></div>
                  <div className={styles.statValue}>{value}</div>
                  <div className={styles.statLabel}>{label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Partner Types ── */}
      <section className="section">
        <div className="container">
          <AnimatedSection direction="up">
            <div className="text-center">
              <div className="section-label"><Users size={12} />Partnership Types</div>
              <h2 className="section-title">How We Collaborate</h2>
              <p className="section-subtitle">Flexible partnership structures designed for meaningful, long-term business relationships.</p>
            </div>
          </AnimatedSection>
          <div className={styles.partnerGrid}>
            {PARTNER_TYPES.map(({ icon: Icon, title, tag, desc, benefits, color }, i) => (
              <AnimatedSection key={title} delay={i * 0.1} direction="up">
                <div className={`${styles.partnerCard}`} style={{ "--card-color": color } as React.CSSProperties}>
                  <div className={styles.partnerCardHeader}>
                    <div className={styles.partnerIcon} style={{ background: `${color}18`, borderColor: `${color}40`, color }}>
                      <Icon size={22} />
                    </div>
                    <span className={styles.partnerTag} style={{ background: `${color}18`, color, borderColor: `${color}30` }}>{tag}</span>
                  </div>
                  <h3 className={styles.partnerTitle}>{title}</h3>
                  <p className={styles.partnerDesc}>{desc}</p>
                  <ul className={styles.benefitList}>
                    {benefits.map((b) => (
                      <li key={b} className={styles.benefitItem}>
                        <CheckCircle2 size={13} style={{ color, flexShrink: 0 }} />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <div className={styles.partnerCta} style={{ borderTop: `1px solid ${color}20` }}>
                    <Link href="#apply" className={styles.partnerCtaLink} style={{ color }}>
                      Get Started <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className={`section ${styles.processSection}`}>
        <div className={styles.processOrb} />
        <div className="container">
          <AnimatedSection direction="up">
            <div className="text-center">
              <div className="section-label"><Star size={12} />Our Process</div>
              <h2 className="section-title">How Partnership Works</h2>
              <p className="section-subtitle">A streamlined onboarding process to get you up and running fast.</p>
            </div>
          </AnimatedSection>
          <div className={styles.processGrid}>
            {PROCESS_STEPS.map(({ step, icon: Icon, title, desc }, i) => (
              <AnimatedSection key={step} delay={i * 0.12} direction="up">
                <div className={styles.processCard}>
                  <div className={styles.processStep}>{step}</div>
                  <div className={styles.processIcon}><Icon size={22} /></div>
                  <h3 className={styles.processTitle}>{title}</h3>
                  <p className={styles.processDesc}>{desc}</p>
                  {i < PROCESS_STEPS.length - 1 && <div className={styles.processArrow}><ArrowRight size={16} /></div>}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why EverLegit ── */}
      <section className="section">
        <div className="container">
          <div className={styles.whyGrid}>
            <AnimatedSection direction="left">
              <div className={styles.whyLeft}>
                <div className="section-label"><Building2 size={12} />Why EverLegit</div>
                <h2 className="section-title" style={{ textAlign: "left" }}>
                  The Right Partner for Global Commerce Growth
                </h2>
                <p style={{ color: "var(--foreground-muted)", lineHeight: 1.8, marginBottom: "2rem" }}>
                  With 8+ years of enterprise commerce infrastructure experience, global market reach,
                  and a partner-first operational philosophy, EverLegit is uniquely positioned to
                  support your long-term commerce ambitions.
                </p>
                {["8+ years of enterprise experience", "500+ active global partners", "Dedicated partner success managers", "Custom integration & API support", "Flexible revenue sharing models"].map((item) => (
                  <div key={item} style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
                    <CheckCircle2 size={16} style={{ color: "#00A99D", flexShrink: 0 }} />
                    <span style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.9rem", fontWeight: 500 }}>{item}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right" delay={0.15}>
              <div className={styles.whyVisual}>
                <div className={styles.whyGlobe}>
                  <Globe size={80} style={{ opacity: 0.1, color: "#00A99D" }} />
                  <div className={styles.whyOrb} />
                </div>
                {[
                  { label: "North America", active: true },
                  { label: "Europe", active: true },
                  { label: "Asia Pacific", active: true },
                  { label: "Middle East", active: false },
                  { label: "Latin America", active: false },
                ].map((region) => (
                  <div key={region.label} className={styles.regionRow}>
                    <div className={`${styles.regionDot} ${region.active ? styles.regionDotActive : ""}`} />
                    <span className={styles.regionLabel}>{region.label}</span>
                    <span className={`${styles.regionBadge} ${region.active ? styles.regionBadgeActive : ""}`}>
                      {region.active ? "Active" : "Expanding"}
                    </span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── Apply CTA ── */}
      <section id="apply" className="section">
        <div className="container">
          <AnimatedSection direction="fade">
            <div className={styles.applyCta}>
              <div className={styles.applyOrb} />
              <div className="section-label" style={{ marginBottom: "1.5rem" }}>
                <TrendingUp size={12} /> Apply Now
              </div>
              <h2 className={styles.applyTitle}>Start a Partnership with EverLegit</h2>
              <p className={styles.applySub}>
                Submit your partnership inquiry and our business development team will respond within 2 business days.
              </p>
              <div className={styles.applyActions}>
                <a href="mailto:partnerships@everlegit.com" className="btn btn-primary" style={{ fontSize: "1rem", padding: "1rem 2rem" }}>
                  partnerships@everlegit.com <ArrowRight size={16} />
                </a>
                <Link href="/contact" className="btn btn-outline" style={{ fontSize: "1rem", padding: "1rem 2rem" }}>
                  Contact Our Team
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
