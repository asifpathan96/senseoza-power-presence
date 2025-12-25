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
import seoImage from '@/assets/seo.jpg';
import aiMarketingImage from '@/assets/ai-marketing.jpg';
import socialMediaImage from '@/assets/social-media.jpg';

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
      description: 'Predictive campaigns powered by artificial intelligence to maximize reach.',
      image: serviceAI,
      link: '/services/ai-marketing',
    },
    {
      icon: Search,
      title: 'SEO Excellence',
      description: 'Technical SEO and link building to dominate search rankings.',
      image: serviceSEO,
      link: '/services/seo',
    },
    {
      icon: Share2,
      title: 'Social Media Marketing',
      description: 'Data-driven social strategies to build engaged communities.',
      image: serviceSocial,
      link: '/services/social-media',
    },
    {
      icon: FileText,
      title: 'Content Marketing',
      description: 'Blogs, videos, and storytelling that convert visitors.',
      image: serviceContent,
      link: '/services/content-marketing',
    },
    {
      icon: MousePointerClick,
      title: 'PPC & Paid Ads',
      description: 'ROI-focused ad campaigns across Google and Meta.',
      image: servicePPC,
      link: '/services/ppc-ads',
    },
    {
      icon: Globe,
      title: 'Web Design',
      description: 'Modern, conversion-ready websites with responsive UX.',
      image: serviceWeb,
      link: '/services/web-design',
    },
  ];

  const blogPosts = [
    {
      title: 'How AI is Revolutionizing Digital Marketing in 2024',
      excerpt: 'Discover the latest AI tools and strategies transforming how brands connect with audiences.',
      category: 'AI Marketing',
      date: 'Dec 10, 2024',
      readTime: '5 min read',
      image: aiMarketingImage,
      slug: 'ai-revolutionizing-digital-marketing-2024',
    },
    {
      title: 'SEO Trends You Can\'t Ignore This Year',
      excerpt: 'Stay ahead of algorithm updates with these proven SEO strategies for better rankings.',
      category: 'SEO',
      date: 'Dec 8, 2024',
      readTime: '4 min read',
      image: seoImage,
      slug: 'seo-trends-2024',
    },
    {
      title: 'Building Brand Authority on Social Media',
      excerpt: 'Learn how to create authentic connections and grow your brand presence online.',
      category: 'Social Media',
      date: 'Dec 5, 2024',
      readTime: '6 min read',
      image: socialMediaImage,
      slug: 'building-brand-authority-social-media',
    },
  ];

  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'CEO',
      company: 'TechStart India',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
      rating: 5,
      text: 'Senseoza transformed our online presence completely. Our leads increased by 300% in just 3 months!',
    },
    {
      name: 'Rahul Verma',
      role: 'Marketing Director',
      company: 'GrowthBox',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
      rating: 5,
      text: 'The AI-powered campaigns they created delivered exceptional ROI. Highly recommend their services.',
    },
    {
      name: 'Anita Desai',
      role: 'Founder',
      company: 'StyleHub',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
      rating: 5,
      text: 'Professional team with innovative strategies. Our social media engagement grew 5x under their guidance.',
    },
    {
      name: 'Vikram Patel',
      role: 'COO',
      company: 'FinanceFirst',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
      rating: 5,
      text: 'Their SEO expertise helped us rank #1 for our key terms. Traffic has never been better!',
    },
    {
      name: 'Sneha Kulkarni',
      role: 'Brand Manager',
      company: 'EcoLife Products',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop',
      rating: 5,
      text: 'Senseoza understands modern digital marketing like no other agency. Truly exceptional results.',
    },
  ];

  const partners = [
    { name: 'Google Partner', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' },
    { name: 'Meta Business Partner', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/ab/Meta-Logo.png' },
    { name: 'HubSpot', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/3f/HubSpot_Logo.svg' },
    { name: 'Shopify', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Shopify_logo_2018.svg' },
    { name: 'Semrush', logo: 'https://cdn.worldvectorlogo.com/logos/semrush.svg' },
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
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive digital marketing solutions powered by innovation and expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Link 
                key={index} 
                to={service.link} 
                onClick={() => window.scrollTo(0, 0)}
                className="group bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-border/50"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg">
                      <service.icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-xl font-heading font-bold group-hover:text-primary transition-colors">{service.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{service.description}</p>
                  <span className="text-primary font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                    Learn More <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/services" onClick={() => window.scrollTo(0, 0)}>
              <Button size="lg" className="gradient-primary">
                View All Services <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-primary-foreground">
              Trusted Partners
            </h2>
            <p className="text-primary-foreground/80 max-w-xl mx-auto">
              We collaborate with industry leaders to deliver the best results
            </p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {partners.map((partner, index) => (
              <div 
                key={index}
                className="bg-white/90 backdrop-blur-sm rounded-xl px-6 py-4 shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300"
              >
                <img 
                  src={partner.logo} 
                  alt={partner.name}
                  className="h-8 md:h-10 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Blog Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Latest Insights
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Stay ahead with expert tips on SEO, AI marketing, and digital growth strategies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Link 
                key={index}
                to={`/blog/${post.slug}`}
                onClick={() => window.scrollTo(0, 0)}
                className="group bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-border/50"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold text-primary uppercase tracking-wider">{post.category}</span>
                  <h3 className="text-lg font-heading font-bold mt-2 mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/blog" onClick={() => window.scrollTo(0, 0)}>
              <Button size="lg" className="gradient-primary">
                Read More Articles <ArrowRight className="ml-2 h-5 w-5" />
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
