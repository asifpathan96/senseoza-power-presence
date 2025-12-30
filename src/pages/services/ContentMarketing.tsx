import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { FileText, ArrowRight, CheckCircle, Target, TrendingUp, Sparkles, BarChart3, Clock, Pen, Video, BookOpen, Mail, Award, Building2 } from 'lucide-react';
import SEOHead from '@/components/SEOHead';
import serviceImage from '@/assets/service-content.png';
import { AnimatedSection, StaggerContainer, StaggerItem, FloatingElement } from '@/components/AnimatedSection';
import { motion } from 'framer-motion';

const ContentMarketing = () => {
  const whyContentMarketing = [
    { title: 'Authority and Trust Building', description: 'Consistent production of valuable content positions your business as an industry expert that customers naturally trust.' },
    { title: 'Organic Traffic Generation', description: 'Search engines reward fresh, relevant content. Every piece creates another opportunity to rank for keywords customers search.' },
    { title: 'Complete Journey Support', description: 'Strategic content guides prospects through awareness, consideration, and decision stages of their buying process.' },
    { title: 'Lead Generation', description: 'Valuable content assets like ebooks and whitepapers serve as powerful lead magnets to build your email list.' },
    { title: 'SEO Amplification', description: 'More quality content means more indexed pages, more keywords, and more opportunities to earn backlinks.' },
    { title: 'Long-Term Asset Value', description: 'Unlike paid advertising, quality content continues attracting traffic and generating leads indefinitely.' },
  ];

  const services = [
    {
      icon: Target,
      title: 'Strategic Content Planning',
      description: 'Audience personas, competitive analysis, content audits, 90-day editorial calendars, and keyword strategy integration.',
    },
    {
      icon: Pen,
      title: 'Blog Writing and Optimization',
      description: 'In-depth articles (1,500-3,000 words), SEO optimization, engaging writing style, strategic internal linking, and compelling CTAs.',
    },
    {
      icon: FileText,
      title: 'Website Copywriting',
      description: 'Homepage and about pages, service and product pages, landing pages, category descriptions, team and career pages.',
    },
    {
      icon: Video,
      title: 'Video Content Production',
      description: 'Educational how-to videos, product demos, customer testimonials, animated explainers, and YouTube content.',
    },
    {
      icon: BarChart3,
      title: 'Visual Content Creation',
      description: 'Data-driven infographics, process diagrams, comparison charts, statistics visualizations, and social media graphics.',
    },
    {
      icon: BookOpen,
      title: 'Long-Form Content Assets',
      description: 'Industry guides (20-50 pages), original research reports, ultimate guides, templates, and frameworks.',
    },
    {
      icon: Mail,
      title: 'Email Marketing Content',
      description: 'Welcome series, educational drip campaigns, newsletters, product launch sequences, and re-engagement campaigns.',
    },
    {
      icon: Award,
      title: 'Case Studies and Success Stories',
      description: 'Problem-solution-results frameworks, specific metrics, customer testimonials, and before/after comparisons.',
    },
  ];

  const processPhases = [
    {
      phase: 'Phase 1',
      title: 'Discovery and Strategy',
      items: ['Audience persona development', 'Content audit for performance insights', 'Competitor content analysis', 'Keyword research and topic ideation', '90-day editorial calendar creation'],
    },
    {
      phase: 'Phase 2',
      title: 'Content Production',
      items: ['Research and outline development', 'First draft by specialized writers', 'Internal review and fact-checking', 'Client review and feedback', 'Final SEO optimization'],
    },
    {
      phase: 'Phase 3',
      title: 'Publication and Promotion',
      items: ['Strategic scheduling and publishing', 'Social media promotion', 'Email newsletter distribution', 'Paid amplification when appropriate', 'Influencer outreach'],
    },
    {
      phase: 'Phase 4',
      title: 'Performance Analysis',
      items: ['Traffic and engagement metrics', 'Conversion performance tracking', 'Top-performing content identification', 'Content refresh opportunities', 'Strategic refinements'],
    },
  ];

  const metrics = [
    'Organic traffic growth',
    'Keyword ranking improvements',
    'Engagement metrics (time on page)',
    'Lead generation (downloads, forms)',
    'Conversion rates',
    'Social shares',
    'Backlinks earned',
    'Revenue attribution',
  ];

  const industries = [
    'Technology & SaaS',
    'Healthcare & Wellness',
    'Financial Services',
    'B2B Manufacturing',
    'Professional Services',
    'E-commerce & Retail',
    'Real Estate',
    'Education & E-learning',
  ];

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Content Marketing Services Pune | Blog Writing, Video Content | Senseoza"
        description="Engage your audience with compelling content. Senseoza offers content marketing, blog writing, video production & copywriting services in Pune. AI-powered content strategy."
        canonicalUrl="https://senseoza.in/services/content-marketing"
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
                <FileText className="h-12 w-12 text-accent icon-3d" />
              </motion.div>
              <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 text-accent">
                Content Marketing That Attracts, Engages, and Converts
              </h1>
              <p className="text-xl text-primary-foreground/80 mb-6">
                In today's digital landscape, customers conduct extensive research before making purchasing decisions. Content marketing isn't about pushing your message—it's about being discovered when customers actively seek solutions.
              </p>
              <p className="font-semibold text-primary-foreground mb-8">
                Blog Writing | Video Content | Ebooks | Infographics
              </p>
              <Link to="/contact" className="inline-block mb-12">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg hover:shadow-xl transition-all duration-300">
                  Start Your Content Strategy <ArrowRight className="ml-2 h-5 w-5" />
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
                  alt="Content Marketing illustration" 
                  className="relative w-full h-auto rounded-2xl shadow-2xl border border-white/10"
                />
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Why Content Marketing Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient" />
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-semibold mb-6">
              <Sparkles className="h-4 w-4" /> Strategic Value
            </span>
            <h2 className="text-4xl font-heading font-bold">
              The Strategic Value of Quality Content
            </h2>
          </AnimatedSection>
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {whyContentMarketing.map((item, index) => (
              <StaggerItem key={index}>
                <motion.div 
                  className="h-full p-6 bg-card rounded-2xl border border-border hover:border-primary/50 transition-all duration-300"
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <h3 className="text-lg font-heading font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 gradient-hero relative overflow-hidden">
        <FloatingElement className="absolute top-10 left-20 w-48 h-48 rounded-full bg-accent/20 blur-3xl" delay={0} />
        <FloatingElement className="absolute bottom-10 right-20 w-64 h-64 rounded-full bg-primary/20 blur-3xl" delay={2} />
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-semibold mb-6">
              Comprehensive Solutions
            </span>
            <h2 className="text-4xl font-heading font-bold text-white">
              Comprehensive Content Marketing Solutions
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
              Our Methodology
            </span>
            <h2 className="text-4xl font-heading font-bold">
              Our Content Development Methodology
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

      {/* Metrics Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-semibold mb-6">
              <BarChart3 className="h-4 w-4" /> Success Metrics
            </span>
            <h2 className="text-4xl font-heading font-bold">
              How We Measure Content Marketing Success
            </h2>
          </AnimatedSection>
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {metrics.map((metric, index) => (
              <StaggerItem key={index}>
                <motion.div 
                  className="flex items-center gap-3 p-4 bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-300"
                  whileHover={{ scale: 1.02, y: -2 }}
                >
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="font-medium text-sm">{metric}</span>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient" />
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-semibold mb-6">
              <Building2 className="h-4 w-4" /> Industries We Serve
            </span>
            <h2 className="text-4xl font-heading font-bold mb-4">
              Content Expertise Across Sectors
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Understanding industry-specific terminology, pain points, and buying processes allows us to create content that truly resonates.
            </p>
          </AnimatedSection>
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {industries.map((industry, index) => (
              <StaggerItem key={index}>
                <motion.div 
                  className="flex items-center gap-3 p-4 bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-300"
                  whileHover={{ scale: 1.02, y: -2 }}
                >
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="font-medium text-sm">{industry}</span>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Custom Solutions Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection className="text-center">
              <h2 className="text-4xl font-heading font-bold mb-6">
                Flexible Content Solutions
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Content marketing needs vary dramatically by business size, industry, and growth stage. A startup requires different content than an established enterprise. E-commerce businesses need different assets than professional services firms. We develop custom content programs tailored to your specific situation including available budget, business objectives, competitive landscape, and internal resources.
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
              Ready to Build a Content Marketing Engine?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Stop struggling with inconsistent content creation. Partner with Senseoza to build a systematic content marketing program that attracts qualified leads, establishes authority, and drives sustainable business growth.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-lg hover:shadow-xl transition-all duration-300">
                Start Your Content Strategy <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default ContentMarketing;