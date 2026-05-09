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
            <h2 className="section-title">Scale your e-commerce business</h2>
            <p className="section-subtitle">
              Everything you need to source, verify, and launch products on Amazon and Walmart.
            </p>
          </div>

          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}><Zap /></div>
              <h3>Product Sourcing</h3>
              <p className="text-muted">Find high-margin products tailored to your exact e-commerce needs.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}><Palette /></div>
              <h3>Supplier Verification</h3>
              <p className="text-muted">We verify suppliers, negotiate prices, and handle quality control so you don't have to.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}><Globe /></div>
              <h3>Global Logistics</h3>
              <p className="text-muted">Optimized supply chains ensuring your products reach Amazon FBA or Walmart WFS fast.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}><Shield /></div>
              <h3>Secure & Reliable</h3>
              <p className="text-muted">Enterprise-grade operations keeping your inventory safe and stocked 24/7.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section">
        <div className="container">
          <div className={styles.bentoGrid}>
            <div className={`${styles.bentoCard} ${styles.colSpan2}`}>
              <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Find a product. <br/>Dominate the market.</h3>
              <p className="text-muted" style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
                Describe your target niche, and Everlegit's sourcing experts and AI will find the perfect supplier automatically.
              </p>
              <div className={styles.promptDemo}>
                <p>"Find me a trending pet supply product for Amazon FBA with 40%+ ROI."</p>
                <div className={styles.generatingBar}>
                  <div className={styles.generatingProgress}></div>
                </div>
              </div>
            </div>
            <div className={styles.bentoCard}>
              <div className={styles.iconCircle}><LayoutTemplate size={32} /></div>
              <h3>1000+ Suppliers</h3>
              <p className="text-muted">Tap into our network of vetted international suppliers.</p>
            </div>
            <div className={styles.bentoCard}>
              <div className={styles.iconCircle}><FileCode2 size={32} /></div>
              <h3>FBA/WFS Ready</h3>
              <p className="text-muted">We handle packaging, barcodes, and direct shipping to Amazon/Walmart.</p>
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
          <h2 className="section-title">Ready to launch your product?</h2>
          <p className="section-subtitle">Join successful e-commerce sellers sourcing with Everlegit today.</p>
          <button className="btn btn-primary" style={{ padding: '1rem 3rem', fontSize: '1.1rem' }}>
            Start Sourcing Free
          </button>
          <p className="text-muted" style={{ marginTop: '1.5rem', fontSize: '0.9rem' }}>
            No credit card required. Cancel anytime.
          </p>
        </div>
      </section>
    </>
  );
}
