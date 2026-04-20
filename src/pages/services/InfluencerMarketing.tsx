import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, CheckCircle, TrendingUp, Target, Heart, Sparkles, Star, BarChart3, Megaphone, Clock, Building2, Search, Shield } from 'lucide-react';
import SEOHead from '@/components/SEOHead';
import { AnimatedSection, StaggerContainer, StaggerItem, FloatingElement } from '@/components/AnimatedSection';
import influencerWhyMatters from '@/assets/influencer-why-matters.png';
import serviceInfluencer from '@/assets/service-influencer.png';
import { motion } from 'framer-motion';

const InfluencerMarketing = () => {
  const whyInfluencerMarketing = [
    { title: 'Trust Transfer', description: 'Influencers have invested years building loyal communities who trust their judgment. When they endorse your brand, that trust transfers to you.' },
    { title: 'Authentic Reach', description: 'Unlike ads that users actively avoid, influencer content appears naturally in feeds from accounts followers chose to engage with.' },
    { title: 'Precision Targeting', description: 'Each influencer attracts specific demographics with particular interests. We identify creators whose audiences match your ideal customer profiles.' },
    { title: 'Content Generation', description: 'Influencer partnerships generate authentic content you can repurpose across your own channels—often outperforming brand-created content.' },
    { title: 'Algorithm Advantage', description: 'Social platforms prioritize content from individual creators over brand accounts. Influencer content receives higher organic visibility.' },
  ];

  const services = [
    {
      icon: Search,
      title: 'Influencer Discovery & Vetting',
      description: 'Identify ideal creators through audience demographics, engagement analysis, content quality assessment, and brand safety verification.',
    },
    {
      icon: Target,
      title: 'Strategy Development',
      description: 'Campaign objectives, influencer tier selection, content formats, messaging guidelines, timeline planning, and budget allocation.',
    },
    {
      icon: Users,
      title: 'Outreach & Negotiation',
      description: 'Professional outreach, rate negotiation, contract development, usage rights management, and relationship building.',
    },
    {
      icon: Heart,
      title: 'Content Collaboration',
      description: 'Creative briefs balancing brand messaging with authentic creator voice, content reviews, revisions, and approval processes.',
    },
    {
      icon: Megaphone,
      title: 'Campaign Amplification',
      description: 'Boost top-performing content with paid promotion to extend reach beyond organic audiences.',
    },
    {
      icon: BarChart3,
      title: 'Performance Analytics',
      description: 'Comprehensive tracking of reach, engagement, traffic, conversions, sales attribution, and ROI calculation.',
    },
    {
      icon: Shield,
      title: 'Compliance Management',
      description: 'Ensure FTC disclosure compliance, platform guideline adherence, and brand safety throughout campaigns.',
    },
  ];

  const influencerTiers = [
    { type: 'Nano Influencers', followers: '1K-10K', description: 'Highest engagement rates, hyper-niche communities, authentic relationships, cost-effective for testing.' },
    { type: 'Micro Influencers', followers: '10K-100K', description: 'Strong authenticity, developed content skills, reasonable rates, excellent engagement balance.' },
    { type: 'Mid-Tier Influencers', followers: '100K-500K', description: 'Professional content, significant reach, established partnerships, growing influence.' },
    { type: 'Macro Influencers', followers: '500K-1M', description: 'Broad reach, polished content, proven track records, brand association value.' },
    { type: 'Mega/Celebrity Influencers', followers: '1M+', description: 'Maximum exposure, mainstream recognition, campaign centerpiece potential.' },
  ];

  const processSteps = [
    { step: '01', title: 'Strategy & Goals', description: 'Define campaign objectives, target audience, key messages, success metrics, and budget parameters.' },
    { step: '02', title: 'Influencer Research', description: 'Identify and evaluate potential creators based on audience alignment, engagement authenticity, content quality, and brand fit.' },
    { step: '03', title: 'Outreach & Negotiation', description: 'Professional communication, rate discussions, contract development, and relationship establishment.' },
    { step: '04', title: 'Content Development', description: 'Creative brief development, content guidelines, review and approval processes, and revision management.' },
    { step: '05', title: 'Campaign Execution', description: 'Coordinate posting schedules, monitor live content, manage real-time adjustments, and ensure compliance.' },
    { step: '06', title: 'Analysis & Reporting', description: 'Comprehensive performance analysis, ROI calculation, learnings documentation, and optimization recommendations.' },
  ];

  const campaignTypes = [
    'Product Launches',
    'Brand Awareness',
    'Content Generation',
    'Event Promotion',
    'Sales & Conversions',
    'App Downloads',
    'Website Traffic',
    'User-Generated Content',
  ];

  const platforms = [
    'Instagram',
    'TikTok',
    'YouTube',
    'LinkedIn',
    'Twitter/X',
    'Pinterest',
    'Twitch',
    'Podcasts',
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Influencer Marketing Services | Brand Partnerships & Campaigns | Senseoza"
        description="Connect with the right influencers to amplify your brand. Strategic influencer partnerships, campaign management, and measurable results that drive authentic engagement."
        canonicalUrl="https://senseoza.com/services/influencer-marketing"
      />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center gradient-hero overflow-hidden pt-32 md:pt-36">
        <FloatingElement className="absolute top-20 left-10 w-72 h-72 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 blur-3xl" delay={0} />
        <FloatingElement className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-gradient-to-r from-accent/20 to-primary/20 blur-3xl" delay={2} />
        <FloatingElement className="absolute top-1/2 left-1/3 w-64 h-64 rounded-full bg-primary/10 blur-3xl" delay={4} />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="right">
              <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 text-white">
                Influencer Marketing That{' '}
                <span className="text-accent">Builds Authentic Connections</span>
              </h1>
              <p className="text-xl text-white/80 mb-6">
                92% of consumers trust recommendations from individuals over brands, and influencer marketing delivers average returns of ₹5.78 for every rupee invested. We build strategic influencer partnerships that align with your brand values and deliver measurable business results.
              </p>
              <p className="font-semibold text-white mb-8">
                Creator Partnerships | Campaign Management | Performance Tracking | ROI Optimization
              </p>
              <Link to="/contact" className="inline-block mb-12">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg hover:shadow-xl transition-all duration-300">
                  Start Your Campaign <ArrowRight className="ml-2 h-5 w-5" />
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
                  src={serviceInfluencer} 
                  alt="Influencer Marketing Services illustration" 
                  className="relative w-full h-auto rounded-2xl shadow-2xl border border-white/10"
                  width={1024}
                  height={1024}
                />
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Why Influencer Marketing Section */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <AnimatedSection direction="right">
              <motion.div className="relative" whileHover={{ scale: 1.02 }} transition={{ type: 'spring', stiffness: 300 }}>
                <div className="absolute -inset-4 bg-gradient-to-r from-accent/20 to-primary/20 rounded-3xl blur-2xl opacity-60" />
                <img src={influencerWhyMatters} alt="Influencer marketing network visualization" className="relative w-full h-auto rounded-2xl shadow-2xl border border-white/10 brightness-90" loading="lazy" width={1024} height={1024} />
              </motion.div>
            </AnimatedSection>
            <AnimatedSection direction="left" delay={0.2}>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full text-accent text-sm font-semibold mb-6">
                <Sparkles className="h-4 w-4" /> The Power of Influence
              </span>
              <h2 className="text-4xl font-heading font-bold mb-6">
                The Power of{' '}
                <span className="text-accent">Authentic Influence</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Influencers have invested years building loyal communities who trust their judgment. When they endorse your brand, that trust transfers to you.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-card rounded-xl border border-border">
                  <p className="text-3xl font-bold text-accent mb-1">92%</p>
                  <p className="text-sm text-muted-foreground">Trust influencer recommendations</p>
                </div>
                <div className="p-4 bg-card rounded-xl border border-border">
                  <p className="text-3xl font-bold text-accent mb-1">11x</p>
                  <p className="text-sm text-muted-foreground">ROI vs traditional advertising</p>
                </div>
                <div className="p-4 bg-card rounded-xl border border-border">
                  <p className="text-3xl font-bold text-accent mb-1">49%</p>
                  <p className="text-sm text-muted-foreground">Consumers rely on influencer advice</p>
                </div>
                <div className="p-4 bg-card rounded-xl border border-border">
                  <p className="text-3xl font-bold text-accent mb-1">5.2x</p>
                  <p className="text-sm text-muted-foreground">Higher engagement than brand posts</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Influencer Tiers Section */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-semibold mb-6">
              <Users className="h-4 w-4" /> Influencer Tiers
            </span>
            <h2 className="text-4xl font-heading font-bold">
              Influencer Tiers{' '}
              <span className="text-accent">We Work With</span>
            </h2>
          </AnimatedSection>
          <div className="space-y-4 max-w-4xl mx-auto">
            {influencerTiers.map((tier, index) => (
              <AnimatedSection key={index} direction={index % 2 === 0 ? 'left' : 'right'}>
                <motion.div
                  whileHover={{ x: 10 }}
                  className="p-6 bg-card rounded-2xl border border-border hover:border-primary/50 transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="flex-shrink-0">
                      <span className="font-heading font-bold text-lg">{tier.type}</span>
                      <span className="ml-3 text-sm text-primary font-medium">{tier.followers}</span>
                    </div>
                    <p className="text-muted-foreground text-sm md:ml-auto md:max-w-md">{tier.description}</p>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-32 gradient-hero relative overflow-hidden">
        <FloatingElement className="absolute top-10 left-20 w-48 h-48 rounded-full bg-accent/20 blur-3xl" delay={0} />
        <FloatingElement className="absolute bottom-10 right-20 w-64 h-64 rounded-full bg-primary/20 blur-3xl" delay={2} />
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-semibold mb-6">
              <Star className="h-4 w-4" /> Our Services
            </span>
            <h2 className="text-4xl font-heading font-bold text-white mb-4">
              End-to-End Influencer{' '}
              <span className="text-accent">Campaign Management</span>
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              From strategy to execution, we handle every aspect of your influencer marketing journey.
            </p>
          </AnimatedSection>
          
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <StaggerItem key={index}>
                  <motion.div
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="h-full p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300"
                  >
                    <div className="p-3 bg-accent/20 rounded-xl w-fit mb-4">
                      <IconComponent className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="text-xl font-heading font-bold text-accent mb-3">{service.title}</h3>
                    <p className="text-white/70">{service.description}</p>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient" />
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-semibold mb-6">
              <Clock className="h-4 w-4" /> Our Process
            </span>
            <h2 className="text-4xl font-heading font-bold">
              How We Build{' '}
              <span className="text-accent">Successful Campaigns</span>
            </h2>
          </AnimatedSection>
          
          <div className="max-w-4xl mx-auto">
            {processSteps.map((item, index) => (
              <AnimatedSection key={index} direction={index % 2 === 0 ? 'left' : 'right'}>
                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex gap-6 mb-8 p-6 rounded-2xl hover:bg-secondary/50 transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <span className="text-xl font-bold text-white">{item.step}</span>
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

      {/* Campaign Types & Platforms */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient opacity-50" />
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold mb-4">
              Campaign Types &{' '}
              <span className="text-accent">Platforms We Cover</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From product launches to brand awareness, we execute diverse campaign formats across every major platform.
            </p>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
            {/* Campaign Types */}
            <AnimatedSection direction="left">
              <div className="p-8 rounded-2xl bg-card/60 backdrop-blur-sm border border-border/50 h-full">
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-3 rounded-xl bg-accent/20">
                    <Target className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-accent">Campaign Types We Execute</h3>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {campaignTypes.map((type, index) => (
                    <motion.div 
                      key={index}
                      className="flex items-center gap-3 p-4 bg-background/60 rounded-xl border border-border/30 hover:border-accent/40 transition-colors"
                      whileHover={{ scale: 1.03, y: -2 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                      <span className="text-sm font-medium text-foreground">{type}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Platforms */}
            <AnimatedSection direction="right">
              <div className="p-8 rounded-2xl bg-card/60 backdrop-blur-sm border border-border/50 h-full">
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-3 rounded-xl bg-accent/20">
                    <Megaphone className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-accent">Platforms We Cover</h3>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {platforms.map((platform, index) => (
                    <motion.div 
                      key={index}
                      className="flex items-center gap-3 p-4 bg-background/60 rounded-xl border border-border/30 hover:border-accent/40 transition-colors"
                      whileHover={{ scale: 1.03, y: -2 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                      <span className="text-sm font-medium text-foreground">{platform}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Custom Solutions Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection className="text-center">
              <h2 className="text-4xl font-heading font-bold mb-6">
                Tailored to Your Brand
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Every brand has unique positioning, values, and audience characteristics that require customized influencer strategies. A luxury fashion brand needs entirely different creators than a SaaS company or a local restaurant chain. We develop custom programs based on your specific brand personality, target demographics, campaign objectives, competitive landscape, and budget parameters.
              </p>
            </AnimatedSection>
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
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6 text-white">
              Ready to Partner with{' '}
              <span className="text-accent">Influencers?</span>
            </h2>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              Let's create campaigns that resonate with your audience and drive real business results through authentic influencer partnerships.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
                <Button size="lg" className="w-full sm:w-auto px-8 py-6 bg-white text-primary hover:bg-white/90 shadow-xl">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
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

export default InfluencerMarketing;