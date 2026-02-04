import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const PrerenderReady = () => {
  const location = useLocation();

  useEffect(() => {
    // Signal that page is loading
    (window as any).prerenderReady = false;
    
    // After a short delay (to allow Helmet to update), signal ready
    const timer = setTimeout(() => {
      (window as any).prerenderReady = true;
    }, 300);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return null;
};

export default PrerenderReady;
