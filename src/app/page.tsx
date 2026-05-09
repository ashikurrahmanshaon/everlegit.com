import HeroSection from "@/components/HeroSection";
import styles from "./page.module.css";
import { LayoutTemplate, Zap, Shield, Check, FileCode2, Palette, Globe, PlayCircle } from "lucide-react";

export default function Home() {
  return (
    <>
      <HeroSection />

      {/* Corporate Video / Overview Section */}
      <section className="section" style={{ paddingTop: '0' }}>
        <div className="container">
          <div className={styles.dashboardPreview} style={{ borderRadius: '1rem', overflow: 'hidden', border: '1px solid var(--border)', position: 'relative' }}>
            <img src="/hero-image.png" alt="Global Supply Chain" style={{ width: '100%', minHeight: '400px', objectFit: 'cover', display: 'block' }} />
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.5)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2rem', textAlign: 'center' }}>
              <PlayCircle size={80} style={{ color: 'white', opacity: 0.9, marginBottom: '1.5rem', cursor: 'pointer' }} />
              <h3 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'white', fontWeight: 'bold' }}>Our Global Supply Chain in Action</h3>
              <p style={{ color: 'white', maxWidth: '600px', margin: '0 auto', fontSize: '1.2rem', opacity: 0.9 }}>
                Watch how Everlegit orchestrates end-to-end sourcing, quality control, and logistics for top-tier e-commerce brands.
              </p>
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
              <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>End-to-End Supply Chain Management</h3>
              <p className="text-muted" style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
                We don't just find suppliers; we manage your entire supply chain. From factory audits to final delivery at Amazon FBA warehouses, our dedicated agents handle every step with precision.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Check size={20} className="text-accent"/> Factory Audits & Compliance</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Check size={20} className="text-accent"/> Price Negotiation</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Check size={20} className="text-accent"/> Pre-shipment Inspections</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Check size={20} className="text-accent"/> Customs Clearance</li>
              </ul>
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

      {/* Corporate CTA */}
      <section id="contact" className="section">
        <div className="container text-center">
          <h2 className="section-title">Ready to scale your operations?</h2>
          <p className="section-subtitle">Partner with Everlegit to streamline your sourcing and logistics.</p>
          <button className="btn btn-primary" style={{ padding: '1rem 3rem', fontSize: '1.1rem', borderRadius: 'var(--border-radius-pill)' }}>
            Schedule a Consultation
          </button>
          <p className="text-muted" style={{ marginTop: '1.5rem', fontSize: '0.9rem' }}>
            Speak with our sourcing experts today.
          </p>
        </div>
      </section>
    </>
  );
}
