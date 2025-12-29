import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Globe, ArrowRight, CheckCircle, Target, Sparkles, BarChart3, Clock, Smartphone, ShoppingCart, Code, Palette, Wrench, Shield, Zap, Building2 } from 'lucide-react';
import SEOHead from '@/components/SEOHead';
import serviceImage from '@/assets/service-web-design.png';
import { AnimatedSection, StaggerContainer, StaggerItem, FloatingElement } from '@/components/AnimatedSection';
import { motion } from 'framer-motion';

const WebDesign = () => {
  const whyDesignMatters = [
    { title: 'Instant Impressions', description: 'You have just 0.05 seconds to make a positive first impression. 94% of first impressions relate specifically to design.' },
    { title: 'Your Always-On Salesperson', description: 'Your website sells 24/7/365. It must answer questions, overcome objections, build trust, and guide visitors to conversion.' },
    { title: 'Mobile-First Reality', description: 'Over 60% of web traffic comes from mobile devices. If your site isn\'t optimized for mobile, you\'re invisible to half your customers.' },
    { title: 'Speed Determines Success', description: '53% of mobile users abandon sites taking longer than 3 seconds to load. Every additional second costs conversions.' },
    { title: 'SEO Foundation', description: 'Google considers design factors including mobile-friendliness, speed, and UX when determining rankings.' },
  ];

  const services = [
    {
      icon: Palette,
      title: 'Custom Website Design',
      description: 'Designs that reflect your brand identity, appeal to your target audience, guide visitors through intuitive journeys, and convert visitors into customers.',
    },
    {
      icon: Smartphone,
      title: 'Responsive & Mobile-First',
      description: 'Flawless performance across all devices, touch-friendly navigation, fast loading on mobile networks, and responsive layouts for any screen size.',
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce Development',
      description: 'Shopify, WooCommerce, Magento expertise. Shopping cart optimization, secure payments, inventory management, and abandoned cart recovery.',
    },
    {
      icon: Code,
      title: 'WordPress Development',
      description: 'Custom theme development, plugin integration, WooCommerce, page builders (Elementor, Divi, Gutenberg), security hardening, and performance optimization.',
    },
    {
      icon: Target,
      title: 'Landing Page Design',
      description: 'Single-purpose design for one conversion goal, A/B testing-ready, fast-loading, form optimization, trust signals, and compelling CTAs.',
    },
    {
      icon: Wrench,
      title: 'Website Redesign',
      description: 'Comprehensive audits, competitive analysis, modern design implementation, improved UX, content migration, and SEO preservation.',
    },
    {
      icon: Sparkles,
      title: 'UI/UX Design',
      description: 'User research and personas, wireframing and prototyping, user flow mapping, usability testing, and WCAG accessibility compliance.',
    },
    {
      icon: Shield,
      title: 'Maintenance & Support',
      description: 'Regular updates, security monitoring, daily backups, performance monitoring, uptime monitoring, content updates, and technical support.',
    },
  ];

  const processPhases = [
    {
      phase: 'Weeks 1-2',
      title: 'Discovery and Strategy',
      items: ['Business goals alignment', 'Target audience research', 'Competitive analysis', 'Content audit and planning', 'Site architecture and sitemaps'],
    },
    {
      phase: 'Weeks 3-4',
      title: 'Design',
      items: ['Mood board and style exploration', 'Wireframe creation', 'High-fidelity mockups', 'Mobile and desktop designs', 'Client feedback and revisions'],
    },
    {
      phase: 'Weeks 5-7',
      title: 'Development',
      items: ['Frontend development', 'Backend development', 'CMS integration', 'Third-party integrations', 'Content population'],
    },
    {
      phase: 'Week 8',
      title: 'Testing and Launch',
      items: ['Cross-browser testing', 'Mobile device testing', 'Performance optimization', 'SEO setup', 'Analytics integration', 'Launch!'],
    },
  ];

  const features = [
    'Mobile-Responsive Design',
    'SEO-Optimized Foundation',
    'Fast Loading Speeds (<3 seconds)',
    'Security Hardening & SSL',
    'Scalable Architecture',
    'Analytics Integration',
    'User-Friendly CMS',
    'Conversion-Focused Design',
    'Accessibility Compliance (WCAG)',
    'Brand Consistency',
  ];

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Custom Web Design & Development | Conversion-Focused Websites | Senseoza"
        description="Professional web design and development that converts visitors into customers. Mobile-responsive, SEO-optimized, built for performance and results."
        canonicalUrl="https://senseoza.com/services/web-design"
      />
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center gradient-hero overflow-hidden pt-32 md:pt-36">
        <FloatingElement className="absolute top-20 left-10 w-72 h-72 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 blur-3xl" delay={0} />
        <FloatingElement className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-gradient-to-r from-accent/20 to-primary/20 blur-3xl" delay={2} />
        <FloatingElement className="absolute top-1/2 left-1/3 w-64 h-64 rounded-full bg-primary/10 blur-3xl" delay={4} />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="right">
              <motion.div 
                className="p-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl w-fit mb-6 border border-white/10"
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Globe className="h-12 w-12 text-accent icon-3d" />
              </motion.div>
              <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 text-accent">
                Web Design That Converts Visitors Into Customers
              </h1>
              <p className="text-xl text-primary-foreground/80 mb-6">
                Your website serves as your digital storefront, 24/7 salesperson, and often the first impression potential customers form of your business. At Senseoza, we design and develop websites with singular focus on results. Beautiful design matters, but we prioritize performance, user experience, and conversion optimization above all else.
              </p>
              <p className="font-semibold text-primary-foreground mb-8">
                Custom Design | E-commerce | WordPress | Landing Pages
              </p>
              <Link to="/contact" className="inline-block mb-12">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg hover:shadow-xl transition-all duration-300">
                  Get Your Free Website Audit <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </AnimatedSection>
            <AnimatedSection direction="left" delay={0.2}>
              <motion.div 
                className="relative"
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 to-accent/30 rounded-3xl blur-2xl opacity-60" />
                <img 
                  src={serviceImage} 
                  alt="Web Design & Development illustration" 
                  className="relative w-full h-auto rounded-2xl shadow-2xl border border-white/10"
                />
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Why Design Matters Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient" />
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-semibold mb-6">
              <Sparkles className="h-4 w-4" /> Business Impact
            </span>
            <h2 className="text-4xl font-heading font-bold">
              The Business Impact of Website Design
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {whyDesignMatters.map((item, index) => (
              <AnimatedSection key={index} direction={index % 2 === 0 ? 'left' : 'right'}>
                <motion.div 
                  className="h-full p-6 bg-card rounded-2xl border border-border hover:border-primary/50 transition-all duration-300"
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <h3 className="text-lg font-heading font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero opacity-50" />
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-semibold mb-6">
              Comprehensive Web Solutions
            </span>
            <h2 className="text-4xl font-heading font-bold text-white">
              Comprehensive Web Solutions
            </h2>
          </AnimatedSection>
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <StaggerItem key={index}>
                  <motion.div 
                    className="h-full p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300"
                    whileHover={{ y: -5, scale: 1.02 }}
                  >
                    <div className="p-3 bg-white/20 rounded-xl w-fit mb-4">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-heading font-bold text-white mb-3">{service.title}</h3>
                    <p className="text-white/70 text-sm">{service.description}</p>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient" />
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-semibold mb-6">
              <Clock className="h-4 w-4" /> Our Methodology
            </span>
            <h2 className="text-4xl font-heading font-bold">
              Our Design and Development Methodology
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {processPhases.map((phase, index) => (
              <AnimatedSection key={index}>
                <motion.div 
                  className="h-full p-6 bg-card rounded-2xl border border-border hover:border-primary/50 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="text-sm font-bold text-primary mb-2">{phase.phase}</div>
                  <h3 className="text-xl font-heading font-bold mb-4">{phase.title}</h3>
                  <ul className="space-y-2">
                    {phase.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-semibold mb-6">
              <Zap className="h-4 w-4" /> Standard Features
            </span>
            <h2 className="text-4xl font-heading font-bold mb-4">
              What Every Senseoza Website Includes
            </h2>
          </AnimatedSection>
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <StaggerItem key={index}>
                <motion.div 
                  className="flex items-center gap-3 p-4 bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-300"
                  whileHover={{ scale: 1.02, y: -2 }}
                >
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="font-medium text-sm">{feature}</span>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Custom Solutions Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection className="text-center">
              <h2 className="text-4xl font-heading font-bold mb-6">
                Tailored to Your Needs
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Website requirements vary dramatically by business type, size, and objectives. A local service business needs vastly different features than a national e-commerce brand. B2B companies require different approaches than B2C. That's why we don't force you into predefined packages. Instead, we develop custom solutions based on your specific goals, audience, functionality requirements, budget parameters, and timeline constraints.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero relative overflow-hidden">
        <FloatingElement className="absolute top-10 right-20 w-48 h-48 rounded-full bg-accent/20 blur-3xl" delay={1} />
        <FloatingElement className="absolute bottom-10 left-20 w-64 h-64 rounded-full bg-primary/20 blur-3xl" delay={3} />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <AnimatedSection>
            <h2 className="text-4xl font-heading font-bold text-accent mb-6">
              Ready to Launch a High-Converting Website?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Stop losing customers to outdated, slow, or confusing websites. Partner with Senseoza to build a digital presence optimized for conversions and designed to drive real business growth.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-lg hover:shadow-xl transition-all duration-300">
                Get Your Free Website Audit <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default WebDesign;