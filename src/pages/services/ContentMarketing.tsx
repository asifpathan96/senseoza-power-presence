import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { FileText, ArrowRight, CheckCircle } from 'lucide-react';
import SEOHead from '@/components/SEOHead';
import serviceImage from '@/assets/service-content.png';

const ContentMarketing = () => {
  const features = [
    'Strategic Content Planning',
    'Blog Writing & SEO Optimization',
    'Video Content Production',
    'Ebooks & Whitepapers',
    'Infographics & Visual Content',
    'Email Marketing Content',
  ];

  return (
    <div className="min-h-screen pt-20">
      <SEOHead
        title="Content Marketing Services | Drive Organic Traffic & Leads | Senseoza"
        description="Expert content marketing that attracts, educates, and converts. Strategic blog writing, video production, infographics, and content that establishes your authority and drives growth."
        canonicalUrl="https://senseoza.com/services/content-marketing"
      />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-secondary/50 to-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="p-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl w-fit mb-6">
                <FileText className="h-12 w-12 text-primary icon-3d" />
              </div>
              <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
                Content Marketing That Attracts Customers and Drives Sustainable Growth
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                Content is the fuel that powers modern marketing. We don't just create content—we engineer content ecosystems designed to attract your ideal customers, establish your authority, and drive measurable business results.
              </p>
              <p className="font-semibold text-foreground mb-8">
                Blog Writing | Video Content | Ebooks | Infographics
              </p>
              <Link to="/contact">
                <Button size="lg" className="gradient-primary">
                  Start Your Content Strategy Today <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <img 
                src={serviceImage} 
                alt="Content Marketing illustration" 
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
            Our Content Marketing Services
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
            Ready to Build a Content Engine That Drives Growth?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Stop struggling with inconsistent content. Partner with Senseoza and build a content marketing machine that attracts qualified leads and drives sustainable business growth.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              Start Your Content Strategy Today <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ContentMarketing;
