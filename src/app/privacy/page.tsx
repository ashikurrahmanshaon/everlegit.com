export const metadata = {
  title: "Privacy Policy | Ever Legit LLC",
  description: "Privacy policy and data protection standards for Ever Legit LLC.",
};

export default function PrivacyPolicy() {
  return (
    <div className="container" style={{ paddingTop: '120px', paddingBottom: '60px' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 className="section-title">Privacy <span className="text-accent">Policy</span></h1>
        <p className="text-muted" style={{ marginBottom: '3rem' }}>Last Updated: January 1, 2026</p>

        <div className="card" style={{ padding: '3rem' }}>
          <section style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>1. Information We Collect</h2>
            <p className="text-muted">
              Ever Legit LLC collects business-related information necessary for providing commercial services, establishing partnerships, and fulfilling legal requirements. This includes contact details, company information, and communication history.
            </p>
          </section>

          <section style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>2. How We Use Information</h2>
            <p className="text-muted">
              We use the collected information exclusively for:
            </p>
            <ul className="text-muted" style={{ paddingLeft: '1.5rem', marginTop: '1rem' }}>
              <li>Providing consultation and commercial services</li>
              <li>Managing client and partner relationships</li>
              <li>Verifying business identities for brand approvals</li>
              <li>Complying with United States federal and state regulations</li>
            </ul>
          </section>

          <section style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>3. Data Protection</h2>
            <p className="text-muted">
              We implement enterprise-grade security measures to protect your business data against unauthorized access, alteration, disclosure, or destruction. We maintain strict confidentiality agreements with all partners.
            </p>
          </section>

          <section>
            <h2 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>4. Contact Us</h2>
            <p className="text-muted">
              If you have questions about this Privacy Policy, please contact us at: <br/>
              <strong>Email:</strong> info@everlegit.com<br/>
              <strong>Address:</strong> 1309 Coffeen Avenue STE 19438, Sheridan, Wyoming 82801, United States
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
