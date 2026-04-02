import React, { useState, useEffect } from 'react';

const OnboardingModal = ({ isOpen, onClose, tipoIntentoCompra, wompiUrl }) => {
    const [formData, setFormData] = useState({
        nombre: '',
        telefono: '',
        email: '',
        pais: '',
        tipo_identificacion: '',
        nivel_ia: '',
        objetivo_ia: '',
        tipo_intento_compra: tipoIntentoCompra
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (isOpen) {
            setFormData(prev => ({ ...prev, tipo_intento_compra: tipoIntentoCompra }));
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
            setError(null);
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, tipoIntentoCompra]);

    if (!isOpen) return null;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);

        // Regla obligatoria: si tipo_identificacion está vacío, convertir a "Cédula"
        const dataToSubmit = {
            ...formData,
            tipo_identificacion: formData.tipo_identificacion || 'Cédula'
        };

        try {
            const response = await fetch('https://cesarbelaez.app.n8n.cloud/webhook-test/ai-builder-onboarding', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dataToSubmit)
            });

            if (response.status === 200) {
                onClose();
                window.location.href = wompiUrl;
            } else {
                throw new Error('Status no es 200');
            }
        } catch (err) {
            console.error('Error enviando a n8n:', err);
            setError('Hubo un problema registrando tus datos. Intenta nuevamente.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleOverlayClick = (e) => {
        if (e.target.classList.contains('modal-overlay')) {
            onClose();
        }
    };

    return (
        <div className="modal-overlay" onClick={handleOverlayClick}>
            <div className="modal-content glass-card">
                <button className="modal-close" onClick={onClose}>&times;</button>

                <div className="modal-header">
                    <h2 className="modal-title">Completa tu registro</h2>
                    <p className="modal-subtitle">Solo tardará un minuto</p>
                </div>

                <form className="modal-form" onSubmit={handleSubmit}>
                    <div className="form-grid">
                        <div className="form-group">
                            <label>Nombre completo *</label>
                            <input
                                type="text"
                                name="nombre"
                                value={formData.nombre}
                                onChange={handleChange}
                                required
                                placeholder="Ej: Juan Pérez"
                            />
                        </div>

                        <div className="form-group">
                            <label>Teléfono (WhatsApp) *</label>
                            <input
                                type="tel"
                                name="telefono"
                                value={formData.telefono}
                                onChange={handleChange}
                                required
                                placeholder="Ej: +57 300 000 0000"
                            />
                        </div>

                        <div className="form-group">
                            <label>Email *</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder="tu@email.com"
                            />
                        </div>

                        <div className="form-group">
                            <label>País *</label>
                            <input
                                type="text"
                                name="pais"
                                value={formData.pais}
                                onChange={handleChange}
                                required
                                placeholder="Ej: Colombia"
                            />
                        </div>

                        <div className="form-group">
                            <label>Tipo de identificación (Opcional)</label>
                            <select name="tipo_identificacion" value={formData.tipo_identificacion} onChange={handleChange}>
                                <option value="">Selecciona una opción</option>
                                <option value="Cédula">Cédula</option>
                                <option value="Tarjeta de identidad">Tarjeta de identidad</option>
                                <option value="Otro">Otro</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label>Nivel actual en IA (Opcional)</label>
                            <select name="nivel_ia" value={formData.nivel_ia} onChange={handleChange}>
                                <option value="">Selecciona tu nivel</option>
                                <option value="Usuario básico">Usuario básico</option>
                                <option value="Usuario avanzado">Usuario avanzado</option>
                                <option value="Técnico / Developer">Técnico / Developer</option>
                                <option value="Empresario / Decisor">Empresario / Decisor</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-group full-width">
                        <label>¿Qué te gustaría lograr con IA? (Opcional)</label>
                        <textarea
                            name="objetivo_ia"
                            value={formData.objetivo_ia}
                            onChange={handleChange}
                            placeholder="Cuéntanos tus metas..."
                            rows="2"
                        ></textarea>
                    </div>

                    {error && <div className="form-error">{error}</div>}

                    <div className="form-footer">
                        <button type="submit" className="btn-action-primary" disabled={isSubmitting}>
                            {isSubmitting ? 'Enviando...' : 'Continuar al pago'}
                            {!isSubmitting && <div className="btn-glow-effect" />}
                        </button>
                    </div>
                </form>
            </div>

            <style>{`
                .modal-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0, 0, 0, 0.85);
                    backdrop-filter: blur(8px);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 9999;
                    padding: 20px;
                }

                .modal-content {
                    width: 100%;
                    max-width: 600px;
                    max-height: 80vh;
                    background: #0C0F17;
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 20px;
                    position: relative;
                    padding: 24px;
                    overflow-y: auto;
                    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
                }

                /* Scrollbar styling */
                .modal-content::-webkit-scrollbar {
                    width: 6px;
                }
                .modal-content::-webkit-scrollbar-track {
                    background: rgba(255, 255, 255, 0.05);
                }
                .modal-content::-webkit-scrollbar-thumb {
                    background: var(--color-accent);
                    border-radius: 10px;
                }

                .modal-close {
                    position: absolute;
                    top: 16px;
                    right: 16px;
                    background: none;
                    border: none;
                    color: rgba(255, 255, 255, 0.5);
                    font-size: 28px;
                    cursor: pointer;
                    line-height: 1;
                    transition: color 0.2s;
                    z-index: 10;
                }

                .modal-close:hover {
                    color: #fff;
                }

                .modal-header {
                    text-align: center;
                    margin-bottom: 20px;
                }

                .modal-title {
                    font-size: 1.5rem;
                    font-weight: 800;
                    margin-bottom: 4px;
                    color: #fff;
                }

                .modal-subtitle {
                    font-size: 0.9rem;
                    color: rgba(255, 255, 255, 0.6);
                }

                .modal-form {
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                }

                .form-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 12px;
                }

                @media (max-width: 500px) {
                    .form-grid {
                        grid-template-columns: 1fr;
                    }
                }

                .form-group {
                    display: flex;
                    flex-direction: column;
                    gap: 6px;
                }

                .form-group.full-width {
                    grid-column: 1 / -1;
                }

                .form-group label {
                    font-size: 0.8rem;
                    font-weight: 600;
                    color: rgba(255, 255, 255, 0.8);
                    margin-left: 4px;
                }

                .form-group input, 
                .form-group select, 
                .form-group textarea {
                    background: rgba(255, 255, 255, 0.05);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 8px;
                    padding: 10px 14px;
                    color: #fff;
                    font-size: 0.9rem;
                    transition: all 0.2s;
                    outline: none;
                }

                .form-group select option {
                    background: #0C0F17;
                    color: #fff;
                }

                .form-group input:focus, 
                .form-group select:focus, 
                .form-group textarea:focus {
                    background: rgba(255, 255, 255, 0.08);
                    border-color: var(--color-accent);
                    box-shadow: 0 0 0 2px rgba(79, 140, 255, 0.2);
                }

                .form-error {
                    background: rgba(255, 79, 79, 0.1);
                    border: 1px solid rgba(255, 79, 79, 0.3);
                    color: #FF4F4F;
                    padding: 10px;
                    border-radius: 8px;
                    font-size: 0.85rem;
                    text-align: center;
                }

                .form-footer {
                    margin-top: 8px;
                }

                .btn-action-primary {
                    width: 100%;
                    height: 48px;
                    background: var(--color-accent);
                    color: #fff;
                    border: none;
                    border-radius: 12px;
                    font-weight: 700;
                    font-size: 1rem;
                    cursor: pointer;
                    position: relative;
                    overflow: hidden;
                    transition: all 0.3s ease;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .btn-action-primary:hover:not(:disabled) {
                    background: #393C42;
                    transform: scale(1.01);
                    box-shadow: 0 0 20px rgba(79, 140, 255, 0.4);
                }

                .btn-action-primary:disabled {
                    opacity: 0.6;
                    cursor: not-allowed;
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
            `}</style>
        </div>
    );
};

export default OnboardingModal;
