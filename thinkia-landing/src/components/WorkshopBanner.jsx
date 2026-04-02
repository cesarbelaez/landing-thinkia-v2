import React from 'react';

const WorkshopBanner = () => {
    return (
        <section id="workshop" className="wb-promo-wrapper">
            <div className="wb-promo-container">
                {/* Micro-label floating above the card */}
                <div className="wb-promo-tag">
                    Evento en Vivo
                </div>

                <div className="wb-promo-card">
                    {/* Background Layer: Tech texture and particles */}
                    <div className="wb-bg-layer">
                        <svg width="100%" height="100%" preserveAspectRatio="none">
                            <defs>
                                <pattern id="dot-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                                    <circle cx="2" cy="2" r="1" fill="white" opacity="0.08" />
                                </pattern>
                            </defs>
                            <rect width="100%" height="100%" fill="url(#dot-pattern)" />
                            <rect width="100%" height="100%" fill="radial-gradient(circle at 15% 50%, rgba(245, 118, 36, 0.04) 0%, transparent 70%)" />
                        </svg>
                        <div className="wb-particles">
                            {[...Array(6)].map((_, i) => (
                                <div key={i} className={`wb-particle p${i + 1}`} />
                            ))}
                        </div>
                    </div>

                    {/* Right Side: The Premium Social Live Stage */}
                    <div className="wb-stage-container">
                        <svg className="wb-stage-svg" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <clipPath id="stage-clip">
                                    <path d="M 240 0 L 800 0 L 800 600 L 20 600 Z" />
                                </clipPath>
                                <filter id="badge-glow" x="-20%" y="-20%" width="140%" height="140%">
                                    <feGaussianBlur stdDeviation="6" result="blur" />
                                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                                </filter>
                            </defs>

                            <path d="M 240 0 L 800 0 L 800 600 L 20 600 Z" fill="#1C2836" opacity="1" />

                            <g clipPath="url(#stage-clip)">
                                <circle cx="500" cy="300" r="240" fill="rgba(245, 118, 36, 0.04)" filter="blur(70px)" />

                                <g>
                                    <g transform="translate(340, 150)">
                                        <animateTransform attributeName="transform" type="translate" values="340,150; 350,140; 340,150" dur="4.2s" repeatCount="indefinite" />
                                        <rect width="52" height="36" rx="10" fill="white" filter="url(#badge-glow)" />
                                        <path d="M 21 12 L 21 24 L 33 18 Z" fill="#F57624" />
                                    </g>

                                    <g transform="translate(280, 300)">
                                        <animateTransform attributeName="transform" type="translate" values="280,300; 270,315; 280,300" dur="5s" repeatCount="indefinite" />
                                        <circle cx="24" cy="24" r="24" fill="white" filter="url(#badge-glow)" />
                                        <path
                                            d="M 28 12 Q 33 12 33 17 L 33 21 Q 30 19 28 19 L 28 28 Q 28 32 24 32 Q 20 32 20 28 Q 20 24 24 24 L 24 16 Q 24 12 28 12 Z"
                                            fill="#F57624"
                                        />
                                    </g>

                                    <g transform="translate(330, 460)">
                                        <animateTransform attributeName="transform" type="translate" values="330,460; 340,475; 330,460" dur="4.5s" repeatCount="indefinite" />
                                        <rect width="42" height="42" rx="13" stroke="white" strokeWidth="5" fill="none" filter="url(#badge-glow)" />
                                        <circle cx="21" cy="21" r="9" stroke="#F57624" strokeWidth="3.5" fill="none" />
                                        <circle cx="34" cy="10" r="2.5" fill="#F57624" />
                                    </g>
                                </g>

                                <g transform="translate(420, 100) rotate(8)">
                                    <rect x="0" y="0" width="240" height="420" rx="28" fill="#0A0D14" stroke="rgba(245, 118, 36, 0.3)" strokeWidth="3" />
                                    <rect x="8" y="8" width="224" height="404" rx="20" fill="#12151E" />
                                    <g transform="translate(25, 35)">
                                        <g>
                                            <rect x="0" y="0" width="70" height="20" rx="10" fill="#FF4F4F" />
                                            <circle cx="12" cy="10" r="3" fill="white">
                                                <animate attributeName="opacity" values="1;0.4;1" dur="1s" repeatCount="indefinite" />
                                            </circle>
                                            <text x="42" y="14" fill="white" fontSize="10" fontWeight="900" textAnchor="middle">1.4k</text>
                                        </g>
                                        <rect x="0" y="32" width="190" height="225" rx="12" fill="rgba(255,255,255,0.03)" />
                                        <path d="M 30 110 L 160 110" stroke="#F57624" strokeWidth="3" opacity="0.6" strokeLinecap="round" />
                                        <rect x="30" y="125" width="80" height="4" rx="2" fill="white" opacity="0.1" />
                                        <g transform="translate(165, 205)">
                                            {[...Array(6)].map((_, i) => (
                                                <path
                                                    key={i}
                                                    d="M0,0 C-2.5,-2.5 -6,-2.5 -6,1.5 C-6,6.5 0,10 0,10 C0,10 6,6.5 6,1.5 C6,-2.5 2.5,-2.5 0,0"
                                                    fill="#F57624"
                                                    opacity="0"
                                                >
                                                    <animate attributeName="opacity" values="0;0.9;0.9;0" dur={`${2.5 + i * 0.4}s`} repeatCount="indefinite" begin={`${i * 0.6}s`} />
                                                    <animate attributeName="transform" attributeType="XML" type="translate" values="0,0; 15, -40" dur={`${2.5 + i * 0.4}s`} repeatCount="indefinite" begin={`${i * 0.6}s`} />
                                                </path>
                                            ))}
                                        </g>
                                        <g transform="translate(0, 270)">
                                            <rect x="0" y="0" width="150" height="28" rx="14" fill="rgba(255,255,255,0.06)" />
                                            <circle cx="14" cy="14" r="9" fill="rgba(255,255,255,0.15)" />
                                            <rect x="28" y="12" width="100" height="4" rx="2" fill="white" opacity="0.1" />
                                            <g transform="translate(0, 36)">
                                                <rect x="0" y="0" width="180" height="28" rx="14" fill="rgba(245, 118, 36, 0.1)" />
                                                <circle cx="14" cy="14" r="9" fill="#F57624" opacity="0.4" />
                                                <rect x="28" y="12" width="130" height="4" rx="2" fill="white" opacity="0.2" />
                                            </g>
                                            <g transform="translate(0, 72)">
                                                <rect x="0" y="0" width="190" height="32" rx="16" stroke="rgba(255,255,255,0.1)" strokeWidth="1" fill="rgba(0,0,0,0.2)" />
                                                <text x="15" y="20" fill="white" fontSize="9" opacity="0.4">Escribe un comentario...</text>
                                            </g>
                                        </g>
                                    </g>
                                </g>

                                <g transform="translate(200, 30)">
                                    <rect x="-30" y="0" width="110" height="34" rx="17" fill="#F57624" filter="url(#badge-glow)">
                                        <animate attributeName="opacity" values="0.9;1;0.9" dur="2s" repeatCount="indefinite" />
                                    </rect>
                                    <g transform="translate(-15, 17)">
                                        <circle r="4" fill="white">
                                            <animate attributeName="opacity" values="1;0.2;1" dur="1.2s" repeatCount="indefinite" />
                                        </circle>
                                        <text x="44" y="4" fill="white" fontSize="12" fontWeight="900" textAnchor="middle" style={{ letterSpacing: '0.08em' }}>EN VIVO</text>
                                    </g>
                                </g>
                            </g>

                            {[...Array(20)].map((_, i) => (
                                <circle
                                    key={i}
                                    cx={150 + Math.random() * 600}
                                    cy={Math.random() * 600}
                                    r={0.8 + Math.random() * 1.5}
                                    fill="white"
                                    opacity={0.1 + Math.random() * 0.3}
                                >
                                    <animate attributeName="opacity" values="0.1;0.6;0.1" dur={`${2 + Math.random() * 3}s`} repeatCount="indefinite" />
                                    <animate attributeName="transform" attributeType="XML" type="translate" values="0,0; 20,-20; 0,0" dur={`${3 + Math.random() * 4}s`} repeatCount="indefinite" />
                                </circle>
                            ))}
                        </svg>
                    </div>

                    {/* Main Content */}
                    <div className="wb-content">
                        <div className="wb-text-container">
                            <div className="wb-header-meta">
                                <span className="wb-label">WORKSHOP ESTRATÉGICO EN VIVO</span>
                            </div>

                            <h2 className="wb-title">
                                De usuario de IA <span className="wb-title-bold">a constructor de sistemas</span>
                            </h2>

                            <div className="wb-details-wrapper">
                                <p className="wb-date">
                                    <span className="wb-date-highlight">Sábado 28 Febrero</span>
                                    <span className="wb-date-spacer"> &middot; </span>
                                    <span className="wb-date-time">9:00 – 11:00 AM</span>
                                </p>

                                <p className="wb-desc">
                                    Un workshop práctico donde aprenderás a diseñar flujos reales con IA
                                    y dar el primer paso para convertirte en AI Builder.
                                </p>
                            </div>

                            <div className="wb-action-area">
                                <a
                                    href="https://luma.com/vm757buo"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="wb-cta"
                                >
                                    ¡Regístrate ahora!
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                .wb-promo-wrapper {
                    position: relative;
                    width: 100%;
                    padding: calc(var(--header-height) + 30px) 0 20px;
                    background: transparent;
                }

                .wb-promo-container {
                    max-width: 1400px;
                    margin: 0 auto;
                    width: 75%;
                    position: relative;
                }

                .wb-promo-tag {
                    position: absolute;
                    top: -12px;
                    left: 40px;
                    background: #F57624;
                    color: white;
                    padding: 4px 14px;
                    border-radius: 60px;
                    font-size: 0.7rem;
                    font-weight: 900;
                    letter-spacing: 0.1em;
                    z-index: 20;
                    box-shadow: 0 4px 12px rgba(245, 118, 36, 0.3);
                    text-transform: uppercase;
                }

                .wb-promo-card {
                    position: relative;
                    background: #1C2836;
                    border: 1px solid rgba(245, 118, 36, 0.3);
                    border-radius: 32px;
                    overflow: hidden;
                    min-height: 360px;
                    display: flex;
                    align-items: center;
                    box-shadow: 0 40px 100px -20px rgba(0, 0, 0, 0.8), 
                                0 20px 40px -25px rgba(0, 0, 0, 0.9),
                                inset 0 0 0 1px rgba(255, 255, 255, 0.05);
                }

                .wb-bg-layer {
                    position: absolute;
                    inset: 0;
                    z-index: 0;
                    pointer-events: none;
                }

                .wb-particles {
                    position: absolute;
                    inset: 0;
                }

                .wb-particle {
                    position: absolute;
                    width: 2px;
                    height: 2px;
                    background: #FFF;
                    border-radius: 50%;
                    opacity: 0.15;
                    animation: wbFloat 6s ease-in-out infinite;
                }
                .p1 { top: 20%; left: 10% }
                .p2 { top: 70%; left: 20%; animation-delay: 1s }
                .p3 { top: 40%; left: 40%; width: 3px; height: 3px; animation-delay: 2s }
                .p4 { top: 80%; left: 55%; animation-delay: 1.5s }
                .p5 { top: 15%; left: 65%; width: 1px; height: 1px; animation-delay: 0.5s }
                .p6 { top: 60%; left: 85%; animation-delay: 2.5s }

                @keyframes wbFloat {
                    0%, 100% { transform: translateY(0); opacity: 0.15; }
                    50% { transform: translateY(-20px); opacity: 0.4; }
                }

                .wb-stage-container {
                    position: absolute;
                    right: -60px;
                    top: 0;
                    height: 100%;
                    width: 50%;
                    z-index: 1;
                    pointer-events: none;
                }

                .wb-stage-svg {
                    width: 100%;
                    height: 100%;
                }

                .wb-content {
                    position: relative;
                    z-index: 10;
                    padding: 40px 60px;
                    width: 100%;
                }

                .wb-text-container {
                    max-width: 520px;
                    animation: wbContentEntry 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                }

                @keyframes wbContentEntry {
                    from { opacity: 0; transform: translateX(-40px); }
                    to { opacity: 1; transform: translateX(0); }
                }

                .wb-label {
                    display: inline-block;
                    padding: 4px 10px;
                    border: 1px solid rgba(245, 118, 36, 0.4);
                    border-radius: 4px;
                    color: #F57624;
                    font-size: 0.65rem;
                    font-weight: 700;
                    letter-spacing: 0.15em;
                    margin-bottom: 16px;
                    background: rgba(245, 118, 36, 0.05);
                }

                .wb-title {
                    font-size: clamp(1.6rem, 3.8vw, 2.5rem);
                    font-weight: 900;
                    color: #FFFFFF;
                    line-height: 1.15;
                    letter-spacing: -0.04em;
                    margin-bottom: 24px;
                    text-wrap: balance;
                }

                .wb-title-bold {
                    color: #F57624;
                    filter: drop-shadow(0 0 10px rgba(245, 118, 36, 0.25));
                }

                .wb-details-wrapper {
                    margin-bottom: 24px;
                }

                .wb-date {
                    font-size: 1.1rem;
                    margin-bottom: 8px;
                    display: flex;
                    align-items: center;
                }

                .wb-date-highlight {
                    color: #F57624;
                    font-weight: 800;
                }

                .wb-date-spacer {
                    margin: 0 10px;
                    opacity: 0.3;
                }

                .wb-date-time {
                    color: #FFFFFF;
                    font-weight: 600;
                    opacity: 0.9;
                }

                .wb-desc {
                    font-size: 0.95rem;
                    color: #9CA3AF;
                    line-height: 1.5;
                    max-width: 440px;
                }

                .wb-cta {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    padding: 14px 40px;
                    background: #F57624;
                    color: #FFFFFF !important;
                    font-size: 0.95rem;
                    font-weight: 800;
                    border-radius: 12px;
                    text-decoration: none;
                    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                    box-shadow: 0 10px 30px rgba(245, 118, 36, 0.25);
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                    margin-top: 20px;
                }

                .wb-cta:hover {
                    transform: translateY(-5px) scale(1.03);
                    box-shadow: 0 15px 45px rgba(245, 118, 36, 0.45);
                    background: #e06a1c;
                }

                @media (max-width: 1200px) {
                    .wb-promo-container { width: 85% }
                }

                @media (max-width: 900px) {
                    .wb-promo-wrapper { padding: calc(var(--header-height) + 20px) 0 20px; }
                    .wb-promo-container { width: 92%; }
                    .wb-promo-card { flex-direction: column; text-align: center; padding: 30px 20px 40px; min-height: auto; }
                    .wb-content { padding: 0; }
                    .wb-stage-container { 
                        position: relative; 
                        width: 100%; 
                        right: 0; 
                        opacity: 0.15; 
                        transform: scale(1.2); 
                        z-index: 0; 
                        height: 160px; 
                        margin-bottom: -110px; 
                        order: -1; 
                    }
                    .wb-text-container { max-width: 100%; display: flex; flex-direction: column; align-items: center; }
                    .wb-date { justify-content: center; }
                    .wb-desc { max-width: 100%; }
                    .wb-promo-tag { left: 50%; transform: translateX(-50%); top: -12px; }
                }

                @media (max-width: 600px) {
                    .wb-promo-container { width: 95% }
                    .wb-title { font-size: 1.5rem }
                    .wb-cta { width: 100% }
                }
            `}</style>
        </section>
    );
};

export default WorkshopBanner;
