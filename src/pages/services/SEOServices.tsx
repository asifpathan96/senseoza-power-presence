import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Search, ArrowRight, CheckCircle, Target, TrendingUp, FileSearch, Sparkles, BarChart3, Globe, Building2, Clock } from 'lucide-react';
import SEOHead from '@/components/SEOHead';
import serviceImage from '@/assets/service-seo.png';
import { AnimatedSection, StaggerContainer, StaggerItem, FloatingElement } from '@/components/AnimatedSection';
import { motion } from 'framer-motion';

const SEOServices = () => {
  const processSteps = [
    {
      icon: FileSearch,
      title: 'Technical Foundation Analysis',
      description: 'We begin by evaluating your website\'s technical health, examining factors that influence search engine crawling and indexing. This includes site architecture, mobile responsiveness, page speed, structured data implementation, and identifying any barriers preventing optimal search engine access.',
    },
    {
      icon: Target,
      title: 'Strategic Keyword Research',
      description: 'Understanding what your customers search for is critical. We conduct extensive research to identify not just high-volume terms, but keywords that indicate purchase intent and align with your business objectives.',
    },
    {
      icon: Search,
      title: 'On-Page Enhancement',
      description: 'Every page becomes optimized to serve both search engines and users. We enhance title tags, meta descriptions, heading structures, and content to target strategic keywords while maintaining natural readability.',
    },
    {
      icon: Sparkles,
      title: 'Content Strategy Development',
      description: 'Search engines reward websites that consistently provide valuable, relevant content. We develop comprehensive content strategies that address customer questions throughout their journey.',
    },
    {
      icon: TrendingUp,
      title: 'Authority Building',
      description: 'Earning recognition from reputable websites in your industry signals trust and expertise to search engines. Our white-hat link acquisition strategies focus on earning genuine endorsements.',
    },
    {
      icon: Globe,
      title: 'Local Visibility Optimization',
      description: 'For businesses serving specific geographic areas, local search presence is critical. We optimize your Google Business Profile, ensure consistent business information across directories, and generate authentic reviews.',
    },
  ];

  const advantages = [
    {
      title: 'AI-Enhanced Insights',
      description: 'We leverage cutting-edge artificial intelligence tools to analyze search trends, predict algorithm changes, and identify opportunities faster than traditional methods.',
    },
    {
      title: 'Competitive Intelligence',
      description: 'Understanding your competitive landscape is essential. We continuously monitor what\'s working for competitors, identifying gaps in their strategies you can exploit.',
    },
    {
      title: 'Holistic Approach',
      description: 'SEO doesn\'t exist in isolation. We integrate our optimization efforts with your broader marketing strategy, ensuring consistent messaging and maximum impact across all channels.',
    },
    {
      title: 'Transparent Communication',
      description: 'You\'ll always understand what we\'re doing and why. Our detailed reporting breaks down performance in clear terms, showing exactly how our efforts translate into business results.',
    },
  ];

  const timeline = [
    { phase: 'Months 1-3', title: 'Foundation', description: 'Focus on establishing a solid technical foundation and beginning content development. Initial ranking improvements for less competitive terms.' },
    { phase: 'Months 3-6', title: 'Momentum', description: 'Noticeable increases in organic traffic, typically 50-150% growth. More keywords reach page one with meaningful impact on lead generation.' },
    { phase: 'Months 6-12', title: 'Growth', description: 'Rankings strengthen for competitive terms, organic traffic doubles or triples, and SEO begins generating significant revenue.' },
    { phase: 'Year 1+', title: 'Dominance', description: 'Sustained growth and market dominance. Your website becomes an authority in your space, maintaining strong rankings even as competition intensifies.' },
  ];

  const industries = [
    'Healthcare & Medical Practices',
    'Legal & Law Firms',
    'Home Services (HVAC, Plumbing, Electrical)',
    'E-commerce & Online Retail',
    'SaaS & Software Companies',
    'Real Estate',
    'Professional Services',
    'Manufacturing & B2B Enterprises',
  ];

  return (
    <div className="min-h-screen">
      <SEOHead
        title="SEO Services in Pune | Rank #1 on Google | Senseoza Digital"
        description="Dominate Google search results with Senseoza's expert SEO services in Pune. AI-driven strategies, local SEO, technical SEO & link building. Call 9168411743 for a free SEO audit."
        canonicalUrl="https://senseoza.in/services/seo"
      />
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center gradient-hero overflow-hidden pt-32 md:pt-36">
        <FloatingElement className="absolute top-20 left-10 w-72 h-72 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 blur-3xl" delay={0} />
        <FloatingElement className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-gradient-to-r from-accent/20 to-primary/20 blur-3xl" delay={2} />
        <FloatingElement className="absolute top-1/2 left-1/3 w-64 h-64 rounded-full bg-primary/10 blur-3xl" delay={4} />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="right">
              <motion.div 
                className="p-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl w-fit mb-6 border border-white/10"
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Search className="h-12 w-12 text-accent icon-3d" />
              </motion.div>
              <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 text-accent">
                Professional SEO Services That Drive Organic Growth
              </h1>
              <p className="text-xl text-primary-foreground/80 mb-6">
                Achieving top rankings on search engines isn't just about keywords—it's about creating a comprehensive strategy that combines technical excellence, compelling content, and authoritative signals. We don't just aim for rankings; we focus on attracting qualified visitors who convert into paying customers.
              </p>
              <p className="font-semibold text-primary-foreground mb-8">
                Technical SEO | Keyword Research | Link Building | Local SEO
              </p>
              <Link to="/contact" className="inline-block mb-12">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg hover:shadow-xl transition-all duration-300">
                  Get Your Free SEO Audit <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </AnimatedSection>
            <AnimatedSection direction="left" delay={0.2}>
              <motion.div 
                className="relative"
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 to-accent/30 rounded-3xl blur-2xl opacity-60" />
                <img 
                  src={serviceImage} 
                  alt="SEO Services illustration" 
                  className="relative w-full h-auto rounded-2xl shadow-2xl border border-white/10"
                />
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Why SEO Matters Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient" />
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-heading font-bold text-center mb-8">
              Why Search Engine Optimization Matters for Your Business
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Search Engine Optimization represents one of the most valuable investments in digital marketing. When potential customers search for solutions you provide, being visible at the right moment creates opportunities that paid advertising simply cannot match. Our approach focuses on building long-term visibility that compounds over time, creating sustainable traffic sources that continue delivering results months and years after implementation. Unlike temporary marketing tactics, proper SEO creates lasting value by establishing your digital authority and making your business discoverable to customers actively seeking your services.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-20 gradient-hero relative overflow-hidden">
        <FloatingElement className="absolute top-10 left-20 w-48 h-48 rounded-full bg-accent/20 blur-3xl" delay={0} />
        <FloatingElement className="absolute bottom-10 right-20 w-64 h-64 rounded-full bg-primary/20 blur-3xl" delay={2} />
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-semibold mb-6">
              Our Strategic SEO Methodology
            </span>
            <h2 className="text-4xl font-heading font-bold text-white">
              A Proven Process for Sustainable Rankings
            </h2>
          </AnimatedSection>
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <StaggerItem key={index}>
                  <motion.div 
                    className="h-full p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300"
                    whileHover={{ y: -5, scale: 1.02 }}
                  >
                    <div className="p-3 bg-white/20 rounded-xl w-fit mb-4">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-heading font-bold text-white mb-3">{step.title}</h3>
                    <p className="text-white/70">{step.description}</p>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient" />
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-semibold mb-6">
              <Sparkles className="h-4 w-4" /> The Senseoza SEO Advantage
            </span>
            <h2 className="text-4xl font-heading font-bold">
              What Makes Us Different
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {advantages.map((advantage, index) => (
              <AnimatedSection key={index} direction={index % 2 === 0 ? 'left' : 'right'}>
                <motion.div 
                  className="p-6 bg-card rounded-2xl border border-border hover:border-primary/50 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  <h3 className="text-xl font-heading font-bold mb-3">{advantage.title}</h3>
                  <p className="text-muted-foreground">{advantage.description}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-semibold mb-6">
              <Clock className="h-4 w-4" /> What to Expect
            </span>
            <h2 className="text-4xl font-heading font-bold">
              What to Expect from Your SEO Investment
            </h2>
          </AnimatedSection>
          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <AnimatedSection key={index} direction={index % 2 === 0 ? 'left' : 'right'}>
                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex gap-6 mb-8 p-6 rounded-2xl hover:bg-secondary/50 transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-24 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <span className="text-sm font-bold text-white text-center">{item.phase}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-bold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient" />
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-semibold mb-6">
              <Building2 className="h-4 w-4" /> Industries We Serve
            </span>
            <h2 className="text-4xl font-heading font-bold mb-4">
              Industries We've Transformed Through SEO
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Each industry requires nuanced understanding of search patterns and customer behavior, which our team brings to every engagement.
            </p>
          </AnimatedSection>
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {industries.map((industry, index) => (
              <StaggerItem key={index}>
                <motion.div 
                  className="flex items-center gap-3 p-4 bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-300"
                  whileHover={{ scale: 1.02, y: -2 }}
                >
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="font-medium text-sm">{industry}</span>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Custom Solutions Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection className="text-center">
              <h2 className="text-4xl font-heading font-bold mb-6">
                Tailored SEO Strategies for Your Business
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Every business faces unique challenges and opportunities. That's why we don't offer one-size-fits-all packages. Instead, we develop custom strategies based on your specific goals, competitive landscape, and budget. Whether you're a startup looking to establish initial visibility or an established business aiming to dominate your market, we'll create a roadmap designed specifically for your success.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero relative overflow-hidden">
        <FloatingElement className="absolute top-10 right-20 w-48 h-48 rounded-full bg-accent/20 blur-3xl" delay={1} />
        <FloatingElement className="absolute bottom-10 left-20 w-64 h-64 rounded-full bg-primary/20 blur-3xl" delay={3} />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <AnimatedSection>
            <h2 className="text-4xl font-heading font-bold text-accent mb-6">
              Ready to Dominate Search Rankings?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Let's discuss how our SEO expertise can transform your online visibility and drive qualified traffic to your business. Schedule a free consultation to explore customized strategies for your unique needs.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-lg hover:shadow-xl transition-all duration-300">
                Get Your Free SEO Audit <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default SEOServices;