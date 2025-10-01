import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, TrendingUp, Users, Zap } from 'lucide-react';
import { useCountUp } from '@/hooks/use-count-up';
import ParticleBackground from '@/components/ParticleBackground';
import SEOHead from '@/components/SEOHead';
import { organizationSchema } from '@/utils/schema';
import heroBg from '@/assets/hero-bg.jpg';
import aiMarketing from '@/assets/ai-marketing.jpg';
import socialMedia from '@/assets/social-media.jpg';
import seoImage from '@/assets/seo.jpg';

const Home = () => {
  const stats = [
    { number: 250, suffix: '+', label: 'Clients Served', icon: Users },
    { number: 98, suffix: '%', label: 'Client Satisfaction', icon: Sparkles },
    { number: 3.5, suffix: 'x', label: 'Avg ROI Increase', icon: TrendingUp },
    { number: 10, suffix: 'M+', label: 'Impressions Generated', icon: Zap },
  ];

  const StatsCard = ({ stat }: { stat: typeof stats[0] }) => {
    const { count, ref } = useCountUp(stat.number, 2500);
    
    return (
      <div 
        ref={ref}
        className="relative group bg-gradient-to-br from-primary via-primary/90 to-accent rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16" />
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12" />
        <div className="relative z-10">
          <stat.icon className="h-12 w-12 text-white mb-6 group-hover:scale-110 transition-transform drop-shadow-lg" />
          <div className="text-6xl md:text-7xl font-heading font-black text-white mb-4 drop-shadow-lg">
            {count}{stat.suffix}
          </div>
          <div className="text-sm font-bold text-white/90 uppercase tracking-wider">
            {stat.label}
          </div>
        </div>
      </div>
    );
  };

  const services = [
    {
      icon: Sparkles,
      title: 'AI-Powered Marketing',
      description: 'Leverage cutting-edge AI technology for data-driven campaigns and predictive analytics.',
      image: aiMarketing,
    },
    {
      icon: TrendingUp,
      title: 'SEO Excellence',
      description: 'Dominate search rankings with our proven SEO strategies and technical optimization.',
      image: seoImage,
    },
    {
      icon: Users,
      title: 'Social Media Mastery',
      description: 'Build engaged communities and drive conversions across all major platforms.',
      image: socialMedia,
    },
  ];

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Senseoza | AI-Powered Digital Marketing Agency – Turning Presence into Power"
        description="Boost your brand with AI-driven marketing, SEO, influencer services, and content strategies. Partner with Senseoza for measurable results."
        canonicalUrl="https://senseoza.com/"
        schema={organizationSchema}
      />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/70 to-accent/60" />
          <div className="absolute inset-0 bg-black/30" />
          <ParticleBackground />
        </div>
        
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-heading font-black text-white drop-shadow-lg mb-6 animate-fade-in">
            Turning Presence into Power
          </h1>
          <p className="text-xl md:text-2xl text-white/90 drop-shadow-md mb-8 max-w-3xl mx-auto animate-fade-in">
            Elevate your brand with AI-powered digital marketing solutions that deliver visibility, influence, and measurable ROI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Link to="/contact">
              <Button size="lg" className="gradient-accent text-lg px-8 shadow-glow">
                Start Growing <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/services">
              <Button size="lg" variant="outline" className="text-lg px-8 bg-white/10 border-white text-white hover:bg-white/20 backdrop-blur-sm">
                Explore Services
              </Button>
            </Link>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/50 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <StatsCard key={index} stat={stat} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive digital marketing solutions powered by innovation and expertise
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-card border border-border hover:shadow-lg transition-base cursor-pointer"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-base"
                  />
                </div>
                <div className="p-6">
                  <div className="p-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl w-fit mb-4">
                    <service.icon className="h-10 w-10 text-primary icon-3d" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <Link to="/services" className="text-primary font-semibold flex items-center group-hover:translate-x-2 transition-base">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <Button size="lg" className="gradient-primary">
                View All Services <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Zap className="h-16 w-16 text-primary-foreground mx-auto mb-6 animate-float" />
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-6">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Join 250+ brands scaling with Senseoza's proven digital marketing strategies.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-white text-primary text-lg px-8 hover:bg-white/90 hover:scale-105 transition-base shadow-lg">
                Start Your Journey <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
