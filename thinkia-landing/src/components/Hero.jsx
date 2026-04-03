import React from 'react';

const Hero = () => {
    return (
        <section id="hero" className="grid-pattern" style={{
            minHeight: 'auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            paddingTop: '120px',
            paddingBottom: '20px',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Background Glow */}
            <div style={{
                position: 'absolute',
                top: '40%',
                left: '20%',
                transform: 'translate(-50%, -50%)',
                width: '800px',
                height: '600px',
                background: 'radial-gradient(circle, rgba(79, 140, 255, 0.08) 0%, transparent 70%)',
                filter: 'blur(80px)',
                pointerEvents: 'none',
                zIndex: 0
            }} />

            <div className="container" style={{
                position: 'relative',
                zIndex: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                textAlign: 'left'
            }}>
                {/* Premium Badge */}
                <div className="premium-badge-wrapper">
                    <div className="premium-badge">
                        <div className="badge-icon">
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="#FFD700" stroke="#FFD700" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="8" r="6" />
                                <path d="M8.5 14.5L7 22L12 19L17 22L15.5 14.5" />
                            </svg>
                        </div>
                        <div className="badge-text" style={{ paddingRight: '4px' }}>
                            <span className="badge-main">AI Builder Program - 3ra Gen</span>
                        </div>
                    </div>
                    <span className="badge-sub-new">Un programa de Thinkia</span>
                </div>

                {/* Headline */}
                <h1 className="hero-headline" style={{
                    marginBottom: '1.5rem',
                    maxWidth: '950px',
                    fontSize: 'clamp(1.75rem, 5vw, 3rem)',
                    lineHeight: 1.1,
                    color: '#FFFFFF'
                }}>
                    Conviértete en <span style={{ color: '#F57624' }}>AI Builder,</span> diseña sistemas reales con <span style={{ color: '#F57624' }}>inteligencia artificial</span>
                </h1>

                {/* Subhead */}
                <div className="hero-subhead" style={{
                    maxWidth: '700px',
                    marginBottom: '2rem'
                }}>
                    <p style={{ color: '#FFFFFF', fontSize: '1.15rem', marginBottom: '0.5rem', fontWeight: 500, lineHeight: 1.4 }}>
                        Hay personas que sólo escriben prompts y hay personas que diseñan sistemas
                    </p>
                    <p style={{ color: '#FFFFFF', fontSize: '1.15rem', fontWeight: 500 }}>
                        <span style={{ color: '#F57624' }}>AI Builder Program</span> existe para lo segundo
                    </p>
                </div>

                {/* Value Line */}
                <p className="hero-value-line" style={{
                    color: '#FFFFFF',
                    fontSize: '1rem',
                    marginBottom: '3rem',
                    opacity: 0.9,
                    borderLeft: '2px solid var(--color-accent)',
                    paddingLeft: '1rem'
                }}>
                    Formamos <span style={{ color: '#F57624' }}>AI Builders:</span> personas que convierten la IA en soluciones reales fuera del chat
                </p>

                {/* CTA Block */}
                <div className="cta-block" style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    gap: '1rem',
                    width: '100%',
                    maxWidth: '450px'
                }}>
                    <a href="#reserva" className="hero-btn" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        RESERVAR CUPO
                    </a>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', alignItems: 'center', width: '100%' }}>
                        <p style={{
                            fontSize: '0.85rem',
                            color: '#FF4F4F',
                            fontWeight: 700,
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            margin: 0
                        }}>
                            Cupos limitados
                        </p>
                    </div>

                </div>
            </div>

            <style>{`
                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }

                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }

                .hero-headline {
                    animation: fadeInUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
                    text-wrap: balance;
                }

                .hero-subhead p {
                    opacity: 0;
                    animation: fadeIn 0.8s ease forwards;
                }
                .hero-subhead p:nth-child(1) { animation-delay: 0.3s; }
                .hero-subhead p:nth-child(2) { animation-delay: 0.5s; }

                .hero-value-line {
                    opacity: 0;
                    animation: fadeIn 0.8s ease forwards 0.7s;
                }

                .premium-badge-wrapper {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    margin-bottom: 24px;
                    opacity: 0;
                    transform: translateY(-20px);
                    animation: badgeSlideDown 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) 0.5s forwards;
                    align-self: center;
                }

                .premium-badge {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    padding: 8px 18px;
                    background: rgba(12, 15, 23, 0.6);
                    backdrop-filter: blur(10px);
                    border: 1px solid #F57624;
                    border-radius: 50px;
                    box-shadow: 0 0 15px rgba(245, 118, 36, 0.2);
                    transition: all 0.3s ease;
                    cursor: default;
                }

                .premium-badge:hover {
                    transform: scale(1.03);
                    box-shadow: 0 0 25px rgba(79, 140, 255, 0.4);
                    border-color: #4F8CFF;
                }

                .badge-icon {
                    display: flex;
                    align-items: center;
                    transition: transform 0.5s ease;
                }

                .premium-badge:hover .badge-icon {
                    transform: rotate(360deg);
                }

                .badge-text {
                    display: flex;
                    flex-direction: column;
                    line-height: 1.2;
                    align-items: center;
                }

                .badge-main {
                    font-size: 1.6rem;
                    font-weight: 700;
                    color: var(--color-text);
                    letter-spacing: 0.02em;
                    text-align: center;
                }

                .badge-sub-new {
                    font-size: 0.9rem;
                    color: var(--color-text-secondary);
                    opacity: 0.8;
                    text-align: center;
                    margin-top: 8px;
                }

                @keyframes badgeSlideDown {
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .hero-btn {
                    width: 100%;
                    min-height: 56px;
                    padding: 1rem;
                    background: #F57624;
                    color: #FFFFFF;
                    border: none;
                    border-radius: 50px;
                    font-size: 1.1rem;
                    font-weight: 800;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                    cursor: pointer;
                    transition: all 300ms cubic-bezier(0.2, 0.8, 0.2, 1);
                    box-shadow: 0 4px 15px rgba(245, 118, 36, 0.3);
                    opacity: 0;
                    animation: fadeInUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.9s forwards;
                }

                .hero-btn:hover {
                    transform: translateY(-2px) scale(1.01);
                    background: #393C42;
                    box-shadow: 0 8px 25px rgba(79, 140, 255, 0.5);
                    color: #FFFFFF !important;
                }

                @media (max-width: 600px) {
                    .badge-main {
                        font-size: 1.1rem;
                    }
                    .premium-badge {
                        padding: 6px 14px;
                        gap: 8px;
                    }
                    .badge-icon svg {
                        width: 18px;
                        height: 18px;
                    }
                    .hero-value-line {
                        margin-bottom: 1.5rem;
                    }
                }


            `}</style>
        </section>
    );
};

export default Hero;
