import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Share2, ArrowRight, CheckCircle } from 'lucide-react';
import SEOHead from '@/components/SEOHead';
import serviceImage from '@/assets/service-social-media.png';

const SocialMedia = () => {
  const features = [
    'Social Media Strategy Development',
    'Content Creation & Scheduling',
    'Community Management',
    'Social Media Advertising',
    'Analytics & Reporting',
    'Influencer Partnership Management',
  ];

  return (
    <div className="min-h-screen pt-20">
      <SEOHead
        title="Social Media Marketing Services | Build Your Brand & Drive Engagement | Senseoza"
        description="Professional social media marketing that builds communities and drives sales. Expert management of Facebook, Instagram, LinkedIn, TikTok & Twitter. Grow your following today."
        canonicalUrl="https://senseoza.com/services/social-media"
      />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-secondary/50 to-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="p-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl w-fit mb-6">
                <Share2 className="h-12 w-12 text-primary icon-3d" />
              </div>
              <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
                Social Media Marketing That Turns Followers Into Customers
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                Social media isn't just about likes and followers—it's about building relationships, establishing authority, and driving real business results. With over 4.9 billion people using social media worldwide, your customers are already there.
              </p>
              <p className="font-semibold text-foreground mb-8">
                Instagram | Facebook | LinkedIn | TikTok | Twitter
              </p>
              <Link to="/contact">
                <Button size="lg" className="gradient-primary">
                  Get Your Free Social Strategy <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <img 
                src={serviceImage} 
                alt="Social Media Marketing illustration" 
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
            Our Social Media Marketing Services
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
            Ready to Build Your Social Media Presence?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Stop posting randomly and start building a strategic social media presence that drives real business results.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              Get Your Free Social Strategy <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default SocialMedia;
