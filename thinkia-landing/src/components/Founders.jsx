import React from 'react';
import cesarImg from '../assets/cesar.png';
import johnImg from '../assets/john.png';

const Founders = () => {
    const founders = [
        {
            name: "César Arbeláez",
            role: "Cofundador",
            image: cesarImg,
            link: "https://www.tiktok.com/@cesaroficial.ai"
        },
        {
            name: "John Bermúdez",
            role: "Cofundador",
            image: johnImg,
            link: "https://www.instagram.com/johnproductero"
        }
    ];

    return (
        <section id="founders" className="section founders-section">
            <div className="container">
                <div className="founders-header">
                    <h2>Aquí enseñan quienes construyen.</h2>
                    <p className="subtitle">
                        Personas que diseñan sistemas reales con inteligencia artificial.
                    </p>
                </div>

                <div className="founders-grid">
                    {founders.map((founder, index) => (
                        <div key={index} className="founder-card">
                            <div className="founder-image-container">
                                <a href={founder.link} target="_blank" rel="noopener noreferrer" style={{ display: 'block', cursor: 'pointer' }}>
                                    <img
                                        src={founder.image}
                                        alt={founder.name}
                                        className="founder-image"
                                        style={{ transition: 'transform 0.3s ease' }}
                                        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                                        onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                                    />
                                </a>
                            </div>
                            <div className="founder-info">
                                <h3>{founder.name}</h3>
                                <p className="founder-role">{founder.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Founders;
