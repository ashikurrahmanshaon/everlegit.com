import HeroSection from "@/components/HeroSection";
import styles from "./page.module.css";
import { CheckCircle2, FileText, Globe2, Network, MessageSquare, Check, ShieldCheck } from "lucide-react";

export default function Home() {
  return (
    <>
      <HeroSection />

      {/* Logo Showcase Section */}
      <section className={`section ${styles.logoShowcase}`}>
        <div className="container text-center">
          <p className="text-muted" style={{ marginBottom: "2rem" }}>TRUSTED BY GLOBAL PARTNERS</p>
          <div className={styles.logoGrid}>
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className={styles.partnerLogo}>
                <Globe2 className="text-muted" size={32} />
                <span className="text-muted">Partner Brand {i}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`section ${styles.aboutSection}`}>
        <div className={`container ${styles.twoCol}`}>
          <div>
            <h2 className="section-title">Our <span className="text-accent">Mission</span></h2>
            <p className="text-muted" style={{ marginBottom: "1.5rem" }}>
              At Ever Legit LLC, our mission is to redefine professional business communication and international commercial operations. We believe in transparency, integrity, and building reliable foundations for global enterprises.
            </p>
            <p className="text-muted" style={{ marginBottom: "2rem" }}>
              Operating from Wyoming, United States, we provide a sophisticated infrastructure for client relationship management, brand collaboration, and enterprise-level growth.
            </p>
            <ul className={styles.featureList}>
              <li><CheckCircle2 className="text-accent" /> Premium Commercial Standards</li>
              <li><CheckCircle2 className="text-accent" /> Transparent Business Operations</li>
              <li><CheckCircle2 className="text-accent" /> Long-term Client Partnerships</li>
            </ul>
          </div>
          <div className={styles.imagePlaceholder}>
            <div className={styles.glassCard}>
              <ShieldCheck size={64} className="text-accent" style={{ marginBottom: "1rem" }} />
              <h3>Verified & Legitimate</h3>
              <p className="text-muted">Officially registered in the USA</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className={`section ${styles.servicesSection}`}>
        <div className="container">
          <div className="text-center">
            <h2 className="section-title">Professional <span className="text-accent">Services</span></h2>
            <p className="section-subtitle">Comprehensive commercial solutions tailored for global brands and partners.</p>
          </div>
          
          <div className={styles.servicesGrid}>
            {[
              { icon: <Network />, title: "Business Consultation", desc: "Strategic insights for commercial growth and market entry." },
              { icon: <Globe2 />, title: "Global Partnerships", desc: "Connecting reliable businesses across international borders." },
              { icon: <FileText />, title: "Digital Support", desc: "Premium online infrastructure and client management." },
            ].map((service, i) => (
              <div key={i} className="card">
                <div className={styles.iconBox}>{service.icon}</div>
                <h3 style={{ marginBottom: "1rem" }}>{service.title}</h3>
                <p className="text-muted">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Verification & Trust */}
      <section className={`section ${styles.verificationSection}`}>
        <div className={`container ${styles.verificationBox}`}>
          <div className={styles.twoCol}>
            <div>
              <h2 className="section-title">Business <span className="text-accent">Verification</span></h2>
              <p className="text-muted" style={{ marginBottom: "2rem" }}>
                We maintain the highest standards of commercial transparency. Ever Legit LLC is a fully registered entity authorized for international business.
              </p>
              <div className={styles.verifyItem}>
                <strong>Company Name:</strong> Ever Legit LLC
              </div>
              <div className={styles.verifyItem}>
                <strong>Registration Number:</strong> 2026-001921880
              </div>
              <div className={styles.verifyItem}>
                <strong>Location:</strong> Wyoming, United States
              </div>
            </div>
            <div className={styles.sealContainer}>
              <div className={styles.officialSeal}>
                VERIFIED
                <span>USA COMPANY</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className={`section ${styles.testimonialsSection}`}>
        <div className="container">
          <div className="text-center">
            <h2 className="section-title">Client <span className="text-accent">Testimonials</span></h2>
            <p className="section-subtitle">What our global partners say about us.</p>
          </div>
          <div className={styles.testimonialsGrid}>
            {[
              { text: "Ever Legit LLC provided the foundational support we needed to expand internationally. Their professionalism is unmatched.", author: "James T.", role: "CEO, Global Retail Corp" },
              { text: "The transparency and reliability they offer makes them an invaluable partner for our commercial operations.", author: "Sarah M.", role: "Director of Operations" },
              { text: "Exceptional business consultation and digital support. We established trust with our new partners instantly through their services.", author: "Michael R.", role: "Managing Partner" }
            ].map((testimonial, i) => (
              <div key={i} className="card">
                <div className={styles.quoteIcon}>"</div>
                <p className="text-muted" style={{ marginBottom: "1.5rem", fontStyle: "italic" }}>{testimonial.text}</p>
                <div>
                  <strong>{testimonial.author}</strong>
                  <div className="text-muted" style={{ fontSize: "0.875rem" }}>{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={`section ${styles.faqSection}`}>
        <div className="container" style={{ maxWidth: "800px" }}>
          <div className="text-center">
            <h2 className="section-title">Frequently Asked <span className="text-accent">Questions</span></h2>
            <p className="section-subtitle">Clear answers to your common business inquiries.</p>
          </div>
          <div className={styles.faqList}>
            {[
              { q: "Is Ever Legit LLC officially registered?", a: "Yes, we are a fully registered commercial entity in Wyoming, United States, under registration number 2026-001921880." },
              { q: "Do you offer international services?", a: "Absolutely. We specialize in global partnerships and provide commercial support across international borders." },
              { q: "How can I access the client dashboard?", a: "The client dashboard is restricted to active partners. You will receive login credentials upon establishing a formal agreement." },
              { q: "What is your primary mode of communication?", a: "We prioritize direct and efficient communication via our secure portal, email (info@everlegit.com), and instant WhatsApp support for urgent inquiries." }
            ].map((faq, i) => (
              <div key={i} className={styles.faqItem}>
                <h3>{faq.q}</h3>
                <p className="text-muted">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className={`section ${styles.verificationSection}`}>
        <div className={`container ${styles.verificationBox}`}>
          <div className={styles.twoCol}>
            <div>
              <h2 className="section-title">Business <span className="text-accent">Verification</span></h2>
              <p className="text-muted" style={{ marginBottom: "2rem" }}>
                We maintain the highest standards of commercial transparency. Ever Legit LLC is a fully registered entity authorized for international business.
              </p>
              <div className={styles.verifyItem}>
                <strong>Company Name:</strong> Ever Legit LLC
              </div>
              <div className={styles.verifyItem}>
                <strong>Registration Number:</strong> 2026-001921880
              </div>
              <div className={styles.verifyItem}>
                <strong>Location:</strong> Wyoming, United States
              </div>
            </div>
            <div className={styles.sealContainer}>
              <div className={styles.officialSeal}>
                VERIFIED
                <span>USA COMPANY</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Map Section */}
      <section id="contact" className={`section ${styles.contactSection}`}>
        <div className={`container ${styles.twoCol}`}>
          <div>
            <h2 className="section-title">Get in <span className="text-accent">Touch</span></h2>
            <p className="text-muted" style={{ marginBottom: "2rem" }}>
              Ready to establish a reliable commercial partnership? Contact our team to begin the process.
            </p>
            <form className={styles.contactForm}>
              <div className={styles.formGroup}>
                <label>Full Name</label>
                <input type="text" placeholder="John Doe" className={styles.input} />
              </div>
              <div className={styles.formGroup}>
                <label>Business Email</label>
                <input type="email" placeholder="contact@company.com" className={styles.input} />
              </div>
              <div className={styles.formGroup}>
                <label>Message</label>
                <textarea rows={4} placeholder="How can we help?" className={styles.input}></textarea>
              </div>
              <button type="button" className="btn btn-primary" style={{ width: "100%" }}>Send Message</button>
            </form>
          </div>
          <div>
            {/* Map Placeholder */}
            <div className={styles.mapContainer}>
              <div className={styles.mapInner}>
                <Globe2 size={48} className="text-muted" />
                <p>1309 Coffeen Avenue STE 19438<br/>Sheridan, Wyoming 82801</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Floating Button */}
      <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className={styles.whatsappBtn}>
        <MessageSquare />
      </a>
    </>
  );
}
