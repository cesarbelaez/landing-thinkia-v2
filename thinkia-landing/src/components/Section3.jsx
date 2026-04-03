import React from 'react';

const BookIcon = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </svg>
);

const ToolsIcon = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M14.4 14.4L9.6 9.6" />
        <path d="M18.8 5.2a2.828 2.828 0 1 1 4 4l-10.6 10.6a2 2 0 0 1-1.41.59H7v-3.79a2 2 0 0 1 .59-1.41L18.8 5.2z" />
    </svg>
);

const MentorIcon = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
);

const RocketIcon = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
);

const Section3 = () => {
    const includedItems = [
        {
            icon: <BookIcon />,
            title: "Contenidos Estructurados",
            description: "Domina los 4 pilares de un Builder: Arquitectura, Automatización, Iteración y Entrega. No es teoria pura, es blueprint práctico."
        },
        {
            icon: <ToolsIcon />,
            title: "Herramientas Reales",
            description: "n8n, Antigravity, APIs, RAG. Las mismas que usan builders profesionales. No esperes pseudocódigo, espera flujos que funcionan."
        },
        {
            icon: <MentorIcon />,
            title: "Mentoría Directa",
            description: "Acceso a Cesar Arbeláez y el equipo. Feedback en tiempo real sobre tus proyectos. Síncrono, no videos pregrabados."
        },
        {
            icon: <RocketIcon />,
            title: "Proyecto Real + Demo",
            description: "Construyes una solución funcional y la presentas en nuestro Demo Day. Portfolio builder real, no certificado digital."
        }
    ];

    return (
        <section id="contenido" className="section" style={{ paddingTop: '48px', paddingBottom: '48px' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <h2 style={{
                        fontSize: 'clamp(2rem, 5vw, 2.75rem)',
                        marginBottom: '1rem',
                        color: 'var(--color-text)'
                    }}>
                        Qué incluye tu participación
                    </h2>
                    <p style={{
                        fontSize: '1.1rem',
                        color: 'var(--color-text-secondary)',
                        maxWidth: '600px',
                        margin: '0 auto'
                    }}>
                        12 semanas de construcción real, no teoría pura.
                    </p>
                </div>

                <div className="inclusion-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '1.5rem',
                    maxWidth: '1100px',
                    margin: '0 auto'
                }}>
                    {includedItems.map((item, i) => (
                        <div key={i} className="inclusion-card" style={{
                            background: 'var(--color-bg-elevated)',
                            border: '1px solid var(--color-border)',
                            borderRadius: '12px',
                            padding: '2rem',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            transition: 'all 0.3s ease',
                            cursor: 'default'
                        }}>
                            <div style={{
                                color: 'var(--color-accent)',
                                marginBottom: '1rem',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '56px',
                                height: '56px',
                                background: 'rgba(245, 118, 36, 0.1)',
                                borderRadius: '8px'
                            }}>
                                {item.icon}
                            </div>
                            <h3 style={{
                                fontSize: '1.15rem',
                                fontWeight: 600,
                                margin: '0 0 0.75rem 0',
                                color: 'var(--color-text)'
                            }}>
                                {item.title}
                            </h3>
                            <p style={{
                                fontSize: '0.95rem',
                                color: 'var(--color-text-secondary)',
                                margin: 0,
                                lineHeight: '1.6'
                            }}>
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                .inclusion-card:hover {
                    transform: translateY(-4px);
                    border-color: rgba(245, 118, 36, 0.3);
                    background: #1A1F2E;
                }

                @media (max-width: 900px) {
                    .inclusion-grid {
                        grid-template-columns: 1fr !important;
                        max-width: 400px !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default Section3;
