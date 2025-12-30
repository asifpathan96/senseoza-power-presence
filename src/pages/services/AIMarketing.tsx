import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Brain, ArrowRight, CheckCircle, Zap, Target, TrendingUp, Users, BarChart3, Lightbulb } from 'lucide-react';
import SEOHead from '@/components/SEOHead';
import serviceImage from '@/assets/service-ai-marketing.png';
import { AnimatedSection, StaggerContainer, StaggerItem, FloatingElement } from '@/components/AnimatedSection';
import { motion } from 'framer-motion';

const AIMarketing = () => {
  const features = [
    'Predictive Analytics & Forecasting',
    'AI-Powered Automation',
    'Smart Customer Segmentation',
    'Personalized Campaign Delivery',
    'Machine Learning Optimization',
    'Real-time Performance Tracking',
    'Intelligent Bidding Strategies',
    'Automated A/B Testing',
  ];

  const benefits = [
    {
      icon: Target,
      title: 'Precision Targeting',
      description: 'AI analyzes millions of data points to identify your ideal customers with unprecedented accuracy, ensuring your message reaches the right people at the right time.',
    },
    {
      icon: Zap,
      title: 'Automated Optimization',
      description: 'Machine learning algorithms continuously optimize your campaigns 24/7, making real-time adjustments that would take humans weeks to implement.',
    },
    {
      icon: TrendingUp,
      title: 'Predictive Insights',
      description: 'Forecast customer behavior, market trends, and campaign performance before they happen, allowing proactive strategy adjustments.',
    },
    {
      icon: Users,
      title: 'Hyper-Personalization',
      description: 'Deliver unique experiences to each customer based on their behavior, preferences, and journey stage—at scale.',
    },
    {
      icon: BarChart3,
      title: 'Data-Driven Decisions',
      description: 'Transform complex data into actionable insights that drive strategic decisions and measurable business outcomes.',
    },
    {
      icon: Lightbulb,
      title: 'Creative Intelligence',
      description: 'AI-powered tools help generate and test creative variations, identifying what resonates best with your audience.',
    },
  ];

  const useCases = [
    {
      title: 'Predictive Lead Scoring',
      description: 'Automatically rank leads based on likelihood to convert, allowing your sales team to focus on the most promising opportunities.',
    },
    {
      title: 'Dynamic Content Optimization',
      description: 'AI determines which content variations perform best for different audience segments and automatically serves the winning versions.',
    },
    {
      title: 'Churn Prediction & Prevention',
      description: 'Identify customers at risk of leaving before they go and trigger automated retention campaigns to keep them engaged.',
    },
    {
      title: 'Intelligent Budget Allocation',
      description: 'Machine learning distributes your marketing budget across channels in real-time based on performance data.',
    },
    {
      title: 'Sentiment Analysis',
      description: 'Monitor brand mentions and customer feedback across platforms to understand public perception and respond appropriately.',
    },
    {
      title: 'Automated Reporting',
      description: 'AI-generated insights and recommendations delivered automatically, saving hours of manual analysis time.',
    },
  ];

  const process = [
    {
      step: '01',
      title: 'Data Integration',
      description: 'We connect all your data sources—CRM, website analytics, advertising platforms, and more—creating a unified view of your marketing ecosystem.',
    },
    {
      step: '02',
      title: 'AI Model Training',
      description: 'Our systems learn from your historical data to understand your unique business patterns, customer behaviors, and market dynamics.',
    },
    {
      step: '03',
      title: 'Strategy Development',
      description: 'Based on AI insights, we develop customized marketing strategies that leverage automation and machine learning capabilities.',
    },
    {
      step: '04',
      title: 'Implementation',
      description: 'We deploy AI-powered tools and automations across your marketing channels, ensuring seamless integration with existing workflows.',
    },
    {
      step: '05',
      title: 'Continuous Learning',
      description: 'Our AI systems continuously learn and improve, adapting to changing market conditions and evolving customer preferences.',
    },
  ];

  return (
    <div className="min-h-screen">
      <SEOHead
        title="AI-Powered Marketing Services | Leverage Artificial Intelligence | Senseoza"
        description="Transform your marketing with AI-powered automation, predictive analytics, and machine learning optimization. Deliver personalized experiences at scale."
        canonicalUrl="https://senseoza.com/services/ai-marketing"
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
                <Brain className="h-12 w-12 text-accent icon-3d" />
              </motion.div>
              <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 text-accent">
                AI-Powered Marketing
              </h1>
              <p className="text-xl text-primary-foreground/80 mb-6">
                Harness the power of artificial intelligence to transform your marketing from reactive to predictive. Our AI-driven approach delivers personalized experiences at scale, optimizes campaigns in real-time, and uncovers insights that drive exponential growth.
              </p>
              <p className="font-semibold text-primary-foreground mb-8">
                Predictive Analytics | AI Automation | Smart Segmentation
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
                  alt="AI-Powered Marketing illustration" 
                  className="relative w-full h-auto rounded-2xl shadow-2xl border border-white/10"
                />
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Why AI Marketing Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold mb-6">
              Why AI is Revolutionizing Marketing
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Traditional marketing relies on intuition and historical analysis. AI marketing anticipates the future, automates the complex, and personalizes at a scale humans simply cannot match. Businesses leveraging AI see 40% higher conversion rates and 30% reduction in customer acquisition costs.
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
              Our comprehensive AI marketing suite covers every aspect of intelligent, automated marketing.
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

      {/* Use Cases Section */}
      <section className="py-20 gradient-hero relative overflow-hidden">
        <FloatingElement className="absolute top-10 left-20 w-48 h-48 rounded-full bg-accent/20 blur-3xl" delay={0} />
        <FloatingElement className="absolute bottom-10 right-20 w-64 h-64 rounded-full bg-primary/20 blur-3xl" delay={2} />
        
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-accent mb-6">
              AI Marketing in Action
            </h2>
            <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
              See how businesses are leveraging AI to transform their marketing results.
            </p>
          </AnimatedSection>
          
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <StaggerItem key={index}>
                <motion.div 
                  className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 h-full"
                  whileHover={{ scale: 1.02, y: -4 }}
                >
                  <h3 className="text-xl font-heading font-bold text-accent mb-3">{useCase.title}</h3>
                  <p className="text-primary-foreground/80">{useCase.description}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold mb-6">
              Our AI Implementation Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We follow a systematic approach to integrate AI into your marketing operations.
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
              Ready to Harness the Power of AI?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Transform your marketing with artificial intelligence. Schedule a consultation to discover how AI can revolutionize your customer acquisition and retention strategies.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-lg hover:shadow-xl transition-all duration-300">
                Book a Consultation <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default AIMarketing;