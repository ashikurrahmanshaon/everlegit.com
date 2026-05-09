export const metadata = {
  title: "Client Dashboard | Ever Legit LLC",
  description: "Secure client portal for managing business relationships, documents, and communications.",
};

export default function Dashboard() {
  return (
    <div className="container" style={{ paddingTop: '120px', paddingBottom: '60px', minHeight: '80vh' }}>
      <div className="text-center" style={{ marginBottom: '4rem' }}>
        <h1 className="section-title">Client <span className="text-accent">Dashboard</span></h1>
        <p className="text-muted">Secure business portal for active partners.</p>
      </div>

      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <div className="card text-center" style={{ padding: '4rem 2rem' }}>
          <h2 style={{ marginBottom: '1.5rem' }}>Secure Login System</h2>
          <p className="text-muted" style={{ marginBottom: '2rem' }}>
            This portal is restricted to authorized commercial partners and clients of Ever Legit LLC. Please log in to access document management, invoices, and communication portals.
          </p>
          
          <form style={{ textAlign: 'left', marginBottom: '2rem' }}>
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Client ID or Email</label>
              <input 
                type="text" 
                placeholder="Enter your credentials" 
                style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid var(--border)', background: 'var(--surface)', color: 'var(--foreground)' }}
              />
            </div>
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Password</label>
              <input 
                type="password" 
                placeholder="••••••••" 
                style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid var(--border)', background: 'var(--surface)', color: 'var(--foreground)' }}
              />
            </div>
            <button type="button" className="btn btn-primary" style={{ width: '100%' }}>Access Portal</button>
          </form>

          <p className="text-muted" style={{ fontSize: '0.875rem' }}>
            New partner? <a href="/#contact" className="text-accent">Contact us for portal access.</a>
          </p>
        </div>
      </div>
    </div>
  );
}
