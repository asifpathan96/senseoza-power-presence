import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { MousePointerClick, ArrowRight, CheckCircle, Target, TrendingUp, Sparkles, BarChart3, Clock, Zap, RefreshCw, Eye } from 'lucide-react';
import SEOHead from '@/components/SEOHead';
import serviceImage from '@/assets/service-ppc.png';
import { AnimatedSection, StaggerContainer, StaggerItem, FloatingElement } from '@/components/AnimatedSection';
import { motion } from 'framer-motion';

const PPCAds = () => {
  const services = [
    {
      title: 'Search Advertising',
      description: 'Google Ads search campaigns, Microsoft Advertising for Bing and Yahoo, Shopping ads for e-commerce products, and Local Service Ads for service-based businesses.',
    },
    {
      title: 'Social Media Advertising',
      description: 'Facebook and Instagram for broad demographic targeting, LinkedIn for B2B decision-makers, TikTok for younger audiences, Twitter/X for real-time engagement.',
    },
    {
      title: 'Remarketing Campaigns',
      description: 'Reconnect with website visitors who didn\'t convert, shopping cart abandoners, video viewers across platforms, and create lookalike audiences similar to your best customers.',
    },
    {
      title: 'Landing Page Development',
      description: 'We design and optimize landing pages specifically for your campaigns with clear value propositions, trust signals, mobile-responsive design, and continuous A/B testing.',
    },
  ];

  const processSteps = [
    {
      icon: Target,
      title: 'Discovery and Strategy',
      description: 'We start by thoroughly understanding your business objectives, target audience, competitive landscape, and budget parameters. We establish clear KPIs including cost per acquisition, return on ad spend, and customer lifetime value.',
    },
    {
      icon: Eye,
      title: 'Account Audit and Planning',
      description: 'For businesses with existing campaigns, we conduct comprehensive audits to identify budget waste, missed opportunities, structural issues, weak ad copy, and landing page friction points.',
    },
    {
      icon: Zap,
      title: 'Campaign Development',
      description: 'We build campaigns with extensive keyword research, precise audience targeting, compelling ad copywriting, eye-catching creative, strategic landing page design, and intelligent budget allocation.',
    },
    {
      icon: RefreshCw,
      title: 'Continuous Optimization',
      description: 'Weekly optimizations including bid adjustments, A/B testing of ad variations, negative keyword additions, audience refinement, and budget reallocation to top performers.',
    },
    {
      icon: BarChart3,
      title: 'Performance Analysis',
      description: 'Detailed reports showing spend versus budget, impressions and reach, clicks and click-through rates, conversions and conversion rates, cost per conversion, and return on ad spend.',
    },
  ];

  const advantages = [
    {
      title: 'Intelligent Bidding Strategies',
      description: 'We leverage machine learning algorithms to optimize bids in real-time, ensuring you win auctions at the lowest possible cost while maintaining your desired position and volume.',
    },
    {
      title: 'Advanced Targeting',
      description: 'Beyond basic demographics, we implement behavioral targeting, in-market audiences, affinity audiences, custom intent audiences, and customer match with lookalike audiences.',
    },
    {
      title: 'Creative Excellence',
      description: 'Our in-house creative team develops attention-grabbing headlines, compelling ad copy that speaks to customer pain points, eye-catching visuals, and multiple variations for continuous testing.',
    },
    {
      title: 'Full Transparency',
      description: 'You have 24/7 access to real-time campaign dashboards showing exactly where every rupee goes and what results it generates. No secrets, no surprises.',
    },
  ];

  const timeline = [
    { phase: 'Week 1', description: 'Campaigns launch and we begin collecting performance data.' },
    { phase: 'Weeks 2-4', description: 'We optimize based on early performance indicators, refining targeting and creative.' },
    { phase: 'Months 2-3', description: 'Campaigns reach maturity with refined targeting and improved return on ad spend.' },
    { phase: 'Month 3+', description: 'Consistent performance with optimized spending on winning strategies.' },
  ];

  const industries = [
    'E-commerce & Online Retail',
    'B2B Services & SaaS',
    'Healthcare & Medical',
    'Legal Services',
    'Home Services',
    'Real Estate',
    'Education & E-learning',
    'Travel & Hospitality',
  ];

  return (
    <div className="min-h-screen">
      <SEOHead
        title="PPC & Google Ads Management Pune | Maximize ROI | Senseoza"
        description="Get high-converting PPC campaigns with Senseoza's Google Ads management in Pune. AI-optimized bidding, targeted advertising & maximum ROI. Free consultation available."
        canonicalUrl="https://senseoza.com/services/ppc-ads"
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
                <MousePointerClick className="h-12 w-12 text-accent icon-3d" />
              </motion.div>
              <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 text-accent">
                Strategic PPC Management That Maximizes Every Advertising Dollar
              </h1>
              <p className="text-xl text-primary-foreground/80 mb-6">
                When you need immediate visibility and qualified traffic, pay-per-click advertising delivers results from day one. The difference between profitable campaigns and wasted budget lies in strategic management and continuous optimization. We don't just run ads—we engineer profitable customer acquisition systems.
              </p>
              <p className="font-semibold text-primary-foreground mb-8">
                Google Ads | Meta Ads | LinkedIn Ads | Retargeting
              </p>
              <Link to="/contact" className="inline-block mb-12">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg hover:shadow-xl transition-all duration-300">
                  Get Your Free PPC Audit <ArrowRight className="ml-2 h-5 w-5" />
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
                  alt="PPC & Paid Ads illustration" 
                  className="relative w-full h-auto rounded-2xl shadow-2xl border border-white/10"
                />
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* What is PPC Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient" />
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-heading font-bold text-center mb-8">
              Understanding Pay-Per-Click Advertising
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Pay-per-click advertising allows you to display your message to potential customers at precisely the moment they're searching for solutions you provide. Unlike traditional advertising where you pay for exposure regardless of results, PPC charges only when someone actively clicks your ad, making it one of the most measurable and controllable marketing channels available. Platforms like Google Ads, Facebook, Instagram, LinkedIn, and others offer sophisticated targeting capabilities that let you reach specific audiences based on demographics, interests, behaviors, and search intent.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-semibold mb-6">
              <Sparkles className="h-4 w-4" /> Comprehensive PPC Management
            </span>
            <h2 className="text-4xl font-heading font-bold">
              Our PPC Services
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <AnimatedSection key={index} direction={index % 2 === 0 ? 'left' : 'right'}>
                <motion.div 
                  className="h-full p-6 bg-card rounded-2xl border border-border hover:border-primary/50 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  <h3 className="text-xl font-heading font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 gradient-hero relative overflow-hidden">
        <FloatingElement className="absolute top-10 left-20 w-48 h-48 rounded-full bg-accent/20 blur-3xl" delay={0} />
        <FloatingElement className="absolute bottom-10 right-20 w-64 h-64 rounded-full bg-primary/20 blur-3xl" delay={2} />
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-semibold mb-6">
              Our PPC Management Approach
            </span>
            <h2 className="text-4xl font-heading font-bold text-white">
              How We Manage Your Campaigns
            </h2>
          </AnimatedSection>
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {processSteps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <StaggerItem key={index}>
                  <motion.div 
                    className="h-full p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300"
                    whileHover={{ y: -5, scale: 1.02 }}
                  >
                    <div className="p-3 bg-white/20 rounded-xl w-fit mb-4">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-heading font-bold text-white mb-3">{step.title}</h3>
                    <p className="text-white/70">{step.description}</p>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient" />
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-semibold mb-6">
              Why Choose Senseoza
            </span>
            <h2 className="text-4xl font-heading font-bold">
              Why Choose Senseoza for PPC Management
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {advantages.map((advantage, index) => (
              <AnimatedSection key={index} direction={index % 2 === 0 ? 'left' : 'right'}>
                <motion.div 
                  className="p-6 bg-card rounded-2xl border border-border hover:border-primary/50 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  <h3 className="text-xl font-heading font-bold mb-3">{advantage.title}</h3>
                  <p className="text-muted-foreground">{advantage.description}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-semibold mb-6">
              <Clock className="h-4 w-4" /> Performance Timeline
            </span>
            <h2 className="text-4xl font-heading font-bold">
              PPC Performance Timeline
            </h2>
            <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
              Unlike organic strategies that build over months, PPC delivers immediate results. Most businesses achieve positive ROI within the first 60 days.
            </p>
          </AnimatedSection>
          <div className="max-w-3xl mx-auto">
            {timeline.map((item, index) => (
              <AnimatedSection key={index} direction={index % 2 === 0 ? 'left' : 'right'}>
                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex gap-6 mb-6 p-6 rounded-2xl hover:bg-secondary/50 transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-24 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <span className="text-sm font-bold text-white">{item.phase}</span>
                  </div>
                  <p className="text-muted-foreground flex items-center">{item.description}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient" />
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold mb-4">
              PPC Expertise Across Sectors
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Each sector requires different approaches to targeting, messaging, and conversion optimization, which our team handles expertly.
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

      {/* Custom Strategies Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection className="text-center">
              <h2 className="text-4xl font-heading font-bold mb-6">
                Flexible Approaches to Meet Your Needs
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We understand that every business has different goals, budgets, and timelines. Our PPC management services are completely customizable to your specific situation. Whether you're working with a modest testing budget or ready to scale aggressively, we'll develop a strategy that aligns with your objectives. We offer flexible management arrangements from full-service campaign management to strategic consulting.
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
              Ready to Generate Immediate Results?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Stop wasting money on underperforming campaigns. Let our PPC experts develop a customized strategy that turns your ad spend into predictable, profitable growth.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-lg hover:shadow-xl transition-all duration-300">
                Get Your Free PPC Audit <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default PPCAds;