"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Shield,
  Globe,
  Zap,
  Server,
  BarChart3,
  Layers,
  Users,
  Lock,
  CheckCircle2,
  Building2,
  Network,
  TrendingUp,
  Cpu,
  ChevronRight,
  Package,
  Workflow,
  Database,
  Award,
} from "lucide-react";
import styles from "./page.module.css";

/* ── Data ─────────────────────────────────────────────────────────── */
const TRUST_BADGES = [
  "USA Business Operations",
  "Enterprise Marketplace Infrastructure",
  "Global Supplier Ecosystems",
  "Secure Operational Systems",
  "Professional Commerce Solutions",
  "24/7 Business Operations",
];

const ENTERPRISE_STATS = [
  { value: "2017", label: "Founded", suffix: "" },
  { value: "500", label: "Enterprise Partners", suffix: "+" },
  { value: "40", label: "Countries Served", suffix: "+" },
  { value: "99.9", label: "Uptime SLA", suffix: "%" },
];

const TRUST_CARDS = [
  {
    icon: Layers,
    title: "Marketplace Infrastructure",
    desc: "Enterprise-grade marketplace systems designed for scalable commerce ecosystems and operational management.",
  },
  {
    icon: Network,
    title: "Supplier Ecosystems",
    desc: "Integrated supplier management technologies supporting streamlined digital commerce operations.",
  },
  {
    icon: Workflow,
    title: "Commerce Automation",
    desc: "Advanced automation systems improving operational performance and marketplace efficiency.",
  },
  {
    icon: TrendingUp,
    title: "Business Scalability",
    desc: "Flexible infrastructure solutions supporting long-term business growth and global commerce expansion.",
  },
];

const SERVICES = [
  {
    icon: Layers,
    number: "01",
    title: "Marketplace Infrastructure Systems",
    desc: "Professional marketplace technologies designed to support scalable multi-vendor ecommerce ecosystems and enterprise commerce operations.",
    features: [
      "Vendor management systems",
      "Supplier portals",
      "Marketplace analytics",
      "Product operation systems",
      "Commerce workflow management",
      "Administration dashboards",
    ],
  },
  {
    icon: Server,
    number: "02",
    title: "Enterprise Ecommerce Solutions",
    desc: "Scalable ecommerce systems supporting modern online commerce operations and digital business growth.",
    features: [
      "Ecommerce platform systems",
      "Inventory operations",
      "Order management",
      "Commerce automation",
      "Customer management tools",
      "Product distribution workflows",
    ],
  },
  {
    icon: Users,
    number: "03",
    title: "Supplier & B2B Commerce Operations",
    desc: "Integrated supplier management and B2B commerce infrastructure supporting efficient operational ecosystems.",
    features: [
      "Supplier onboarding",
      "Wholesale systems",
      "Vendor communications",
      "B2B commerce workflows",
      "Distribution operations",
      "Supplier performance management",
    ],
  },
  {
    icon: Cpu,
    number: "04",
    title: "Commerce Technology Infrastructure",
    desc: "Enterprise-grade technology systems supporting secure, scalable, and optimized digital commerce environments.",
    features: [
      "API integrations",
      "Cloud infrastructure",
      "Secure business systems",
      "Operational monitoring",
      "Enterprise automation",
      "Commerce analytics infrastructure",
    ],
  },
];

const SECURITY_FEATURES = [
  "Enterprise infrastructure systems",
  "Operational risk monitoring",
  "Secure commerce technologies",
  "Protected business environments",
  "Reliable operational architecture",
  "Business continuity support",
  "Infrastructure performance optimization",
  "Marketplace operational security",
];

const CONTACT_DEPTS = [
  {
    icon: Building2,
    title: "Enterprise Operations",
    desc: "Business operations and enterprise commerce support.",
    email: "operations@everlegit.com",
  },
  {
    icon: Network,
    title: "Marketplace Partnerships",
    desc: "Marketplace collaboration and supplier relations.",
    email: "partnerships@everlegit.com",
  },
  {
    icon: Cpu,
    title: "Technical Infrastructure",
    desc: "Commerce technologies and operational systems support.",
    email: "tech@everlegit.com",
  },
  {
    icon: Shield,
    title: "Compliance & Verification",
    desc: "Operational transparency and business verification inquiries.",
    email: "compliance@everlegit.com",
  },
];

