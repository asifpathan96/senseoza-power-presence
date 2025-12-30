import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { TrendingUp, Users, DollarSign, Eye, Search, ArrowRight, Sparkles } from 'lucide-react';
import SEOHead from '@/components/SEOHead';
import { AnimatedSection, StaggerContainer, StaggerItem, FloatingElement } from '@/components/AnimatedSection';
import { motion } from 'framer-motion';

const CaseStudies = () => {
  const caseStudies = [
    {
      title: 'E-Commerce Brand Achieves 350% ROI Growth',
      client: 'Fashion Retailer',
      industry: 'E-Commerce',
      challenge: 'Low conversion rates and poor organic visibility despite high traffic volume',
      solution: 'Implemented comprehensive SEO strategy, optimized product pages, and launched targeted PPC campaigns',
      results: [
        { icon: TrendingUp, metric: '350%', label: 'ROI Increase' },
        { icon: Users, metric: '180%', label: 'Traffic Growth' },
        { icon: DollarSign, metric: '$2.5M', label: 'Revenue Generated' },
      ],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop',
    },
    {
      title: 'SaaS Company Dominates Search Rankings',
      client: 'Tech Startup',
      industry: 'SaaS',
      challenge: 'Zero organic presence in competitive B2B software market',
      solution: 'AI-powered content strategy, technical SEO overhaul, and strategic link building campaign',
      results: [
        { icon: Search, metric: '#1', label: 'Ranking Position' },
        { icon: Users, metric: '450%', label: 'Organic Traffic' },
        { icon: TrendingUp, metric: '280%', label: 'Lead Generation' },
      ],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
    },
    {
      title: 'Healthcare Brand Builds Authority',
      client: 'Medical Clinic',
      industry: 'Healthcare',
      challenge: 'Limited online presence and low patient acquisition through digital channels',
      solution: 'Content marketing strategy, local SEO optimization, and social media engagement campaigns',
      results: [
        { icon: Users, metric: '520%', label: 'Patient Inquiries' },
        { icon: Eye, metric: '1M+', label: 'Monthly Impressions' },
        { icon: TrendingUp, metric: '95%', label: 'Appointment Rate' },
      ],
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=500&fit=crop',
    },
    {
      title: 'Restaurant Chain Amplifies Social Presence',
      client: 'Food & Beverage',
      industry: 'Hospitality',
      challenge: 'Inconsistent brand voice and low engagement across social media platforms',
      solution: 'Influencer marketing campaign, user-generated content strategy, and paid social advertising',
      results: [
        { icon: Users, metric: '800K', label: 'New Followers' },
        { icon: TrendingUp, metric: '650%', label: 'Engagement Rate' },
        { icon: DollarSign, metric: '220%', label: 'Sales Uplift' },
      ],
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=500&fit=crop',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Our Work | Digital Marketing Success Stories | Senseoza Pune"
        description="See how Senseoza has helped Pune businesses achieve 200%+ growth through AI-powered digital marketing. Real results, real clients, real success stories."
        canonicalUrl="https://senseoza.in/case-studies"
      />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute inset-0 dot-pattern opacity-20" />
        
        <FloatingElement className="absolute top-1/4 left-10 w-64 h-64 bg-accent/20 rounded-full blur-3xl" delay={0} />
        <FloatingElement className="absolute bottom-1/4 right-10 w-80 h-80 bg-primary/20 rounded-full blur-3xl" delay={2} />
        
        <div className="container mx-auto px-4 z-10 py-32">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-8"
            >
              <Sparkles className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium text-white/90">Proven Results</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6 leading-tight"
            >
              Case <span className="text-accent">Studies</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed"
            >
              We don't just design strategies — we deliver results. Explore how Senseoza has helped brands grow their digital presence, boost ROI, and achieve lasting success.
            </motion.p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2"
          >
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-2 bg-white rounded-full"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="space-y-20">
            {caseStudies.map((study, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className={`flex flex-col ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } gap-8 lg:gap-12 items-center`}
                >
                  {/* Image */}
                  <div className="lg:w-1/2">
                    <motion.div 
                      whileHover={{ scale: 1.02 }}
                      className="relative rounded-2xl overflow-hidden shadow-xl group"
                    >
                      <img
                        src={study.image}
                        alt={study.title}
                        className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="lg:w-1/2 space-y-6">
                    <div>
                      <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-semibold mb-4">
                        {study.industry}
                      </span>
                      <h2 className="text-2xl md:text-3xl font-heading font-bold mt-2 mb-4">
                        {study.title}
                      </h2>
                    </div>

                    <div className="bg-card border border-border/50 rounded-xl p-5">
                      <h3 className="font-heading font-bold mb-2 text-primary">Challenge</h3>
                      <p className="text-muted-foreground">{study.challenge}</p>
                    </div>

                    <div className="bg-card border border-border/50 rounded-xl p-5">
                      <h3 className="font-heading font-bold mb-2 text-primary">Solution</h3>
                      <p className="text-muted-foreground">{study.solution}</p>
                    </div>

                    <div>
                      <h3 className="font-heading font-bold mb-4">Results</h3>
                      <div className="grid grid-cols-3 gap-4">
                        {study.results.map((result, idx) => (
                          <motion.div 
                            key={idx} 
                            whileHover={{ y: -4, scale: 1.02 }}
                            className="relative group bg-gradient-to-br from-primary via-primary/90 to-accent rounded-xl p-4 text-center hover:shadow-xl transition-all duration-300"
                          >
                            <div className="absolute inset-0 bg-white/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className="relative z-10">
                              <result.icon className="h-6 w-6 text-white mx-auto mb-2 drop-shadow-md" />
                              <div className="text-xl md:text-2xl font-heading font-black text-white mb-1 drop-shadow-md">
                                {result.metric}
                              </div>
                              <div className="text-xs font-semibold text-white/90">{result.label}</div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute inset-0 dot-pattern opacity-10" />
        <FloatingElement className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl -mr-48 -mt-48" />
        <FloatingElement className="absolute bottom-0 left-0 w-80 h-80 bg-primary/20 rounded-full blur-3xl -ml-40 -mb-40" delay={2} />
        
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="max-w-4xl mx-auto text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-semibold mb-6"
            >
              <Sparkles className="h-4 w-4" />
              Your Success Story Awaits
            </motion.span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6 text-white">
              Ready to Write Your <span className="text-accent">Success Story?</span>
            </h2>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              Let's create a case study together – your brand's transformation starts here
            </p>
            <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-xl shadow-white/20 hover:shadow-2xl transition-all duration-300 px-8">
                Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;