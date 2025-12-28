import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Target, Heart, Lightbulb, Award, TrendingUp, Rocket, Shield, ArrowRight, CheckCircle, Users, Brain, Handshake } from 'lucide-react';
import SEOHead from '@/components/SEOHead';
import { organizationSchema } from '@/utils/schema';
import aboutImage from '@/assets/about-3d.png';

const About = () => {
  const values = [
    {
      icon: Award,
      title: 'Results Over Recognition',
      description: "We measure success by your growth, not our awards. While we're proud of our achievements, what matters most is the revenue we generate for our clients.",
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: Shield,
      title: 'Transparency Always',
      description: 'No black boxes. No hidden fees. No jargon. We believe you deserve to understand exactly how your marketing investment is performing.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Brain,
      title: 'Innovation Through AI',
      description: 'We embrace technology to stay ahead of the curve. By leveraging AI and automation, we deliver faster results and deeper insights than traditional agencies.',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Handshake,
      title: 'Partnership, Not Transactions',
      description: "We're not here for quick wins. We build long-term partnerships with clients who value sustainable growth and strategic thinking.",
      color: 'from-purple-500 to-violet-500',
    },
  ];

  const teamExpertise = [
    'SEO Specialists (Google Analytics certified)',
    'PPC Strategists (Google Ads & Meta Blueprint certified)',
    'Content Creators (award-winning writers and designers)',
    'Data Scientists (analytical minds transforming data into insights)',
    'AI Engineers (building and optimizing our proprietary marketing tools)',
  ];

  const commitments = [
    'A dedicated account manager who knows your business inside out',
    'Monthly strategy sessions to review performance and plan ahead',
    '24/7 access to your campaign dashboards and reports',
    'Proactive recommendations based on market trends and opportunities',
    'A team that celebrates your wins as much as you do',
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
      <section className="py-24 gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-primary-foreground text-sm font-semibold mb-6">
                About Senseoza
              </span>
              <h1 className="text-5xl md:text-6xl font-heading font-bold text-primary-foreground mb-6 leading-tight">
                Transforming Businesses Through <span className="text-accent">Intelligent Digital Marketing</span>
              </h1>
              <p className="text-xl text-primary-foreground/90 mb-8">
                We're a team of passionate digital marketers, AI enthusiasts, and creative minds dedicated to helping brands achieve unprecedented growth.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
                  <Button size="lg" className="bg-background text-foreground hover:bg-background/90">
                    Start Your Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/case-studies" onClick={() => window.scrollTo(0, 0)}>
                  <Button size="lg" variant="outline" className="border-primary-foreground bg-white/10 text-primary-foreground hover:bg-white/20">
                    View Our Work
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="absolute -inset-4 bg-accent/20 rounded-3xl blur-3xl" />
              <img 
                src={aboutImage} 
                alt="About Senseoza"
                className="relative w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-gradient-to-b from-secondary/50 to-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, hsl(var(--primary)) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Story</span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mt-2 mb-6">
              Born From a Vision to Revolutionize Marketing
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground mb-16">
            <p>
              Founded on the belief that every business deserves marketing that delivers measurable results, Senseoza was born from a simple question: What if marketing agencies actually cared about ROI as much as their clients do?
            </p>
            <p>
              Traditional marketing agencies often focus on vanity metrics—likes, impressions, and follower counts—that look good in reports but don't move the needle for your business. We saw businesses spending thousands on marketing with little to show for it, and we knew there had to be a better way.
            </p>
            <p>
              That's why we created Senseoza: a digital marketing agency that combines artificial intelligence, data science, and strategic creativity to deliver campaigns that don't just generate traffic—they generate revenue.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative overflow-hidden rounded-3xl p-8 md:p-12 gradient-primary">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full -ml-16 -mb-16" />
              <div className="relative z-10 text-center">
                <div className="w-16 h-16 mb-6 rounded-2xl bg-white/20 flex items-center justify-center mx-auto">
                  <Rocket className="h-8 w-8 text-primary-foreground" />
                </div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">Our Mission</h2>
                <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
                  To empower businesses with intelligent, data-driven marketing strategies that deliver measurable growth and sustainable competitive advantage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Values</span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mt-2">
              The Principles That Guide Us
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <div
                key={index}
                className="group bg-card p-8 rounded-2xl border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-14 h-14 mb-6 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <value.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-heading font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Team</span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold mt-2 mb-6">
                Certified Experts Across Every Discipline
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our team consists of certified specialists across every digital marketing discipline. Together, we bring decades of combined experience and a shared passion for driving client success.
              </p>
              <ul className="space-y-4">
                {teamExpertise.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <img 
                src={aboutImage} 
                alt="Senseoza Team"
                className="w-full h-auto rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why We Exist */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Why Senseoza Exists</span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mt-2 mb-6">
              Democratizing Advanced Marketing
            </h2>
            <p className="text-lg text-muted-foreground">
              We believe small and medium-sized businesses deserve access to enterprise-level marketing expertise. That's why we've made it our mission to democratize advanced marketing strategies through AI and automation. Whether you're a startup looking to make your mark or an established business ready to scale, Senseoza provides the tools, expertise, and dedication you need to compete—and win—in today's digital marketplace.
            </p>
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Commitment to You</span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold mt-2 mb-6">
                What You Get When You Partner With Us
              </h2>
            </div>
            <div className="bg-card rounded-2xl p-8 border border-border">
              <ul className="space-y-4">
                {commitments.map((item, index) => (
                  <li key={index} className="flex items-start gap-4 p-4 bg-secondary/50 rounded-xl">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-primary-foreground">
              Let's Build Something Great Together
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Ready to experience digital marketing that actually drives business growth?
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
                <Button size="lg" className="bg-background text-foreground hover:bg-background/90 shadow-lg">
                  Start Your Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/services" onClick={() => window.scrollTo(0, 0)}>
                <Button size="lg" variant="outline" className="border-primary-foreground bg-white/10 text-primary-foreground hover:bg-white/20">
                  Explore Our Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
