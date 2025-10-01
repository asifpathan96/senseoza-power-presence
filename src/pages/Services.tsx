import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Brain, Users, Search, MousePointerClick, Share2, FileText, 
  Mail, Globe, Target, BarChart 
} from 'lucide-react';
import SEOHead from '@/components/SEOHead';
import { serviceSchema } from '@/utils/schema';

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: 'AI-Powered Marketing',
      description: 'Predictive campaigns powered by artificial intelligence to maximize reach, optimize budgets, and deliver personalized experiences at scale.',
      features: ['Predictive Analytics', 'AI Automation', 'Smart Segmentation', 'Personalization'],
    },
    {
      icon: Search,
      title: 'SEO Excellence',
      description: 'Technical SEO, content optimization, backlinks, and local SEO to dominate rankings and drive sustainable organic growth.',
      features: ['Technical SEO', 'Keyword Research', 'Link Building', 'Local SEO'],
    },
    {
      icon: Share2,
      title: 'Social Media & Influencer Marketing',
      description: 'Data-driven social strategies plus influencer partnerships to build engaged communities and amplify your brand message.',
      features: ['Social Strategy', 'Influencer Campaigns', 'Community Management', 'Paid Social'],
    },
    {
      icon: FileText,
      title: 'Content Marketing',
      description: 'Blogs, videos, infographics, and storytelling that convert visitors into customers and build lasting brand authority.',
      features: ['Blog Writing', 'Video Content', 'Infographics', 'SEO Content'],
    },
    {
      icon: MousePointerClick,
      title: 'PPC & Paid Ads',
      description: 'ROI-focused ad campaigns across Google, Meta, and more with continuous optimization for maximum returns.',
      features: ['Google Ads', 'Meta Ads', 'Display Ads', 'Retargeting'],
    },
    {
      icon: Globe,
      title: 'Web Design & Development',
      description: 'Modern, conversion-ready websites with responsive UX that turn visitors into customers.',
      features: ['Responsive Design', 'UX/UI Design', 'E-commerce', 'Performance Optimization'],
    },
    {
      icon: Mail,
      title: 'Email & Marketing Automation',
      description: 'Smart workflows to nurture leads and boost retention with personalized email campaigns and automation.',
      features: ['Email Campaigns', 'Marketing Automation', 'Lead Nurturing', 'A/B Testing'],
    },
    {
      icon: BarChart,
      title: 'Analytics & Reporting',
      description: 'Track KPIs with dashboards and performance insights to make data-driven decisions and optimize continuously.',
      features: ['Real-time Dashboards', 'ROI Tracking', 'Performance Reports', 'Data Insights'],
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      <SEOHead
        title="Digital Marketing Services | Senseoza – SEO, AI, Social Media & More"
        description="Explore Senseoza's full suite of digital marketing services: AI campaigns, SEO, content, social media, paid ads, and web design."
        canonicalUrl="https://senseoza.com/services"
        schema={serviceSchema}
      />
      {/* Hero Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-primary-foreground mb-6">
              Digital Marketing Services
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Explore Senseoza's full suite of digital marketing services: AI campaigns, SEO, content, social media, paid ads, and web design.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-2xl border border-border hover:shadow-lg transition-base group"
              >
                <div className="p-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl w-fit mb-4">
                  <service.icon className="h-12 w-12 text-primary icon-3d" />
                </div>
                <h2 className="text-2xl font-heading font-bold mb-4">{service.title}</h2>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-heading font-bold mb-6">
              Ready to Elevate Your Marketing?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's discuss how our services can transform your digital presence into a powerful growth engine
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="gradient-primary">
                  Get Started Today
                </Button>
              </Link>
              <Link to="/case-studies">
                <Button size="lg" variant="outline">
                  View Case Studies
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
