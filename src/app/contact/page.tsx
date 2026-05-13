"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Mail, Globe, Building2, Shield, Cpu, Network,
  ArrowRight, Clock, MapPin, Phone, Send,
  CheckCircle2, Zap,
} from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import styles from "./contact.module.css";

const DEPARTMENTS = [
  {
    icon: Building2,
    title: "Enterprise Operations",
    desc: "Business operations, enterprise commerce support, and general inquiries.",
    email: "operations@everlegit.com",
    response: "Within 1 business day",
    color: "#00A99D",
  },
  {
    icon: Network,
    title: "Marketplace Partnerships",
    desc: "Marketplace collaboration, supplier relations, and partnership development.",
    email: "partnerships@everlegit.com",
    response: "Within 2 business days",
    color: "#0066cc",
  },
  {
    icon: Cpu,
    title: "Technical Infrastructure",
    desc: "Commerce technologies, API integration, and operational systems support.",
    email: "tech@everlegit.com",
    response: "Within 1 business day",
    color: "#7c3aed",
  },
  {
    icon: Shield,
    title: "Compliance & Verification",
    desc: "Operational transparency, business verification, and compliance inquiries.",
    email: "compliance@everlegit.com",
    response: "Within 3 business days",
    color: "#f59e0b",
  },
];

const INFO_CARDS = [
  { icon: Globe, title: "Headquarters", value: "United States of America", sub: "USA-registered enterprise operations" },
  { icon: Clock, title: "Operating Hours", value: "24/7 Infrastructure Support", sub: "Business ops Mon–Fri, 9AM–6PM EST" },
  { icon: Phone, title: "Office Phone", value: "+1 307 424 2312", sub: "Mon–Fri, 9AM–6PM EST" },
  { icon: MapPin, title: "Global Operations", value: "40+ Countries Supported", sub: "Commerce infrastructure worldwide" },
];

type FormState = "idle" | "loading" | "success" | "error";

