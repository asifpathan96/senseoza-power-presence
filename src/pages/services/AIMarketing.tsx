import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Brain, ArrowRight, CheckCircle } from 'lucide-react';
import SEOHead from '@/components/SEOHead';
import serviceImage from '@/assets/service-ai-marketing.png';

const AIMarketing = () => {
  const features = [
    'Predictive Analytics & Forecasting',
    'AI-Powered Automation',
    'Smart Customer Segmentation',
    'Personalized Campaign Delivery',
    'Machine Learning Optimization',
    'Real-time Performance Tracking',
  ];

  return (
    <div className="min-h-screen pt-20">
      <SEOHead
        title="AI-Powered Marketing Services | Senseoza"
        description="Leverage cutting-edge AI technology for data-driven marketing campaigns. Predictive analytics, automation, and personalization at scale."
        canonicalUrl="https://senseoza.com/services/ai-marketing"
      />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-secondary/50 to-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="p-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl w-fit mb-6">
                <Brain className="h-12 w-12 text-primary icon-3d" />
              </div>
              <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
                AI-Powered Marketing
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                Predictive campaigns powered by artificial intelligence to maximize reach, optimize budgets, and deliver personalized experiences at scale.
              </p>
              <p className="font-semibold text-foreground mb-8">
                Predictive Analytics | AI Automation | Smart Segmentation
              </p>
              <Link to="/contact">
                <Button size="lg" className="gradient-primary">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <img 
                src={serviceImage} 
                alt="AI-Powered Marketing illustration" 
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold text-center mb-12">
            What's Included
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-card rounded-xl border border-border">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                <span className="font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-heading font-bold text-primary-foreground mb-6">
            Ready to Harness the Power of AI?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Let our AI experts design a custom marketing strategy that delivers measurable results.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              Book a Consultation <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AIMarketing;
