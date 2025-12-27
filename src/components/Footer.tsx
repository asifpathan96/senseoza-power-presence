import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-foreground via-foreground/95 to-foreground/90 border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-heading font-bold text-background mb-4">Senseoza</h3>
            <p className="text-background/80 font-medium mb-4">Turning Presence into Power</p>
            <p className="text-background/60 text-sm mb-4">
              We are an AI-powered digital marketing agency helping businesses grow through innovative strategies, data-driven insights, and creative excellence.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-background/60 hover:text-primary transition-base">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-background/60 hover:text-primary transition-base">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-background/60 hover:text-primary transition-base">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-background/60 hover:text-primary transition-base">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold mb-4 text-background">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" onClick={scrollToTop} className="text-background/60 hover:text-primary transition-base">About Us</Link></li>
              <li><Link to="/services" onClick={scrollToTop} className="text-background/60 hover:text-primary transition-base">Services</Link></li>
              <li><Link to="/case-studies" onClick={scrollToTop} className="text-background/60 hover:text-primary transition-base">Case Studies</Link></li>
              <li><Link to="/blog" onClick={scrollToTop} className="text-background/60 hover:text-primary transition-base">Blog</Link></li>
              <li><Link to="/contact" onClick={scrollToTop} className="text-background/60 hover:text-primary transition-base">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold mb-4 text-background">Services</h4>
            <ul className="space-y-2">
              <li><Link to="/services/ai-marketing" onClick={scrollToTop} className="text-background/60 hover:text-primary transition-base">AI Marketing</Link></li>
              <li><Link to="/services/seo" onClick={scrollToTop} className="text-background/60 hover:text-primary transition-base">SEO Services</Link></li>
              <li><Link to="/services/social-media" onClick={scrollToTop} className="text-background/60 hover:text-primary transition-base">Social Media</Link></li>
              <li><Link to="/services/content-marketing" onClick={scrollToTop} className="text-background/60 hover:text-primary transition-base">Content Marketing</Link></li>
              <li><Link to="/services/ppc-ads" onClick={scrollToTop} className="text-background/60 hover:text-primary transition-base">PPC & Paid Ads</Link></li>
              <li><Link to="/services/web-design" onClick={scrollToTop} className="text-background/60 hover:text-primary transition-base">Web Design</Link></li>
              <li><Link to="/services/email-automation" onClick={scrollToTop} className="text-background/60 hover:text-primary transition-base">Email Automation</Link></li>
              <li><Link to="/services/analytics" onClick={scrollToTop} className="text-background/60 hover:text-primary transition-base">Analytics</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold mb-4 text-background">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-background/60">
                <Mail className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <a href="mailto:hello@senseoza.com" className="hover:text-primary transition-colors">hello@senseoza.com</a>
              </li>
              <li className="flex items-start space-x-2 text-background/60">
                <Phone className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <a href="tel:+919168411743" className="hover:text-primary transition-colors">+91 9168411743</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center text-background/60">
          <p>&copy; {currentYear} Senseoza. All rights reserved. Turning Presence into Power.</p>
        </div>
      </div>
    </footer>
  );
};
