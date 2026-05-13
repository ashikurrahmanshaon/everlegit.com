"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  Building2, Globe, Shield, TrendingUp, Users, Award,
  CheckCircle2, ArrowRight, Network, Zap, Star,
  BarChart3, Target, Heart,
} from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import styles from "./about.module.css";

const MILESTONES = [
  { year: "2017", title: "Company Founded", desc: "EverLegit established as a USA-based digital commerce infrastructure company with a vision for scalable global trade.", color: "#00A99D" },
  { year: "2019", title: "Marketplace Expansion", desc: "Launched enterprise marketplace infrastructure supporting multi-vendor commerce ecosystems across 10+ countries.", color: "#00c4b8" },
  { year: "2021", title: "Global Operations", desc: "Extended supplier networks and commerce operations across 40+ countries worldwide with 200+ enterprise partners.", color: "#00d4c8" },
  { year: "2023", title: "Enterprise Platform", desc: "Deployed enterprise-grade commerce technology infrastructure supporting 500+ business partners at scale.", color: "#00A99D" },
  { year: "2025", title: "Infrastructure Scaling", desc: "Advanced B2B commerce operations and AI-powered supplier management systems for next-generation global enterprise growth.", color: "#00c4b8" },
];

const VALUES = [
  { icon: Shield, title: "Operational Integrity", desc: "We build and manage commerce systems with transparency, accountability, and professional standards that never waver.", gradient: "from-blue-500 to-blue-700" },
  { icon: TrendingUp, title: "Scalable Infrastructure", desc: "Every system is designed for long-term growth, supporting enterprises as they expand globally and scale rapidly.", gradient: "from-emerald-500 to-emerald-700" },
  { icon: Globe, title: "Global Commerce Focus", desc: "Our infrastructure connects suppliers, marketplaces, and enterprise businesses across global commerce ecosystems.", gradient: "from-purple-500 to-purple-700" },
  { icon: Users, title: "Partner-First Operations", desc: "We prioritize the success of our business partners through dedicated operational support and technology.", gradient: "from-orange-500 to-orange-700" },
  { icon: Award, title: "Technology Excellence", desc: "Enterprise-grade systems built to perform reliably at scale with secure and optimized architecture.", gradient: "from-yellow-500 to-yellow-700" },
  { icon: Network, title: "Ecosystem Connectivity", desc: "Integrated platforms that unify suppliers, vendors, commerce operators, and enterprise organizations.", gradient: "from-pink-500 to-pink-700" },
];

const STATS = [
  { value: 2017, label: "Year Founded", suffix: "", icon: Star, isYear: true },
  { value: 500, label: "Enterprise Partners", suffix: "+", icon: Users },
  { value: 40, label: "Countries Served", suffix: "+", icon: Globe },
  { value: 99.9, label: "Infrastructure Uptime", suffix: "%", icon: Shield, isDecimal: true },
];

function CountUp({ end, suffix, isYear, isDecimal }: { end: number; suffix: string; isYear?: boolean; isDecimal?: boolean }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const duration = 1800;
        const startTime = performance.now();
        const animate = (now: number) => {
          const progress = Math.min((now - startTime) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          const current = isDecimal ? parseFloat((eased * end).toFixed(1)) : Math.floor(eased * end);
          setCount(current);
          if (progress < 1) requestAnimationFrame(animate);
          else setCount(end);
        };
        requestAnimationFrame(animate);
        obs.disconnect();
      }
    }, { threshold: 0.5 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [end, isDecimal]);

  const display = isYear ? (count === 0 ? "—" : count) : isDecimal ? count.toFixed(1) : count;

  return <span ref={ref}>{display}{count > 0 ? suffix : ""}</span>;
}