/* ── Component ────────────────────────────────────────────────────── */
export default function HomePage() {
  /* Scroll-reveal */
  const revealRefs = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).style.opacity = "1";
            (entry.target as HTMLElement).style.transform = "translateY(0)";
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
    );
    revealRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const addReveal = (el: HTMLElement | null) => {
    if (el && !revealRefs.current.includes(el)) {
      el.style.opacity = "0";
      el.style.transform = "translateY(32px)";
      el.style.transition = "opacity 0.7s ease, transform 0.7s ease";
      revealRefs.current.push(el);
    }
  };

  return (
    <>
      {/* ══════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════ */}
      <section className={styles.hero}>
        {/* Ambient glow orbs */}
        <div className={styles.orb1} />
        <div className={styles.orb2} />
        <div className={styles.gridOverlay} />

        <div className="container">
          <div className={styles.heroInner}>
            {/* Badge */}
            <div className={styles.heroBadge}>
              <span className={styles.heroBadgeDot} />
              USA-Based Enterprise Operations Since 2017
            </div>

            {/* Headline */}
            <h1 className={styles.heroTitle}>
              Global Commerce Infrastructure
              <span className={styles.heroAccent}> Built For Enterprise Growth</span>
            </h1>

            {/* Sub */}
            <p className={styles.heroSub}>
              Advanced ecommerce technologies, enterprise marketplace systems, supplier operations,
              and scalable digital commerce infrastructure designed for modern global businesses.
            </p>

            {/* CTAs */}
            <div className={styles.heroCtas}>
              <Link href="/contact" className={`btn btn-primary ${styles.heroCtaPrimary}`}>
                Request Enterprise Consultation
                <ArrowRight size={17} />
              </Link>
              <Link href="/about" className={`btn btn-outline`}>
                Explore Marketplace Solutions
              </Link>
              <Link href="/contact" className={`btn btn-ghost`}>
                Contact Business Operations
              </Link>
            </div>

            {/* Trust indicators */}
            <div className={styles.trustRow}>
              {TRUST_BADGES.map((badge) => (
                <div key={badge} className={styles.trustBadge}>
                  <CheckCircle2 size={13} className={styles.trustIcon} />
                  {badge}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          STATS BAR
      ══════════════════════════════════════════════ */}
      <section className={styles.statsBar} ref={addReveal as React.RefCallback<HTMLElement>}>
        <div className="container">
          <div className={styles.statsGrid}>
            {ENTERPRISE_STATS.map((stat) => (
              <div key={stat.label} className={styles.statItem}>
                <span className={styles.statValue}>
                  {stat.value}
                  <span className={styles.statSuffix}>{stat.suffix}</span>
                </span>
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          TRUST BLOCK
      ══════════════════════════════════════════════ */}
      <section id="solutions" className="section" ref={addReveal as React.RefCallback<HTMLElement>}>
        <div className="container">
          <div className="text-center">
            <div className="section-label">
              <Award size={12} />
              Enterprise Infrastructure
            </div>
            <h2 className="section-title">Trusted Digital Commerce Infrastructure</h2>
            <p className="section-subtitle">
              EverLegit develops and operates scalable commerce technologies that support digital
              business operations, supplier ecosystems, marketplace management, ecommerce automation,
              and enterprise commerce infrastructure for modern organizations worldwide.
            </p>
          </div>

          <div className={styles.trustCardsGrid}>
            {TRUST_CARDS.map((card, i) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                  className={`enterprise-card ${styles.trustCard}`}
                  ref={addReveal as React.RefCallback<HTMLElement>}
                  style={{ transitionDelay: `${i * 0.1}s` }}
                >
                  <div className={styles.cardIconWrap}>
                    <Icon size={22} />
                  </div>
                  <h3 className={styles.cardTitle}>{card.title}</h3>
                  <p className={styles.cardDesc}>{card.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          COMPANY STORY
      ══════════════════════════════════════════════ */}
      <section id="about" className={`section ${styles.storySection}`}>
        <div className={styles.storyOrb} />
        <div className="container">
          <div className={styles.storyGrid} ref={addReveal as React.RefCallback<HTMLElement>}>
            <div className={styles.storyLeft}>
              <div className="section-label">
                <Building2 size={12} />
                Our Story
              </div>
              <h2 className={`section-title`} style={{ textAlign: "left", marginBottom: "1.5rem" }}>
                Building Modern Ecommerce Infrastructure Since 2017
              </h2>
              <p style={{ color: "var(--foreground-muted)", lineHeight: 1.8, marginBottom: "1.5rem" }}>
                Since 2017, EverLegit has focused on developing scalable ecommerce systems and
                enterprise marketplace technologies supporting modern digital business operations.
              </p>
              <p style={{ color: "var(--foreground-muted)", lineHeight: 1.8, marginBottom: "1.5rem" }}>
                As ecommerce environments continue evolving globally, EverLegit remains committed to
                delivering infrastructure solutions that help businesses manage operations
                efficiently, optimize marketplace performance, improve supplier connectivity, and
                support scalable commerce growth.
              </p>
              <p style={{ color: "var(--foreground-muted)", lineHeight: 1.8 }}>
                Our operational philosophy combines innovation, technology, security, scalability,
                and business-focused infrastructure to support sustainable digital commerce
                ecosystems for the modern enterprise world.
              </p>
            </div>

            <div className={styles.storyRight}>
              <div className={styles.storyMetrics}>
                {[
                  { icon: Globe, label: "Global Reach", value: "40+ Countries" },
                  { icon: Building2, label: "Enterprise Clients", value: "500+ Partners" },
                  { icon: Server, label: "Infrastructure Uptime", value: "99.9% SLA" },
                  { icon: Shield, label: "Security Standards", value: "SOC 2 Aligned" },
                ].map((m) => {
                  const Icon = m.icon;
                  return (
                    <div key={m.label} className={styles.metricCard}>
                      <div className={styles.metricIcon}>
                        <Icon size={18} />
                      </div>
                      <div>
                        <div className={styles.metricValue}>{m.value}</div>
                        <div className={styles.metricLabel}>{m.label}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SERVICES
      ══════════════════════════════════════════════ */}
      <section id="marketplace" className="section">
        <div className="container">
          <div className="text-center">
            <div className="section-label">
              <Layers size={12} />
              Core Solutions
            </div>
            <h2 className="section-title">Core Infrastructure &amp; Commerce Solutions</h2>
            <p className="section-subtitle">
              Enterprise-grade operational systems designed for scalable global commerce performance.
            </p>
          </div>

          <div className={styles.servicesGrid}>
            {SERVICES.map((svc, i) => {
              const Icon = svc.icon;
              return (
                <div
                  key={svc.number}
                  className={styles.serviceCard}
                  ref={addReveal as React.RefCallback<HTMLElement>}
                  style={{ transitionDelay: `${(i % 2) * 0.15}s` }}
                >
                  <div className={styles.serviceHeader}>
                    <span className={styles.serviceNumber}>{svc.number}</span>
                    <div className={styles.serviceIconWrap}>
                      <Icon size={20} />
                    </div>
                  </div>
                  <h3 className={styles.serviceTitle}>{svc.title}</h3>
                  <p className={styles.serviceDesc}>{svc.desc}</p>
                  <ul className={styles.featureList}>
                    {svc.features.map((f) => (
                      <li key={f} className={styles.featureItem}>
                        <ChevronRight size={13} className={styles.featureChev} />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          GLOBAL OPERATIONS
      ══════════════════════════════════════════════ */}
      <section id="operations" className={`section ${styles.globalSection}`}>
        <div className={styles.globalOrb} />
        <div className="container">
          <div
            className={styles.globalInner}
            ref={addReveal as React.RefCallback<HTMLElement>}
          >
            <div className={styles.globalLeft}>
              <div className="section-label">
                <Globe size={12} />
                Global Operations
              </div>
              <h2 className="section-title" style={{ textAlign: "left" }}>
                Supporting Modern Commerce Operations Worldwide
              </h2>
              <p style={{ color: "var(--foreground-muted)", lineHeight: 1.8, marginBottom: "2.5rem" }}>
                EverLegit supports digital commerce ecosystems through operational technologies,
                supplier systems, marketplace infrastructure, and scalable ecommerce environments
                designed to help businesses manage modern online operations efficiently across global
                markets.
              </p>
              <Link href="/partnerships" className="btn btn-primary">
                Explore Global Partnerships
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className={styles.globalRight}>
              <div className={styles.globalVisual}>
                <div className={styles.globalGlobe}>
                  <Globe size={100} style={{ opacity: 0.15, color: "var(--emerald)" }} />
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
                    <span className={styles.regionStatus}>{region.active ? "Active" : "Expanding"}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          TRUST / STANDARDS
      ══════════════════════════════════════════════ */}
      <section className="section" ref={addReveal as React.RefCallback<HTMLElement>}>
        <div className="container">
          <div className="text-center">
            <div className="section-label">
              <Shield size={12} />
              Enterprise Standards
            </div>
            <h2 className="section-title">Enterprise Standards &amp; Operational Transparency</h2>
            <p className="section-subtitle">
              EverLegit maintains professional operational structures and infrastructure systems
              focused on transparency, reliability, scalability, and secure commerce management.
            </p>
          </div>

          <div className={styles.standardsGrid}>
            {[
              {
                icon: Lock,
                title: "Secure Infrastructure Environment",
                desc: "Enterprise operational systems designed for stable and secure digital commerce activities.",
              },
              {
                icon: CheckCircle2,
                title: "Compliance-Focused Operations",
                desc: "Professional operational standards supporting responsible business practices and marketplace management.",
              },
              {
                icon: Users,
                title: "Dedicated Operational Teams",
                desc: "Specialized support structures helping businesses manage ecommerce and marketplace activities effectively.",
              },
              {
                icon: TrendingUp,
                title: "Scalable Commerce Technologies",
                desc: "Flexible systems designed to support long-term operational growth and marketplace expansion.",
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className={`enterprise-card ${styles.standardCard}`}
                  style={{ transitionDelay: `${i * 0.1}s` }}
                >
                  <Icon size={24} className={styles.standardIcon} />
                  <h3 className={styles.standardTitle}>{item.title}</h3>
                  <p className={styles.standardDesc}>{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SECURITY INFRASTRUCTURE
      ══════════════════════════════════════════════ */}
      <section className={`section ${styles.securitySection}`}>
        <div className="container">
          <div
            className={styles.securityInner}
            ref={addReveal as React.RefCallback<HTMLElement>}
          >
            <div className={styles.securityLeft}>
              <div className="section-label">
                <Lock size={12} />
                Security &amp; Infrastructure
              </div>
              <h2 className="section-title" style={{ textAlign: "left" }}>
                Secure Infrastructure For Enterprise Commerce
              </h2>
              <p style={{ color: "var(--foreground-muted)", lineHeight: 1.8, marginBottom: "2rem" }}>
                EverLegit prioritizes operational security, system stability, commerce reliability,
                and infrastructure performance through enterprise-focused technologies and protected
                operational environments.
              </p>
              <ul className={styles.securityList}>
                {SECURITY_FEATURES.map((f) => (
                  <li key={f} className={styles.securityItem}>
                    <CheckCircle2 size={16} className={styles.securityCheck} />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.securityRight}>
              <div className={styles.securityVisual}>
                <div className={styles.secBadge}>
                  <Shield size={52} />
                  <span>Enterprise</span>
                  <span>Security</span>
                </div>
                <div className={styles.secRings}>
                  <div className={styles.secRing1} />
                  <div className={styles.secRing2} />
                  <div className={styles.secRing3} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          PARTNERSHIPS
      ══════════════════════════════════════════════ */}
      <section id="partnerships" className="section" ref={addReveal as React.RefCallback<HTMLElement>}>
        <div className="container">
          <div className={styles.partnershipBanner}>
            <div className={styles.partnershipLeft}>
              <div className="section-label" style={{ marginBottom: "1.5rem" }}>
                <Network size={12} />
                Strategic Partnerships
              </div>
              <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.75rem)", fontFamily: "var(--font-manrope)", fontWeight: 800, letterSpacing: "-0.02em", color: "var(--white)", marginBottom: "1.25rem" }}>
                Strategic Commerce Partnerships
              </h2>
              <p style={{ color: "var(--foreground-muted)", lineHeight: 1.8, maxWidth: "520px" }}>
                EverLegit collaborates with ecommerce businesses, suppliers, commerce operators,
                digital brands, technology providers, and enterprise organizations to support
                scalable commerce operations and digital marketplace growth.
              </p>
            </div>
            <div className={styles.partnershipRight}>
              <Link href="/partnerships" className={`btn btn-primary ${styles.partnerCtaBtn}`}>
                Become a Partner
                <ArrowRight size={17} />
              </Link>
              <Link href="/contact" className={`btn btn-outline`}>
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          CONTACT
      ══════════════════════════════════════════════ */}
      <section id="contact" className="section">
        <div className="container">
          <div className="text-center">
            <div className="section-label">
              <Building2 size={12} />
              Contact
            </div>
            <h2 className="section-title">Connect With EverLegit</h2>
            <p className="section-subtitle">
              Contact EverLegit regarding enterprise ecommerce systems, marketplace infrastructure,
              supplier operations, strategic partnerships, commerce technologies, and business
              development opportunities.
            </p>
          </div>

          <div className={styles.contactGrid}>
            {CONTACT_DEPTS.map((dept, i) => {
              const Icon = dept.icon;
              return (
                <div
                  key={dept.title}
                  className={`enterprise-card ${styles.contactCard}`}
                  ref={addReveal as React.RefCallback<HTMLElement>}
                  style={{ transitionDelay: `${i * 0.1}s` }}
                >
                  <div className={styles.contactIconWrap}>
                    <Icon size={22} />
                  </div>
                  <h3 className={styles.contactTitle}>{dept.title}</h3>
                  <p className={styles.contactDesc}>{dept.desc}</p>
                  <a href={`mailto:${dept.email}`} className={styles.contactEmail}>
                    {dept.email}
                  </a>
                </div>
              );
            })}
          </div>

          {/* Enterprise CTA */}
          <div className={styles.enterpriseCta} ref={addReveal as React.RefCallback<HTMLElement>}>
            <div className={styles.enterpriseCtaOrb} />
            <div className="section-label" style={{ marginBottom: "1.5rem" }}>
              <Zap size={12} />
              Start Today
            </div>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontFamily: "var(--font-manrope)", fontWeight: 800, letterSpacing: "-0.03em", color: "var(--white)", marginBottom: "1.25rem" }}>
              Ready to Build Enterprise Commerce Infrastructure?
            </h2>
            <p style={{ color: "var(--foreground-muted)", lineHeight: 1.8, maxWidth: "600px", margin: "0 auto 2.5rem" }}>
              Speak with our enterprise team about scalable ecommerce systems, marketplace infrastructure,
              and operational technologies designed for serious business growth.
            </p>
            <div className={styles.ctaButtons}>
              <Link href="/contact" className={`btn btn-primary ${styles.ctaPrimaryLarge}`}>
                Request Enterprise Consultation
                <ArrowRight size={18} />
              </Link>
              <Link href="/about" className={`btn btn-outline`}>
                View All Solutions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
