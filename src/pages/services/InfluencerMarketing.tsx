import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, CheckCircle, TrendingUp, Target, Heart, Sparkles, Star, BarChart3, Megaphone } from 'lucide-react';
import SEOHead from '@/components/SEOHead';
import { AnimatedSection, StaggerContainer, StaggerItem, FloatingElement } from '@/components/AnimatedSection';
import { motion } from 'framer-motion';

const InfluencerMarketing = () => {
  const benefits = [
    'Access to authentic audience connections',
    'Higher engagement rates than traditional ads',
    'Build trust through social proof',
    'Reach niche demographics effectively',
    'Generate user-generated content',
    'Measurable ROI with tracking',
  ];

  const services = [
    {
      icon: Target,
      title: 'Influencer Discovery',
      description: 'We identify and vet influencers that align with your brand values, target audience, and campaign goals.',
    },
    {
      icon: Users,
      title: 'Campaign Management',
      description: 'End-to-end campaign management from outreach and negotiation to content approval and publishing.',
    },
    {
      icon: Heart,
      title: 'Relationship Building',
      description: 'Foster long-term partnerships with influencers for ongoing brand advocacy and authentic promotion.',
    },
    {
      icon: BarChart3,
      title: 'Performance Analytics',
      description: 'Comprehensive tracking and reporting on reach, engagement, conversions, and ROI metrics.',
    },
    {
      icon: Megaphone,
      title: 'Content Strategy',
      description: 'Develop creative briefs and content guidelines that maintain brand consistency while allowing creator authenticity.',
    },
    {
      icon: TrendingUp,
      title: 'Amplification',
      description: 'Boost top-performing influencer content with paid media to extend reach and maximize impact.',
    },
  ];

  const influencerTypes = [
    { type: 'Nano Influencers', followers: '1K-10K', benefit: 'Highest engagement rates, niche communities' },
    { type: 'Micro Influencers', followers: '10K-100K', benefit: 'Strong authenticity, cost-effective reach' },
    { type: 'Macro Influencers', followers: '100K-1M', benefit: 'Broad reach, professional content' },
    { type: 'Mega Influencers', followers: '1M+', benefit: 'Maximum exposure, celebrity status' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Influencer Marketing Services | Brand Partnerships & Campaigns | Senseoza"
        description="Connect with the right influencers to amplify your brand. Strategic influencer partnerships, campaign management, and measurable results."
        canonicalUrl="https://senseoza.com/services/influencer-marketing"
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <FloatingElement className="absolute top-1/4 right-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl" delay={0} />
        <FloatingElement className="absolute bottom-1/4 left-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl" delay={2} />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-8"
            >
              <Users className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium text-white/90">Influencer Marketing</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-white mb-6"
            >
              Amplify Your Brand with{' '}
              <span className="text-accent">Influencer Partnerships</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-10"
            >
              Connect with authentic creators who resonate with your audience. We build strategic influencer campaigns that drive engagement, trust, and conversions.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Link to="/contact" className="mb-12 inline-block">
                <Button size="lg" className="px-8 py-6 bg-white text-primary hover:bg-white/90 shadow-xl group">
                  Start Your Campaign <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-semibold mb-6">
                <Sparkles className="h-4 w-4" /> Why Influencer Marketing
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                The Power of <span className="text-gradient">Authentic Voices</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                In an era of ad fatigue, consumers trust recommendations from people they follow. Influencer marketing bridges the gap between brands and audiences through genuine, relatable content.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>
            
            <AnimatedSection direction="right">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl" />
                <div className="relative bg-card rounded-2xl p-8 border border-border shadow-xl">
                  <h3 className="text-xl font-heading font-bold mb-6">Influencer Tiers We Work With</h3>
                  <div className="space-y-4">
                    {influencerTypes.map((tier, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="p-4 bg-secondary/50 rounded-xl"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-semibold text-foreground">{tier.type}</span>
                          <span className="text-sm text-primary font-medium">{tier.followers}</span>
                        </div>
                        <p className="text-sm text-muted-foreground">{tier.benefit}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero opacity-50" />
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-semibold mb-6">
              <Star className="h-4 w-4" /> Our Services
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
              End-to-End Influencer Campaign Management
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              From strategy to execution, we handle every aspect of your influencer marketing journey.
            </p>
          </AnimatedSection>
          
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <StaggerItem key={index}>
                  <motion.div
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="h-full p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300"
                  >
                    <div className="p-3 bg-white/20 rounded-xl w-fit mb-4">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-heading font-bold text-white mb-3">{service.title}</h3>
                    <p className="text-white/70">{service.description}</p>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient" />
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-semibold mb-6">
              Our Process
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              How We Build <span className="text-gradient">Successful Campaigns</span>
            </h2>
          </AnimatedSection>
          
          <div className="max-w-4xl mx-auto">
            {[
              { step: '01', title: 'Strategy & Goals', description: 'Define campaign objectives, target audience, and key performance indicators.' },
              { step: '02', title: 'Influencer Research', description: 'Identify and vet creators based on audience alignment, engagement, and authenticity.' },
              { step: '03', title: 'Outreach & Negotiation', description: 'Handle all communications, contracts, and compensation discussions.' },
              { step: '04', title: 'Content Creation', description: 'Collaborate with influencers on creative briefs while maintaining their authentic voice.' },
              { step: '05', title: 'Launch & Monitor', description: 'Execute the campaign and track performance in real-time.' },
              { step: '06', title: 'Report & Optimize', description: 'Deliver comprehensive analytics and insights for future campaigns.' },
            ].map((item, index) => (
              <AnimatedSection key={index} direction={index % 2 === 0 ? 'left' : 'right'}>
                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex gap-6 mb-8 p-6 rounded-2xl hover:bg-secondary/50 transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <span className="text-xl font-bold text-white">{item.step}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-bold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute inset-0 dot-pattern opacity-10" />
        <FloatingElement className="absolute top-1/4 left-10 w-64 h-64 bg-accent/30 rounded-full blur-3xl" />
        <FloatingElement className="absolute bottom-1/4 right-10 w-80 h-80 bg-primary/30 rounded-full blur-3xl" delay={2} />
        
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6 text-white">
              Ready to Partner with Influencers?
            </h2>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              Let's create campaigns that resonate with your audience and drive real business results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
                <Button size="lg" className="w-full sm:w-auto px-8 py-6 bg-white text-primary hover:bg-white/90 shadow-xl">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/case-studies" onClick={() => window.scrollTo(0, 0)}>
                <Button size="lg" variant="outline" className="w-full sm:w-auto px-8 py-6 border-white/30 bg-white/5 text-white hover:bg-white/10">
                  View Case Studies
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default InfluencerMarketing;
