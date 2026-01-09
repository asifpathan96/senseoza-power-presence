import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, ArrowUpRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const services = [
    { name: 'AI Marketing', path: '/services/ai-marketing' },
    { name: 'SEO Services', path: '/services/seo' },
    { name: 'Social Media', path: '/services/social-media' },
    { name: 'Content Marketing', path: '/services/content-marketing' },
    { name: 'PPC & Paid Ads', path: '/services/ppc-ads' },
    { name: 'Web Design', path: '/services/web-design' },
  ];

  const socials = [
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
  ];

  return (
    <footer className="relative mt-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-dark" />
      <div className="absolute inset-0 dot-pattern opacity-30" />
      
      {/* Decorative blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />

      <div className="relative z-10">
        {/* CTA Section */}
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="bg-gradient-to-br from-primary/20 via-primary/10 to-accent/20 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/10">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-4">
                  <Sparkles className="h-4 w-4 text-accent" />
                  <span className="text-sm font-medium text-white/90">Start Your Journey</span>
                </div>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-white mb-3">
                  Ready to Transform Your Business?
                </h3>
                <p className="text-white/70 max-w-xl">
                  Let's discuss how we can help you achieve your digital marketing goals.
                </p>
              </div>
              <Link to="/contact" onClick={scrollToTop}>
                <button className="group px-8 py-4 bg-white text-foreground font-semibold rounded-xl hover:shadow-xl hover:shadow-white/20 transition-all duration-300 flex items-center gap-2">
                  Schedule Free Consultation
                  <ArrowUpRight className="h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="container mx-auto px-4 py-12 border-t border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Brand */}
            <div className="lg:col-span-1">
              <Link to="/" onClick={scrollToTop} className="inline-flex items-center gap-3 mb-6 group">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-xl opacity-60 blur-sm group-hover:opacity-80 transition-opacity duration-300" />
                  <div className="relative w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-neon">
                    <span className="text-lg font-bold text-white">S</span>
                  </div>
                </div>
                <span className="text-xl font-heading font-bold text-white tracking-tight">SENSEOZA</span>
              </Link>
              <p className="text-white/60 text-sm mb-6 leading-relaxed">
                We are an AI-powered digital marketing agency helping businesses grow through innovative strategies, data-driven insights, and creative excellence.
              </p>
              <div className="flex gap-3">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-heading font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      onClick={scrollToTop}
                      className="text-white/60 hover:text-accent transition-colors duration-300 text-sm flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent/50 group-hover:bg-accent transition-colors" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white font-heading font-semibold mb-6">Services</h4>
              <ul className="space-y-3">
                {services.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      onClick={scrollToTop}
                      className="text-white/60 hover:text-accent transition-colors duration-300 text-sm flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent/50 group-hover:bg-accent transition-colors" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-heading font-semibold mb-6">Contact Us</h4>
              <ul className="space-y-4">
                <li>
                  <a
                    href="mailto:hello@senseoza.com"
                    className="flex items-start gap-3 text-white/60 hover:text-accent transition-colors duration-300 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-accent/20 group-hover:border-accent/30 transition-all">
                      <Mail className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-xs text-white/40 mb-1">Email Us</p>
                      <p className="text-sm">hello@senseoza.com</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+919168411743"
                    className="flex items-start gap-3 text-white/60 hover:text-accent transition-colors duration-300 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-accent/20 group-hover:border-accent/30 transition-all">
                      <Phone className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-xs text-white/40 mb-1">Call Us</p>
                      <p className="text-sm">+91 9168411743</p>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-white/50 text-sm text-center md:text-left">
                © {currentYear} Senseoza. All rights reserved. Turning Presence into Power.
              </p>
              <button
                onClick={scrollToTop}
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
                aria-label="Scroll to top"
              >
                <ArrowUpRight className="h-4 w-4 rotate-[-45deg]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
