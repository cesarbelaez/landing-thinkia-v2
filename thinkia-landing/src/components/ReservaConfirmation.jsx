import React from 'react';
import Header from './Header';

const ReservaConfirmation = () => {
    return (
        <div style={{
            backgroundColor: '#0C0F17',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            color: '#fff'
        }}>
            <Header showApplyButton={false} />

            <main style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '2rem',
                textAlign: 'center',
                marginTop: 'var(--header-height)'
            }}>
                <div style={{ mb: '2rem', fontSize: '4rem' }}>✅</div>
                <h1 style={{
                    fontSize: 'clamp(2rem, 5vw, 3rem)',
                    fontWeight: '800',
                    marginBottom: '1rem',
                    color: '#fff'
                }}>
                    Reserva confirmada
                </h1>
                <p style={{
                    fontSize: '1.25rem',
                    color: 'rgba(255, 255, 255, 0.8)',
                    marginBottom: '0.5rem'
                }}>
                    Gracias por reservar tu lugar.
                </p>
                <p style={{
                    fontSize: '1.1rem',
                    color: 'rgba(255, 255, 255, 0.6)',
                    maxWidth: '600px'
                }}>
                    En breve recibirás más información sobre los siguientes pasos.
                </p>

                {/* Disclaimer Block */}
                <div style={{
                    marginTop: '3rem',
                    paddingTop: '2rem',
                    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                    maxWidth: '600px',
                    fontSize: '0.9rem',
                    lineHeight: '1.6',
                    color: 'rgba(255, 255, 255, 0.5)',
                }}>
                    <p style={{ marginBottom: '1rem' }}>
                        Nuestro equipo de Thinkia Academy se pondrá en contacto contigo para los siguientes pasos del programa.
                    </p>
                    <p>
                        Si después de 5 días calendario no has recibido ningún mensaje, por favor escríbenos directamente a{' '}
                        <a
                            href="https://wa.me/573332823082"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: '#F57624', textDecoration: 'underline' }}
                        >
                            WhatsApp +57 333 282 3082
                        </a>{' '}
                        para ayudarte.
                    </p>
                </div>
            </main>
        </div>
    );
};

export default ReservaConfirmation;
