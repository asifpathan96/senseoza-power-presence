import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Brain, Search, Share2, FileText, MousePointerClick, Globe, Mail, BarChart } from 'lucide-react';
import SEOHead from '@/components/SEOHead';
import { serviceSchema } from '@/utils/schema';
import serviceAI from '@/assets/service-ai-marketing.png';
import serviceSEO from '@/assets/service-seo.png';
import serviceSocial from '@/assets/service-social-media.png';
import serviceContent from '@/assets/service-content.png';
import servicePPC from '@/assets/service-ppc.png';
import serviceWeb from '@/assets/service-web-design.png';
import serviceEmail from '@/assets/service-email.png';
import serviceAnalytics from '@/assets/service-analytics.png';

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: 'AI-Powered Marketing',
      description: 'Predictive campaigns powered by artificial intelligence to maximize reach, optimize budgets, and deliver personalized experiences at scale.',
      tags: ['Predictive Analytics', 'AI Automation', 'Smart Segmentation', 'Personalization'],
      image: serviceAI,
      link: '/services/ai-marketing',
    },
    {
      icon: Search,
      title: 'SEO Excellence',
      description: 'Technical SEO, content optimization, backlinks, and local SEO to dominate rankings and drive sustainable organic growth.',
      tags: ['Technical SEO', 'Keyword Research', 'Link Building', 'Local SEO'],
      image: serviceSEO,
      link: '/services/seo',
    },
    {
      icon: Share2,
      title: 'Social Media & Influencer Marketing',
      description: 'Data-driven social strategies plus influencer partnerships to build engaged communities and amplify your brand message.',
      tags: ['Social Strategy', 'Influencer Campaigns', 'Community Management', 'Paid Social'],
      image: serviceSocial,
      link: '/services/social-media',
    },
    {
      icon: FileText,
      title: 'Content Marketing',
      description: 'Blogs, videos, infographics, and storytelling that convert visitors into customers and build lasting brand authority.',
      tags: ['Blog Writing', 'Video Content', 'Infographics', 'SEO Content'],
      image: serviceContent,
      link: '/services/content-marketing',
    },
    {
      icon: MousePointerClick,
      title: 'PPC & Paid Ads',
      description: 'ROI-focused ad campaigns across Google, Meta, and more with continuous optimization for maximum returns.',
      tags: ['Google Ads', 'Meta Ads', 'Display Ads', 'Retargeting'],
      image: servicePPC,
      link: '/services/ppc-ads',
    },
    {
      icon: Globe,
      title: 'Web Design & Development',
      description: 'Modern, conversion-ready websites with responsive UX that turn visitors into customers.',
      tags: ['Responsive Design', 'UX/UI Design', 'E-commerce', 'Performance Optimization'],
      image: serviceWeb,
      link: '/services/web-design',
    },
    {
      icon: Mail,
      title: 'Email & Marketing Automation',
      description: 'Smart workflows to nurture leads and boost retention with personalized email campaigns and automation.',
      tags: ['Email Campaigns', 'Marketing Automation', 'Lead Nurturing', 'A/B Testing'],
      image: serviceEmail,
      link: '/services/email-automation',
    },
    {
      icon: BarChart,
      title: 'Analytics & Reporting',
      description: 'Track KPIs with dashboards and performance insights to make data-driven decisions and optimize continuously.',
      tags: ['Real-time Dashboards', 'ROI Tracking', 'Performance Reports', 'Data Insights'],
      image: serviceAnalytics,
      link: '/services/analytics',
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

      {/* Services List */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? '' : ''}`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="p-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl w-fit mb-6">
                    <service.icon className="h-12 w-12 text-primary icon-3d" />
                  </div>
                  <h2 className="text-4xl font-heading font-bold mb-4">{service.title}</h2>
                  <p className="text-lg text-muted-foreground mb-6">{service.description}</p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {service.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link to={service.link} onClick={() => window.scrollTo(0, 0)}>
                    <Button className="gradient-primary">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-auto rounded-2xl shadow-xl hover:shadow-2xl transition-shadow"
                  />
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
