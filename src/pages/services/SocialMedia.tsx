import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Share2, ArrowRight, CheckCircle, Target, TrendingUp, Sparkles, BarChart3, Clock, Users, MessageSquare, Camera, Megaphone } from 'lucide-react';
import SEOHead from '@/components/SEOHead';
import serviceImage from '@/assets/service-social-media.png';
import { AnimatedSection, StaggerContainer, StaggerItem, FloatingElement } from '@/components/AnimatedSection';
import { motion } from 'framer-motion';

const SocialMedia = () => {
  const whySocialMedia = [
    { title: 'Brand Discovery', description: '78% of consumers discover new brands through social media. Your potential customers are actively looking for solutions.' },
    { title: 'Direct Customer Engagement', description: 'Answer questions, address concerns, share updates, and build relationships in ways that weren\'t possible before.' },
    { title: 'Traffic and Lead Generation', description: 'Strategic social media drives qualified traffic to your website and generates leads through compelling content.' },
    { title: 'Market Intelligence', description: 'Social listening reveals what your audience truly wants, needs, and thinks about your brand.' },
    { title: 'Competitive Advantage', description: 'Active, strategic presence creates visibility that passive competitors cannot match.' },
  ];

  const services = [
    {
      icon: Target,
      title: 'Strategic Planning',
      description: 'Comprehensive social strategies including platform selection, content pillars aligned with business goals, optimal posting schedules, and competitive analysis.',
    },
    {
      icon: Camera,
      title: 'Content Creation',
      description: 'Eye-catching graphics, professional videos and Reels, compelling copy, Stories, interactive polls, and user-generated content campaigns.',
    },
    {
      icon: MessageSquare,
      title: 'Community Management',
      description: 'Prompt responses to comments and DMs, engaging with followers\' content, monitoring brand mentions, and building community groups.',
    },
    {
      icon: Megaphone,
      title: 'Social Advertising',
      description: 'Targeted paid campaigns across Facebook, Instagram, LinkedIn, TikTok, Twitter/X, and Pinterest to amplify your message.',
    },
    {
      icon: BarChart3,
      title: 'Analytics and Reporting',
      description: 'Tracking follower growth, engagement rates, website traffic from social, lead generation, ROI from paid campaigns, and competitor benchmarking.',
    },
  ];

  const platforms = [
    { name: 'Instagram', description: 'Perfect for visual storytelling through Feed posts, Reels, Stories, and Shopping features. Ideal for lifestyle brands.' },
    { name: 'Facebook', description: 'Powerful for community building through Groups, Events, and Marketplace. Excellent for broad demographic reach.' },
    { name: 'LinkedIn', description: 'Essential for B2B marketing, thought leadership, professional networking, and reaching decision-makers.' },
    { name: 'TikTok', description: 'Dominates short-form video with massive viral reach potential. Critical for Gen Z and younger Millennials.' },
    { name: 'Twitter/X', description: 'Best for real-time engagement, news, industry discussions, and establishing thought leadership.' },
    { name: 'Pinterest', description: 'Unique long content lifespan with users seeking inspiration for home, DIY, fashion, recipes, and planning.' },
    { name: 'YouTube', description: 'Second-largest search engine, perfect for tutorials, demos, educational content, and authority building.' },
  ];

  const contentFramework = [
    { percentage: '40%', type: 'Educational Content', examples: 'Industry insights, how-to guides, practical tips, research findings' },
    { percentage: '40%', type: 'Engagement Content', examples: 'Questions, polls, behind-the-scenes, team spotlights, UGC, industry news' },
    { percentage: '20%', type: 'Promotional Content', examples: 'Service announcements, case studies, testimonials, offers, lead magnets' },
  ];

  const timeline = [
    { phase: 'Month 1', title: 'Foundation', description: 'Strategy development, content calendar creation, and initial audience growth.' },
    { phase: 'Months 2-3', title: 'Engagement', description: 'Consistent engagement, 20-50% follower growth, and increased brand awareness.' },
    { phase: 'Months 3-6', title: 'Acceleration', description: 'Community building accelerates with 100%+ follower growth and measurable website traffic.' },
    { phase: 'Month 6+', title: 'Authority', description: 'Established authority, loyal community, consistent lead generation, and strong brand presence.' },
  ];

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Social Media Marketing Agency Pune | Instagram, Facebook, LinkedIn | Senseoza"
        description="Grow your brand with Senseoza's social media marketing services in Pune. Expert management of Instagram, Facebook, LinkedIn & Twitter. Creative content + AI analytics."
        canonicalUrl="https://senseoza.com/services/social-media"
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
                <Share2 className="h-12 w-12 text-accent icon-3d" />
              </motion.div>
              <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 text-accent">
                Social Media Marketing That Builds Communities and Drives Business
              </h1>
              <p className="text-xl text-primary-foreground/80 mb-6">
                With over 4.9 billion people using social platforms worldwide, your customers are already there, engaging with content and making buying decisions. The question isn't whether you should be on social media, but whether you're using it strategically to grow your business.
              </p>
              <p className="font-semibold text-primary-foreground mb-8">
                Instagram | Facebook | LinkedIn | TikTok | Twitter
              </p>
              <Link to="/contact" className="inline-block mb-12">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg hover:shadow-xl transition-all duration-300">
                  Get Your Free Social Strategy <ArrowRight className="ml-2 h-5 w-5" />
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
                  alt="Social Media Marketing illustration" 
                  className="relative w-full h-auto rounded-2xl shadow-2xl border border-white/10"
                />
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Why Social Media Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient" />
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-semibold mb-6">
              <Sparkles className="h-4 w-4" /> The Business Case
            </span>
            <h2 className="text-4xl font-heading font-bold">
              The Business Case for Strategic Social Media
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {whySocialMedia.map((item, index) => (
              <AnimatedSection key={index} direction={index % 2 === 0 ? 'left' : 'right'}>
                <motion.div 
                  className="h-full p-6 bg-card rounded-2xl border border-border hover:border-primary/50 transition-all duration-300"
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <h3 className="text-lg font-heading font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 gradient-hero relative overflow-hidden">
        <FloatingElement className="absolute top-10 left-20 w-48 h-48 rounded-full bg-accent/20 blur-3xl" delay={0} />
        <FloatingElement className="absolute bottom-10 right-20 w-64 h-64 rounded-full bg-primary/20 blur-3xl" delay={2} />
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-semibold mb-6">
              Complete Social Media Management
            </span>
            <h2 className="text-4xl font-heading font-bold text-white">
              Our Social Media Services
            </h2>
          </AnimatedSection>
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <StaggerItem key={index}>
                  <motion.div 
                    className="h-full p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300"
                    whileHover={{ y: -5, scale: 1.02 }}
                  >
                    <div className="p-3 bg-white/20 rounded-xl w-fit mb-4">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-heading font-bold text-white mb-3">{service.title}</h3>
                    <p className="text-white/70">{service.description}</p>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Platform Expertise Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient" />
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-semibold mb-6">
              <Users className="h-4 w-4" /> Platform Expertise
            </span>
            <h2 className="text-4xl font-heading font-bold">
              Mastery Across Major Platforms
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {platforms.map((platform, index) => (
              <AnimatedSection key={index}>
                <motion.div 
                  className="p-5 bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  <h3 className="text-lg font-heading font-bold mb-2">{platform.name}</h3>
                  <p className="text-muted-foreground text-sm">{platform.description}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Content Framework Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-semibold mb-6">
              Our Content Framework
            </span>
            <h2 className="text-4xl font-heading font-bold">
              Our Proven Content Framework
            </h2>
            <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
              We implement a balanced 40-40-20 content strategy that keeps audiences engaged without being overly promotional.
            </p>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {contentFramework.map((item, index) => (
              <AnimatedSection key={index}>
                <motion.div 
                  className="text-center p-8 bg-card rounded-2xl border border-border hover:border-primary/50 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-5xl font-heading font-bold text-primary mb-4">{item.percentage}</div>
                  <h3 className="text-xl font-heading font-bold mb-3">{item.type}</h3>
                  <p className="text-muted-foreground text-sm">{item.examples}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient" />
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-semibold mb-6">
              <Clock className="h-4 w-4" /> Growth Timeline
            </span>
            <h2 className="text-4xl font-heading font-bold">
              Social Media Growth Timeline
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

      {/* Custom Strategies Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection className="text-center">
              <h2 className="text-4xl font-heading font-bold mb-6">
                Tailored Solutions for Your Brand
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                No two businesses have identical social media needs. A local service business requires a vastly different approach than a national e-commerce brand. B2B companies need different strategies than B2C. That's why we don't offer cookie-cutter packages. Instead, we develop custom strategies based on your specific audience, business goals, competitive landscape, and resources.
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
              Ready to Build Your Social Media Presence?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Stop posting randomly and start implementing a strategic social media approach that drives real business results. Let's discuss how we can transform your social channels into growth engines.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-lg hover:shadow-xl transition-all duration-300">
                Get Your Free Social Strategy <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default SocialMedia;