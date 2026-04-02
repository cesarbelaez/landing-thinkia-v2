import React from 'react';

const InstagramIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="18" cy="6" r="1" fill="currentColor" />
    </svg>
);

const TikTokIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
);

const Footer = () => {
    return (
        <footer style={{
            padding: '2.5rem 0 1.5rem',
            borderTop: '1px solid var(--color-border)',
            textAlign: 'center',
            backgroundColor: 'var(--color-bg)',
            minHeight: '150px',
            display: 'flex',
            alignItems: 'center'
        }}>
            <div className="container" style={{ maxWidth: '420px' }}>

                {/* Brand Stack */}
                <div style={{ marginBottom: '14px' }}>
                    <p style={{
                        fontSize: '1rem',
                        fontWeight: 700,
                        margin: '0 0 4px 0',
                        color: 'var(--color-text)',
                        letterSpacing: '-0.01em'
                    }}>
                        AI Builder Program
                    </p>
                    <p style={{
                        fontSize: '0.7rem',
                        margin: 0,
                        color: 'var(--color-text-secondary)',
                        fontWeight: 500,
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em'
                    }}>
                        Un programa de Thinkia
                    </p>
                </div>

                {/* Tagline */}
                <p style={{
                    fontSize: '0.8rem',
                    color: 'var(--color-text-muted)',
                    margin: '0 0 14px 0',
                    fontStyle: 'italic'
                }}>
                    "No enseñamos IA. Enseñamos a pensar con ella."
                </p>

                {/* Social Icons Only */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '16px',
                    marginBottom: '16px'
                }}>
                    <a href="https://www.instagram.com/thinkia.academy" className="footer-icon-link" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                        <InstagramIcon />
                    </a>
                    <a href="https://www.tiktok.com/@thinkiacademy" className="footer-icon-link" aria-label="TikTok" target="_blank" rel="noopener noreferrer">
                        <TikTokIcon />
                    </a>
                </div>

                {/* Legal Block */}
                <div style={{
                    borderTop: '1px solid rgba(255, 255, 255, 0.03)',
                    paddingTop: '14px'
                }}>
                    <p style={{
                        fontSize: '0.75rem',
                        color: 'var(--color-text-muted)',
                        margin: '0 0 6px 0'
                    }}>
                        © 2026 AI Builder Program · Thinkia
                    </p>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '12px',
                        fontSize: '0.7rem'
                    }}>
                        <a href="#/privacidad" className="footer-link-minimal" target="_blank" rel="noopener noreferrer">Privacidad</a>
                        <span style={{ opacity: 0.2 }}>·</span>
                        <a href="#/terminos" className="footer-link-minimal" target="_blank" rel="noopener noreferrer">Términos</a>
                    </div>
                </div>

            </div>

            <style>{`
                .footer-icon-link {
                    color: #9CA3AF;
                    transition: all 0.3s ease;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .footer-icon-link:hover {
                    color: var(--color-accent);
                    filter: drop-shadow(0 0 8px rgba(79, 140, 255, 0.5));
                    transform: translateY(-2px);
                }
                .footer-link-minimal {
                    color: var(--color-text-secondary);
                    text-decoration: none;
                    transition: all 0.2s ease;
                }
                .footer-link-minimal:hover {
                    color: var(--color-accent);
                }
            `}</style>
        </footer>
    );
};

export default Footer;
