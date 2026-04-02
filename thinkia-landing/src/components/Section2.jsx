import React from 'react';

const ArchitectureIcon = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="7" height="7" />
        <rect x="14" y="3" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" />
        <rect x="3" y="14" width="7" height="7" />
        <path d="M10 6.5h4" />
        <path d="M10 17.5h4" />
        <path d="M6.5 10v4" />
        <path d="M17.5 10v4" />
    </svg>
);

const AutomationIcon = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2v4" />
        <path d="M12 18v4" />
        <path d="M4.93 4.93l2.83 2.83" />
        <path d="M16.24 16.24l2.83 2.83" />
        <path d="M2 12h4" />
        <path d="M18 12h4" />
        <path d="M4.93 19.07l2.83-2.83" />
        <path d="M16.24 7.76l2.83-2.83" />
    </svg>
);

const IterationIcon = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
        <path d="M3 3v5h5" />
        <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
        <path d="M16 21h5v-5" />
    </svg>
);

const DeliveryIcon = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
    </svg>
);

const Section2 = () => {
    const pipelineSteps = [
        {
            icon: <ArchitectureIcon />,
            title: "Arquitectura",
            sub: "Diseñas sistemas, no prompts."
        },
        {
            icon: <AutomationIcon />,
            title: "Automatización",
            sub: "Construyes flujos reales."
        },
        {
            icon: <IterationIcon />,
            title: "Iteración",
            sub: "Rompes, corriges, mejoras."
        },
        {
            icon: <DeliveryIcon />,
            title: "Entrega",
            sub: "Lo sacas del chat al mundo real."
        }
    ];

    return (
        <section id="mentalidad" className="section builder-section" style={{ background: 'var(--color-bg-elevated)', paddingBottom: '48px' }}>
            <div className="container">

                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    minHeight: 'auto',
                    maxWidth: '1000px', // Wider to accommodate grid
                    margin: '0 auto'
                }}>
                    <div className="section-header-block">
                        <h2 style={{
                            fontSize: '2.5rem',
                            lineHeight: '1.2',
                            marginBottom: '12px',
                            color: 'var(--color-text)'
                        }}>
                            En el AI Builder Program no formamos usuarios avanzados, formamos Builders.
                        </h2>
                        <p style={{
                            fontSize: '1.5rem',
                            lineHeight: '1.5',
                            color: 'var(--color-text-secondary)',
                            fontWeight: 400,
                            maxWidth: '800px',
                            textAlign: 'center',
                            margin: '0 auto'
                        }}>
                            Un Builder es alguien que diseña soluciones reales con IA.
                        </p>
                    </div>

                    {/* Builder Pipeline Grid */}
                    <div className="builder-grid" style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                        gap: '32px',
                        width: '100%'
                    }}>
                        {pipelineSteps.map((step, i) => (
                            <div key={i} className="pipeline-card" style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap: '1rem',
                                padding: '1.5rem',
                                borderRadius: '8px',
                                transition: 'all 0.3s ease',
                                border: '1px solid transparent' // For hover effect
                            }}>
                                <div className="pipeline-icon" style={{
                                    color: 'var(--color-accent)',
                                    marginBottom: '0.5rem',
                                    transition: 'all 0.3s ease'
                                }}>
                                    {step.icon}
                                </div>
                                <h3 style={{
                                    fontSize: '1.1rem',
                                    fontWeight: 600,
                                    color: 'var(--color-text)'
                                }}>
                                    {step.title}
                                </h3>
                                <p style={{
                                    fontSize: '0.9rem',
                                    color: 'var(--color-text-secondary)'
                                }}>
                                    {step.sub}
                                </p>
                            </div>
                        ))}
                    </div>

                    <style>{`
                        .builder-section {
                            padding-top: 64px;
                        }

                        .section-header-block {
                            margin-bottom: 24px;
                        }

                        .pipeline-card:hover {
                            border-color: rgba(79, 140, 255, 0.3) !important;
                            background: rgba(79, 140, 255, 0.03);
                            transform: translateY(-5px);
                        }
                        .pipeline-card:hover .pipeline-icon {
                            filter: drop-shadow(0 0 8px rgba(79, 140, 255, 0.5));
                        }
                        
                        @media (max-width: 900px) {
                            .builder-section {
                                padding-top: 40px;
                            }
                            .section-header-block {
                                margin-bottom: 24px;
                            }
                        }

                        @media (max-width: 600px) {
                            .builder-section {
                                padding-top: 40px;
                            }
                            .section-header-block {
                                margin-bottom: 20px;
                            }
                        }

                        @media (max-width: 768px) {
                            .builder-grid {
                                grid-template-columns: 1fr 1fr !important;
                            }
                        }
                        @media (max-width: 480px) {
                            .builder-grid {
                                grid-template-columns: 1fr !important;
                            }
                        }
                    `}</style>

                </div>

            </div>
        </section>
    );
};

export default Section2;
