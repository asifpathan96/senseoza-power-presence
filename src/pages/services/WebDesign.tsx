import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Globe, ArrowRight, CheckCircle } from 'lucide-react';
import SEOHead from '@/components/SEOHead';
import serviceImage from '@/assets/service-web-design.png';

const WebDesign = () => {
  const features = [
    'Custom Website Design',
    'Responsive & Mobile-First Design',
    'E-commerce Development',
    'WordPress Development',
    'Landing Page Design',
    'Website Maintenance & Support',
  ];

  return (
    <div className="min-h-screen pt-20">
      <SEOHead
        title="Custom Web Design & Development | Fast, Conversion-Focused Websites | Senseoza"
        description="Professional web design and development that converts visitors into customers. Mobile-responsive, SEO-optimized, and built for performance. Get a website that drives results."
        canonicalUrl="https://senseoza.com/services/web-design"
      />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-secondary/50 to-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="p-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl w-fit mb-6">
                <Globe className="h-12 w-12 text-primary icon-3d" />
              </div>
              <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
                Web Design & Development That Turns Visitors Into Customers
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                Your website is your digital storefront, your 24/7 salesperson, and often the first impression potential customers have of your business. We design and develop websites with one goal in mind—results.
              </p>
              <p className="font-semibold text-foreground mb-8">
                Custom Design | E-commerce | WordPress | Landing Pages
              </p>
              <Link to="/contact">
                <Button size="lg" className="gradient-primary">
                  Get Your Free Website Audit <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <img 
                src={serviceImage} 
                alt="Web Design & Development illustration" 
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
            Our Web Design & Development Services
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
            Ready to Launch a Website That Converts?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Stop losing customers to outdated, slow, or confusing websites. Partner with Senseoza and build a digital presence that drives real business growth.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              Get Your Free Website Audit <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default WebDesign;
