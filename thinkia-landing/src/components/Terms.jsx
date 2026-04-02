import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Terms = () => {
    return (
        <div style={{ backgroundColor: '#0C0F17', color: '#fff', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Header showApplyButton={false} />
            <main style={{ flex: 1, paddingTop: 'var(--header-height)' }}>
                <div className="container" style={{ maxWidth: '800px', padding: '4rem 1.5rem' }}>
                    <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '0.5rem', textAlign: 'center' }}>
                        TÉRMINOS Y CONDICIONES
                    </h1>
                    <p style={{ textAlign: 'center', color: 'rgba(255, 255, 255, 0.6)', marginBottom: '3rem' }}>
                        AI BUILDER PROGRAM — Última actualización: 09/02/2026
                    </p>

                    <div className="legal-content">
                        <section>
                            <h2>1. Quiénes somos</h2>
                            <p>Thinkia es una plataforma educativa enfocada en el desarrollo de criterio, pensamiento y construcción de soluciones con inteligencia artificial aplicada. El AI Builder Program es un programa formativo en vivo, de cupos limitados, orientado a personas que buscan pasar del uso de IA a la construcción real con IA.</p>
                        </section>

                        <section>
                            <h2>2. Alcance del programa</h2>
                            <p>El AI Builder Program es un programa educativo. No es una certificación oficial, no garantiza resultados económicos, empleabilidad, ingresos, ni validaciones académicas externas. El valor del programa depende directamente del nivel de compromiso, contexto y aplicación práctica de cada participante.</p>
                        </section>

                        <section>
                            <h2>3. Modalidad y acceso</h2>
                            <ul>
                                <li>Sesiones en vivo, en fechas y horarios previamente informados.</li>
                                <li>Acceso a plataforma privada con materiales de apoyo.</li>
                                <li>El acceso es personal e intransferible.</li>
                                <li>Thinkia se reserva el derecho de modificar fechas u horarios por causa justificada, informando oportunamente a los participantes.</li>
                            </ul>
                        </section>

                        <section>
                            <h2>4. Uso adecuado y conducta</h2>
                            <p>El participante se compromete a:</p>
                            <ul>
                                <li>Utilizar el contenido exclusivamente para su aprendizaje personal.</li>
                                <li>No grabar, redistribuir ni comercializar el contenido sin autorización expresa.</li>
                                <li>Mantener una conducta respetuosa dentro de la comunidad.</li>
                            </ul>
                            <p>Thinkia podrá suspender o cancelar el acceso de participantes que incumplan estas condiciones, sin obligación de reembolso.</p>
                        </section>

                        <section>
                            <h2>5. Propiedad intelectual</h2>
                            <p>Todos los contenidos, metodologías, frameworks, materiales y sesiones pertenecen a Thinkia. El participante adquiere un derecho de uso personal, no exclusivo y no transferible.</p>
                        </section>

                        <section>
                            <h2>6. Pagos y reembolsos</h2>
                            <ul>
                                <li>Los pagos se procesan a través de plataformas externas autorizadas.</li>
                                <li>No se realizan reembolsos una vez iniciado el programa, salvo obligación legal.</li>
                                <li>Las condiciones de preventa, descuentos o reservas se informan claramente antes del pago.</li>
                            </ul>
                        </section>

                        <section>
                            <h2>7. Responsabilidad</h2>
                            <p>Thinkia no se hace responsable por:</p>
                            <ul>
                                <li>Decisiones técnicas, profesionales o comerciales tomadas por el participante a partir del programa.</li>
                                <li>Resultados derivados de la implementación de conocimientos adquiridos.</li>
                            </ul>
                        </section>

                        <section>
                            <h2>8. Modificaciones</h2>
                            <p>Thinkia podrá actualizar estos términos cuando sea necesario. La versión vigente será siempre la publicada en la landing oficial.</p>
                        </section>

                        <section>
                            <h2>9. Contacto</h2>
                            <p>Para dudas relacionadas con estos términos: contacto@thinkia.com.co</p>
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

export default Terms;
