import React, { useEffect, useRef, useState } from 'react';
import OnboardingModal from './OnboardingModal';

const PriceCountUp = ({ value }) => {
    return (
        <span>
            ${value.toLocaleString('es-CO')} <span style={{ fontSize: '1rem', opacity: 0.6 }}>COP</span>
        </span>
    );
};

const ReservaButton = () => {
    const [state, setState] = useState({
        disabled: false,
        text: 'Cargando...',
        link: null
    });

    useEffect(() => {
        const checkDate = () => {
            const now = new Date();
            const colombiaTime = new Date(now.toLocaleString("en-US", { timeZone: "America/Bogota" }));

            // April 30, 2026 23:59:59
            const end = new Date(2026, 3, 30, 23, 59, 59);

            if (colombiaTime <= end) {
                setState({
                    disabled: false,
                    text: 'Reserva mi lugar',
                    link: 'https://checkout.wompi.co/l/rhFRuQ'
                });
            } else {
                setState({
                    disabled: true,
                    text: 'Las reservas cerraron',
                    link: null
                });
            }
        };

        checkDate();
        const timer = setInterval(checkDate, 60000);
        return () => clearInterval(timer);
    }, []);

    const handleClick = () => {
        if (!state.disabled && state.link) {
            // Modal disabled — redirect directly to Wompi
            // To re-enable: onOpenModal('reserva', state.link);
            window.location.href = state.link;
        }
    };

    return (
        <button
            className={`btn-action-primary ${state.disabled ? 'disabled' : ''}`}
            onClick={handleClick}
            disabled={state.disabled}
            style={{
                opacity: state.disabled ? 0.6 : 1,
                cursor: state.disabled ? 'not-allowed' : 'pointer',
                filter: state.disabled ? 'grayscale(100%)' : 'none',
                textDecoration: 'none'
            }}
        >
            {state.text}
            {!state.disabled && <div className="btn-glow-effect" />}
        </button>
    );
};

const PaymentButton = () => {
    const [state, setState] = useState({
        disabled: true,
        text: 'Cargando...',
        link: null
    });

    useEffect(() => {
        const checkDate = () => {
            // Create date object for Colombia time
            const now = new Date();
            const colombiaTime = new Date(now.toLocaleString("en-US", { timeZone: "America/Bogota" }));

            // Define ranges
            // Month is 0-indexed in JS Date constructor: March is 2
            const start = new Date(2026, 2, 10, 0, 0, 0); // March 10, 2026 00:00:00
            const end = new Date(2026, 3, 30, 23, 59, 59); // April 30, 2026 23:59:59

            if (colombiaTime < start) {
                setState({
                    disabled: true,
                    text: 'Disponible desde el 10 de marzo al 30 de abril',
                    link: null
                });
            } else if (colombiaTime >= start && colombiaTime <= end) {
                setState({
                    disabled: false,
                    text: 'Pagar programa completo',
                    link: 'https://checkout.wompi.co/l/1FWl7g'
                });
            } else {
                // After March 31? User didn't specify. Assuming disabled or closed.
                // For now, let's keep it disabled if past date.
                setState({
                    disabled: true,
                    text: 'Inscripciones cerradas',
                    link: null
                });
            }
        };

        checkDate();
        const timer = setInterval(checkDate, 60000); // Check every minute
        return () => clearInterval(timer);
    }, []);

    const handleClick = () => {
        if (!state.disabled && state.link) {
            window.location.href = state.link;
        }
    };

    return (
        <button
            className={`btn-action-primary ${state.disabled ? 'disabled' : ''}`}
            onClick={handleClick}
            disabled={state.disabled}
            style={{
                opacity: state.disabled ? 0.6 : 1,
                cursor: state.disabled ? 'not-allowed' : 'pointer',
                filter: state.disabled ? 'grayscale(100%)' : 'none'
            }}
        >
            {state.text}
            {!state.disabled && <div className="btn-glow-effect" />}
        </button>
    );
};

