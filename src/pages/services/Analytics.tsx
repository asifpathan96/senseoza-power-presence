import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { BarChart, ArrowRight, CheckCircle, LineChart, PieChart, TrendingUp, Target, Eye, Zap } from 'lucide-react';
import SEOHead from '@/components/SEOHead';
import serviceImage from '@/assets/service-analytics.png';
import { AnimatedSection, StaggerContainer, StaggerItem, FloatingElement } from '@/components/AnimatedSection';
import { motion } from 'framer-motion';

const Analytics = () => {
  const features = [
    'Real-time Dashboards',
    'ROI Tracking & Attribution',
    'Performance Reports',
    'Data-Driven Insights',
    'Custom KPI Monitoring',
    'Competitive Analysis',
    'Multi-Channel Attribution',
    'Predictive Analytics',
  ];

  const benefits = [
    {
      icon: Eye,
      title: 'Complete Visibility',
      description: 'See exactly how your marketing performs across every channel, campaign, and customer touchpoint in one unified view.',
    },
    {
      icon: Target,
      title: 'Accurate Attribution',
      description: 'Understand which channels and campaigns truly drive conversions with sophisticated multi-touch attribution modeling.',
    },
    {
      icon: TrendingUp,
      title: 'Performance Optimization',
      description: "Identify what's working and what isn't, enabling data-backed decisions that continuously improve results.",
    },
    {
      icon: LineChart,
      title: 'Trend Analysis',
      description: 'Spot emerging patterns and seasonal trends before they impact your business, allowing proactive strategy adjustments.',
    },
    {
      icon: PieChart,
      title: 'Budget Efficiency',
      description: 'Allocate marketing spend based on actual performance data, maximizing ROI and eliminating wasteful spending.',
    },
    {
      icon: Zap,
      title: 'Faster Decisions',
      description: 'Real-time data means faster insights, enabling agile marketing responses to changing market conditions.',
    },
  ];

  const services = [
    {
      title: 'Custom Dashboard Development',
      description: 'We build tailored dashboards that display the metrics that matter most to your business, accessible anytime from any device.',
    },
    {
      title: 'Marketing Attribution',
      description: 'Implement sophisticated attribution models that accurately credit conversions across your entire customer journey.',
    },
    {
      title: 'Campaign Performance Tracking',
      description: 'Monitor every campaign in real-time with detailed metrics on reach, engagement, conversions, and ROI.',
    },
    {
      title: 'Conversion Rate Analysis',
      description: 'Deep-dive into your conversion funnels to identify drop-off points and opportunities for optimization.',
    },
    {
      title: 'Competitive Benchmarking',
      description: 'Compare your performance against industry standards and competitors to identify gaps and opportunities.',
    },
    {
      title: 'Automated Reporting',
      description: 'Scheduled reports delivered to stakeholders with key insights, trends, and recommendations for action.',
    },
  ];

  const metrics = [
    { category: 'Traffic Metrics', items: ['Sessions & Users', 'Traffic Sources', 'Page Views', 'Bounce Rate', 'Time on Site'] },
    { category: 'Conversion Metrics', items: ['Conversion Rate', 'Cost per Conversion', 'Lead Quality Score', 'Sales Attribution', 'Customer Lifetime Value'] },
    { category: 'Engagement Metrics', items: ['Click-Through Rate', 'Social Engagement', 'Email Open Rates', 'Video Views', 'Content Downloads'] },
    { category: 'Revenue Metrics', items: ['Return on Ad Spend', 'Customer Acquisition Cost', 'Average Order Value', 'Revenue by Channel', 'Profit Margins'] },
  ];

  const process = [
    {
      step: '01',
      title: 'Audit & Discovery',
      description: 'We assess your current analytics setup, identify tracking gaps, and understand your key business objectives and KPIs.',
    },
    {
      step: '02',
      title: 'Strategy & Planning',
      description: 'Develop a comprehensive measurement framework that aligns analytics with your business goals and marketing strategy.',
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Set up tracking, integrate data sources, configure dashboards, and implement attribution models.',
    },
    {
      step: '04',
      title: 'Validation & Testing',
      description: 'Ensure all tracking is accurate, data is flowing correctly, and reports are displaying reliable information.',
    },
    {
      step: '05',
      title: 'Training & Handoff',
      description: 'Train your team to use the analytics tools effectively, interpret data, and make data-driven decisions.',
    },
    {
      step: '06',
      title: 'Ongoing Optimization',
      description: 'Continuous monitoring, refinement, and strategic recommendations based on performance insights.',
    },
  ];

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Analytics & Reporting Services | Data-Driven Marketing Insights | Senseoza"
        description="Transform data into actionable insights with custom dashboards, ROI tracking, and comprehensive marketing analytics that drive smarter decisions."
        canonicalUrl="https://senseoza.com/services/analytics"
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
                <BarChart className="h-12 w-12 text-accent icon-3d" />
              </motion.div>
              <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 text-accent">
                Analytics & Reporting
              </h1>
              <p className="text-xl text-primary-foreground/80 mb-6">
                In marketing, what gets measured gets improved. Our analytics and reporting services transform raw data into clear, actionable insights that drive smarter decisions and better results. Stop guessing about what works—start knowing.
              </p>
              <p className="font-semibold text-primary-foreground mb-8">
                Real-time Dashboards | ROI Tracking | Performance Reports
              </p>
              <Link to="/contact" className="inline-block mb-12">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg hover:shadow-xl transition-all duration-300">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
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
                  alt="Analytics & Reporting illustration" 
                  className="relative w-full h-auto rounded-2xl shadow-2xl border border-white/10"
                />
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Why Analytics Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold mb-6">
              Why Marketing Analytics Matters
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Businesses that leverage data-driven marketing are 23 times more likely to acquire customers and 6 times more likely to retain them. Without proper analytics, you're flying blind—making decisions based on assumptions rather than evidence.
            </p>
          </AnimatedSection>
          
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <StaggerItem key={index}>
                <motion.div 
                  className="p-6 bg-card rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 h-full"
                  whileHover={{ scale: 1.02, y: -4 }}
                >
                  <div className="p-3 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl w-fit mb-4">
                    <benefit.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-heading font-bold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold mb-6">
              What's Included
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive analytics coverage across all your marketing channels and campaigns.
            </p>
          </AnimatedSection>
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <StaggerItem key={index}>
                <motion.div 
                  className="flex items-center gap-3 p-4 bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-300"
                  whileHover={{ scale: 1.02, y: -2 }}
                >
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                  <span className="font-medium">{feature}</span>
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
            <h2 className="text-4xl font-heading font-bold text-accent mb-6">
              Our Analytics Services
            </h2>
            <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
              From setup to ongoing optimization, we provide end-to-end analytics solutions.
            </p>
          </AnimatedSection>
          
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <StaggerItem key={index}>
                <motion.div 
                  className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 h-full"
                  whileHover={{ scale: 1.02, y: -4 }}
                >
                  <h3 className="text-xl font-heading font-bold text-accent mb-3">{service.title}</h3>
                  <p className="text-primary-foreground/80">{service.description}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Metrics We Track */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold mb-6">
              Metrics That Matter
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We track the KPIs that directly impact your bottom line, not vanity metrics that look good but don't drive results.
            </p>
          </AnimatedSection>
          
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((category, index) => (
              <StaggerItem key={index}>
                <motion.div 
                  className="p-6 bg-card rounded-2xl border border-border h-full"
                  whileHover={{ scale: 1.02, y: -4 }}
                >
                  <h3 className="text-lg font-heading font-bold mb-4 text-primary">{category.category}</h3>
                  <ul className="space-y-2">
                    {category.items.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold mb-6">
              Our Analytics Implementation Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A systematic approach to building analytics infrastructure that delivers lasting value.
            </p>
          </AnimatedSection>
          
          <div className="max-w-4xl mx-auto">
            {process.map((item, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <motion.div 
                  className="flex gap-6 mb-8 last:mb-0"
                  whileHover={{ x: 10 }}
                >
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center">
                    <span className="text-xl font-bold text-white">{item.step}</span>
                  </div>
                  <div className="pt-2">
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
      <section className="py-20 gradient-hero relative overflow-hidden">
        <FloatingElement className="absolute top-10 right-20 w-48 h-48 rounded-full bg-accent/20 blur-3xl" delay={1} />
        <FloatingElement className="absolute bottom-10 left-20 w-64 h-64 rounded-full bg-primary/20 blur-3xl" delay={3} />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <AnimatedSection>
            <h2 className="text-4xl font-heading font-bold text-accent mb-6">
              Ready for Data-Driven Marketing?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Stop guessing and start growing. Let us build analytics infrastructure that gives you complete visibility into what's working and why.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-lg hover:shadow-xl transition-all duration-300">
                Get Your Free Analytics Audit <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Analytics;