export default function AboutPage() {
  return (
    <div className="page-wrapper">
      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroOrb1} />
        <div className={styles.heroOrb2} />
        <div className={styles.gridOverlay} />
        <div className={styles.heroParticles}>
          {[...Array(6)].map((_, i) => (
            <div key={i} className={styles.particle} style={{ animationDelay: `${i * 0.8}s`, left: `${10 + i * 15}%` }} />
          ))}
        </div>

        <div className="container">
          <div className={styles.heroInner}>
            <div className={`section-label ${styles.heroLabel}`}>
              <Building2 size={12} /> About EverLegit
            </div>
            <h1 className={styles.heroTitle}>
              Enterprise Commerce
              <br />
              <span className={styles.heroAccent}>Built on 8 Years of Trust</span>
            </h1>
            <p className={styles.heroSub}>
              EverLegit is a USA-based enterprise ecommerce infrastructure and marketplace technology
              company — building the digital foundations that power modern global business.
            </p>
            <div className={styles.heroCtas}>
              <Link href="/contact" className="btn btn-primary">
                Work With Us <ArrowRight size={16} />
              </Link>
              <Link href="/partnerships" className="btn btn-outline">
                Explore Partnerships
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats Counter ── */}
      <section className={styles.statsSection}>
        <div className="container">
          <div className={styles.statsGrid}>
            {STATS.map(({ value, label, suffix, icon: Icon, isYear, isDecimal }, i) => (
              <AnimatedSection key={label} delay={i * 0.1} direction="up">
                <div className={styles.statCard}>
                  <div className={styles.statIcon}><Icon size={20} /></div>
                  <div className={styles.statValue}>
                    <CountUp end={value} suffix={suffix} isYear={isYear} isDecimal={isDecimal} />
                  </div>
                  <div className={styles.statLabel}>{label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Mission ── */}
      <section className={`section ${styles.missionSection}`}>
        <div className="container">
          <div className={styles.missionGrid}>
            <AnimatedSection direction="left">
              <div className={styles.missionLeft}>
                <div className="section-label"><Award size={12} />Our Mission</div>
                <h2 className="section-title" style={{ textAlign: "left" }}>
                  Powering Global Commerce Infrastructure
                </h2>
                <p style={{ color: "var(--foreground-muted)", lineHeight: 1.85, marginBottom: "1.5rem", fontSize: "1.05rem" }}>
                  Established in 2017, EverLegit supports modern businesses through advanced marketplace
                  infrastructure, operational automation, supplier integration systems, and enterprise-grade
                  commerce technologies designed for scalable global growth.
                </p>
                <p style={{ color: "var(--foreground-muted)", lineHeight: 1.85, marginBottom: "2rem" }}>
                  Our ecosystem combines digital commerce operations, ecommerce infrastructure, marketplace
                  management, and business technology solutions to help organizations streamline online
                  operations, expand marketplace capabilities, and optimize digital business performance worldwide.
                </p>
                <div className={styles.missionChecks}>
                  {["USA-registered enterprise operations", "40+ global markets served", "500+ enterprise partners", "99.9% infrastructure uptime SLA"].map((item) => (
                    <div key={item} className={styles.missionCheck}>
                      <CheckCircle2 size={16} className={styles.checkIcon} /> {item}
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: "2rem", display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                  <Link href="/contact" className="btn btn-primary">
                    Work With Us <ArrowRight size={16} />
                  </Link>
                  <Link href="/partnerships" className="btn btn-outline">
                    View Partnerships
                  </Link>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.15}>
              <div className={styles.missionVisual}>
                <div className={styles.missionCard}>
                  <div className={styles.missionCardIcon}><Zap size={24} /></div>
                  <div className={styles.missionCardTitle}>Enterprise-Grade</div>
                  <div className={styles.missionCardDesc}>Infrastructure built for scale</div>
                </div>
                <div className={styles.missionCard} style={{ marginTop: "1rem" }}>
                  <div className={styles.missionCardIcon}><Target size={24} /></div>
                  <div className={styles.missionCardTitle}>Mission-Driven</div>
                  <div className={styles.missionCardDesc}>Focused on partner success</div>
                </div>
                <div className={styles.missionCard} style={{ marginTop: "1rem" }}>
                  <div className={styles.missionCardIcon}><BarChart3 size={24} /></div>
                  <div className={styles.missionCardTitle}>Data-Powered</div>
                  <div className={styles.missionCardDesc}>Analytics-driven operations</div>
                </div>
                <div className={styles.missionOrb} />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className={`section ${styles.valuesSection}`}>
        <div className={styles.valuesOrb} />
        <div className="container">
          <AnimatedSection direction="up">
            <div className="text-center">
              <div className="section-label"><Heart size={12} />Core Values</div>
              <h2 className="section-title">Our Operational Philosophy</h2>
              <p className="section-subtitle">
                The principles that guide every system, every partnership, and every decision at EverLegit.
              </p>
            </div>
          </AnimatedSection>
          <div className={styles.valuesGrid}>
            {VALUES.map(({ icon: Icon, title, desc }, i) => (
              <AnimatedSection key={title} delay={i * 0.08} direction="up">
                <div className={`enterprise-card ${styles.valueCard}`}>
                  <div className={styles.valueIcon}><Icon size={22} /></div>
                  <h3 className={styles.valueTitle}>{title}</h3>
                  <p className={styles.valueDesc}>{desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className={`section ${styles.timelineSection}`}>
        <div className="container">
          <AnimatedSection direction="up">
            <div className="text-center">
              <div className="section-label"><TrendingUp size={12} />Company History</div>
              <h2 className="section-title">Our Journey Since 2017</h2>
              <p className="section-subtitle">Eight years of building infrastructure that powers global commerce.</p>
            </div>
          </AnimatedSection>

          <div className={styles.timeline}>
            <div className={styles.timelineLine} />
            {MILESTONES.map((m, i) => (
              <AnimatedSection key={m.year} delay={i * 0.12} direction={i % 2 === 0 ? "left" : "right"}>
                <div className={`${styles.timelineItem} ${i % 2 === 0 ? styles.timelineLeft : styles.timelineRight}`}>
                  <div className={styles.timelineContent}>
                    <span className={styles.timelineYear} style={{ color: m.color }}>{m.year}</span>
                    <h3 className={styles.timelineTitle}>{m.title}</h3>
                    <p className={styles.timelineDesc}>{m.desc}</p>
                  </div>
                  <div className={styles.timelineDot} style={{ borderColor: m.color, boxShadow: `0 0 16px ${m.color}60` }}>
                    <div className={styles.timelineDotInner} style={{ background: m.color }} />
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section">
        <div className="container">
          <AnimatedSection direction="fade">
            <div className={styles.ctaBanner}>
              <div className={styles.ctaOrb1} />
              <div className={styles.ctaOrb2} />
              <div className="section-label" style={{ marginBottom: "1.5rem" }}>
                <Zap size={12} /> Start Today
              </div>
              <h2 className={styles.ctaTitle}>Ready to Partner with EverLegit?</h2>
              <p className={styles.ctaSub}>
                Connect with our enterprise operations team to discuss infrastructure, marketplace systems, and commerce technology solutions.
              </p>
              <div className={styles.ctaBtns}>
                <Link href="/contact" className="btn btn-primary" style={{ fontSize: "1rem", padding: "1rem 2rem" }}>
                  Request Enterprise Consultation <ArrowRight size={17} />
                </Link>
                <Link href="/#solutions" className="btn btn-outline" style={{ fontSize: "1rem", padding: "1rem 2rem" }}>
                  Explore Solutions
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
