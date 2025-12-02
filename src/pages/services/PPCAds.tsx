import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { MousePointerClick, ArrowRight, CheckCircle } from 'lucide-react';
import SEOHead from '@/components/SEOHead';
import serviceImage from '@/assets/service-ppc.png';

const PPCAds = () => {
  const features = [
    'Google Ads Management',
    'Meta (Facebook/Instagram) Ads',
    'Display Advertising',
    'Retargeting Campaigns',
    'Landing Page Optimization',
    'ROI Tracking & Reporting',
  ];

  return (
    <div className="min-h-screen pt-20">
      <SEOHead
        title="PPC & Paid Ads Services | Senseoza"
        description="ROI-focused ad campaigns across Google, Meta, and more with continuous optimization for maximum returns."
        canonicalUrl="https://senseoza.com/services/ppc-ads"
      />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-secondary/50 to-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="p-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl w-fit mb-6">
                <MousePointerClick className="h-12 w-12 text-primary icon-3d" />
              </div>
              <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
                PPC & Paid Ads
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                ROI-focused ad campaigns across Google, Meta, and more with continuous optimization for maximum returns.
              </p>
              <p className="font-semibold text-foreground mb-8">
                Google Ads | Meta Ads | Display Ads | Retargeting
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
                alt="PPC & Paid Ads illustration" 
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
            Ready to Maximize Your Ad ROI?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Let our PPC experts create campaigns that deliver real results.
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

export default PPCAds;
