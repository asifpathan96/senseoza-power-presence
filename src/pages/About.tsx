import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Target, Heart, Lightbulb, Users, Award, TrendingUp, Rocket, Shield, ArrowRight, CheckCircle } from 'lucide-react';
import SEOHead from '@/components/SEOHead';
import { organizationSchema } from '@/utils/schema';
import aboutImage from '@/assets/about-3d.png';

const About = () => {
  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Leveraging cutting-edge AI technology and creative thinking to stay ahead.',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: Target,
      title: 'Transparency',
      description: 'Clear communication and honest reporting on every campaign metric.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: TrendingUp,
      title: 'Growth',
      description: 'Focused on sustainable, scalable growth strategies that deliver long-term results.',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Heart,
      title: 'Creativity',
      description: 'Bold ideas and compelling storytelling that resonates with your audience.',
      color: 'from-pink-500 to-rose-500',
    },
    {
      icon: Award,
      title: 'Results',
      description: 'Every strategy is built around measurable outcomes and proven ROI.',
      color: 'from-purple-500 to-violet-500',
    },
  ];

  const achievements = [
    { icon: Users, stat: '500+', label: 'Happy Clients' },
  ];

  const whyChooseUs = [
    'AI-powered strategies that deliver measurable ROI',
    'Dedicated team of 50+ marketing experts',
    'Transparent reporting with real-time dashboards',
    'Custom solutions tailored to your business goals',
    '24/7 support and proactive communication',
    'Proven track record across 20+ industries',
  ];

  return (
    <div className="min-h-screen pt-20">
      <SEOHead
        title="About Senseoza | AI-Driven Digital Marketing Experts"
        description="Learn how Senseoza helps businesses transform their digital presence into measurable power with AI, SEO, and marketing expertise."
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
                Transforming Digital <span className="text-accent">Presence</span> Into Power
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

      {/* Stats Section */}
      <section className="py-16 -mt-12 relative z-20">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            {achievements.map((achievement, index) => (
              <div 
                key={index} 
                className="bg-card rounded-2xl p-8 text-center shadow-xl border border-border hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl gradient-primary flex items-center justify-center">
                  <achievement.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <div className="text-5xl font-heading font-black text-primary mb-2">
                  {achievement.stat}
                </div>
                <div className="text-muted-foreground font-medium">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Story</span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8 mt-2">
                Born From a Vision to Revolutionize Marketing
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  At Senseoza, we believe digital presence is the new business power. Our journey began when our founders recognized that businesses needed more than just online visibility – they needed strategic partners who could transform presence into lasting influence.
                </p>
                <p>
                  Today, with 250+ clients served and a 98% satisfaction rate, we've built a reputation for delivering measurable results that transform businesses. Our team blends AI innovation, creativity, and data-driven strategy to help brands grow faster.
                </p>
                <p>
                  We combine technical excellence with creative innovation to craft marketing solutions that don't just reach audiences – they move them to action.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl" />
              <div className="relative bg-card rounded-2xl p-8 border border-border shadow-xl">
                <h3 className="text-2xl font-heading font-bold mb-6">Why Choose Senseoza?</h3>
                <ul className="space-y-4">
                  {whyChooseUs.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
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
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="group bg-card p-8 rounded-2xl border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-14 h-14 mb-6 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <value.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-heading font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="relative overflow-hidden rounded-3xl p-8 gradient-primary">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full -ml-16 -mb-16" />
              <div className="relative z-10">
                <div className="w-16 h-16 mb-6 rounded-2xl bg-white/20 flex items-center justify-center">
                  <Rocket className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-primary-foreground mb-4">Our Mission</h3>
                <p className="text-primary-foreground/90 text-lg">
                  Transform digital presence into lasting influence and measurable power for every business we partner with.
                </p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-3xl p-8 bg-card border border-border">
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full -mr-20 -mt-20" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/5 rounded-full -ml-16 -mb-16" />
              <div className="relative z-10">
                <div className="w-16 h-16 mb-6 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-heading font-bold mb-4">Our Vision</h3>
                <p className="text-muted-foreground text-lg">
                  To be the global leader in AI-driven digital marketing innovation, empowering businesses of all sizes to thrive in the digital age.
                </p>
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
              Join 500+ businesses that have already accelerated their growth with our AI-powered marketing strategies.
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
