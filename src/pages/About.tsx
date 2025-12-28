import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Award, Brain, Shield, ArrowRight, CheckCircle, Handshake, Rocket, Target, Users, Zap, Star, Globe } from 'lucide-react';
import SEOHead from '@/components/SEOHead';
import { organizationSchema } from '@/utils/schema';
import aboutImage from '@/assets/about-3d.png';

const About = () => {
  const values = [
    {
      icon: Award,
      title: 'Results Over Recognition',
      description: "We measure success by your growth, not our awards. While we're proud of our achievements, what matters most is the revenue we generate for our clients.",
    },
    {
      icon: Shield,
      title: 'Transparency Always',
      description: 'No black boxes. No hidden fees. No jargon. We believe you deserve to understand exactly how your marketing investment is performing.',
    },
    {
      icon: Brain,
      title: 'Innovation Through AI',
      description: 'We embrace technology to stay ahead of the curve. By leveraging AI and automation, we deliver faster results and deeper insights than traditional agencies.',
    },
    {
      icon: Handshake,
      title: 'Partnership, Not Transactions',
      description: "We're not here for quick wins. We build long-term partnerships with clients who value sustainable growth and strategic thinking.",
    },
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
    <div className="min-h-screen pt-20">
      <SEOHead
        title="About Senseoza | AI-Powered Digital Marketing Experts Driving Real Results"
        description="Meet the team behind Senseoza. Learn how our AI-powered approach and decade of expertise help businesses achieve measurable growth through innovative digital marketing."
        canonicalUrl="https://senseoza.com/about"
        schema={organizationSchema}
      />

      {/* Hero Section */}
      <section className="py-12 md:py-20 gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-semibold mb-6">
              About Senseoza
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight">
              Transforming Businesses Through{' '}
              <span className="text-accent">Intelligent Digital Marketing</span>
            </h1>
            <p className="text-base md:text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              We're a team of passionate digital marketers, AI enthusiasts, and creative minds dedicated to helping brands achieve unprecedented growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
                <Button size="lg" className="bg-background text-foreground hover:bg-background/90 w-full sm:w-auto">
                  Start Your Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/case-studies" onClick={() => window.scrollTo(0, 0)}>
                <Button size="lg" variant="outline" className="border-white bg-white/10 text-white hover:bg-white/20 w-full sm:w-auto">
                  View Our Work
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8 md:py-12 bg-background relative -mt-8 md:-mt-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="bg-card rounded-2xl p-4 md:p-6 border border-border text-center shadow-lg">
                  <div className="text-2xl md:text-4xl font-heading font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-xs md:text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-background to-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl mx-auto">
            <div className="order-2 lg:order-1">
              <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-semibold mb-4">
                Our Story
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold mb-6">
                Born From a Vision to Revolutionize Marketing
              </h2>
              <div className="space-y-4 text-muted-foreground text-sm md:text-base">
                <p>
                  Founded on the belief that every business deserves marketing that delivers measurable results, Senseoza was born from a simple question: What if marketing agencies actually cared about ROI as much as their clients do?
                </p>
                <p>
                  Traditional marketing agencies often focus on vanity metrics—likes, impressions, and follower counts—that look good in reports but don't move the needle for your business.
                </p>
                <p>
                  That's why we created Senseoza: a digital marketing agency that combines artificial intelligence, data science, and strategic creativity to deliver campaigns that don't just generate traffic—they generate revenue.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl" />
              <img 
                src={aboutImage} 
                alt="About Senseoza"
                className="relative w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative overflow-hidden rounded-3xl p-6 md:p-12 gradient-primary">
              <div className="absolute top-0 right-0 w-32 md:w-40 h-32 md:h-40 bg-white/10 rounded-full -mr-16 md:-mr-20 -mt-16 md:-mt-20" />
              <div className="absolute bottom-0 left-0 w-24 md:w-32 h-24 md:h-32 bg-white/10 rounded-full -ml-12 md:-ml-16 -mb-12 md:-mb-16" />
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white/20 flex items-center justify-center flex-shrink-0">
                    <Rocket className="h-8 md:h-10 w-8 md:w-10 text-white" />
                  </div>
                  <div className="text-center md:text-left">
                    <h2 className="text-2xl md:text-3xl font-heading font-bold text-white mb-3">Our Mission</h2>
                    <p className="text-base md:text-lg text-white/90">
                      To empower businesses with intelligent, data-driven marketing strategies that deliver measurable growth and sustainable competitive advantage.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-12 md:py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 md:mb-16">
            <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-semibold mb-4">
              Our Values
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold">
              The Principles That Guide Us
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <div
                key={index}
                className="group bg-card p-6 md:p-8 rounded-2xl border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start gap-4 md:gap-5">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <value.icon className="h-6 md:h-7 w-6 md:w-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-heading font-bold mb-2">{value.title}</h3>
                    <p className="text-sm md:text-base text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10 md:mb-12">
              <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-semibold mb-4">
                Our Team
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
                Certified Experts Across Every Discipline
              </h2>
              <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
                Our team consists of certified specialists across every digital marketing discipline. Together, we bring decades of combined experience and a shared passion for driving client success.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {teamExpertise.map((item, index) => (
                <div key={index} className="bg-card p-5 md:p-6 rounded-2xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <h3 className="font-heading font-bold text-base md:text-lg">{item.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground pl-8">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why We Exist */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-primary via-primary/95 to-accent relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-white/20 rounded-full text-white text-sm font-semibold mb-4">
              Why Senseoza Exists
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-6">
              Democratizing Advanced Marketing
            </h2>
            <p className="text-base md:text-lg text-white/90 leading-relaxed">
              We believe small and medium-sized businesses deserve access to enterprise-level marketing expertise. That's why we've made it our mission to democratize advanced marketing strategies through AI and automation. Whether you're a startup looking to make your mark or an established business ready to scale, Senseoza provides the tools, expertise, and dedication you need to compete—and win—in today's digital marketplace.
            </p>
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10 md:mb-12">
              <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-semibold mb-4">
                Our Commitment to You
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold">
                What You Get When You Partner With Us
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {commitments.map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-4 md:p-5 bg-card rounded-xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                  <div className="p-2 md:p-3 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex-shrink-0">
                    <item.icon className="h-5 md:h-6 w-5 md:w-6 text-primary" />
                  </div>
                  <span className="text-sm md:text-base text-foreground font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-3xl p-6 md:p-12 border border-border shadow-xl text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold mb-4">
                Let's Build Something Great Together
              </h2>
              <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Ready to experience digital marketing that actually drives business growth?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
                  <Button size="lg" className="gradient-primary shadow-lg w-full sm:w-auto">
                    Start Your Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/services" onClick={() => window.scrollTo(0, 0)}>
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    Explore Our Services
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
