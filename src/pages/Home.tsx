import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, TrendingUp, Users, Zap, Brain, Search, Share2, FileText, MousePointerClick, Globe } from 'lucide-react';
import { useCountUp } from '@/hooks/use-count-up';
import ParticleBackground from '@/components/ParticleBackground';
import SEOHead from '@/components/SEOHead';
import { organizationSchema } from '@/utils/schema';
import heroBg from '@/assets/hero-bg.jpg';
import aboutImage from '@/assets/about-3d.png';
import serviceAI from '@/assets/service-ai-marketing.png';
import serviceSEO from '@/assets/service-seo.png';
import serviceSocial from '@/assets/service-social-media.png';
import serviceContent from '@/assets/service-content.png';
import servicePPC from '@/assets/service-ppc.png';
import serviceWeb from '@/assets/service-web-design.png';

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
      icon: Brain,
      title: 'AI-Powered Marketing',
      description: 'Predictive campaigns powered by artificial intelligence to maximize reach and optimize budgets.',
      image: serviceAI,
      link: '/services/ai-marketing',
      tags: ['Predictive Analytics', 'AI Automation', 'Smart Segmentation'],
    },
    {
      icon: Search,
      title: 'SEO Excellence',
      description: 'Technical SEO, content optimization, and link building to dominate search rankings.',
      image: serviceSEO,
      link: '/services/seo',
      tags: ['Technical SEO', 'Keyword Research', 'Link Building'],
    },
    {
      icon: Share2,
      title: 'Social Media Marketing',
      description: 'Data-driven social strategies plus influencer partnerships to build engaged communities.',
      image: serviceSocial,
      link: '/services/social-media',
      tags: ['Social Strategy', 'Influencer Campaigns', 'Community Management'],
    },
    {
      icon: FileText,
      title: 'Content Marketing',
      description: 'Blogs, videos, infographics, and storytelling that convert visitors into customers.',
      image: serviceContent,
      link: '/services/content-marketing',
      tags: ['Blog Writing', 'Video Content', 'SEO Content'],
    },
    {
      icon: MousePointerClick,
      title: 'PPC & Paid Ads',
      description: 'ROI-focused ad campaigns across Google, Meta, and more with continuous optimization.',
      image: servicePPC,
      link: '/services/ppc-ads',
      tags: ['Google Ads', 'Meta Ads', 'Retargeting'],
    },
    {
      icon: Globe,
      title: 'Web Design & Development',
      description: 'Modern, conversion-ready websites with responsive UX that turn visitors into customers.',
      image: serviceWeb,
      link: '/services/web-design',
      tags: ['Responsive Design', 'UX/UI Design', 'E-commerce'],
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

      {/* About Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                About Senseoza
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                At Senseoza, we believe digital presence is the new business power. Our team blends AI innovation, creativity, and data-driven strategy to help brands grow faster.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                With 250+ clients served and a 98% satisfaction rate, we've built a reputation for delivering measurable results that transform businesses.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-full font-semibold">Innovation</span>
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-full font-semibold">Transparency</span>
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-full font-semibold">Growth</span>
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-full font-semibold">Results</span>
              </div>
              <Link to="/about">
                <Button size="lg" className="gradient-primary">
                  Learn More About Us <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <img 
                src={aboutImage} 
                alt="About Senseoza - Digital Marketing Team" 
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
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

          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={index}
                className="grid lg:grid-cols-2 gap-12 items-center"
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="p-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl w-fit mb-6">
                    <service.icon className="h-10 w-10 text-primary icon-3d" />
                  </div>
                  <h3 className="text-3xl font-heading font-bold mb-4">{service.title}</h3>
                  <p className="text-lg text-muted-foreground mb-6">{service.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.tags.map((tag, idx) => (
                      <span key={idx} className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link to={service.link} onClick={() => window.scrollTo(0, 0)}>
                    <Button className="gradient-primary">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-auto rounded-2xl shadow-xl hover:shadow-2xl transition-shadow"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services" onClick={() => window.scrollTo(0, 0)}>
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
