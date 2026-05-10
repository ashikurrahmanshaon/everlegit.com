"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Lock,
  Globe,
  FileText,
  BarChart3,
  MessageSquare,
  Package,
  Shield,
  ArrowRight,
  Eye,
  EyeOff,
  AlertCircle,
} from "lucide-react";
import styles from "./dashboard.module.css";

const PORTAL_FEATURES = [
  { icon: BarChart3, title: "Operational Analytics", desc: "Real-time commerce performance dashboards" },
  { icon: FileText, title: "Document Management", desc: "Contracts, invoices, compliance records" },
  { icon: Package, title: "Supplier Portal", desc: "Vendor management and order tracking" },
  { icon: MessageSquare, title: "Communications Hub", desc: "Secure messaging with operations team" },
  { icon: Globe, title: "Marketplace Oversight", desc: "Multi-channel commerce monitoring" },
  { icon: Shield, title: "Compliance Center", desc: "Audit trails and verification records" },
];

export default function DashboardPage() {
  const [showPass, setShowPass] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [attempted, setAttempted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setAttempted(true);
  };

  return (
    <div className={styles.page}>
      {/* Ambient */}
      <div className={styles.orb1} />
      <div className={styles.orb2} />
      <div className={styles.gridOverlay} />

      <div className={styles.layout}>
        {/* ── Left: Login Panel ── */}
        <div className={styles.loginPanel}>
          {/* Back */}
          <Link href="/" className={styles.backLink}>
            ← Back to EverLegit
          </Link>

          {/* Header */}
          <div className={styles.loginHeader}>
            <div className={styles.loginIcon}>
              <Lock size={22} />
            </div>
            <h1 className={styles.loginTitle}>Client Portal</h1>
            <p className={styles.loginSub}>
              Restricted access for authorized EverLegit commercial partners and enterprise clients.
            </p>
          </div>

          {/* Status bar */}
          <div className={styles.statusBar}>
            <span className={styles.statusDot} />
            <span className={styles.statusText}>All systems operational</span>
            <span className={styles.statusBadge}>99.9% uptime</span>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="portal-email">
                Client ID or Email Address
              </label>
              <input
                id="portal-email"
                type="text"
                autoComplete="email"
                placeholder="partner@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`${styles.input} ${attempted && !email ? styles.inputError : ""}`}
              />
            </div>

            <div className={styles.field}>
              <div className={styles.labelRow}>
                <label className={styles.label} htmlFor="portal-password">
                  Password
                </label>
                <button type="button" className={styles.forgotLink}>
                  Forgot password?
                </button>
              </div>
              <div className={styles.inputWrapper}>
                <input
                  id="portal-password"
                  type={showPass ? "text" : "password"}
                  placeholder="••••••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`${styles.input} ${styles.inputWithIcon} ${attempted && !password ? styles.inputError : ""}`}
                />
                <button
                  type="button"
                  className={styles.eyeBtn}
                  onClick={() => setShowPass(!showPass)}
                  aria-label="Toggle password visibility"
                >
                  {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            {attempted && (!email || !password) && (
              <div className={styles.errorMsg}>
                <AlertCircle size={14} />
                Please enter your credentials to continue.
              </div>
            )}

            <button type="submit" className={styles.submitBtn}>
              Access Portal
              <ArrowRight size={17} />
            </button>
          </form>

          <p className={styles.footNote}>
            Need portal access?{" "}
            <Link href="/#contact" className={styles.footLink}>
              Contact Enterprise Operations
            </Link>
          </p>

          <div className={styles.securityNote}>
            <Shield size={13} />
            Secured with enterprise-grade encryption. All sessions are monitored and logged.
          </div>
        </div>

        {/* ── Right: Feature Preview ── */}
        <div className={styles.previewPanel}>
          <div className={styles.previewHeader}>
            <div className="section-label" style={{ marginBottom: "1.25rem" }}>
              <Globe size={12} />
              Portal Overview
            </div>
            <h2 className={styles.previewTitle}>
              Enterprise Operations Dashboard
            </h2>
            <p className={styles.previewSub}>
              Authorized partners gain full access to EverLegit's operational infrastructure
              — analytics, documents, marketplace oversight, and direct support.
            </p>
          </div>

          <div className={styles.featuresGrid}>
            {PORTAL_FEATURES.map(({ icon: Icon, title, desc }) => (
              <div key={title} className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <Icon size={18} />
                </div>
                <div>
                  <div className={styles.featureTitle}>{title}</div>
                  <div className={styles.featureDesc}>{desc}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Fake analytics preview */}
          <div className={styles.analyticsPreview}>
            <div className={styles.analyticsHeader}>
              <span className={styles.analyticsTitle}>Operational Overview</span>
              <span className={styles.analyticsBadge}>Live</span>
            </div>
            <div className={styles.analyticsRow}>
              {[
                { label: "Active Orders", value: "—" },
                { label: "Suppliers Online", value: "—" },
                { label: "Marketplace Health", value: "—" },
              ].map((m) => (
                <div key={m.label} className={styles.analyticsStat}>
                  <span className={styles.analyticsVal}>{m.value}</span>
                  <span className={styles.analyticsLabel}>{m.label}</span>
                </div>
              ))}
            </div>
            <div className={styles.analyticsLock}>
              <Lock size={16} />
              <span>Login to view live operational data</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
