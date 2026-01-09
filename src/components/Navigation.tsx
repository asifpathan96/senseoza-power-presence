import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

const serviceLinks = [
  { name: 'SEO Services', path: '/services/seo' },
  { name: 'PPC Advertising', path: '/services/ppc-ads' },
  { name: 'Social Media Marketing', path: '/services/social-media' },
  { name: 'Content Marketing', path: '/services/content-marketing' },
  { name: 'AI-Powered Marketing', path: '/services/ai-marketing' },
  { name: 'Web Design & Development', path: '/services/web-design' },
  { name: 'Email Automation', path: '/services/email-automation' },
  { name: 'Analytics & Reporting', path: '/services/analytics' },
  { name: 'Influencer Marketing', path: '/services/influencer-marketing' },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'SERVICES', path: '/services', hasDropdown: true },
    { name: 'ABOUT US', path: '/about' },
    { name: 'BLOG', path: '/blog' },
    { name: 'CONTACT', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;
  const isServiceActive = location.pathname.startsWith('/services');

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 bg-white border-b border-border/50 ${
        scrolled ? 'shadow-md' : ''
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-11 h-11 bg-primary rounded-xl flex items-center justify-center shadow-primary group-hover:scale-105 transition-transform duration-300">
                <span className="text-lg font-bold text-white">S</span>
              </div>
            </div>
            <span className="text-xl font-heading font-bold text-foreground tracking-tight">
              SENSEOZA
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.path}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 + 0.2 }}
                className="relative"
                ref={link.hasDropdown ? servicesRef : undefined}
              >
                {link.hasDropdown ? (
                  <>
                    <button
                      onClick={() => setServicesOpen(!servicesOpen)}
                      className={`relative px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 flex items-center gap-1 ${
                        isServiceActive
                          ? 'text-primary' 
                          : 'text-foreground hover:text-primary'
                      }`}
                    >
                      {link.name}
                      <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence>
                      {servicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-border overflow-hidden"
                        >
                          <div className="py-2">
                            <Link
                              to="/services"
                              onClick={() => {
                                setServicesOpen(false);
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                              }}
                              className="block px-4 py-2.5 text-sm font-medium text-foreground hover:bg-primary/5 hover:text-primary transition-colors border-b border-border/50"
                            >
                              All Services
                            </Link>
                            {serviceLinks.map((service) => (
                              <Link
                                key={service.path}
                                to={service.path}
                                onClick={() => {
                                  setServicesOpen(false);
                                  window.scrollTo({ top: 0, behavior: 'smooth' });
                                }}
                                className={`block px-4 py-2.5 text-sm transition-colors ${
                                  isActive(service.path)
                                    ? 'bg-primary/5 text-primary font-medium'
                                    : 'text-muted-foreground hover:bg-primary/5 hover:text-foreground'
                                }`}
                              >
                                {service.name}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <Link
                    to={link.path}
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className={`relative px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
                      isActive(link.path)
                        ? 'text-primary' 
                        : 'text-foreground hover:text-primary'
                    }`}
                  >
                    {link.name}
                  </Link>
                )}
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
            >
              <Link to="/contact" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                <Button className="ml-4 bg-primary hover:bg-primary/90 text-white font-semibold px-6 shadow-primary hover:shadow-lg transition-all duration-300">
                  LET'S TALK
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg text-foreground hover:bg-secondary transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-4 space-y-2 bg-white rounded-2xl mb-4 px-2 border border-border">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {link.hasDropdown ? (
                      <>
                        <button
                          onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                          className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-all duration-300 ${
                            isServiceActive
                              ? 'text-primary font-semibold'
                              : 'text-foreground hover:bg-secondary'
                          }`}
                        >
                          {link.name}
                          <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                        </button>
                        <AnimatePresence>
                          {mobileServicesOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="overflow-hidden"
                            >
                              <div className="pl-4 py-2 space-y-1">
                                <Link
                                  to="/services"
                                  onClick={() => {
                                    setIsOpen(false);
                                    setMobileServicesOpen(false);
                                    window.scrollTo({ top: 0, behavior: 'smooth' });
                                  }}
                                  className="block px-4 py-2 text-sm rounded-lg text-foreground hover:bg-secondary font-medium"
                                >
                                  All Services
                                </Link>
                                {serviceLinks.map((service) => (
                                  <Link
                                    key={service.path}
                                    to={service.path}
                                    onClick={() => {
                                      setIsOpen(false);
                                      setMobileServicesOpen(false);
                                      window.scrollTo({ top: 0, behavior: 'smooth' });
                                    }}
                                    className={`block px-4 py-2 text-sm rounded-lg ${
                                      isActive(service.path)
                                        ? 'text-primary font-medium bg-primary/5'
                                        : 'text-muted-foreground hover:bg-secondary hover:text-foreground'
                                    }`}
                                  >
                                    {service.name}
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        to={link.path}
                        onClick={() => {
                          setIsOpen(false);
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className={`block px-4 py-3 rounded-lg transition-all duration-300 ${
                          isActive(link.path)
                            ? 'text-primary font-semibold'
                            : 'text-foreground hover:bg-secondary'
                        }`}
                      >
                        {link.name}
                      </Link>
                    )}
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="pt-2"
                >
                  <Link 
                    to="/contact" 
                    onClick={() => {
                      setIsOpen(false);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                  >
                    <Button className="w-full bg-primary hover:bg-primary/90 text-white font-semibold">
                      LET'S TALK
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};