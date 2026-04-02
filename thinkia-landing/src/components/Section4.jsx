import React, { useEffect, useRef, useState } from 'react';

// Icons
const BrainIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9.5 2A5.5 5.5 0 0 0 4 7.5a5.5 5.5 0 0 0 5.5 5.5H11l.5.5.5-.5h1.5a5.5 5.5 0 0 0 5.5-5.5A5.5 5.5 0 0 0 14.5 2H9.5z" /><path d="M12 13v9" /><path d="M12 2v2" /><path d="M12 13a2 2 0 0 0 0-4" /><path d="M12 13l-4 4" /><path d="M12 13l4 4" /></svg>
);
const GearIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" /></svg>
);
const FireIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" /></svg>
);
const RocketIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" /><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" /><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" /><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" /></svg>
);
const WandIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 4V2" /><path d="M15 16v-2" /><path d="M8 9h2" /><path d="M20 9h2" /><path d="M17.8 11.8 19 13" /><path d="M15 9h0" /><path d="M17.8 6.2 19 5" /><path d="m3 21 9-9" /><path d="M12.2 6.2 11 5" /></svg>
);
const FrownIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M16 16s-1.5-2-4-2-4 2-4 2" /><line x1="9" y1="9" x2="9.01" y2="9" /><line x1="15" y1="9" x2="15.01" y2="9" /></svg>
);
const HandIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" /><path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2" /><path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8" /><path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" /></svg>
);

