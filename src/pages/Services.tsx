import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Brain, Search, Share2, FileText, MousePointerClick, Globe, Sparkles, Users } from 'lucide-react';
import SEOHead from '@/components/SEOHead';
import { serviceSchema } from '@/utils/schema';
import { AnimatedSection, StaggerContainer, StaggerItem, FloatingElement } from '@/components/AnimatedSection';
import { motion } from 'framer-motion';
import serviceAI from '@/assets/service-ai-marketing.png';
import serviceSEO from '@/assets/service-seo.png';
import serviceSocial from '@/assets/service-social-media.png';
import serviceContent from '@/assets/service-content.png';
import servicePPC from '@/assets/service-ppc.png';
import serviceWeb from '@/assets/service-web-design.png';

const Services = () => {
  const services = [
    {
      icon: Search,
      title: 'Search Engine Optimization (SEO)',
      description: 'Dominate search rankings with our proven SEO strategies. We combine technical optimization, content excellence, and authoritative link-building to get your business found by customers actively searching for your solutions.',
      tags: ['Technical SEO', 'Keyword Research', 'Link Building', 'Local SEO'],
      image: serviceSEO,
      link: '/services/seo',
    },
    {
      icon: MousePointerClick,
      title: 'Pay-Per-Click Advertising (PPC)',
      description: 'Generate immediate, qualified traffic with expertly managed paid advertising campaigns. We optimize every dollar spent across Google Ads, Bing, and social platforms to maximize your return on ad spend (ROAS).',
      tags: ['Google Ads', 'Meta Ads', 'Display Ads', 'Retargeting'],
      image: servicePPC,
      link: '/services/ppc-ads',
    },
    {
      icon: Share2,
      title: 'Social Media Marketing',
      description: 'Build a loyal community and drive engagement with strategic social media management. We create compelling content, foster authentic connections, and turn followers into customers.',
      tags: ['Social Strategy', 'Community Management', 'Content Creation', 'Paid Social'],
      image: serviceSocial,
      link: '/services/social-media',
    },
    {
      icon: FileText,
      title: 'Content Marketing',
      description: 'Attract, educate, and convert your ideal customers with high-quality content that establishes your authority and drives organic traffic through blogs, videos, infographics, and more.',
      tags: ['Blog Writing', 'Video Content', 'Infographics', 'SEO Content'],
      image: serviceContent,
      link: '/services/content-marketing',
    },
    {
      icon: Brain,
      title: 'AI-Powered Marketing Automation',
      description: 'Scale your marketing efforts without scaling your team. Our AI-driven automation tools streamline repetitive tasks, personalize customer experiences, and nurture leads automatically.',
      tags: ['Email Automation', 'Lead Nurturing', 'CRM Integration', 'AI Insights'],
      image: serviceAI,
      link: '/services/ai-marketing',
    },
    {
      icon: Globe,
      title: 'Website Design & Development',
      description: 'Your website is your digital storefront. We design and develop high-converting websites that not only look stunning but are optimized for performance, user experience, and search engines.',
      tags: ['Responsive Design', 'UX/UI Design', 'E-commerce', 'Performance'],
      image: serviceWeb,
      link: '/services/web-design',
    },
    {
      icon: Users,
      title: 'Influencer Marketing',
      description: 'Partner with authentic creators who resonate with your target audience. We manage end-to-end influencer campaigns from discovery to reporting, driving engagement and conversions.',
      tags: ['Creator Partnerships', 'Campaign Management', 'Brand Ambassadors', 'UGC'],
      image: serviceSocial,
      link: '/services/influencer-marketing',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Digital Marketing Services in Pune | SEO, PPC, Social Media | Senseoza"
        description="Complete digital marketing solutions in Pune: SEO, PPC, social media management, content marketing, web design & AI-powered analytics. Get a free quote today!"
        canonicalUrl="https://senseoza.in/services"
        schema={serviceSchema}
      />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <FloatingElement className="absolute top-1/4 right-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl" delay={0} />
        <FloatingElement className="absolute bottom-1/4 left-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl" delay={2} />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-8"
            >
              <Sparkles className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium text-white/90">Our Services</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-white mb-6"
            >
              Comprehensive Digital Marketing Services That{' '}
              <span className="text-accent">Drive Real Results</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto"
            >
              At Senseoza, we offer a full suite of digital marketing services designed to work together seamlessly. Our integrated approach ensures every channel amplifies the others.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="space-y-16 md:space-y-24">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              const isEven = index % 2 === 0;
              
              return (
                <AnimatedSection 
                  key={index} 
                  direction={isEven ? 'right' : 'left'}
                  className="max-w-6xl mx-auto"
                >
                  <div className={`grid lg:grid-cols-2 gap-8 md:gap-12 items-center`}>
                    <motion.div 
                      whileHover={{ scale: 1.02 }}
                      className={`order-1 ${!isEven ? 'lg:order-2' : 'lg:order-1'}`}
                    >
                      <div className="relative group">
                        <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <img
                          src={service.image}
                          alt={service.title}
                          className="relative w-full h-auto rounded-2xl shadow-xl"
                        />
                      </div>
                    </motion.div>
                    
                    <div className={`order-2 ${!isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-2xl blur-xl opacity-30" />
                        <div className="relative p-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl w-fit mb-6">
                          <IconComponent className="h-10 w-10 text-primary" />
                        </div>
                      </div>
                      
                      <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">{service.title}</h2>
                      <p className="text-lg text-muted-foreground mb-6">{service.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-8">
                        {service.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <Link to={service.link} onClick={() => window.scrollTo(0, 0)}>
                        <Button className="gradient-primary shadow-primary hover:shadow-lg transition-all group">
                          Learn More 
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute inset-0 dot-pattern opacity-10" />
        <FloatingElement className="absolute top-1/4 left-10 w-64 h-64 bg-accent/30 rounded-full blur-3xl" />
        <FloatingElement className="absolute bottom-1/4 right-10 w-80 h-80 bg-primary/30 rounded-full blur-3xl" delay={2} />
        
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="max-w-4xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-semibold mb-6">
              Let's Work Together
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6 text-white">
              Ready to Elevate Your Marketing?
            </h2>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              Let's discuss how our services can transform your digital presence into a powerful growth engine
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
                <Button size="lg" className="w-full sm:w-auto px-8 py-6 bg-white text-primary hover:bg-white/90 shadow-xl">
                  Get Started Today <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/case-studies" onClick={() => window.scrollTo(0, 0)}>
                <Button size="lg" variant="outline" className="w-full sm:w-auto px-8 py-6 border-white/30 bg-white/5 text-white hover:bg-white/10">
                  View Case Studies
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Services;
