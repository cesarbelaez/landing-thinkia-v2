import React, { useState } from 'react';
import logo from '../assets/logo-thinkia.png';

const Header = ({ showApplyButton = true }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { title: "Qué es AI Builder", href: "#hero" },
    { title: "Cómo se construye", href: "#metodo" },
    { title: "Mentalidad Builder", href: "#mentalidad" },
    { title: "¿Es para ti?", href: "#fit" },
    { title: "Camino 12 semanas", href: "#camino" },
  ];

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: 'var(--header-height)',
      backgroundColor: 'rgba(12, 15, 23, 0.95)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--color-border)',
      display: 'flex',
      alignItems: 'center',
      zIndex: 1000
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 1rem', // Added horizontal padding for tighter layouts
      }}>
        {/* Real Logo Image */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
          <img
            src={logo}
            alt="AI Builder Program"
            style={{ height: '42px', width: 'auto' }} // Slightly smaller logo to save space
          />
        </a>

        {/* Mobile Toggle */}
        <button
          onClick={toggleMenu}
          className="mobile-toggle"
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            color: 'var(--color-text)',
            fontSize: '1.25rem',
            cursor: 'pointer'
          }}
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>

        {/* Navigation */}
        <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`} style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <ul style={{ display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
            {navLinks.map((link, index) => (
              <li key={index} style={{ whiteSpace: 'nowrap' }}>
                <a
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="nav-link"
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
          {showApplyButton && (
            <a href="#reserva" className="btn btn-primary header-cta" style={{
              padding: '0.625rem 1rem',
              fontSize: '0.75rem',
              whiteSpace: 'nowrap',
              flexShrink: 0
            }}>
              Aplicar ahora al Programa
            </a>
          )}
        </nav>
      </div>

      <style>{`
        .nav-link {
          position: relative;
          font-size: 0.825rem; // Slightly smaller font
          font-weight: 400;
          color: var(--color-text-secondary);
          transition: color 0.3s ease;
          white-space: nowrap;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 1px;
          background: var(--color-accent);
          transition: width 0.3s ease;
        }
        .nav-link:hover {
          color: var(--color-text);
        }
        .nav-link:hover::after {
          width: 100%;
        }
        .header-cta {
          transition: all 0.3s ease;
        }
        .header-cta:hover {
          transform: translateY(-2px);
          background-color: #393C42 !important;
          box-shadow: 0 4px 12px rgba(245, 118, 36, 0.3);
        }
        @media (max-width: 900px) {
          .mobile-toggle { display: block !important; }
          .nav-menu {
            position: fixed;
            top: var(--header-height);
            left: 0;
            width: 100%;
            height: 0;
            background: rgba(12, 15, 23, 0.98);
            overflow: hidden;
            transition: height 0.3s ease;
            border-bottom: 1px solid var(--color-border);
            flex-direction: column !important;
            padding: 0;
          }
          .nav-menu.active {
            height: auto;
            padding: 1.5rem;
          }
          .nav-menu ul {
            flex-direction: column !important;
            align-items: center !important;
            gap: 1.25rem !important;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