const Section4 = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    const yesItems = [
        { icon: <BrainIcon />, title: "Piensas en sistemas, no en trucos", text: "Quieres entender la lógica, no memorizar prompts" },
        { icon: <GearIcon />, title: "Disfrutas construir cosas reales", text: "Te gusta conectar piezas, probar, romper y volver a armar" },
        { icon: <FireIcon />, title: "Toleras la fricción", text: "Sabes que fallar es parte del proceso y no te rindes al primer error" },
        { icon: <RocketIcon />, title: "Quieres sacar proyectos al mundo", text: "No demos. Soluciones funcionales bajo tu control" }
    ];

    const noItems = [
        { icon: <WandIcon />, title: "Buscas herramientas mágicas", text: "Quieres plantillas rápidas para copiar y pegar" },
        { icon: <FrownIcon />, title: "Te frustras cuando algo no sale", text: "Si el error te paraliza, aquí no durarás" },
        { icon: <HandIcon />, title: "No quieres ensuciarte las manos", text: "Aquí el 80% del tiempo estás fuera del chat" }
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <section ref={sectionRef} id="fit" className="section" style={{
            paddingTop: '40px',
            paddingBottom: '40px',
            overflow: 'hidden'
        }}>
            <div className="container" style={{ maxWidth: '1100px' }}>

                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: 'clamp(2rem, 5vw, 2.5rem)', marginBottom: '0.5rem' }}>¿Es para ti?</h2>
                    <p style={{ fontSize: '1.2rem', color: 'var(--color-text-secondary)' }}>
                        No todos deberían entrar. Y eso es intencional.
                    </p>
                </div>

                {/* Grid */}
                <div className="comparison-grid">

                    {/* Left Column (YES) */}
                    <div className={`col-yes ${isVisible ? 'visible' : ''}`}>
                        <div className="col-header">Esto es para ti si</div>
                        <div className="col-content">
                            {yesItems.map((item, i) => (
                                <div key={i} className="list-item">
                                    <div className="icon-wrapper yes">{item.icon}</div>
                                    <div>
                                        <h4>{item.title}</h4>
                                        <p>{item.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column (NO) */}
                    <div className={`col-no ${isVisible ? 'visible' : ''}`}>
                        <div className="col-header">Esto NO es para ti si</div>
                        <div className="col-content">
                            {noItems.map((item, i) => (
                                <div key={i} className="list-item">
                                    <div className="icon-wrapper no">{item.icon}</div>
                                    <div>
                                        <h4>{item.title}</h4>
                                        <p>{item.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

                {/* Footer */}
                <div className={`footer-cta ${isVisible ? 'visible' : ''}`}>
                    <p>Si esto resuena contigo, estás en el lugar correcto.</p>
                    <div className="btn-group">
                        <a href="#reserva" className="btn-link btn-primary">Reservar mi lugar</a>
                        <a
                            href="https://wa.me/573332823082?text=Hola,%20estoy%20interesado%20en%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20AI%20Builder%20Program."
                            className="btn-link btn-secondary"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Hablar por WhatsApp
                        </a>
                    </div>
                </div>

            </div>

            <style>{`
                .comparison-grid {
                    display: grid;
                    grid-template-columns: 1.15fr 1fr;
                    gap: 2rem;
                    margin-bottom: 4rem;
                }

                /* Column Styles */
                .col-yes, .col-no {
                    padding: 2.5rem;
                    border-radius: 16px;
                    opacity: 0;
                    transform: translateY(12px);
                    transition: all 0.6s cubic-bezier(0.2, 0.8, 0.2, 1);
                }

                /* Left Stack (YES) - Protagonist */
                .col-yes {
                    background: rgba(255, 255, 255, 0.03);
                    border: 1px solid rgba(var(--color-accent-rgb), 0.3);
                    backdrop-filter: blur(10px);
                    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
                }
                
                .col-yes.visible {
                    opacity: 1;
                    transform: translateY(0) scale(1.02);
                }

                /* Right Stack (NO) - Sober */
                .col-no {
                    background: transparent;
                    border: 1px solid var(--color-border);
                    transition-delay: 80ms;
                }

                .col-no.visible {
                    opacity: 1;
                    transform: translateY(0);
                }

                .col-header {
                    font-size: 0.9rem;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                    font-weight: 600;
                    margin-bottom: 2rem;
                    color: var(--color-text-secondary);
                }
                .col-yes .col-header { color: var(--color-accent); }

                /* List Items */
                .list-item {
                    display: flex;
                    gap: 1rem;
                    margin-bottom: 1.5rem;
                    align-items: flex-start;
                }
                .list-item:last-child { margin-bottom: 0; }

                .list-item h4 {
                    font-size: 1.05rem;
                    font-weight: 600;
                    margin: 0 0 0.25rem 0;
                    color: var(--color-text);
                }

                .list-item p {
                    font-size: 0.95rem;
                    margin: 0;
                    color: var(--color-text-secondary);
                    line-height: 1.5;
                }

                /* Icons */
                .icon-wrapper {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 32px;
                    height: 32px;
                    flex-shrink: 0;
                    border-radius: 8px;
                    transition: transform 0.3s ease;
                }

                .icon-wrapper.yes {
                    color: var(--color-accent);
                    background: rgba(var(--color-accent-rgb), 0.1);
                }
                
                .icon-wrapper.no {
                    color: var(--color-text-muted);
                    background: var(--color-bg-elevated);
                }

                /* Micro-animations */
                .list-item:hover .icon-wrapper {
                    transform: scale(1.1);
                }

                /* SVG Draw Animation on enter */
                .visible path, .visible circle, .visible line {
                    stroke-dasharray: 100;
                    stroke-dashoffset: 100;
                    animation: draw 1s ease-out forwards;
                }

                @keyframes draw {
                    to { stroke-dashoffset: 0; }
                }

                /* Footer */
                .footer-cta {
                    text-align: center;
                    opacity: 0;
                    transform: translateY(10px);
                    transition: opacity 0.5s ease 0.5s, transform 0.5s ease 0.5s;
                }
                .footer-cta.visible {
                    opacity: 1;
                    transform: translateY(0);
                }

                .footer-cta p {
                    font-size: 1.15rem;
                    margin-bottom: 1.5rem;
                    color: var(--color-text);
                }

                .btn-group {
                    display: flex;
                    gap: 1rem;
                    justify-content: center;
                }

                .btn-link {
                    text-decoration: none;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                }

                .btn-primary {
                    background: var(--color-accent);
                    color: #fff;
                    border: none;
                    padding: 0.75rem 1.5rem;
                    border-radius: 6px;
                    font-weight: 600;
                    cursor: pointer;
                    transition: opacity 0.2s;
                    font-size: 1rem;
                }
                .btn-primary:hover { 
                    background: #393C42;
                    opacity: 1;
                    color: #FFFFFF !important;
                    box-shadow: 0 4px 15px rgba(79, 140, 255, 0.4);
                }

                .btn-secondary {
                    background: transparent;
                    color: var(--color-text);
                    border: 1px solid var(--color-border);
                    padding: 0.75rem 1.5rem;
                    border-radius: 6px;
                    font-weight: 600;
                    cursor: pointer;
                    transition: border-color 0.2s;
                    font-size: 1rem;
                }
                .btn-secondary:hover { border-color: var(--color-text); }

                @media (max-width: 768px) {
                    .comparison-grid {
                        grid-template-columns: 1fr;
                        gap: 1.5rem;
                    }
                    .col-yes.visible {
                        transform: translateY(0) scale(1); /* No scale on mobile */
                    }
                    .btn-group {
                        flex-direction: column;
                    }
                }
            `}</style>
        </section>
    );
};

export default Section4;
