import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, TrendingUp, Users, Zap, Brain, Search, Share2, FileText, MousePointerClick, Globe, Target, BarChart, Shield, Lightbulb, Award, Building, DollarSign } from 'lucide-react';
import { useCountUp } from '@/hooks/use-count-up';
import SEOHead from '@/components/SEOHead';
import { organizationSchema } from '@/utils/schema';
import { AnimatedSection, StaggerContainer, StaggerItem, FloatingElement } from '@/components/AnimatedSection';
import { motion } from 'framer-motion';
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
  const provenResults = [
    {
      icon: TrendingUp,
      value: '425%',
      label: 'Organic Traffic Increase',
      description: 'E-commerce client saw massive organic growth in just 6 months through our comprehensive SEO strategy.'
    },
    {
      icon: DollarSign,
      value: '$2.4M',
      label: 'Revenue Generated',
      description: 'SaaS company generated millions in new revenue through our strategic content marketing approach.'
    },
    {
      icon: Target,
      value: '89%',
      label: 'Cost-per-Lead Reduction',
      description: 'Local business dramatically lowered acquisition costs while increasing lead quality and volume.'
    }
  ];

  const stats = [
    { number: 500, suffix: '+', label: 'Successful Campaigns', icon: TrendingUp },
    { number: 97, suffix: '%', label: 'Client Satisfaction', icon: Sparkles },
    { number: 5, suffix: '+', label: 'Years Experience', icon: Users },
    { number: 10, suffix: 'M+', label: 'Revenue Generated', icon: Zap }
  ];

  const StatsCard = ({ stat, index }: { stat: typeof stats[0]; index: number }) => {
    const { count, ref } = useCountUp(stat.number, 2500);
    const IconComponent = stat.icon;
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        whileHover={{ y: -6, transition: { duration: 0.3 } }}
        className="bg-white rounded-2xl p-6 shadow-md border border-border hover:shadow-lg transition-all"
      >
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
          <IconComponent className="h-6 w-6 text-primary" />
        </div>
        <div className="text-3xl md:text-4xl font-heading font-bold text-primary mb-1">
          {count}{stat.suffix}
        </div>
        <div className="text-sm text-muted-foreground">{stat.label}</div>
      </motion.div>
    );
  };

  const differentiators = [
    { icon: Brain, title: 'AI-Driven Intelligence', description: 'We leverage advanced artificial intelligence and machine learning algorithms to analyze market trends, predict customer behavior, and optimize campaigns in real-time.' },
    { icon: BarChart, title: 'Data-Obsessed Strategy', description: 'Every decision we make is backed by data. We track, measure, and analyze over 100+ performance metrics to ensure your marketing investment delivers quantifiable returns.' },
    { icon: Target, title: 'Full-Funnel Expertise', description: 'From awareness to advocacy, we manage every stage of your customer journey with consistent messaging and maximum conversion rates across all channels.' },
    { icon: Shield, title: 'Transparent Reporting', description: "You'll always know where your money goes. Our detailed monthly reports break down performance metrics and ROI calculations in plain English." }
  ];

  const services = [
    { icon: Search, title: 'Search Engine Optimization', description: 'Dominate search rankings with proven SEO strategies combining technical optimization, content excellence, and authoritative link-building.', image: serviceSEO, link: '/services/seo' },
    { icon: MousePointerClick, title: 'Pay-Per-Click Advertising', description: 'Generate immediate, qualified traffic with expertly managed paid advertising campaigns optimized for maximum ROAS.', image: servicePPC, link: '/services/ppc-ads' },
    { icon: Share2, title: 'Social Media Marketing', description: 'Build a loyal community and drive engagement with strategic social media management that turns followers into customers.', image: serviceSocial, link: '/services/social-media' },
    { icon: FileText, title: 'Content Marketing', description: 'Attract and convert ideal customers with high-quality content that establishes your authority and drives organic traffic.', image: serviceContent, link: '/services/content-marketing' },
    { icon: Brain, title: 'AI Marketing Automation', description: 'Scale your marketing efforts without scaling your team using AI-driven automation tools that personalize experiences.', image: serviceAI, link: '/services/ai-marketing' },
    { icon: Globe, title: 'Website Design & Development', description: 'High-converting websites optimized for performance, user experience, and search engines.', image: serviceWeb, link: '/services/web-design' }
  ];

  const process = [
    { step: '01', title: 'Discovery & Audit', description: 'We start by understanding your business, goals, target audience, and current marketing performance.', icon: Search },
    { step: '02', title: 'Strategy Development', description: 'We create a customized marketing roadmap with clear objectives, KPIs, and timelines.', icon: Target },
    { step: '03', title: 'Implementation', description: 'Our expert team executes the strategy across all channels, continuously testing and optimizing.', icon: Zap },
    { step: '04', title: 'Reporting & Scaling', description: 'You receive detailed performance reports. We scale winning strategies to maximize growth.', icon: TrendingUp }
  ];

  const industries = ['E-commerce & Retail', 'SaaS & Technology', 'Healthcare & Wellness', 'Professional Services', 'Real Estate', 'Manufacturing & B2B', 'Hospitality & Tourism', 'Education'];

  const whyChooseUs = [
    { icon: Award, title: 'Proven Track Record', description: 'Over 50+ successful campaigns delivered' },
    { icon: Users, title: 'Expert Team', description: 'Certified specialists in SEO, PPC, social media, and content marketing' },
    { icon: Brain, title: 'AI-Powered Insights', description: 'Leveraging technology for smarter decision-making' },
    { icon: Lightbulb, title: 'Custom Solutions', description: 'No cookie-cutter packages—every strategy is tailored to you' },
    { icon: Shield, title: 'Transparent Pricing', description: 'Clear, predictable pricing with no hidden fees' },
    { icon: Sparkles, title: 'Dedicated Support', description: "Your success is our priority—we're always here to help" }
  ];

  const blogPosts = [
    { title: 'How AI is Revolutionizing Digital Marketing in 2024', excerpt: 'Discover the latest AI tools and strategies transforming how brands connect with audiences.', category: 'AI Marketing', date: 'Dec 10, 2024', readTime: '5 min read', image: aiMarketingImage, slug: 'ai-revolutionizing-digital-marketing-2024' },
    { title: "SEO Trends You Can't Ignore This Year", excerpt: 'Stay ahead of algorithm updates with these proven SEO strategies for better rankings.', category: 'SEO', date: 'Dec 8, 2024', readTime: '4 min read', image: seoImage, slug: 'seo-trends-2024' },
    { title: 'Building Brand Authority on Social Media', excerpt: 'Learn how to create authentic connections and grow your brand presence online.', category: 'Social Media', date: 'Dec 5, 2024', readTime: '6 min read', image: socialMediaImage, slug: 'building-brand-authority-social-media' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Senseoza | AI-Powered Digital Marketing Agency in Pune" 
        description="Transform your digital presence with Senseoza, Pune's leading AI-powered digital marketing agency. Expert SEO, social media, PPC & web design services. Call 9168411743 for a free consultation." 
        canonicalUrl="https://senseoza.com/" 
        schema={organizationSchema} 
      />
      
      {/* Proven Results Section - Hero Style */}
      <section className="pt-28 pb-20 bg-background">
        <div className="container mx-auto px-4">
          <AnimatedSection className="mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-full text-sm font-semibold mb-6">
              PROVEN RESULTS
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold mb-6">
              Real Results for <span className="text-primary">Real Businesses</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl">
              We don't just promise results—we deliver them. Here's what our clients have achieved.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {provenResults.map((result, index) => {
              const IconComponent = result.icon;
              return (
                <StaggerItem key={index}>
                  <motion.div
                    whileHover={{ y: -6, transition: { duration: 0.3 } }}
                    className="bg-[hsl(200,25%,10%)] rounded-2xl p-8 h-full"
                  >
                    <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center mb-6">
                      <IconComponent className="h-7 w-7 text-white" />
                    </div>
                    <div className="text-4xl md:text-5xl font-heading font-bold text-primary mb-2">
                      {result.value}
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-3">{result.label}</h3>
                    <p className="text-white/60 text-sm leading-relaxed">{result.description}</p>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat, index) => <StatsCard key={index} stat={stat} index={index} />)}
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-semibold mb-4">
              <Sparkles className="h-4 w-4" />
              Why Choose Us
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-4">
              What Makes Senseoza <span className="text-primary">Different</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We combine AI innovation with proven marketing expertise to deliver exceptional results
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {differentiators.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <StaggerItem key={index}>
                  <motion.div
                    whileHover={{ y: -6, transition: { duration: 0.3 } }}
                    className="group bg-white border border-border rounded-2xl p-8 h-full hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-start gap-5">
                      <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                        <IconComponent className="h-7 w-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-heading font-bold mb-3">{item.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-semibold mb-4">
              What We Do
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-4">
              Our Core <span className="text-primary">Services</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Comprehensive digital marketing solutions designed to accelerate your growth
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <StaggerItem key={index}>
                  <Link to={service.link} onClick={() => window.scrollTo(0, 0)}>
                    <motion.div
                      whileHover={{ y: -6 }}
                      className="group bg-white rounded-2xl overflow-hidden border border-border hover:shadow-lg transition-all duration-300 h-full"
                    >
                      <div className="relative h-48 overflow-hidden">
                        <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                        <div className="absolute bottom-4 left-4">
                          <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg">
                            <IconComponent className="h-6 w-6 text-primary" />
                          </div>
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-lg font-heading font-bold mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{service.description}</p>
                        <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm">
                          Learn More
                          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </div>
                    </motion.div>
                  </Link>
                </StaggerItem>
              );
            })}
          </StaggerContainer>

          <AnimatedSection delay={0.4} className="text-center mt-12">
            <Link to="/services" onClick={() => window.scrollTo(0, 0)}>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white shadow-primary">
                View All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section - Dark Card Style */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative bg-[hsl(200,25%,10%)] rounded-3xl p-8 md:p-16 overflow-hidden"
          >
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -mr-48 -mt-48" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -ml-32 -mb-32" />
            
            {/* Decorative icon */}
            <div className="absolute top-8 right-8 w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center">
              <Sparkles className="h-8 w-8 text-primary" />
            </div>

            <div className="relative z-10 max-w-2xl">
              <span className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-full text-sm font-semibold mb-6">
                FREE STRATEGY SESSION
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-white mb-2">
                Ready to Transform Your
              </h2>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
                Digital Marketing?
              </h2>
              <p className="text-white/70 text-lg mb-8 max-w-xl">
                Schedule a free 30-minute strategy session with our team. We'll analyze your current presence and show you exactly how we can drive growth.
              </p>
              <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-base shadow-primary">
                  BOOK FREE CONSULTATION
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <p className="text-white/50 text-sm mt-4">
                No commitment required. Let's explore what's possible together.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-semibold mb-4">
              How We Work
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-4">
              Our Process: From Strategy to <span className="text-primary">Success</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A proven methodology that delivers consistent, measurable results
            </p>
          </AnimatedSection>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {process.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <AnimatedSection key={index} delay={index * 0.1}>
                    <motion.div
                      whileHover={{ y: -6, transition: { duration: 0.3 } }}
                      className="group bg-white border border-border rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
                    >
                      <div className="flex items-start gap-5">
                        <div className="relative">
                          <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center">
                            <IconComponent className="h-8 w-8 text-white" />
                          </div>
                          <span className="absolute -top-2 -right-2 w-8 h-8 bg-white border-2 border-primary rounded-full flex items-center justify-center text-sm font-bold text-primary shadow-md">
                            {step.step}
                          </span>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-heading font-bold mb-3">{step.title}</h3>
                          <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-[hsl(200,25%,10%)]">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-white text-sm font-semibold mb-4">
              Our Expertise
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-white mb-4">
              Industries We Serve
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              We have delivered exceptional results for businesses across diverse industries
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {industries.map((industry, index) => (
              <StaggerItem key={index}>
                <motion.div
                  whileHover={{ scale: 1.03, y: -4 }}
                  className="group bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-all duration-300 text-center"
                >
                  <Building className="h-8 w-8 text-primary mx-auto mb-3" />
                  <span className="text-white font-medium text-sm">{industry}</span>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-semibold mb-4">
              The Senseoza Advantage
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-4">
              Why Businesses Choose <span className="text-primary">Senseoza</span>
            </h2>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {whyChooseUs.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <StaggerItem key={index}>
                  <motion.div
                    whileHover={{ y: -6 }}
                    className="group bg-white border border-border rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary transition-all duration-300">
                        <IconComponent className="h-6 w-6 text-primary group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <h3 className="font-heading font-bold text-lg mb-2">{item.title}</h3>
                        <p className="text-muted-foreground text-sm">{item.description}</p>
                      </div>
                    </div>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-semibold mb-4">
              Latest News
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-4">
              Latest <span className="text-primary">Insights</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Stay ahead with expert tips on SEO, AI marketing, and digital growth strategies
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => (
              <StaggerItem key={index}>
                <Link to={`/blog/${post.slug}`} onClick={() => window.scrollTo(0, 0)}>
                  <motion.div
                    whileHover={{ y: -6 }}
                    className="group bg-white rounded-2xl overflow-hidden border border-border hover:shadow-lg transition-all duration-300 h-full"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-primary text-white text-xs font-semibold rounded-full">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-heading font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span>{post.date}</span>
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <AnimatedSection delay={0.4} className="text-center mt-12">
            <Link to="/blog" onClick={() => window.scrollTo(0, 0)}>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white shadow-primary">
                Read More Articles
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Home;