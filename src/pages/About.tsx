import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Target, Heart, Lightbulb, Users, Award, TrendingUp } from 'lucide-react';
import SEOHead from '@/components/SEOHead';
import { organizationSchema } from '@/utils/schema';

const About = () => {
  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Leveraging cutting-edge AI technology and creative thinking to stay ahead.',
    },
    {
      icon: Target,
      title: 'Transparency',
      description: 'Clear communication and honest reporting on every campaign metric.',
    },
    {
      icon: TrendingUp,
      title: 'Growth',
      description: 'Focused on sustainable, scalable growth strategies that deliver long-term results.',
    },
    {
      icon: Heart,
      title: 'Creativity',
      description: 'Bold ideas and compelling storytelling that resonates with your audience.',
    },
    {
      icon: Award,
      title: 'Results',
      description: 'Every strategy is built around measurable outcomes and proven ROI.',
    },
  ];

  const achievements = [
    { icon: Award, stat: '50+', label: 'Industry Awards' },
    { icon: TrendingUp, stat: '300%', label: 'Average Growth' },
    { icon: Users, stat: '500+', label: 'Happy Clients' },
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
      <section className="py-20 gradient-hero relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-primary-foreground mb-6">
              About Senseoza
            </h1>
            <p className="text-xl text-primary-foreground/90">
              We believe digital presence is the new business power.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-heading font-bold mb-8 text-center">Our Story</h2>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                At Senseoza, we believe digital presence is the new business power. Our team blends AI innovation, creativity, and data-driven strategy to help brands grow faster. With 250+ clients served and a 98% satisfaction rate, we've built a reputation for delivering measurable results.
              </p>
              <p>
                Our journey began when our founders recognized that businesses needed more than just online visibility – they needed strategic partners who could transform presence into lasting influence. Today, we serve clients across industries, delivering campaigns that drive real ROI.
              </p>
              <p>
                With a team of seasoned experts in AI, SEO, content strategy, and creative design, we combine technical excellence with creative innovation to craft marketing solutions that don't just reach audiences – they move them to action.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold mb-16 text-center">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-2xl border border-border hover:shadow-lg transition-base"
              >
                <value.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-heading font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold mb-16 text-center">Our Achievements</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {achievements.map((achievement, index) => (
              <div key={index} className="relative group bg-gradient-to-br from-primary via-primary/90 to-accent rounded-2xl p-8 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="absolute inset-0 bg-white/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10">
                  <achievement.icon className="h-16 w-16 text-white mx-auto mb-6 group-hover:scale-110 transition-transform drop-shadow-lg" />
                  <div className="text-6xl font-heading font-black text-white mb-3 drop-shadow-lg">
                    {achievement.stat}
                  </div>
                  <div className="text-white/90 text-lg font-semibold">{achievement.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-heading font-bold mb-6">Our Mission & Vision</h2>
            <p className="text-xl mb-4">
              <strong>Mission:</strong> Transform presence into lasting influence and power.
            </p>
            <p className="text-xl mb-8">
              <strong>Vision:</strong> To be the global leader in AI-driven digital marketing innovation.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 hover:scale-105 transition-base shadow-lg">
                Work With Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
