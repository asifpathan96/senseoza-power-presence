import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Mail, ArrowRight, CheckCircle, Target, TrendingUp, Sparkles, BarChart3, Clock, Bot, Workflow, Zap, Brain, Settings, MessageSquare } from 'lucide-react';
import SEOHead from '@/components/SEOHead';
import serviceImage from '@/assets/service-email.png';
import { AnimatedSection, StaggerContainer, StaggerItem, FloatingElement } from '@/components/AnimatedSection';
import { motion } from 'framer-motion';

const EmailAutomation = () => {
  const benefits = [
    'Eliminate hours of manual work weekly',
    'Ensure every lead receives timely communication',
    'Deliver customized experiences at scale',
    'Automatically guide prospects through your funnel',
    'Increase conversions while reducing costs',
    'Track every interaction for optimization',
    'Alert sales teams when leads are ready',
  ];

  const services = [
    {
      icon: Mail,
      title: 'Email Marketing Automation',
      description: 'Welcome series, drip campaigns, abandoned cart recovery, re-engagement campaigns, birthday emails, post-purchase sequences, and lead scoring.',
    },
    {
      icon: Settings,
      title: 'CRM Integration and Management',
      description: 'CRM selection and setup (HubSpot, Salesforce, Zoho), contact management, automated lead capture, sales pipeline automation, and custom fields.',
    },
    {
      icon: Target,
      title: 'Lead Scoring and Nurturing',
      description: 'Behavioral scoring based on website activity, engagement scoring from email interactions, demographic scoring, automated lead routing, and progressive profiling.',
    },
    {
      icon: Bot,
      title: 'Chatbots and Conversational AI',
      description: 'Lead qualification chatbots, customer support automation, appointment scheduling, product recommendations, FAQ automation, and multi-language support.',
    },
    {
      icon: MessageSquare,
      title: 'Social Media Automation',
      description: 'Content scheduling across platforms, automated posting from RSS/blogs, social listening, automated responses, and performance tracking.',
    },
    {
      icon: Workflow,
      title: 'Workflow Automation',
      description: 'Automated task assignments, notification triggers, data syncing between platforms, automated report generation, and approval workflows.',
    },
    {
      icon: Brain,
      title: 'Predictive Analytics and AI',
      description: 'Predictive lead scoring, churn prediction, optimal send time prediction, content recommendation engines, and campaign performance forecasting.',
    },
  ];

  const platforms = [
    { name: 'HubSpot', description: 'All-in-one marketing, sales, and service' },
    { name: 'Marketo', description: 'Enterprise-grade B2B marketing automation' },
    { name: 'ActiveCampaign', description: 'Powerful yet accessible automation' },
    { name: 'Mailchimp', description: 'Email marketing and basic automation' },
    { name: 'Klaviyo', description: 'E-commerce-focused email and SMS' },
    { name: 'Pardot (Salesforce)', description: 'B2B marketing with Salesforce integration' },
    { name: 'Zapier', description: 'Connect and automate 5,000+ apps' },
    { name: 'Make (Integromat)', description: 'Advanced automation workflows' },
  ];

  const implementationPhases = [
    {
      phase: 'Weeks 1-2',
      title: 'Discovery and Strategy',
      items: ['Audit current processes', 'Define goals and KPIs', 'Platform recommendation', 'Map desired workflows', 'Plan data migration'],
    },
    {
      phase: 'Weeks 3-4',
      title: 'Setup and Configuration',
      items: ['Platform account setup', 'Integration with existing tools', 'Database structure design', 'Template configuration', 'Workflow building and testing'],
    },
    {
      phase: 'Weeks 5-8',
      title: 'Launch and Optimization',
      items: ['Soft launch with testing', 'Full deployment', 'Performance monitoring', 'A/B testing', 'Best practices documentation'],
    },
    {
      phase: 'Monthly',
      title: 'Ongoing Management',
      items: ['Performance analysis', 'Workflow optimization', 'New automation opportunities', 'Database hygiene', 'Quarterly strategy reviews'],
    },
  ];

  const results = [
    { metric: '70%', description: 'Reduction in time spent on manual marketing tasks' },
    { metric: '25-50%', description: 'Increase in lead conversion rates' },
    { metric: '30%', description: 'Improvement in email engagement metrics' },
    { metric: '15-20%', description: 'Boost in customer retention' },
    { metric: '300-500%', description: 'ROI within the first year' },
  ];

  return (
    <div className="min-h-screen">
      <SEOHead
        title="AI Marketing Automation Services | Scale Your Marketing Efficiently | Senseoza"
        description="Leverage AI-powered marketing automation to scale efforts, personalize customer experiences, and increase efficiency. Expert automation setup and optimization."
        canonicalUrl="https://senseoza.com/services/email-automation"
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
                <Mail className="h-12 w-12 text-accent icon-3d" />
              </motion.div>
              <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 text-accent">
                Marketing Automation That Scales Without Adding Headcount
              </h1>
              <p className="text-xl text-primary-foreground/80 mb-6">
                Imagine your marketing running continuously—nurturing leads, personalizing customer experiences, triggering timely communications, and driving conversions around the clock without manual intervention. That's the power of marketing automation.
              </p>
              <p className="font-semibold text-primary-foreground mb-8">
                Email Automation | CRM Integration | Lead Nurturing | AI Insights
              </p>
              <Link to="/contact" className="inline-block mb-12">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg hover:shadow-xl transition-all duration-300">
                  Schedule Your Automation Consultation <ArrowRight className="ml-2 h-5 w-5" />
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
                  alt="Marketing Automation illustration" 
                  className="relative w-full h-auto rounded-2xl shadow-2xl border border-white/10"
                />
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* What is Automation Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <AnimatedSection direction="left">
              <h2 className="text-4xl font-heading font-bold mb-6">
                Understanding Marketing Automation
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Marketing automation uses software platforms and artificial intelligence to automate repetitive marketing tasks and workflows. Instead of manually sending every email, segmenting every audience, or tracking every customer behavior, automation handles these processes based on predefined rules and triggers.
              </p>
            </AnimatedSection>
            <AnimatedSection direction="right">
              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 p-3 bg-card rounded-xl border border-border"
                  >
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 gradient-hero relative overflow-hidden">
        <FloatingElement className="absolute top-10 left-20 w-48 h-48 rounded-full bg-accent/20 blur-3xl" delay={0} />
        <FloatingElement className="absolute bottom-10 right-20 w-64 h-64 rounded-full bg-primary/20 blur-3xl" delay={2} />
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-semibold mb-6">
              Complete Automation Solutions
            </span>
            <h2 className="text-4xl font-heading font-bold text-white">
              Complete Marketing Automation Solutions
            </h2>
          </AnimatedSection>
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
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
                    <h3 className="text-xl font-heading font-bold text-white mb-3">{service.title}</h3>
                    <p className="text-white/70">{service.description}</p>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient" />
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-semibold mb-6">
              <Zap className="h-4 w-4" /> Platform Expertise
            </span>
            <h2 className="text-4xl font-heading font-bold">
              Expertise Across Leading Platforms
            </h2>
            <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
              We're certified experts in industry-leading automation platforms. We'll recommend the platform that best fits your needs.
            </p>
          </AnimatedSection>
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {platforms.map((platform, index) => (
              <StaggerItem key={index}>
                <motion.div 
                  className="p-4 bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-300"
                  whileHover={{ scale: 1.02, y: -2 }}
                >
                  <h3 className="font-bold mb-1">{platform.name}</h3>
                  <p className="text-sm text-muted-foreground">{platform.description}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Implementation Process Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-semibold mb-6">
              <Clock className="h-4 w-4" /> Implementation Methodology
            </span>
            <h2 className="text-4xl font-heading font-bold">
              Implementation Methodology
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {implementationPhases.map((phase, index) => (
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

      {/* ROI Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient" />
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-semibold mb-6">
              <TrendingUp className="h-4 w-4" /> Expected Results
            </span>
            <h2 className="text-4xl font-heading font-bold">
              The Impact of Marketing Automation
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {results.map((result, index) => (
              <AnimatedSection key={index}>
                <motion.div 
                  className="text-center p-6 bg-card rounded-2xl border border-border hover:border-primary/50 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-3xl font-heading font-bold text-primary mb-2">{result.metric}</div>
                  <p className="text-sm text-muted-foreground">{result.description}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Solutions Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection className="text-center">
              <h2 className="text-4xl font-heading font-bold mb-6">
                Tailored to Your Technology Stack
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Every business has unique processes, existing technology, and automation needs. A B2B service company requires different workflows than an e-commerce store. We don't force you into predefined packages—instead, we assess your specific situation including current technology stack, existing processes, team capabilities, budget parameters, and growth objectives, then recommend customized solutions.
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
              Ready to Scale Your Marketing?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Stop wasting time on repetitive tasks that technology can handle better. Let our automation specialists implement systems that work tirelessly to nurture leads, personalize experiences, and drive conversions 24/7.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-lg hover:shadow-xl transition-all duration-300">
                Schedule Your Automation Consultation <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default EmailAutomation;