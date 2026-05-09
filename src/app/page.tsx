import HeroSection from "@/components/HeroSection";
import styles from "./page.module.css";
import { LayoutTemplate, Zap, Shield, Check, FileCode2, Palette, Globe, PlayCircle } from "lucide-react";

export default function Home() {
  return (
    <>
      <HeroSection />

      {/* Video / Dashboard Preview Section */}
      <section className="section" style={{ paddingTop: '0' }}>
        <div className="container">
          <div className={styles.dashboardPreview}>
            <div className={styles.dashboardHeader}>
              <div className={styles.dots}>
                <span></span><span></span><span></span>
              </div>
              <div className={styles.urlBar}>everlegit.com</div>
            </div>
            <div className={styles.dashboardBody}>
              <PlayCircle size={64} className="text-accent" style={{ opacity: 0.8 }} />
              <h3 style={{ marginTop: '1rem' }}>See Everlegit in Action</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Main Features Grid */}
      <section id="features" className="section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '4rem' }}>
            <h2 className="section-title">Build faster with AI</h2>
            <p className="section-subtitle">
              Everything you need to create a professional web presence in seconds.
            </p>
          </div>

          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}><Zap /></div>
              <h3>Instant Generation</h3>
              <p className="text-muted">Generate a fully functional website tailored to your business needs in under a minute.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}><Palette /></div>
              <h3>Customizable Design</h3>
              <p className="text-muted">Tweak colors, fonts, and layouts with an intuitive visual editor. No coding required.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}><Globe /></div>
              <h3>Global Ready</h3>
              <p className="text-muted">Optimized for speed and SEO, ensuring your brand stands out worldwide.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}><Shield /></div>
              <h3>Secure & Reliable</h3>
              <p className="text-muted">Enterprise-grade infrastructure keeping your business safe and online 24/7.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section">
        <div className="container">
          <div className={styles.bentoGrid}>
            <div className={`${styles.bentoCard} ${styles.colSpan2}`}>
              <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Write a prompt. <br/>Get a website.</h3>
              <p className="text-muted" style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
                Just describe what you want, and Everlegit's AI will generate the layout, copy, and images automatically.
              </p>
              <div className={styles.promptDemo}>
                <p>"Create a modern landing page for my new coffee shop in Seattle."</p>
                <div className={styles.generatingBar}>
                  <div className={styles.generatingProgress}></div>
                </div>
              </div>
            </div>
            <div className={styles.bentoCard}>
              <div className={styles.iconCircle}><LayoutTemplate size={32} /></div>
              <h3>100+ Templates</h3>
              <p className="text-muted">Start from scratch or pick a beautiful template.</p>
            </div>
            <div className={styles.bentoCard}>
              <div className={styles.iconCircle}><FileCode2 size={32} /></div>
              <h3>Export Code</h3>
              <p className="text-muted">Own your code. Export to React, HTML, or Next.js.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Verification / Trust Section */}
      <section className="section" style={{ padding: '4rem 0' }}>
        <div className="container">
          <div className={styles.trustBanner}>
            <div className={styles.trustContent}>
              <h2>Trusted Business Partner</h2>
              <p style={{ opacity: 0.9 }}>Everlegit is an officially registered entity, built for commercial excellence.</p>
              <div className={styles.registrationBadge}>
                Registration Number: <strong>2026</strong>
              </div>
            </div>
            <div className={styles.trustVisual}>
              <Shield size={120} style={{ opacity: 0.2 }} />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing / CTA */}
      <section id="pricing" className="section">
        <div className="container text-center">
          <h2 className="section-title">Ready to launch?</h2>
          <p className="section-subtitle">Join thousands of creators building with Everlegit today.</p>
          <button className="btn btn-primary" style={{ padding: '1rem 3rem', fontSize: '1.1rem' }}>
            Start Building Free
          </button>
          <p className="text-muted" style={{ marginTop: '1.5rem', fontSize: '0.9rem' }}>
            No credit card required. Cancel anytime.
          </p>
        </div>
      </section>
    </>
  );
}
