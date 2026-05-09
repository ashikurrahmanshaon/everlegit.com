export const metadata = {
  title: "Terms & Conditions | Ever Legit LLC",
  description: "Terms and conditions for commercial operations with Ever Legit LLC.",
};

export default function TermsAndConditions() {
  return (
    <div className="container" style={{ paddingTop: '120px', paddingBottom: '60px' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 className="section-title">Terms & <span className="text-accent">Conditions</span></h1>
        <p className="text-muted" style={{ marginBottom: '3rem' }}>Last Updated: January 1, 2026</p>

        <div className="card" style={{ padding: '3rem' }}>
          <section style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>1. Introduction</h2>
            <p className="text-muted">
              These Terms and Conditions govern your use of the Ever Legit LLC website and the commercial services we provide. By engaging with our company or using our website, you agree to comply with these terms in full.
            </p>
          </section>

          <section style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>2. Business Operations</h2>
            <p className="text-muted">
              Ever Legit LLC is a commercial entity registered in Wyoming, United States (Registration Number: 2026-001921880). We provide business consultation, global partnerships, and commercial support services. All operations are conducted in accordance with applicable United States laws.
            </p>
          </section>

          <section style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>3. Intellectual Property</h2>
            <p className="text-muted">
              All content on this website, including but not limited to text, graphics, logos, images, and software, is the property of Ever Legit LLC and is protected by international copyright laws. Unauthorized use or reproduction is strictly prohibited.
            </p>
          </section>

          <section style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>4. Client Relationships</h2>
            <p className="text-muted">
              Commercial agreements, consultation services, and dashboard access are subject to separate definitive agreements. Ever Legit LLC reserves the right to refuse service or terminate partnerships if terms are violated.
            </p>
          </section>
          
          <section>
            <h2 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>5. Limitation of Liability</h2>
            <p className="text-muted">
              Ever Legit LLC shall not be liable for any indirect, incidental, or consequential damages resulting from the use of our services or website. Our liability is strictly limited to the extent permitted by law.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
