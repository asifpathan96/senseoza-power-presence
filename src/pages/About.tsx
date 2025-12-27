import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Target, Heart, Lightbulb, Award, TrendingUp, Rocket, Shield, ArrowRight, CheckCircle, Eye, Users, Brain } from 'lucide-react';
import SEOHead from '@/components/SEOHead';
import { organizationSchema } from '@/utils/schema';
import aboutImage from '@/assets/about-3d.png';

const About = () => {
  const values = [
    {
      icon: Award,
      title: 'Results Over Recognition',
      description: 'We measure success by your growth, not our awards.',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: Eye,
      title: 'Transparency Always',
      description: 'No black boxes. No hidden fees. No jargon.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Brain,
      title: 'Innovation Through AI',
      description: 'We embrace technology to stay ahead of the curve.',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Heart,
      title: 'Partnership, Not Transactions',
      description: 'We build long-term partnerships for sustainable growth.',
      color: 'from-pink-500 to-rose-500',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      <SEOHead
        title="Transforming Businesses Through Intelligent Digital Marketing | Senseoza"
        description="Founded on the belief that every business deserves marketing that delivers measurable results. Senseoza combines AI, data science, and strategic creativity."
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
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mb-6 leading-tight">
                Transforming Businesses Through Intelligent Digital Marketing
              </h1>
              <p className="text-xl text-primary-foreground/90 mb-8">
                We're a team of passionate digital marketers, AI enthusiasts, and creative minds dedicated to helping brands achieve unprecedented growth.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
                  <Button size="lg" className="bg-background text-foreground hover:bg-background/90">
                    Start Your Journey <ArrowRight className="ml-2 h-5 w-5" />
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
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Story</span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold mt-2 mb-6">
                Why We Started Senseoza
              </h2>
            </div>
            
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p className="text-xl leading-relaxed">
                Founded on the belief that every business deserves marketing that delivers measurable results, Senseoza was born from a simple question: <strong className="text-foreground">What if marketing agencies actually cared about ROI as much as their clients do?</strong>
              </p>
              
              <p className="leading-relaxed">
                Traditional marketing agencies often focus on vanity metrics—likes, impressions, and follower counts—that look good in reports but don't move the needle for your business. We saw businesses spending thousands on marketing with little to show for it, and we knew there had to be a better way.
              </p>
              
              <p className="leading-relaxed">
                That's why we created Senseoza: a digital marketing agency that combines artificial intelligence, data science, and strategic creativity to deliver campaigns that don't just generate traffic—<strong className="text-foreground">they generate revenue.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="relative overflow-hidden rounded-3xl p-12 gradient-primary">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full -ml-16 -mb-16" />
              <div className="relative z-10">
                <div className="w-20 h-20 mb-8 mx-auto rounded-2xl bg-white/20 flex items-center justify-center">
                  <Rocket className="h-10 w-10 text-primary-foreground" />
                </div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-6">Our Mission</h2>
                <p className="text-xl text-primary-foreground/90 leading-relaxed">
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
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
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

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl p-8 md:p-12 border border-primary/10">
              <div className="flex items-start gap-6">
                <div className="hidden md:block w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex-shrink-0 flex items-center justify-center">
                  <Users className="h-8 w-8 text-primary-foreground" />
                </div>
                <div>
                  <h2 className="text-3xl font-heading font-bold mb-4">Our Team</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Our team consists of certified specialists across every digital marketing discipline: SEO experts, PPC strategists, content creators, data scientists, and AI engineers who bring decades of combined experience. We're united by a shared passion for delivering exceptional results and staying at the forefront of digital marketing innovation.
                  </p>
                </div>
              </div>
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
              Ready to Transform Your Brand?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Join businesses that have already accelerated their growth with our AI-powered marketing strategies.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
                <Button size="lg" className="bg-background text-foreground hover:bg-background/90 shadow-lg">
                  Schedule a Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
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
