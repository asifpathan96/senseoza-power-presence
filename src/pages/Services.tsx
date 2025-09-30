import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Brain, Users, Search, MousePointerClick, Share2, FileText, 
  Mail, Globe, Target, BarChart 
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: 'AI-Powered Marketing Solutions',
      description: 'Harness the power of artificial intelligence for predictive analytics, customer segmentation, automated personalization, and data-driven campaign optimization that delivers measurable results.',
      features: ['Predictive Analytics', 'Customer Segmentation', 'Campaign Automation', 'AI Chatbots'],
    },
    {
      icon: Users,
      title: 'Influencer Marketing',
      description: 'Connect your brand with authentic voices that resonate with your target audience. Our data-driven approach identifies the perfect influencers to amplify your message and drive engagement.',
      features: ['Influencer Discovery', 'Campaign Management', 'Performance Tracking', 'Contract Negotiation'],
    },
    {
      icon: Search,
      title: 'Search Engine Optimization (SEO)',
      description: 'Dominate search rankings with comprehensive SEO strategies including technical optimization, keyword research, on-page SEO, link building, and content optimization for sustainable organic growth.',
      features: ['Technical SEO', 'Keyword Strategy', 'Link Building', 'Local SEO'],
    },
    {
      icon: MousePointerClick,
      title: 'Pay-Per-Click Advertising (PPC)',
      description: 'Drive instant visibility and qualified traffic with expertly managed PPC campaigns across Google Ads, Bing Ads, and social platforms with continuous optimization for maximum ROI.',
      features: ['Google Ads', 'Bing Ads', 'Display Advertising', 'Remarketing'],
    },
    {
      icon: Share2,
      title: 'Social Media Marketing (SMM)',
      description: 'Build engaged communities and drive conversions across all major platforms with strategic content, community management, paid social advertising, and comprehensive analytics.',
      features: ['Content Strategy', 'Community Management', 'Paid Social', 'Analytics & Reporting'],
    },
    {
      icon: FileText,
      title: 'Content Marketing',
      description: 'Create compelling narratives that convert with SEO-optimized blog posts, engaging articles, video scripts, infographics, and storytelling that resonates with your audience.',
      features: ['Blog Writing', 'Video Scripts', 'Infographics', 'Storytelling'],
    },
    {
      icon: Mail,
      title: 'Email Marketing & Automation',
      description: 'Deliver personalized email campaigns that nurture leads and drive conversions with advanced automation, A/B testing, segmentation, and comprehensive performance analytics.',
      features: ['Campaign Design', 'Marketing Automation', 'A/B Testing', 'List Segmentation'],
    },
    {
      icon: Globe,
      title: 'Web Design & Development',
      description: 'Create stunning, mobile-first websites optimized for conversions with responsive design, UX optimization, e-commerce solutions, and ongoing performance enhancement.',
      features: ['Responsive Design', 'UX Optimization', 'E-commerce', 'Performance Tuning'],
    },
    {
      icon: Target,
      title: 'Brand Strategy & Consulting',
      description: 'Define and strengthen your brand identity with strategic positioning, voice development, competitive analysis, and comprehensive growth roadmaps tailored to your goals.',
      features: ['Brand Positioning', 'Voice Development', 'Competitive Analysis', 'Growth Planning'],
    },
    {
      icon: BarChart,
      title: 'Analytics & Reporting',
      description: 'Make informed decisions with real-time dashboards, comprehensive performance insights, ROI tracking, and data-driven optimization strategies for continuous improvement.',
      features: ['Real-time Dashboards', 'Performance Insights', 'ROI Tracking', 'Custom Reports'],
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-primary-foreground mb-6">
              Our Services
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Comprehensive digital marketing solutions designed to turn your online presence into measurable power
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
                <service.icon className="h-12 w-12 text-primary mb-4 group-hover:scale-110 transition-base" />
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
