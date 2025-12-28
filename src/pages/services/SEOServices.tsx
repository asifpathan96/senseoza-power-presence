import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Search, ArrowRight, CheckCircle } from 'lucide-react';
import SEOHead from '@/components/SEOHead';
import serviceImage from '@/assets/service-seo.png';

const SEOServices = () => {
  const features = [
    'Technical SEO Audit & Optimization',
    'Comprehensive Keyword Research',
    'On-Page SEO Optimization',
    'Content Strategy & Creation',
    'Off-Page SEO & Link Building',
    'Local SEO Optimization',
  ];

  return (
    <div className="min-h-screen pt-20">
      <SEOHead
        title="Expert SEO Services | Rank #1 on Google | Senseoza Digital Marketing"
        description="Professional SEO services that get results. We help businesses dominate search rankings with proven on-page, off-page, and technical SEO strategies. Get your free audit today."
        canonicalUrl="https://senseoza.com/services/seo"
      />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-secondary/50 to-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="p-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl w-fit mb-6">
                <Search className="h-12 w-12 text-primary icon-3d" />
              </div>
              <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
                SEO Services That Put Your Business on Page One of Google
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                In today's digital world, if you're not on the first page of Google, you're invisible. Our search engine optimization services are designed to increase your organic visibility, drive qualified traffic, and turn searchers into customers.
              </p>
              <p className="font-semibold text-foreground mb-8">
                Technical SEO | Keyword Research | Link Building | Local SEO
              </p>
              <Link to="/contact">
                <Button size="lg" className="gradient-primary">
                  Get Your Free SEO Audit <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <img 
                src={serviceImage} 
                alt="SEO Services illustration" 
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
            Our Comprehensive SEO Process
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
            Free SEO Audit - See Where You Stand
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Curious how your website currently performs from an SEO perspective? Get a free, no-obligation SEO audit that reveals technical issues, keyword opportunities, and actionable recommendations.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              Get Your Free SEO Audit <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default SEOServices;
