import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, TrendingUp, Users, Zap, Brain, Search, Share2, FileText, MousePointerClick, Globe, Target, BarChart3, Eye, Lightbulb, ClipboardCheck, Rocket, LineChart } from 'lucide-react';
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
  const stats = [{
    number: 300,
    suffix: '%',
    label: 'Avg Organic Traffic Increase',
    icon: TrendingUp
  }, {
    number: 5.2,
    suffix: 'X',
    label: 'Avg ROAS for PPC',
    icon: Zap
  }, {
    number: 87,
    suffix: '%',
    label: 'Client Retention Rate',
    icon: Users
  }, {
    number: 50,
    suffix: 'M+',
    label: 'Revenue Generated',
    icon: Sparkles
  }];

  const StatsCard = ({
    stat
  }: {
    stat: typeof stats[0];
  }) => {
    const {
      count,
      ref
    } = useCountUp(stat.number, 2500);
    return <div ref={ref} className="relative group bg-gradient-to-br from-primary via-primary/90 to-accent rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16" />
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12" />
        <div className="relative z-10">
          <stat.icon className="h-12 w-12 text-white mb-6 group-hover:scale-110 transition-transform drop-shadow-lg" />
          <div className="text-6xl md:text-7xl font-heading font-black text-white mb-4 drop-shadow-lg">
            {stat.number % 1 !== 0 ? count.toFixed(1) : count}{stat.suffix}
          </div>
          <div className="text-sm font-bold text-white/90 uppercase tracking-wider">
            {stat.label}
          </div>
        </div>
      </div>;
  };

  const differentiators = [
    {
      icon: Brain,
      title: 'AI-Driven Intelligence',
      description: 'We leverage advanced artificial intelligence and machine learning algorithms to analyze market trends, predict customer behavior, and optimize campaigns in real-time.',
    },
    {
      icon: BarChart3,
      title: 'Data-Obsessed Strategy',
      description: 'Every decision we make is backed by data. We track, measure, and analyze over 100+ performance metrics to ensure your marketing investment delivers quantifiable returns.',
    },
    {
      icon: Target,
      title: 'Full-Funnel Expertise',
      description: 'From awareness to advocacy, we manage every stage of your customer journey with integrated strategies.',
    },
    {
      icon: Eye,
      title: 'Transparent Reporting',
      description: "You'll always know where your money goes and what results you're getting with detailed monthly reports.",
    },
  ];

  const services = [{
    icon: Search,
    title: 'Search Engine Optimization (SEO)',
    description: 'Dominate search rankings with our proven SEO strategies. We combine technical optimization, content excellence, and authoritative link-building to get your business found by customers actively searching for your solutions.',
    image: serviceSEO,
    link: '/services/seo'
  }, {
    icon: MousePointerClick,
    title: 'Pay-Per-Click Advertising (PPC)',
    description: 'Generate immediate, qualified traffic with expertly managed paid advertising campaigns. We optimize every dollar spent across Google Ads, Bing, and social platforms to maximize your return on ad spend.',
    image: servicePPC,
    link: '/services/ppc-ads'
  }, {
    icon: Share2,
    title: 'Social Media Marketing',
    description: 'Build a loyal community and drive engagement with strategic social media management. We create compelling content, foster authentic connections, and turn followers into customers.',
    image: serviceSocial,
    link: '/services/social-media'
  }, {
    icon: FileText,
    title: 'Content Marketing',
    description: 'Attract, educate, and convert your ideal customers with high-quality content that establishes your authority and drives organic traffic through blogs, videos, and more.',
    image: serviceContent,
    link: '/services/content-marketing'
  }, {
    icon: Brain,
    title: 'AI-Powered Marketing Automation',
    description: 'Scale your marketing efforts without scaling your team. Our AI-driven automation tools streamline repetitive tasks, personalize customer experiences, and nurture leads automatically.',
    image: serviceAI,
    link: '/services/ai-marketing'
  }, {
    icon: Globe,
    title: 'Website Design & Development',
    description: 'Your website is your digital storefront. We design and develop high-converting websites that are optimized for performance, user experience, and search engines.',
    image: serviceWeb,
    link: '/services/web-design'
  }];

  const processSteps = [
    {
      step: 1,
      icon: ClipboardCheck,
      title: 'Discovery & Audit',
      description: 'We understand your business, goals, and current marketing performance through comprehensive analysis.',
    },
    {
      step: 2,
      icon: Lightbulb,
      title: 'Strategy Development',
      description: 'Custom marketing roadmap with clear objectives, KPIs, and timelines.',
    },
    {
      step: 3,
      icon: Rocket,
      title: 'Implementation & Optimization',
      description: 'Execute strategy across all channels with continuous testing and optimization.',
    },
    {
      step: 4,
      icon: LineChart,
      title: 'Reporting & Scaling',
      description: 'Detailed performance reports and scaling of winning strategies.',
    },
  ];

  const blogPosts = [{
    title: 'How AI is Revolutionizing Digital Marketing in 2024',
    excerpt: 'Discover the latest AI tools and strategies transforming how brands connect with audiences.',
    category: 'AI Marketing',
    date: 'Dec 10, 2024',
    readTime: '5 min read',
    image: aiMarketingImage,
    slug: 'ai-revolutionizing-digital-marketing-2024'
  }, {
    title: "SEO Trends You Can't Ignore This Year",
    excerpt: 'Stay ahead of algorithm updates with these proven SEO strategies for better rankings.',
    category: 'SEO',
    date: 'Dec 8, 2024',
    readTime: '4 min read',
    image: seoImage,
    slug: 'seo-trends-2024'
  }, {
    title: 'Building Brand Authority on Social Media',
    excerpt: 'Learn how to create authentic connections and grow your brand presence online.',
    category: 'Social Media',
    date: 'Dec 5, 2024',
    readTime: '6 min read',
    image: socialMediaImage,
    slug: 'building-brand-authority-social-media'
  }];

  const partners = [{
    name: 'Google Partner',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg'
  }, {
    name: 'Meta Business Partner',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/a/ab/Meta-Logo.png'
  }, {
    name: 'HubSpot',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/3/3f/HubSpot_Logo.svg'
  }, {
    name: 'Shopify',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Shopify_logo_2018.svg'
  }, {
    name: 'WordPress',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/9/98/WordPress_blue_logo.svg'
  }];

  return <div className="min-h-screen">
      <SEOHead title="Transform Your Digital Presence Into Measurable Business Growth | Senseoza" description="Senseoza is an AI-powered digital marketing agency that combines cutting-edge technology with proven marketing strategies to deliver results that matter: increased revenue, qualified leads, and sustainable growth." canonicalUrl="https://senseoza.com/" schema={organizationSchema} />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0" style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/70 to-accent/60" />
          <div className="absolute inset-0 bg-black/30" />
          <ParticleBackground />
        </div>
        
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-black text-white drop-shadow-lg mb-6 animate-fade-in">
            Transform Your Digital Presence Into Measurable Business Growth
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-white/90 drop-shadow-md mb-8 max-w-4xl mx-auto animate-fade-in">
            Senseoza is an AI-powered digital marketing agency that combines cutting-edge technology with proven marketing strategies to deliver results that matter: increased revenue, qualified leads, and sustainable growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Link to="/contact">
              <Button size="lg" className="gradient-accent text-lg px-8 shadow-glow">
                Get Your Free Marketing Audit <ArrowRight className="ml-2 h-5 w-5" />
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

      {/* What Makes Senseoza Different */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              What Makes Senseoza Different
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We combine AI technology, data science, and strategic creativity to deliver campaigns that generate revenue.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {differentiators.map((item, index) => (
              <div key={index} className="bg-card p-8 rounded-2xl border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300">
                <div className="w-14 h-14 mb-6 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <item.icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-heading font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section - Results That Speak Volumes */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Results That Speak Volumes
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our track record speaks for itself
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => <StatsCard key={index} stat={stat} />)}
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
              Comprehensive digital marketing solutions designed to drive real business results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => <Link key={index} to={service.link} onClick={() => window.scrollTo(0, 0)} className="group bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-border/50">
                <div className="h-48 overflow-hidden">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg">
                      <service.icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-xl font-heading font-bold group-hover:text-primary transition-colors">{service.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{service.description}</p>
                  <span className="text-primary font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                    Learn More <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>)}
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

      {/* Our Process */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Our Process: From Strategy to Success
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A proven framework that delivers consistent results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-card p-8 rounded-2xl border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300 h-full">
                  <div className="w-12 h-12 mb-6 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-2xl font-bold text-primary-foreground">
                    {step.step}
                  </div>
                  <div className="w-12 h-12 mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
                    <step.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-heading font-bold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="h-8 w-8 text-primary/30" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />
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
            {partners.map((partner, index) => <div key={index} className="bg-white/90 backdrop-blur-sm rounded-xl px-6 py-4 shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300">
                <img src={partner.logo} alt={partner.name} className="h-8 md:h-10 w-auto object-contain" />
              </div>)}
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
            {blogPosts.map((post, index) => <Link key={index} to={`/blog/${post.slug}`} onClick={() => window.scrollTo(0, 0)} className="group bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-border/50">
                <div className="h-48 overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
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
              </Link>)}
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
          <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Zap className="h-16 w-16 text-primary-foreground mx-auto mb-6 animate-float" />
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-6">
              Ready to Grow Your Business?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
              Don't let your competitors dominate the digital space. Partner with Senseoza and turn your digital presence into a powerful growth engine.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-background text-foreground hover:bg-background/90 shadow-lg">
                Schedule Your Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>;
};

export default Home;
