import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Mail, ArrowRight, CheckCircle } from 'lucide-react';
import SEOHead from '@/components/SEOHead';
import serviceImage from '@/assets/service-email.png';

const EmailAutomation = () => {
  const features = [
    'Email Campaign Design',
    'Marketing Automation Setup',
    'Lead Nurturing Workflows',
    'A/B Testing & Optimization',
    'List Segmentation',
    'Performance Analytics',
  ];

  return (
    <div className="min-h-screen pt-20">
      <SEOHead
        title="Email & Marketing Automation | Senseoza"
        description="Smart workflows to nurture leads and boost retention with personalized email campaigns and automation."
        canonicalUrl="https://senseoza.com/services/email-automation"
      />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-secondary/50 to-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="p-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl w-fit mb-6">
                <Mail className="h-12 w-12 text-primary icon-3d" />
              </div>
              <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
                Email & Marketing Automation
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                Smart workflows to nurture leads and boost retention with personalized email campaigns and automation.
              </p>
              <p className="font-semibold text-foreground mb-8">
                Email Campaigns | Marketing Automation | Lead Nurturing
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
                alt="Email & Marketing Automation illustration" 
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
            Ready to Automate Your Marketing?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Let's build email workflows that nurture leads and drive conversions on autopilot.
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

export default EmailAutomation;
