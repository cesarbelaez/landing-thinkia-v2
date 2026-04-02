import React from 'react';

const Section1 = () => {
  return (
    <section id="metodo" className="section" style={{ paddingTop: '48px', paddingBottom: '0' }}>
      <div className="container">


        {/* Title */}
        <h2 style={{
          textAlign: 'center',
          marginBottom: '3rem',
          fontSize: 'clamp(2rem, 5vw, 2.75rem)',
          color: 'var(--color-text)',
          letterSpacing: '-0.02em'
        }}>
          <span style={{ color: 'var(--color-text-muted)', fontWeight: 400 }}>Usar IA es fácil.</span> Construir es otro nivel.
        </h2>

        {/* 3-Card Grid */}
        <div className="cards-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1.5rem',
          maxWidth: '1100px',
          margin: '0 auto 48px auto'
        }}>

          {/* Card 1: User */}
          <div className="contrast-card">
            <div className="card-icon" style={{ opacity: 0.7 }}>
              {/* Chat Icon */}
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
            </div>
            <h3>Usas IA</h3>
            <p className="card-text">
              Abres una herramienta, haces una pregunta y copias la respuesta.
              Eso está bien. Es rápido. Es cómodo.
              Pero sigue siendo consumo. No estás creando nada propio.
            </p>
          </div>

          {/* Card 2: Builder */}
          <div className="contrast-card builder-card">
            <div className="card-icon" style={{ color: 'var(--color-accent)' }}>
              {/* Nodes Icon */}
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="18" cy="5" r="3" />
                <circle cx="6" cy="12" r="3" />
                <circle cx="18" cy="19" r="3" />
                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
              </svg>
            </div>
            <h3>Construyes con IA</h3>
            <p className="card-text">
              Aquí ya no solo preguntas: diseñas sistemas, conectas herramientas y armas soluciones que funcionan fuera del chat.
              Empiezas a pensar en arquitectura, en flujos y en resultados reales.
            </p>
          </div>

          {/* Card 3: Become Builder */}
          <div className="contrast-card builder-card">
            <div className="card-icon" style={{ color: 'var(--color-text)' }}>
              {/* Stack Icon */}
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
            </div>
            <h3>Te conviertes en Builder</h3>
            <p className="card-text">
              Dejas de buscar respuestas sueltas y empiezas a construir procesos completos.
              Iteras, corriges, mejoras… y sacas cosas al mundo.
              Eso es criterio. Eso es responsabilidad. Eso es construir.
            </p>
          </div>

        </div>


      </div>

      <style>{`
        .contrast-card {
            background: var(--color-bg-elevated);
            border: 1px solid var(--color-border);
            padding: 2.5rem 2rem;
            border-radius: 12px;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            transition: all 0.3s ease;
            position: relative;
            height: 100%;
        }

        .contrast-card:hover {
            transform: translateY(-4px);
            border-color: rgba(255, 255, 255, 0.1);
            background: #1A1F2E;
        }

        .card-icon {
            margin-bottom: 1.5rem;
        }

        .contrast-card h3 {
            font-size: 1.25rem;
            font-weight: 600;
            color: var(--color-text);
            margin: 0 0 1rem 0;
        }

        .card-text {
            font-size: 0.95rem;
            line-height: 1.6;
            color: var(--color-text-secondary);
            margin: 0;
        }

        @media (max-width: 900px) {
            .cards-grid {
                grid-template-columns: 1fr !important;
                max-width: 400px !important;
            }
        }
       `}</style>
    </section>
  );
};

export default Section1;
