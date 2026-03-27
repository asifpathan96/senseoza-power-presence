import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, TrendingUp, Users, Zap, Brain, Search, Share2, FileText, MousePointerClick, Globe, Target, BarChart, Shield, Lightbulb, Award, Building } from 'lucide-react';
import { useCountUp } from '@/hooks/use-count-up';
import ParticleBackground from '@/components/ParticleBackground';
import SEOHead from '@/components/SEOHead';
import { organizationSchema } from '@/utils/schema';
import { AnimatedSection, StaggerContainer, StaggerItem, FloatingElement } from '@/components/AnimatedSection';
import { motion } from 'framer-motion';
import heroBg from '@/assets/hero-bg.jpg';
import serviceAI from '@/assets/service-ai-marketing.png';
import serviceSEO from '@/assets/service-seo.png';
import serviceSocial from '@/assets/service-social-media.png';
import serviceContent from '@/assets/service-content.png';
import servicePPC from '@/assets/service-ppc.png';
import serviceWeb from '@/assets/service-web-design.png';
import seoImage from '@/assets/seo.jpg';
import aiMarketingImage from '@/assets/ai-marketing.jpg';
import socialMediaImage from '@/assets/social-media.jpg';
import logoPantaloons from '@/assets/clients/pantaloons.webp';
import logoFastrack from '@/assets/clients/fastrack.png';
import logoKohler from '@/assets/clients/kohler.jpg';
import logoTitan from '@/assets/clients/titan.jpg';
import logoSukhwani from '@/assets/clients/sukhwani.jpg';
import logoPanchshil from '@/assets/clients/panchshil-new.png';
import logoSpotless from '@/assets/clients/spotless.jpeg';
import logoBanesab from '@/assets/clients/banesab.jpg';
import logoAurum from '@/assets/clients/aurum.png';
import logoAyodhya from '@/assets/clients/ayodhya.png';
import logoRadhakirti from '@/assets/clients/radhakirti.jpeg';
import sectionDifferentiators from '@/assets/section-differentiators.png';
import sectionProcess from '@/assets/section-process.png';
import sectionWhyChoose from '@/assets/section-why-choose.png';
import sectionCta from '@/assets/section-cta.png';
const Home = () => {
  const stats = [{
    number: 500,
    suffix: '+',
    label: 'Successful Campaigns',
    icon: TrendingUp
  }, {
    number: 97,
    suffix: '%',
    label: 'Client Satisfaction',
    icon: Sparkles
  }, {
    number: 5,
    suffix: '+',
    label: 'Years Experience',
    icon: Users
  }, {
    number: 10,
    suffix: 'M+',
    label: 'Revenue Generated',
    icon: Zap
  }];
  const StatsCard = ({
    stat,
    index
  }: {
    stat: typeof stats[0];
    index: number;
  }) => {
    const {
      count,
      ref
    } = useCountUp(stat.number, 2500);
    const IconComponent = stat.icon;
    return <motion.div ref={ref} initial={{
      opacity: 0,
      y: 40
    }} whileInView={{
      opacity: 1,
      y: 0
    }} viewport={{
      once: true
    }} transition={{
      duration: 0.6,
      delay: index * 0.1
    }} whileHover={{
      y: -8,
      transition: {
        duration: 0.3
      }
    }} className="relative group">
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity" />
        <div className="relative bg-gradient-to-br from-primary via-primary/90 to-accent rounded-2xl p-6 md:p-8 overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12" />
          <div className="relative z-10">
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-white/20 flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform">
              <IconComponent className="h-6 md:h-7 w-6 md:w-7 text-white" />
            </div>
            <div className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-2">
              {count}{stat.suffix}
            </div>
            <div className="text-sm font-medium text-white/80 uppercase tracking-wider">
              {stat.label}
            </div>
          </div>
        </div>
      </motion.div>;
  };
  const differentiators = [{
    icon: Brain,
    title: 'AI-Driven Intelligence',
    description: 'We leverage advanced artificial intelligence and machine learning algorithms to analyze market trends, predict customer behavior, and optimize campaigns in real-time.'
  }, {
    icon: BarChart,
    title: 'Data-Obsessed Strategy',
    description: 'Every decision we make is backed by data. We track, measure, and analyze over 100+ performance metrics to ensure your marketing investment delivers quantifiable returns.'
  }, {
    icon: Target,
    title: 'Full-Funnel Expertise',
    description: 'From awareness to advocacy, we manage every stage of your customer journey with consistent messaging and maximum conversion rates across all channels.'
  }, {
    icon: Shield,
    title: 'Transparent Reporting',
    description: "You'll always know where your money goes. Our detailed monthly reports break down performance metrics and ROI calculations in plain English."
  }];
  const services = [{
    icon: Search,
    title: 'Search Engine Optimization',
    description: 'Dominate search rankings with proven SEO strategies combining technical optimization, content excellence, and authoritative link-building.',
    image: serviceSEO,
    link: '/services/seo'
  }, {
    icon: MousePointerClick,
    title: 'Pay-Per-Click Advertising',
    description: 'Generate immediate, qualified traffic with expertly managed paid advertising campaigns optimized for maximum ROAS.',
    image: servicePPC,
    link: '/services/ppc-ads'
  }, {
    icon: Share2,
    title: 'Social Media Marketing',
    description: 'Build a loyal community and drive engagement with strategic social media management that turns followers into customers.',
    image: serviceSocial,
    link: '/services/social-media'
  }, {
    icon: FileText,
    title: 'Content Marketing',
    description: 'Attract and convert ideal customers with high-quality content that establishes your authority and drives organic traffic.',
    image: serviceContent,
    link: '/services/content-marketing'
  }, {
    icon: Brain,
    title: 'AI Marketing Automation',
    description: 'Scale your marketing efforts without scaling your team using AI-driven automation tools that personalize experiences.',
    image: serviceAI,
    link: '/services/ai-marketing'
  }, {
    icon: Globe,
    title: 'Website Design & Development',
    description: 'High-converting websites optimized for performance, user experience, and search engines.',
    image: serviceWeb,
    link: '/services/web-design'
  }];
  const process = [{
    step: '01',
    title: 'Discovery & Audit',
    description: 'We start by understanding your business, goals, target audience, and current marketing performance.',
    icon: Search
  }, {
    step: '02',
    title: 'Strategy Development',
    description: 'We create a customized marketing roadmap with clear objectives, KPIs, and timelines.',
    icon: Target
  }, {
    step: '03',
    title: 'Implementation',
    description: 'Our expert team executes the strategy across all channels, continuously testing and optimizing.',
    icon: Zap
  }, {
    step: '04',
    title: 'Reporting & Scaling',
    description: 'You receive detailed performance reports. We scale winning strategies to maximize growth.',
    icon: TrendingUp
  }];
  const industries = ['E-commerce & Retail', 'SaaS & Technology', 'Healthcare & Wellness', 'Professional Services', 'Real Estate', 'Manufacturing & B2B', 'Hospitality & Tourism', 'Education'];
  const whyChooseUs = [{
    icon: Award,
    title: 'Proven Track Record',
    description: 'Over 50+ successful campaigns delivered'
  }, {
    icon: Users,
    title: 'Expert Team',
    description: 'Certified specialists in SEO, PPC, social media, and content marketing'
  }, {
    icon: Brain,
    title: 'AI-Powered Insights',
    description: 'Leveraging technology for smarter decision-making'
  }, {
    icon: Lightbulb,
    title: 'Custom Solutions',
    description: 'No cookie-cutter packages—every strategy is tailored to you'
  }, {
    icon: Shield,
    title: 'Transparent Pricing',
    description: 'Clear, predictable pricing with no hidden fees'
  }, {
    icon: Sparkles,
    title: 'Dedicated Support',
    description: "Your success is our priority—we're always here to help"
  }];
  const blogPosts = [{
    title: 'How AI is Revolutionizing Digital Marketing in 2024',
    excerpt: 'Discover the latest AI tools and strategies transforming how brands connect with audiences.',
    category: 'AI Marketing',
    date: 'Dec 10, 2024',
    readTime: '5 min read',
    image: aiMarketingImage,
    slug: 'ai-revolutionizing-digital-marketing-2024'
  }, {
    title: "SEO Trends You Can't Ignore This Year",
    excerpt: 'Stay ahead of algorithm updates with these proven SEO strategies for better rankings.',
    category: 'SEO',
    date: 'Dec 8, 2024',
    readTime: '4 min read',
    image: seoImage,
    slug: 'seo-trends-2024'
  }, {
    title: 'Building Brand Authority on Social Media',
    excerpt: 'Learn how to create authentic connections and grow your brand presence online.',
    category: 'Social Media',
    date: 'Dec 5, 2024',
    readTime: '6 min read',
    image: socialMediaImage,
    slug: 'building-brand-authority-social-media'
  }];
  return <div className="min-h-screen bg-background">
      <SEOHead 
        title="Senseoza | AI-Powered Digital Marketing Agency in Pune" 
        description="Transform your digital presence with Senseoza, Pune's leading AI-powered digital marketing agency. Expert SEO, social media, PPC & web design services. Call 9168411743 for a free consultation." 
        canonicalUrl="https://senseoza.com/" 
        schema={organizationSchema} 
      />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 gradient-hero" />
          <div className="absolute inset-0 dot-pattern opacity-30" />
          <ParticleBackground />
        </div>

        <FloatingElement className="absolute top-1/4 left-10 w-64 h-64 bg-accent/20 rounded-full blur-3xl" delay={0} />
        <FloatingElement className="absolute bottom-1/4 right-10 w-80 h-80 bg-primary/20 rounded-full blur-3xl" delay={2} />
        
        <div className="container mx-auto px-4 z-10 py-32">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6
          }} className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-8">
              <Sparkles className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium text-white/90">AI-Powered Digital Marketing</span>
            </motion.div>
            
            <motion.h1 initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.1
          }} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6 leading-tight">
              Transform Your Digital Presence Into{' '}
              <span className="text-accent">Measurable Growth</span>
            </motion.h1>
            
            <motion.p initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.2
          }} className="text-lg md:text-xl text-white/80 mb-10 max-w-3xl mx-auto leading-relaxed">
              Senseoza combines cutting-edge AI technology with proven marketing strategies to deliver results that matter: increased revenue, qualified leads, and sustainable growth.
            </motion.p>
            
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.3
          }} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="w-full sm:w-auto px-8 py-6 text-base bg-white text-primary hover:bg-white/90 shadow-xl shadow-white/20 hover:shadow-2xl transition-all duration-300">
                  Get Your Free Marketing Audit
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/services">
                <Button size="lg" variant="outline" className="w-full sm:w-auto px-8 py-6 text-base border-white/30 bg-white/5 text-white hover:bg-white/10 backdrop-blur-sm">
                  View Our Services
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>

        <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        delay: 1
      }} className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <motion.div animate={{
          y: [0, 10, 0]
        }} transition={{
          duration: 1.5,
          repeat: Infinity
        }} className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <motion.div animate={{
            opacity: [0.5, 1, 0.5]
          }} transition={{
            duration: 1.5,
            repeat: Infinity
          }} className="w-1 h-2 bg-white rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Trusted Clients Section */}
      <section className="py-16 md:py-24 relative overflow-hidden bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-primary/5 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2" />
        
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="text-center mb-14">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/15 border border-primary/20 rounded-full text-primary text-sm font-semibold mb-4">
              <Building className="h-4 w-4" />
              Our Clients
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-4">
              Trusted by <span className="text-accent">Leading Brands</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We've partnered with industry leaders across fashion, real estate, healthcare, and more
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {[
              { name: 'Pantaloons', logo: logoPantaloons },
              { name: 'Kohler', logo: logoKohler },
              { name: 'Titan', logo: logoTitan },
              { name: 'Sukhwani Builders', logo: logoSukhwani },
              { name: 'Panchshil Builders', logo: logoPanchshil },
              { name: 'Spotless Interiors', logo: logoSpotless },
              { name: 'Banesab Motors', logo: logoBanesab },
              { name: 'Fastrack', logo: logoFastrack },
              { name: 'Aurum Icecreams', logo: logoAurum },
              { name: 'Radhakirti Construction', logo: logoRadhakirti },
            ].map((client, index) => (
              <StaggerItem key={index}>
                <div className="group flex items-center justify-center h-28 rounded-2xl border border-primary/10 bg-card/80 backdrop-blur-md px-6 shadow-sm hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 hover:scale-105 hover:bg-card transition-all duration-300">
                  <img
                    src={client.logo}
                    alt={`${client.name} logo`}
                    className="max-h-16 max-w-[140px] object-contain group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                    width={140}
                    height={64}
                  />
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-semibold mb-4">
                <Sparkles className="h-4 w-4" />
                Why Choose Us
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-4">
                What Makes Senseoza <span className="text-accent">Different</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mb-8">
                We combine AI innovation with proven marketing expertise to deliver exceptional results
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {differentiators.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <motion.div key={index} whileHover={{ y: -4 }} className="group bg-card border border-border/50 rounded-xl p-5 hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                      <div className="w-11 h-11 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mb-3">
                        <IconComponent className="h-5 w-5 text-white" />
                      </div>
                      <h3 className="font-heading font-bold mb-1.5 group-hover:text-primary transition-colors">{item.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">{item.description}</p>
                    </motion.div>
                  );
                })}
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right" className="hidden lg:flex justify-center">
              <FloatingElement distance={15} duration={5}>
                <img src={sectionDifferentiators} alt="AI-driven marketing intelligence" className="w-full max-w-md drop-shadow-2xl" loading="lazy" width={800} height={800} />
              </FloatingElement>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-32 bg-secondary/30">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-semibold mb-4">
              What We Do
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-4">
              Our Core <span className="text-accent">Services</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Comprehensive digital marketing solutions designed to accelerate your growth
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
            const IconComponent = service.icon;
            return <StaggerItem key={index}>
                  <Link to={service.link} onClick={() => window.scrollTo(0, 0)}>
                    <motion.div whileHover={{
                  y: -8
                }} className="group bg-card rounded-2xl overflow-hidden border border-border/50 hover:border-primary/30 hover:shadow-2xl transition-all duration-500 h-full">
                      <div className="relative h-48 overflow-hidden">
                        <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
                        <div className="absolute bottom-4 left-4">
                          <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg group-hover:bg-primary transition-colors duration-300">
                            <IconComponent className="h-6 w-6 text-primary group-hover:text-white transition-colors" />
                          </div>
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-lg font-heading font-bold mb-3 group-hover:text-primary transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                          {service.description}
                        </p>
                        <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
                          Learn More
                          <ArrowRight className="h-4 w-4" />
                        </span>
                      </div>
                    </motion.div>
                  </Link>
                </StaggerItem>;
          })}
          </StaggerContainer>

          <AnimatedSection delay={0.4} className="text-center mt-12">
            <Link to="/services" onClick={() => window.scrollTo(0, 0)}>
              <Button size="lg" className="gradient-primary shadow-primary hover:shadow-lg transition-all">
                View All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 gradient-dark" />
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <FloatingElement className="absolute top-20 right-20 w-72 h-72 bg-accent/20 rounded-full blur-3xl" />
        <FloatingElement className="absolute bottom-20 left-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl" delay={3} />
        
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-semibold mb-4">
              Our Impact
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-white mb-4">
              Results That Speak <span className="text-accent">Volumes</span>
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Real numbers from real campaigns that have transformed businesses
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => <StatsCard key={index} stat={stat} index={index} />)}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left" className="hidden lg:flex justify-center order-1">
              <FloatingElement distance={12} duration={6}>
                <img src={sectionProcess} alt="Our proven marketing process" className="w-full max-w-sm drop-shadow-2xl" loading="lazy" width={800} height={800} />
              </FloatingElement>
            </AnimatedSection>
            <div className="order-2">
              <AnimatedSection>
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-semibold mb-4">
                  How We Work
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-4">
                  Our Process: From Strategy to <span className="text-accent">Success</span>
                </h2>
                <p className="text-muted-foreground text-lg mb-8">
                  A proven methodology that delivers consistent, measurable results
                </p>
              </AnimatedSection>
              <div className="space-y-4">
                {process.map((step, index) => {
                  const IconComponent = step.icon;
                  return (
                    <AnimatedSection key={index} delay={index * 0.1}>
                      <motion.div whileHover={{ x: 8, transition: { duration: 0.3 } }} className="group flex items-start gap-5 bg-card border border-border/50 rounded-xl p-5 hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                        <div className="relative shrink-0">
                          <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
                            <IconComponent className="h-7 w-7 text-white" />
                          </div>
                          <span className="absolute -top-2 -right-2 w-7 h-7 bg-background border-2 border-primary rounded-full flex items-center justify-center text-xs font-bold text-primary shadow-lg">
                            {step.step}
                          </span>
                        </div>
                        <div>
                          <h3 className="text-lg font-heading font-bold mb-1 group-hover:text-primary transition-colors">{step.title}</h3>
                          <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                        </div>
                      </motion.div>
                    </AnimatedSection>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute inset-0 dot-pattern opacity-10" />
        
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-semibold mb-4">
              Our Expertise
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-white mb-4">
              Industries We Serve
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              We have delivered exceptional results for businesses across diverse industries
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {industries.map((industry, index) => <StaggerItem key={index}>
                <motion.div whileHover={{
              scale: 1.05,
              y: -4
            }} className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-5 hover:bg-white/20 transition-all duration-300 text-center">
                  <Building className="h-8 w-8 text-accent mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <span className="text-white font-medium text-sm">{industry}</span>
                </motion.div>
              </StaggerItem>)}
          </StaggerContainer>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient" />
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-semibold mb-4">
              The Senseoza Advantage
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-4">
              Why Businesses Choose <span className="text-accent">Senseoza</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
            <StaggerContainer className="space-y-5 lg:col-span-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {whyChooseUs.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <StaggerItem key={index}>
                      <motion.div whileHover={{ y: -6 }} className="group bg-card border border-border/50 rounded-2xl p-5 hover:border-primary/30 hover:shadow-xl transition-all duration-300 h-full">
                        <div className="flex items-start gap-4">
                          <div className="w-11 h-11 shrink-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl flex items-center justify-center group-hover:from-primary group-hover:to-accent transition-all duration-300">
                            <IconComponent className="h-5 w-5 text-primary group-hover:text-white transition-colors" />
                          </div>
                          <div>
                            <h3 className="font-heading font-bold text-base mb-1">{item.title}</h3>
                            <p className="text-muted-foreground text-sm">{item.description}</p>
                          </div>
                        </div>
                      </motion.div>
                    </StaggerItem>
                  );
                })}
              </div>
            </StaggerContainer>
            <AnimatedSection direction="right" className="hidden lg:flex justify-center">
              <FloatingElement distance={12} duration={5} delay={1}>
                <img src={sectionWhyChoose} alt="Award-winning digital marketing agency" className="w-full max-w-xs drop-shadow-2xl" loading="lazy" width={800} height={800} />
              </FloatingElement>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 md:py-32 bg-secondary/30">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-semibold mb-4">
              Latest News
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-4">
              Latest <span className="text-accent">Insights</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Stay ahead with expert tips on SEO, AI marketing, and digital growth strategies
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => <StaggerItem key={index}>
                <Link to={`/blog/${post.slug}`} onClick={() => window.scrollTo(0, 0)}>
                  <motion.div whileHover={{
                y: -8
              }} className="group bg-card rounded-2xl overflow-hidden border border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-300 h-full">
                    <div className="relative h-48 overflow-hidden">
                      <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-primary/90 text-white text-xs font-semibold rounded-full">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-heading font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span>{post.date}</span>
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </StaggerItem>)}
          </StaggerContainer>

          <AnimatedSection delay={0.4} className="text-center mt-12">
            <Link to="/blog" onClick={() => window.scrollTo(0, 0)}>
              <Button size="lg" className="gradient-primary shadow-primary">
                Read More Articles
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute inset-0 dot-pattern opacity-10" />
        <FloatingElement className="absolute top-1/4 left-10 w-64 h-64 bg-accent/30 rounded-full blur-3xl" />
        <FloatingElement className="absolute bottom-1/4 right-10 w-80 h-80 bg-primary/30 rounded-full blur-3xl" delay={2} />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection>
              <FloatingElement distance={15} duration={4}>
                <Zap className="h-16 w-16 text-accent mx-auto mb-6" />
              </FloatingElement>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
                Ready to Grow Your Business?
              </h2>
              <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto">
                Do not let your competitors dominate the digital space. Partner with Senseoza and turn your digital presence into a powerful growth engine.
              </p>
              <Link to="/contact">
                <Button size="lg" className="px-10 py-6 text-lg bg-white text-primary hover:bg-white/90 shadow-xl shadow-white/20 hover:shadow-2xl transition-all">
                  Schedule Your Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>;
};
export default Home;