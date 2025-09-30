import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, TrendingUp, Users, Zap } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';
import aiMarketing from '@/assets/ai-marketing.jpg';
import socialMedia from '@/assets/social-media.jpg';
import seoImage from '@/assets/seo.jpg';

const Home = () => {
  const stats = [
    { number: '250+', label: 'Clients Served', icon: Users },
    { number: '98%', label: 'Client Satisfaction', icon: Sparkles },
    { number: '3.5x', label: 'Avg ROI Increase', icon: TrendingUp },
    { number: '10M+', label: 'Impressions Generated', icon: Zap },
  ];

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
        </div>
        
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-heading font-black text-white drop-shadow-lg mb-6 animate-fade-in">
            Turning Presence into Power
          </h1>
          <p className="text-xl md:text-2xl text-white/90 drop-shadow-md mb-8 max-w-3xl mx-auto animate-fade-in">
            Elevate your brand with AI-powered digital marketing solutions that drive real results
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Link to="/contact">
              <Button size="lg" className="gradient-accent text-lg px-8 shadow-glow">
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
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
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <stat.icon className="h-8 w-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-base" />
                <div className="text-4xl md:text-5xl font-heading font-bold text-gradient mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
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
                  <service.icon className="h-10 w-10 text-primary mb-4" />
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
              Join hundreds of successful brands who have amplified their online impact with Senseoza
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-primary-foreground text-primary text-lg px-8 hover:scale-105 transition-base">
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
