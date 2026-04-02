import React, { useEffect, useRef, useState } from 'react';

// Specialized linear icons for each action
const ArchIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="timeline-icon">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
    </svg>
);

const FlowIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="timeline-icon">
        <polyline points="16 3 21 3 21 8" /><line x1="4" y1="20" x2="21" y2="3" /><polyline points="21 16 21 21 16 21" /><line x1="15" y1="15" x2="21" y2="21" /><line x1="4" y1="4" x2="9" y2="9" />
    </svg>
);

const ApiIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="timeline-icon">
        <rect x="2" y="2" width="20" height="8" rx="2" ry="2" /><rect x="2" y="14" width="20" height="8" rx="2" ry="2" /><line x1="6" y1="6" x2="6.01" y2="6" /><line x1="6" y1="18" x2="6.01" y2="18" />
    </svg>
);

const SolutionIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="timeline-icon">
        <polyline points="20 6 9 17 4 12" />
    </svg>
);

const IterIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="timeline-icon">
        <polyline points="23 4 23 10 17 10" /><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
    </svg>
);

const RocketIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="timeline-icon">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" /><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" /><path d="M9 12H4s.55-3.03 2-5c1.62-2.2 5-3 5-3" /><path d="M12 15v5s3.03-.55 5-2c2.2-1.62 3-5 3-5" />
    </svg>
);