const Section6 = () => {
    const sectionRef = useRef(null);
    const cardsRef = useRef([]);
    const [modalConfig, setModalConfig] = useState({
        isOpen: false,
        tipo: '',
        url: ''
    });

    const handleCloseModal = () => {
        setModalConfig(prev => ({ ...prev, isOpen: false }));
    };

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        if (sectionRef.current) observer.observe(sectionRef.current);
        cardsRef.current.forEach(card => {
            if (card) observer.observe(card);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} id="reserva" className="section-action" style={{ backgroundColor: '#0C0F17', color: '#fff' }}>
            <div className="container" style={{ maxWidth: '1100px', padding: '64px 20px' }}>

                {/* Header Block */}
                <div className="action-header" style={{ textAlign: 'center', marginBottom: '48px' }}>
                    <h2 className="action-title">Tercera Generación AI Builder Program</h2>
                    <p className="action-subtitle">Inicio estimado: <strong><span style={{ textDecoration: 'line-through', opacity: 0.5 }}>15 de abril de 2026</span> 06 de mayo de 2026</strong></p>
                    <p className="action-micro-text">
                        <span style={{ color: '#9CA3AF' }}>Este no es un curso grabado.</span>
                        <span style={{ color: 'var(--color-accent)', fontWeight: 600 }}> Es una generación guiada con </span>
                        <span style={{ color: '#FF4F4F', fontWeight: 700 }}>cupos limitados</span>
                    </p>
                </div>

                {/* Pricing Grid */}
                <div className="pricing-grid">
                    {/* Card 1: Reserva */}
                    <div
                        className="pricing-card highlighted"
                        ref={el => cardsRef.current[0] = el}
                    >
                        <div className="card-badge">RESERVA ABIERTA</div>
                        <h3 className="card-title">Reserva tu cupo</h3>
                        <div className="card-price">
                            <PriceCountUp value={400000} /><span style={{ fontSize: '0.35em', verticalAlign: 'super', marginLeft: '1px', opacity: 0.7 }}>*</span>
                        </div>
                        <p className="card-desc">Asegura tu cupo ahora y paga el saldo después.</p>
                        <p className="card-limited">Disponible hasta 30 de abril.</p>
                        <ReservaButton />
                    </div>

                    {/* Card 2: Full Price */}
                    <div
                        className="pricing-card"
                        ref={el => cardsRef.current[1] = el}
                    >
                        <div className="card-badge">PRECIO FULL</div>
                        <h3 className="card-title">Precio estándar</h3>
                        <div className="card-price">
                            <PriceCountUp value={2000000} />
                        </div>
                        <p className="card-desc">Valor completo del programa.</p>
                        <p className="card-limited">Disponible desde el 10 de marzo al 30 de abril.</p>
                        <PaymentButton />
                    </div>
                </div>

                {/* Disclaimer */}
                <div className="action-disclaimer">
                    <div className="disclaimer-header">
                        <span className="disclaimer-asterisk">*</span>
                        <h4 className="disclaimer-title">Condiciones de la reserva de cupo</h4>
                    </div>
                    <div className="disclaimer-body">
                        <p className="disclaimer-text">
                            Pago correspondiente únicamente a la reserva de cupo para el AI Builder Program – 3Gen.
                            <br />
                            Este valor se descuenta del precio total del programa. El saldo restante deberá pagarse posteriormente según las condiciones comunicadas.
                        </p>
                    </div>
                    <div className="disclaimer-footer">
                        <p className="disclaimer-important">
                            <strong>Importante:</strong> el valor de la reserva no es reembolsable, incluso si el participante decide no continuar en el programa o no realizar el pago del saldo restante.
                        </p>
                        <p className="disclaimer-important" style={{ marginTop: '0.75rem' }}>
                            <strong>Acceso al contenido:</strong> el participante tendrá acceso a las grabaciones, materiales y recursos del programa durante 3 meses después de finalizado. Finalizado este periodo, podrá renovarse el acceso según condiciones vigentes.
                        </p>
                    </div>
                </div>


                <OnboardingModal
                    isOpen={modalConfig.isOpen}
                    onClose={handleCloseModal}
                    tipoIntentoCompra={modalConfig.tipo}
                    wompiUrl={modalConfig.url}
                />

            </div>

            <style>{`
                .section-action {
                    position: relative;
                    overflow: hidden;
                    border-top: 1px solid rgba(255, 255, 255, 0.05);
                }

                .action-title {
                    font-size: clamp(1.75rem, 4vw, 2.5rem);
                    font-weight: 800;
                    margin-bottom: 0.75rem;
                    letter-spacing: -0.02em;
                    color: #fff;
                }

                .action-subtitle {
                    font-size: 1.15rem;
                    color: rgba(255, 255, 255, 0.8);
                    margin-bottom: 0.5rem;
                }

                .action-subtitle strong {
                    color: var(--color-accent);
                }

                .action-micro-text {
                    font-size: 0.9rem;
                    color: rgba(255, 255, 255, 0.5);
                }

                .pricing-grid {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 1.5rem;
                    margin-bottom: 4rem;
                    max-width: 750px;
                    margin-left: auto;
                    margin-right: auto;
                }

                .pricing-card {
                    background: rgba(255, 255, 255, 0.03);
                    backdrop-filter: blur(12px);
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    border-radius: 20px;
                    padding: 1.5rem;
                    display: flex;
                    flex-direction: column;
                    position: relative;
                    transition: all 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
                    opacity: 0;
                    transform: translateY(30px);
                }

                .pricing-card.visible {
                    opacity: 1;
                    transform: translateY(0);
                }

                .pricing-card:hover {
                    transform: translateY(-8px);
                    border-color: rgba(79, 140, 255, 0.4);
                    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
                }

                .pricing-card.highlighted {
                    border-color: rgba(79, 140, 255, 0.5);
                    background: linear-gradient(180deg, rgba(79, 140, 255, 0.05) 0%, rgba(255, 255, 255, 0.03) 100%);
                    box-shadow: 0 10px 30px rgba(79, 140, 255, 0.1);
                }

                .card-badge {
                    display: inline-block;
                    align-self: flex-start;
                    padding: 0.35rem 0.75rem;
                    background: rgba(79, 140, 255, 0.1);
                    border: 1px solid rgba(79, 140, 255, 0.3);
                    color: var(--color-accent);
                    font-size: 0.65rem;
                    font-weight: 800;
                    border-radius: 6px;
                    margin-bottom: 1rem;
                    letter-spacing: 0.05em;
                }

                .card-title {
                    font-size: 1.25rem;
                    font-weight: 700;
                    margin-bottom: 0.5rem;
                    color: #fff;
                }

                .card-price {
                    font-size: 1.75rem;
                    font-weight: 800;
                    margin-bottom: 0.75rem;
                    color: #fff;
                    letter-spacing: -0.01em;
                }

                .card-desc {
                    font-size: 0.95rem;
                    color: rgba(255, 255, 255, 0.6);
                    margin-bottom: 1rem;
                    line-height: 1.5;
                }

                .card-limited {
                    font-size: 0.8rem;
                    color: rgba(255, 255, 255, 0.4);
                    margin-top: auto;
                    margin-bottom: 1rem;
                }

                .btn-action-primary {
                    width: 100%;
                    height: 52px;
                    background: var(--color-accent);
                    color: #fff;
                    border: none;
                    border-radius: 12px;
                    font-weight: 700;
                    font-size: 0.95rem;
                    cursor: pointer;
                    position: relative;
                    overflow: hidden;
                    transition: all 0.3s ease;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .btn-action-primary:hover {
                    background: #393C42;
                    transform: scale(1.02);
                    box-shadow: 0 0 20px rgba(79, 140, 255, 0.5);
                }

                .btn-glow-effect {
                    position: absolute;
                    top: 0;
                    left: -100%;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(120deg, transparent, rgba(255, 255, 255, 0.2), transparent);
                    transition: all 0.6s ease;
                }

                .btn-action-primary:hover .btn-glow-effect {
                    left: 100%;
                }

                /* Refined Disclaimer Styles */
                .action-disclaimer {
                    max-width: 900px;
                    margin: 0 auto 4rem;
                    text-align: left; /* Aligned with Reserva card intent */
                }

                .disclaimer-header {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    margin-bottom: 1rem;
                    position: relative;
                }

                .disclaimer-asterisk {
                    color: #FFFFFF;
                    font-size: 1.2rem;
                    font-weight: 800;
                    line-height: 1;
                    margin-top: -2px;
                    text-shadow: 0 0 10px var(--color-accent);
                }

                .disclaimer-title {
                    font-weight: 600;
                    color: #FFFFFF;
                    font-size: 1.1rem;
                    position: relative;
                    display: inline-block;
                    padding-bottom: 4px;
                }

                .disclaimer-title::after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 0;
                    height: 2px;
                    background: var(--color-accent);
                    box-shadow: 0 0 8px var(--color-accent);
                    animation: draw-line 0.4s ease-out forwards;
                }

                @keyframes draw-line {
                    to { width: 100%; }
                }

                .disclaimer-text {
                    font-size: 0.95rem;
                    color: #9CA3AF;
                    line-height: 1.6;
                    margin-bottom: 1rem;
                }

                .disclaimer-important {
                    font-size: 0.9rem;
                    color: #9CA3AF;
                    opacity: 0;
                    animation: delayed-fade-in 0.4s ease-out 0.55s forwards; /* 400ms underline + 150ms delay */
                }

                .disclaimer-important strong {
                    color: #FFFFFF;
                }

                @keyframes delayed-fade-in {
                    to { opacity: 1; }
                }

                .final-cta-container {
                    text-align: center;
                }

                .btn-ai-builder {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    text-decoration: none;
                    width: 100%;
                    max-width: 600px;
                    height: 64px;
                    background: transparent;
                    border: 1px solid var(--color-accent);
                    color: var(--color-accent);
                    font-size: 1.1rem;
                    font-weight: 800;
                    border-radius: 16px;
                    cursor: pointer;
                    position: relative;
                    overflow: hidden;
                    transition: all 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
                    letter-spacing: 0.02em;
                }

                .btn-ai-builder:hover {
                    background: #393C42;
                    border-color: #4F8CFF;
                    color: #fff;
                    transform: scale(1.03);
                    box-shadow: 0 0 40px rgba(79, 140, 255, 0.4);
                }

                .btn-ai-builder:hover .btn-glow-effect {
                    left: 100%;
                }

                @media (max-width: 900px) {
                    .pricing-grid {
                        grid-template-columns: 1fr;
                        gap: 1.5rem;
                    }

                    .pricing-card {
                        max-width: 480px;
                        margin: 0 auto;
                        width: 100%;
                    }

                    .action-title {
                        font-size: 2rem;
                    }

                    .action-disclaimer {
                        text-align: center;
                    }
                    .disclaimer-header {
                        justify-content: center;
                    }
                }
            `}</style>
        </section>
    );
};

export default Section6;