export default function ContactPage() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    department: "Enterprise Operations",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("loading");
    // Simulate form submission
    await new Promise(r => setTimeout(r, 1800));
    setFormState("success");
  };

  return (
    <div className="page-wrapper">
      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroOrb} />
        <div className={styles.gridOverlay} />
        <div className="container">
          <div className={styles.heroInner}>
            <div className="section-label"><Mail size={12} />Contact</div>
            <h1 className={styles.heroTitle}>Connect With EverLegit</h1>
            <p className={styles.heroSub}>
              Contact EverLegit regarding enterprise ecommerce systems, marketplace infrastructure,
              supplier operations, strategic partnerships, and business development opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* ── Main Contact Grid ── */}
      <section className="section">
        <div className="container">
          <div className={styles.mainGrid}>
            {/* Contact Form */}
            <AnimatedSection direction="left">
              <div className={styles.formCard}>
                <div className={styles.formCardHeader}>
                  <h2 className={styles.formTitle}>Send Us a Message</h2>
                  <p className={styles.formSub}>We'll get back to you within 1–2 business days.</p>
                </div>

                {formState === "success" ? (
                  <div className={styles.successState}>
                    <div className={styles.successIcon}><CheckCircle2 size={40} /></div>
                    <h3 className={styles.successTitle}>Message Received!</h3>
                    <p className={styles.successDesc}>
                      Thank you for reaching out. Our enterprise team will respond within the timeframe for your selected department.
                    </p>
                    <button className="btn btn-outline" onClick={() => { setFormState("idle"); setFormData({ name: "", company: "", email: "", phone: "", department: "Enterprise Operations", message: "" }); }}>
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className={styles.form} noValidate>
                    <div className={styles.formRow}>
                      <div className={styles.formGroup}>
                        <label className={styles.label} htmlFor="contact-name">Full Name *</label>
                        <input
                          id="contact-name"
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className={styles.input}
                          placeholder="John Smith"
                          required
                        />
                      </div>
                      <div className={styles.formGroup}>
                        <label className={styles.label} htmlFor="contact-company">Company</label>
                        <input
                          id="contact-company"
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className={styles.input}
                          placeholder="Acme Corp"
                        />
                      </div>
                    </div>
                    <div className={styles.formRow}>
                      <div className={styles.formGroup}>
                        <label className={styles.label} htmlFor="contact-email">Email Address *</label>
                        <input
                          id="contact-email"
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={styles.input}
                          placeholder="john@company.com"
                          required
                        />
                      </div>
                      <div className={styles.formGroup}>
                        <label className={styles.label} htmlFor="contact-phone">Phone (Optional)</label>
                        <input
                          id="contact-phone"
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className={styles.input}
                          placeholder="+1 (555) 000-0000"
                        />
                      </div>
                    </div>
                    <div className={styles.formGroup}>
                      <label className={styles.label} htmlFor="contact-department">Department *</label>
                      <select
                        id="contact-department"
                        name="department"
                        value={formData.department}
                        onChange={handleChange}
                        className={styles.select}
                        required
                      >
                        {DEPARTMENTS.map(d => (
                          <option key={d.title} value={d.title}>{d.title}</option>
                        ))}
                      </select>
                    </div>
                    <div className={styles.formGroup}>
                      <label className={styles.label} htmlFor="contact-message">Message *</label>
                      <textarea
                        id="contact-message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className={styles.textarea}
                        placeholder="Tell us about your business needs, project scope, or inquiry..."
                        rows={5}
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className={`btn btn-primary ${styles.submitBtn}`}
                      disabled={formState === "loading"}
                    >
                      {formState === "loading" ? (
                        <>
                          <span className={styles.spinner} />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message <Send size={16} />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </AnimatedSection>

            {/* Sidebar Info */}
            <div className={styles.sidebar}>
              <AnimatedSection direction="right" delay={0.1}>
                <div className={styles.infoBox}>
                  <h3 className={styles.infoBoxTitle}>Office Information</h3>
                  {INFO_CARDS.map(({ icon: Icon, title, value, sub }) => (
                    <div key={title} className={styles.infoRow}>
                      <div className={styles.infoRowIcon}><Icon size={16} /></div>
                      <div>
                        <div className={styles.infoRowTitle}>{title}</div>
                        <div className={styles.infoRowValue}>{value}</div>
                        <div className={styles.infoRowSub}>{sub}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </AnimatedSection>

              <AnimatedSection direction="right" delay={0.2}>
                <div className={styles.quickLinks}>
                  <h3 className={styles.quickLinksTitle}>Quick Actions</h3>
                  <a href="mailto:operations@everlegit.com" className={styles.quickLink}>
                    <Mail size={15} /> Email Operations
                  </a>
                  <Link href="/partnerships" className={styles.quickLink}>
                    <Network size={15} /> Partnership Inquiries
                  </Link>
                  <Link href="/dashboard" className={styles.quickLink}>
                    <Globe size={15} /> Client Portal Login
                  </Link>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* ── Departments ── */}
      <section className={`section ${styles.deptSection}`}>
        <div className="container">
          <AnimatedSection direction="up">
            <div className="text-center">
              <div className="section-label"><Building2 size={12} />Departments</div>
              <h2 className="section-title">Contact the Right Team</h2>
              <p className="section-subtitle">Route your inquiry to the appropriate department for the fastest response.</p>
            </div>
          </AnimatedSection>
          <div className={styles.deptGrid}>
            {DEPARTMENTS.map(({ icon: Icon, title, desc, email, response, color }, i) => (
              <AnimatedSection key={title} delay={i * 0.08} direction="up">
                <div className={styles.deptCard} style={{ "--dept-color": color } as React.CSSProperties}>
                  <div className={styles.deptIcon} style={{ background: `${color}14`, borderColor: `${color}35`, color }}>
                    <Icon size={22} />
                  </div>
                  <h3 className={styles.deptTitle}>{title}</h3>
                  <p className={styles.deptDesc}>{desc}</p>
                  <a href={`mailto:${email}`} className={styles.deptEmail} style={{ color }}>
                    {email}
                  </a>
                  <div className={styles.responseTime}>
                    <Clock size={12} />
                    <span>{response}</span>
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
              <div className={styles.ctaOrb} />
              <div className="section-label" style={{ marginBottom: "1.5rem" }}>
                <Zap size={12} /> Start Today
              </div>
              <h2 className={styles.ctaTitle}>Ready for Enterprise Commerce Infrastructure?</h2>
              <p className={styles.ctaSub}>
                Speak with our enterprise team about scalable ecommerce systems, marketplace infrastructure, and operational technologies.
              </p>
              <div className={styles.ctaBtns}>
                <a href="mailto:operations@everlegit.com" className="btn btn-primary" style={{ fontSize: "1rem", padding: "1rem 2rem" }}>
                  Email Enterprise Team <ArrowRight size={17} />
                </a>
                <Link href="/partnerships" className="btn btn-outline" style={{ fontSize: "1rem", padding: "1rem 2rem" }}>
                  Partnership Inquiries
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