const Section5 = () => {
    const sectionRef = useRef(null);
    const itemsRef = useRef([]);
    const [lineHeight, setLineHeight] = useState(0);

    const timelineItems = [
        { weeks: "SEMANAS 1–2", title: "Construimos criterio.", text: "Dejas de pedirle cosas a la IA. Empiezas a dirigirla.", side: "left", icon: <ArchIcon /> },
        { weeks: "SEMANA 3", title: "La IA deja de estar encerrada en un chat.", text: "Aprendes a trabajar con APIs reales.", side: "right", icon: <ApiIcon /> },
        { weeks: "SEMANAS 4–6", title: "Automatización real con n8n.", text: "Flujos que analizan, deciden y ejecutan sin intervención humana.", side: "left", icon: <FlowIcon /> }
    ];

    const timelineItemsPart2 = [
        { weeks: "SEMANAS 7–8", title: "Creación de apps reales con IA usando Antigravity.", text: "No demos. Productos funcionales.", side: "right", icon: <SolutionIcon /> },
        { weeks: "SEMANAS 9–10", title: "Integración total: IA + n8n + RAG + Antigravity.", text: "Aquí ya se toman decisiones de Builder.", side: "left", icon: <IterIcon /> }
    ];

    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current) return;
            const rect = sectionRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            const sectionScrollTop = Math.max(0, windowHeight * 0.7 - rect.top);
            const scrollPercent = Math.min(100, (sectionScrollTop / rect.height) * 120);
            setLineHeight(scrollPercent);

            itemsRef.current.forEach((item) => {
                if (!item) return;
                const itemRect = item.getBoundingClientRect();
                if (itemRect.top < windowHeight * 0.85) {
                    item.classList.add('visible');
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section ref={sectionRef} id="camino" className="section-program" style={{ backgroundColor: '#0B0F19', color: '#fff' }}>
            <div className="container" style={{ maxWidth: '1000px', padding: '24px 20px 60px' }}>

                <div className="timeline-unification-block">
                    <div className="timeline-header" style={{ textAlign: 'center', marginBottom: '32px' }}>
                        <h2 className="title-premium">El camino de las <span className="accent-glow">12</span> semanas</h2>
                        <p className="subtitle-premium">De usuario de IA a Builder de sistemas reales.<br />Semana a semana. Sin atajos.</p>
                    </div>

                    <div className="timeline-wrapper">
                        <div className="timeline-line-main">
                            <div className="line-fill" style={{ height: `${lineHeight}%` }} />
                        </div>

                        <div className="timeline-blocks">
                            {timelineItems.map((item, i) => (
                                <div
                                    key={i}
                                    ref={(el) => itemsRef.current[i] = el}
                                    className={`timeline-node ${item.side}`}
                                >
                                    <div className="node-card glass-card">
                                        <span className="node-label">{item.weeks}</span>
                                        <h3>{item.title}</h3>
                                        <p>{item.text}</p>
                                        <div className="node-icon">{item.icon}</div>
                                    </div>
                                    <div className="node-dot" />
                                </div>
                            ))}
                        </div>

                        <div className="timeline-interlude" ref={(el) => itemsRef.current[timelineItems.length] = el}>
                            <p className="interlude-text">“Aquí es donde la gente se da cuenta de que ya no está jugando.”</p>
                        </div>

                        <div className="timeline-blocks">
                            {timelineItemsPart2.map((item, i) => {
                                const idx = timelineItems.length + 1 + i;
                                return (
                                    <div
                                        key={idx}
                                        ref={(el) => itemsRef.current[idx] = el}
                                        className={`timeline-node ${item.side}`}
                                    >
                                        <div className="node-card glass-card">
                                            <span className="node-label">{item.weeks}</span>
                                            <h3>{item.title}</h3>
                                            <p>{item.text}</p>
                                            <div className="node-icon">{item.icon}</div>
                                        </div>
                                        <div className="node-dot" />
                                    </div>
                                );
                            })}
                        </div>

                        <div
                            className="timeline-final-block"
                            ref={(el) => itemsRef.current[timelineItems.length + timelineItemsPart2.length + 1] = el}
                        >
                            <div className="final-node-content glass-card premium-border">
                                <div className="final-badge">CIERRE DEL PROGRAMA</div>
                                <span className="node-label">SEMANAS 11–12</span>
                                <h2 style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>Construcción guiada de un producto real</h2>
                                <p>Sales con una solución funcional y la presentas en un Demo Day.</p>
                                <div className="final-icon-large"><RocketIcon /></div>
                            </div>
                            <div className="timeline-dot final" />
                        </div>
                    </div>
                </div>

                <div className="program-cta" style={{ marginTop: '56px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                    <a href="#reserva" className="btn-apply-premium" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <span style={{ position: 'relative', zIndex: 2 }}>APLICAR AHORA</span>
                        <div className="shimmer-effect" />
                    </a>
                    <p className="cta-micro">
                        Cupos limitados
                    </p>
                </div>

            </div>

            <style>{`
                .section-program {
                    overflow: hidden;
                    position: relative;
                }

                .glass-card {
                    background: rgba(255, 255, 255, 0.02);
                    backdrop-filter: blur(12px);
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    border-radius: 16px;
                    padding: 1.5rem;
                    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.4);
                }

                .title-premium {
                    font-size: clamp(1.75rem, 4vw, 2.25rem);
                    font-weight: 800;
                    margin-bottom: 0.5rem;
                    letter-spacing: -0.02em;
                    line-height: 1.1;
                    color: #fff;
                }

                .subtitle-premium {
                    font-size: 1rem;
                    color: rgba(255, 255, 255, 0.6);
                    margin-bottom: 0.5rem;
                }

                .accent-glow {
                    color: var(--color-accent);
                    text-shadow: 0 0 20px rgba(var(--color-accent-rgb), 0.5);
                }

                .timeline-wrapper {
                    position: relative;
                    max-width: 900px;
                    margin: 0 auto;
                }

                .timeline-line-main {
                    position: absolute;
                    left: 50%;
                    top: 0;
                    bottom: 0;
                    width: 1px;
                    background: rgba(255, 255, 255, 0.06);
                    transform: translateX(-0.5px);
                }

                .line-fill {
                    position: absolute;
                    top: 0;
                    width: 100%;
                    background: linear-gradient(to bottom, var(--color-accent), #fff);
                    box-shadow: 0 0 15px var(--color-accent);
                    transition: height 0.1s linear;
                }

                .timeline-node {
                    display: flex;
                    padding: 1.5rem 0;
                    width: 50%;
                    position: relative;
                    opacity: 0;
                    transform: translateY(20px);
                    transition: all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
                }

                .timeline-node.left {
                    padding-right: 2.5rem;
                    justify-content: flex-end;
                }

                .timeline-node.right {
                    margin-left: 50%;
                    padding-left: 2.5rem;
                }

                .timeline-node.visible {
                    opacity: 1;
                    transform: translateY(0);
                }

                .node-card {
                    padding: 1.25rem;
                    width: 100%;
                    max-width: 360px;
                    text-align: left;
                    position: relative;
                    overflow: hidden;
                    border-radius: 12px;
                }

                .node-label {
                    font-size: 0.7rem;
                    font-weight: 800;
                    color: var(--color-accent);
                    display: block;
                    margin-bottom: 0.5rem;
                    letter-spacing: 0.05em;
                }

                .node-card h3 {
                    font-size: 1.15rem;
                    margin-bottom: 0.4rem;
                    line-height: 1.25;
                    font-weight: 700;
                    color: #fff;
                }

                .node-card p {
                    font-size: 0.9rem;
                    color: rgba(255, 255, 255, 0.5);
                    line-height: 1.4;
                    margin: 0;
                }

                .node-icon {
                    position: absolute;
                    right: 1rem;
                    bottom: 1rem;
                    opacity: 0.06;
                    transform: scale(1.8);
                    pointer-events: none;
                    color: var(--color-accent);
                }

                .node-dot {
                    position: absolute;
                    width: 10px;
                    height: 10px;
                    background: #0B0F19;
                    border: 1.5px solid rgba(255, 255, 255, 0.3);
                    border-radius: 50%;
                    z-index: 10;
                    top: 50%;
                    transform: translateY(-50%);
                    transition: all 0.5s ease;
                }

                .timeline-node.left .node-dot {
                    right: -5px;
                }

                .timeline-node.right .node-dot {
                    left: -5px;
                }

                .timeline-node.visible .node-dot {
                    background: var(--color-accent);
                    border-color: #fff;
                    box-shadow: 0 0 10px var(--color-accent);
                }

                .timeline-interlude {
                    text-align: center;
                    padding: 2.5rem 0;
                    opacity: 0;
                    transition: all 1s ease;
                    position: relative;
                    z-index: 5;
                }

                .timeline-interlude.visible {
                    opacity: 1;
                }

                .interlude-text {
                    font-size: 0.85rem;
                    color: rgba(255, 255, 255, 0.4);
                    font-style: italic;
                    font-weight: 500;
                    letter-spacing: 0.02em;
                    background: #0B0F19;
                    padding: 0 1.5rem;
                    display: inline-block;
                }

                .timeline-final-block {
                    text-align: center;
                    padding: 2.5rem 0 1.5rem;
                    position: relative;
                    opacity: 0;
                    transform: translateY(20px);
                    transition: all 0.8s ease;
                }

                .timeline-final-block.visible {
                    opacity: 1;
                    transform: translateY(0);
                }

                .final-node-content {
                    max-width: 580px;
                    margin: 0 auto;
                    position: relative;
                    background: linear-gradient(135deg, rgba(var(--color-accent-rgb), 0.05) 0%, rgba(0, 0, 0, 0) 100%);
                    border: 1px solid rgba(var(--color-accent-rgb), 0.2);
                }

                .final-badge {
                    display: inline-block;
                    padding: 0.3rem 0.75rem;
                    background: rgba(var(--color-accent-rgb), 0.1);
                    border: 1px solid var(--color-accent);
                    color: var(--color-accent);
                    font-size: 0.65rem;
                    font-weight: 800;
                    border-radius: 4px;
                    margin-bottom: 1rem;
                    letter-spacing: 0.1em;
                }

                .final-icon-large {
                    margin-top: 1rem;
                    color: var(--color-accent);
                    opacity: 0.8;
                }

                .timeline-dot.final {
                    position: absolute;
                    left: 50% !important;
                    top: 0;
                    transform: translate(-50%, -50%);
                }

                .btn-apply-premium {
                    position: relative;
                    background: var(--color-accent);
                    color: #fff;
                    border: none;
                    width: 320px;
                    height: 56px;
                    font-size: 1rem;
                    font-weight: 800;
                    border-radius: 10px;
                    cursor: pointer;
                    overflow: hidden;
                    transition: all 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
                    box-shadow: 0 0 20px rgba(var(--color-accent-rgb), 0.3);
                    animation: pulse-shadow 3s infinite;
                }

                .btn-apply-premium:hover {
                    background: #393C42;
                    box-shadow: 0 0 40px rgba(79, 140, 255, 0.6);
                    transform: translateY(-2px) scale(1.02);
                    color: #FFFFFF !important;
                }

                .shimmer-effect {
                    position: absolute;
                    top: 0;
                    left: -150%;
                    width: 150%;
                    height: 100%;
                    background: linear-gradient(
                        120deg,
                        transparent,
                        rgba(255, 255, 255, 0.3),
                        transparent
                    );
                    transition: none;
                    animation: shimmer-wave 4s infinite;
                    z-index: 1;
                }

                @keyframes shimmer-wave {
                    0% { left: -150%; }
                    20%, 100% { left: 150%; }
                }

                @keyframes pulse-shadow {
                    0% { box-shadow: 0 0 20px rgba(var(--color-accent-rgb), 0.3); }
                    50% { box-shadow: 0 0 35px rgba(var(--color-accent-rgb), 0.5); }
                    100% { box-shadow: 0 0 20px rgba(var(--color-accent-rgb), 0.3); }
                }

                .btn-apply-premium:hover .shimmer-effect {
                    animation-duration: 2s;
                }


                .cta-micro {
                    font-size: 0.85rem;
                    color: #FF4F4F;
                    font-weight: 700;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 0.5rem;
                    letter-spacing: 0.02em;
                }

                @media (max-width: 768px) {
                    .timeline-line-main { left: 24px; }
                    .timeline-node { width: 100%; padding: 1.25rem 0 1.25rem 50px; }
                    .timeline-node.left { justify-content: flex-start; padding-right: 0; }
                    .timeline-node.right { margin-left: 0; padding-left: 50px; }
                    .node-dot { left: 18px !important; right: auto !important; }
                    .node-card { max-width: 100%; }
                    .title-premium { font-size: 1.75rem; }
                    .glass-card { padding: 1.5rem 1.25rem; }
                }

                .visible .timeline-icon {
                    animation: dash 1.5s ease forwards;
                }

                @keyframes dash {
                    from { stroke-dasharray: 100; stroke-dashoffset: 100; }
                    to { stroke-dashoffset: 0; }
                }
            `}</style>
        </section>
    );
};

export default Section5;
