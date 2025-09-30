import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Target, Heart, Lightbulb, Users, Award, TrendingUp } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Results-Driven',
      description: 'Every strategy is built around measurable outcomes and ROI.',
    },
    {
      icon: Heart,
      title: 'Client-Centric',
      description: 'Your success is our success. We prioritize long-term partnerships.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation First',
      description: 'Leveraging cutting-edge technology and creative thinking.',
    },
    {
      icon: Users,
      title: 'Collaborative',
      description: 'Working hand-in-hand with your team for seamless execution.',
    },
  ];

  const achievements = [
    { icon: Award, stat: '50+', label: 'Industry Awards' },
    { icon: TrendingUp, stat: '300%', label: 'Average Growth' },
    { icon: Users, stat: '500+', label: 'Happy Clients' },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 gradient-hero relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-primary-foreground mb-6">
              About Senseoza
            </h1>
            <p className="text-xl text-primary-foreground/90">
              We're not just marketers – we're growth architects who turn digital presence into measurable power
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
                Founded with a vision to bridge the gap between traditional marketing and AI-powered digital strategies, 
                Senseoza has grown from a passionate startup to a leading force in the digital marketing landscape.
              </p>
              <p>
                Our journey began when our founders recognized that businesses needed more than just online visibility – 
                they needed strategic partners who could turn their digital presence into tangible business power. Today, 
                we serve clients across industries, delivering data-driven campaigns that drive real ROI.
              </p>
              <p>
                With a team of seasoned experts in AI, SEO, content strategy, and creative design, we combine technical 
                excellence with creative innovation to craft marketing solutions that don't just reach audiences – 
                they move them to action.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold mb-16 text-center">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
              <div key={index} className="text-center">
                <achievement.icon className="h-16 w-16 text-primary mx-auto mb-4" />
                <div className="text-5xl font-heading font-bold text-gradient mb-2">
                  {achievement.stat}
                </div>
                <div className="text-muted-foreground text-lg">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-heading font-bold mb-6">Our Mission</h2>
            <p className="text-xl mb-8">
              To empower businesses worldwide by turning their digital presence into a powerful engine for growth, 
              leveraging innovative technology and strategic expertise to deliver exceptional results.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-primary-foreground text-primary hover:scale-105 transition-base">
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
