import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Award, Brain, Shield, ArrowRight, CheckCircle, Handshake, Rocket, Target, Users, Zap, Star, Globe, Sparkles } from 'lucide-react';
import SEOHead from '@/components/SEOHead';
import { organizationSchema } from '@/utils/schema';
import { AnimatedSection, StaggerContainer, StaggerItem, FloatingElement } from '@/components/AnimatedSection';
import { motion } from 'framer-motion';
import aboutImage from '@/assets/about-3d.png';

const About = () => {
  const values = [
    { icon: Award, title: 'Results Over Recognition', description: "We measure success by your growth, not our awards. While we're proud of our achievements, what matters most is the revenue we generate for our clients." },
    { icon: Shield, title: 'Transparency Always', description: 'No black boxes. No hidden fees. No jargon. We believe you deserve to understand exactly how your marketing investment is performing.' },
    { icon: Brain, title: 'Innovation Through AI', description: 'We embrace technology to stay ahead of the curve. By leveraging AI and automation, we deliver faster results and deeper insights than traditional agencies.' },
    { icon: Handshake, title: 'Partnership, Not Transactions', description: "We're not here for quick wins. We build long-term partnerships with clients who value sustainable growth and strategic thinking." },
  ];

  const teamExpertise = [
    { title: 'SEO Specialists', desc: 'Google Analytics certified' },
    { title: 'PPC Strategists', desc: 'Google Ads & Meta Blueprint certified' },
    { title: 'Content Creators', desc: 'Award-winning writers and designers' },
    { title: 'Data Scientists', desc: 'Analytical minds transforming data into insights' },
    { title: 'AI Engineers', desc: 'Building and optimizing our proprietary marketing tools' },
  ];

  const commitments = [
    { icon: Users, text: 'A dedicated account manager who knows your business inside out' },
    { icon: Target, text: 'Monthly strategy sessions to review performance and plan ahead' },
    { icon: Globe, text: '24/7 access to your campaign dashboards and reports' },
    { icon: Zap, text: 'Proactive recommendations based on market trends and opportunities' },
    { icon: Star, text: 'A team that celebrates your wins as much as you do' },
  ];

  const stats = [
    { value: '500+', label: 'Successful Campaigns' },
    { value: '97%', label: 'Client Satisfaction' },
    { value: '10+', label: 'Years Experience' },
    { value: '50M+', label: 'Revenue Generated' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="About Senseoza | Leading AI-Powered Marketing Agency in Pune"
        description="Learn how Senseoza is revolutionizing digital marketing in Pune with AI-powered strategies. Our expert team delivers measurable results for businesses. Contact us: 9168411743."
        canonicalUrl="https://senseoza.com/about"
        schema={organizationSchema}
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
              <span className="text-sm font-medium text-white/90">About Senseoza</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-white mb-6 leading-tight"
            >
              Transforming Businesses Through{' '}
              <span className="text-accent">Intelligent Digital Marketing</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-white/80 mb-10 max-w-3xl mx-auto"
            >
              We are a team of passionate digital marketers, AI enthusiasts, and creative minds dedicated to helping brands achieve unprecedented growth.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
                <Button size="lg" className="w-full sm:w-auto px-8 py-6 bg-white text-primary hover:bg-white/90 shadow-xl">
                  Start Your Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/case-studies" onClick={() => window.scrollTo(0, 0)}>
                <Button size="lg" variant="outline" className="w-full sm:w-auto px-8 py-6 border-white/30 bg-white/5 text-white hover:bg-white/10">
                  View Our Work
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 relative -mt-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card rounded-2xl p-6 border border-border/50 text-center shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="text-3xl md:text-4xl font-heading font-bold text-accent mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <AnimatedSection direction="right" className="order-2 lg:order-1">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-semibold mb-6">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                Born From a Vision to <span className="text-accent">Revolutionize Marketing</span>
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded on the belief that every business deserves marketing that delivers measurable results, Senseoza was born from a simple question: What if marketing agencies actually cared about ROI as much as their clients do?
                </p>
                <p>
                  Traditional marketing agencies often focus on vanity metrics—likes, impressions, and follower counts—that look good in reports but do not move the needle for your business.
                </p>
                <p>
                  That is why we created Senseoza: a digital marketing agency that combines artificial intelligence, data science, and strategic creativity to deliver campaigns that do not just generate traffic—they generate revenue.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="left" className="order-1 lg:order-2 relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl" />
              <img 
                src={aboutImage} 
                alt="About Senseoza"
                className="relative w-full h-auto rounded-2xl shadow-2xl"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 gradient-dark" />
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="max-w-4xl mx-auto">
            <motion.div
              whileHover={{ y: -4 }}
              className="relative overflow-hidden rounded-3xl p-8 md:p-12 bg-gradient-to-br from-primary/20 to-accent/20 border border-white/10 backdrop-blur-lg"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-accent/20 rounded-full -mr-20 -mt-20 blur-2xl" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/20 rounded-full -ml-16 -mb-16 blur-2xl" />
              <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                  <Rocket className="h-10 w-10 text-white" />
                </div>
                <div className="text-center md:text-left">
                  <h2 className="text-2xl md:text-3xl font-heading font-bold text-white mb-3">Our Mission</h2>
                  <p className="text-lg text-white/80">
                    To empower businesses with intelligent, data-driven marketing strategies that deliver measurable growth and sustainable competitive advantage.
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient" />
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-semibold mb-4">
              Our Values
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold">
              The Principles That <span className="text-accent">Guide Us</span>
            </h2>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <StaggerItem key={index}>
                  <motion.div
                    whileHover={{ y: -8 }}
                    className="group bg-card p-8 rounded-2xl border border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-300 h-full"
                  >
                    <div className="flex items-start gap-5">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <IconComponent className="h-7 w-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-heading font-bold mb-2 group-hover:text-primary transition-colors">{value.title}</h3>
                        <p className="text-muted-foreground">{value.description}</p>
                      </div>
                    </div>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 md:py-32 bg-secondary/30">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-semibold mb-4">
              Our Team
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
              Certified Experts Across <span className="text-accent">Every Discipline</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our team consists of certified specialists across every digital marketing discipline. Together, we bring decades of combined experience and a shared passion for driving client success.
            </p>
          </AnimatedSection>
          
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {teamExpertise.map((item, index) => (
              <StaggerItem key={index}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="bg-card p-6 rounded-2xl border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                    <h3 className="font-heading font-bold text-lg">{item.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground pl-8">{item.desc}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Why We Exist */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute inset-0 dot-pattern opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="max-w-4xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-semibold mb-4">
              Why Senseoza Exists
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-6">
              Democratizing Advanced Marketing
            </h2>
            <p className="text-lg text-white/80 leading-relaxed">
              We believe small and medium-sized businesses deserve access to enterprise-level marketing expertise. That is why we have made it our mission to democratize advanced marketing strategies through AI and automation. Whether you are a startup looking to make your mark or an established business ready to scale, Senseoza provides the tools, expertise, and dedication you need to compete—and win—in today's digital marketplace.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient" />
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-semibold mb-4">
              Our Commitment to You
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold">
              What You Get When You <span className="text-accent">Partner With Us</span>
            </h2>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {commitments.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <StaggerItem key={index}>
                  <motion.div
                    whileHover={{ x: 4 }}
                    className="flex items-start gap-4 p-5 bg-card rounded-xl border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="p-3 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex-shrink-0">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <span className="text-foreground font-medium">{item.text}</span>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-secondary/30">
        <div className="container mx-auto px-4">
          <AnimatedSection className="max-w-4xl mx-auto">
            <div className="bg-card rounded-3xl p-8 md:p-12 border border-border/50 shadow-xl text-center">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Let's Build Something <span className="text-accent">Great Together</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Ready to experience digital marketing that actually drives business growth?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
                  <Button size="lg" className="w-full sm:w-auto gradient-primary shadow-primary">
                    Start Your Free Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/services" onClick={() => window.scrollTo(0, 0)}>
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    Explore Our Services
                  </Button>
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default About;
