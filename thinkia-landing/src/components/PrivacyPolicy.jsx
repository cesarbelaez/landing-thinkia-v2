import React from 'react';
import Header from './Header';
import Footer from './Footer';

const PrivacyPolicy = () => {
    return (
        <div style={{ backgroundColor: '#0C0F17', color: '#fff', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Header showApplyButton={false} />
            <main style={{ flex: 1, paddingTop: 'var(--header-height)' }}>
                <div className="container" style={{ maxWidth: '800px', padding: '4rem 1.5rem' }}>
                    <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '3rem', textAlign: 'center' }}>
                        POLÍTICA DE PRIVACIDAD – AI BUILDER PROGRAM
                    </h1>

                    <div className="legal-content">
                        <section>
                            <h2>1. Datos que recopilamos</h2>
                            <p>Podemos recopilar:</p>
                            <ul>
                                <li>Nombre, correo electrónico y datos de contacto.</li>
                                <li>Información de pago (gestionada por terceros, Thinkia no almacena datos financieros sensibles).</li>
                                <li>Información de uso de la plataforma y participación en sesiones.</li>
                            </ul>
                        </section>

                        <section>
                            <h2>2. Finalidad del uso de datos</h2>
                            <p>Utilizamos los datos para:</p>
                            <ul>
                                <li>Gestionar el acceso al programa.</li>
                                <li>Comunicación operativa y académica.</li>
                                <li>Envío de información relevante sobre Thinkia y programas relacionados.</li>
                                <li>Mejora continua de la experiencia educativa.</li>
                            </ul>
                        </section>

                        <section>
                            <h2>3. Base legal</h2>
                            <p>El tratamiento de datos se realiza con base en el consentimiento del usuario y en la ejecución de una relación contractual.</p>
                        </section>

                        <section>
                            <h2>4. Almacenamiento y seguridad</h2>
                            <p>Implementamos medidas técnicas y organizativas razonables para proteger la información personal. Aun así, ningún sistema es 100% infalible.</p>
                        </section>

                        <section>
                            <h2>5. Compartición de datos</h2>
                            <p>No vendemos ni cedemos datos personales. Solo se comparten con proveedores tecnológicos necesarios para la operación (plataformas de pago, streaming, CRM), bajo acuerdos de confidencialidad.</p>
                        </section>

                        <section>
                            <h2>6. Derechos del usuario</h2>
                            <p>El usuario puede:</p>
                            <ul>
                                <li>Acceder, actualizar o corregir sus datos.</li>
                                <li>Solicitar la eliminación de su información.</li>
                                <li>Retirar su consentimiento para comunicaciones comerciales.</li>
                            </ul>
                            <p>Las solicitudes pueden enviarse a contacto@thinkia.com.co</p>
                        </section>

                        <section>
                            <h2>7. Cookies</h2>
                            <p>La landing puede utilizar cookies para análisis y mejora de experiencia. El usuario puede gestionar su uso desde su navegador.</p>
                        </section>

                        <section>
                            <h2>8. Cambios en la política</h2>
                            <p>Thinkia podrá modificar esta política cuando sea necesario. Los cambios serán publicados en esta misma página.</p>
                        </section>

                        <section>
                            <h2>9. Aceptación</h2>
                            <p>El uso de la landing y la inscripción al programa implican la aceptación expresa de esta Política de Privacidad.</p>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />

            <style>{`
                .legal-content section {
                    margin-bottom: 2.5rem;
                }
                .legal-content h2 {
                    font-size: 1.25rem;
                    color: var(--color-accent);
                    margin-bottom: 1rem;
                }
                .legal-content p, .legal-content li {
                    font-size: 1rem;
                    line-height: 1.6;
                    color: rgba(255, 255, 255, 0.8);
                    margin-bottom: 0.5rem;
                }
                .legal-content ul {
                    padding-left: 1.5rem;
                    margin-bottom: 1rem;
                }
                .legal-content li {
                    margin-bottom: 0.25rem;
                }
            `}</style>
        </div>
    );
};

export default PrivacyPolicy;
