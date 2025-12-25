import { useState, useEffect, useCallback } from 'react';
import { X, Gift, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ExitIntentPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  const handleExitIntent = useCallback((e: MouseEvent) => {
    // Detect when mouse leaves the viewport from the top
    if (e.clientY <= 0 && !hasShown) {
      setIsVisible(true);
      setHasShown(true);
    }
  }, [hasShown]);

  useEffect(() => {
    // Check if popup was already shown in this session
    const shown = sessionStorage.getItem('exitPopupShown');
    if (shown) {
      setHasShown(true);
      return;
    }

    // Add exit intent listener
    document.addEventListener('mouseout', handleExitIntent);

    // Also trigger on scroll up after scrolling down
    let lastScrollY = window.scrollY;
    let hasScrolledDown = false;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > 500) {
        hasScrolledDown = true;
      }

      // If user scrolls up significantly after scrolling down
      if (hasScrolledDown && currentScrollY < lastScrollY - 200 && !hasShown) {
        setIsVisible(true);
        setHasShown(true);
        sessionStorage.setItem('exitPopupShown', 'true');
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      document.removeEventListener('mouseout', handleExitIntent);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleExitIntent, hasShown]);

  const closePopup = () => {
    setIsVisible(false);
    sessionStorage.setItem('exitPopupShown', 'true');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-foreground/60 backdrop-blur-sm animate-fade-in"
        onClick={closePopup}
      />
      
      {/* Popup */}
      <div className="relative bg-card rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden animate-scale-in">
        {/* Close button */}
        <button
          onClick={closePopup}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-background/80 hover:bg-background transition-colors"
        >
          <X className="h-5 w-5 text-muted-foreground" />
        </button>

        {/* Header gradient */}
        <div className="h-2 gradient-hero" />

        {/* Content */}
        <div className="p-8 text-center">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full gradient-primary flex items-center justify-center">
            <Gift className="h-10 w-10 text-primary-foreground" />
          </div>

          <h2 className="text-3xl font-heading font-bold mb-4">
            Wait! Don't Miss Out
          </h2>

          <p className="text-muted-foreground mb-6">
            Get a <span className="text-primary font-semibold">FREE digital marketing audit</span> and discover how we can help grow your business with AI-powered strategies.
          </p>

          <div className="space-y-4">
            <ul className="text-left space-y-3 mb-6">
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary text-sm">✓</span>
                </div>
                <span className="text-muted-foreground">Comprehensive SEO analysis</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary text-sm">✓</span>
                </div>
                <span className="text-muted-foreground">Competitor insights & opportunities</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary text-sm">✓</span>
                </div>
                <span className="text-muted-foreground">Custom growth recommendations</span>
              </li>
            </ul>

            <Link to="/contact" onClick={closePopup}>
              <Button size="lg" className="w-full gradient-primary text-lg">
                Claim Your Free Audit <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>

            <button
              onClick={closePopup}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              No thanks, I'll pass on this offer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExitIntentPopup;
