import Header from './components/Header';
import WorkshopBanner from './components/WorkshopBanner';
import Hero from './components/Hero';
import Founders from './components/Founders';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Section4 from './components/Section4';
import Section5 from './components/Section5';
import Section6 from './components/Section6';
import Footer from './components/Footer';

import PaymentConfirmation from './components/PaymentConfirmation';
import ReservaConfirmation from './components/ReservaConfirmation';
import PrivacyPolicy from './components/PrivacyPolicy';
import Terms from './components/Terms';
import { useEffect, useState } from 'react';

function App() {
  const [currentHash, setCurrentHash] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Check for paths (Production) or hashes (Local/Legacy)
  const isRoute = (route) => {
    // Check if a route is being forced (for static directory builds)
    if (window.FORCE_ROUTE === route) return true;

    // Check hash (e.g. #/pago-confirmado)
    if (currentHash === `#/${route}` || currentHash.includes(`#/${route}`)) return true;

    // Check pathname (e.g. /pago-confirmado or /ai-builder-program/pago-confirmado)
    const path = window.location.pathname;
    // Normalize path to remove trailing slash and ensure it ends with the route
    return path.replace(/\/$/, '').endsWith(`/${route}`) || path.includes(`/${route}/index.html`);
  };

  if (isRoute('pago-confirmado')) {
    return <PaymentConfirmation />;
  }

  if (isRoute('reserva-confirmada')) {
    return <ReservaConfirmation />;
  }

  if (isRoute('privacidad')) {
    return <PrivacyPolicy />;
  }

  if (isRoute('terminos')) {
    return <Terms />;
  }

  return (
    <div className="app">
      <Header />
      {/* <WorkshopBanner /> */}
      <Hero />
      <main>
        <Founders />
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
      </main>
      <Footer />
    </div>
  );
}

export default App;
