import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Brain, Search, Share2, FileText, MousePointerClick, Globe } from 'lucide-react';
import SEOHead from '@/components/SEOHead';
import { serviceSchema } from '@/utils/schema';
import serviceAI from '@/assets/service-ai-marketing.png';
import serviceSEO from '@/assets/service-seo.png';
import serviceSocial from '@/assets/service-social-media.png';
import serviceContent from '@/assets/service-content.png';
import servicePPC from '@/assets/service-ppc.png';
import serviceWeb from '@/assets/service-web-design.png';

const Services = () => {
  const services = [
    {
      icon: Search,
      title: 'Search Engine Optimization (SEO)',
      description: 'Dominate search rankings with our proven SEO strategies. We combine technical optimization, content excellence, and authoritative link-building to get your business found by customers actively searching for your solutions.',
      tags: ['Technical SEO', 'Keyword Research', 'Link Building', 'Local SEO'],
      image: serviceSEO,
      link: '/services/seo',
    },
    {
      icon: MousePointerClick,
      title: 'Pay-Per-Click Advertising (PPC)',
      description: 'Generate immediate, qualified traffic with expertly managed paid advertising campaigns. We optimize every dollar spent across Google Ads, Bing, and social platforms to maximize your return on ad spend.',
      tags: ['Google Ads', 'Meta Ads', 'Display Ads', 'Retargeting'],
      image: servicePPC,
      link: '/services/ppc-ads',
    },
    {
      icon: Share2,
      title: 'Social Media Marketing',
      description: 'Build a loyal community and drive engagement with strategic social media management. We create compelling content, foster authentic connections, and turn followers into customers.',
      tags: ['Social Strategy', 'Community Management', 'Paid Social', 'Content Creation'],
      image: serviceSocial,
      link: '/services/social-media',
    },
    {
      icon: FileText,
      title: 'Content Marketing',
      description: 'Attract, educate, and convert your ideal customers with high-quality content that establishes your authority and drives organic traffic through blogs, videos, and more.',
      tags: ['Blog Writing', 'Video Content', 'Ebooks', 'Case Studies'],
      image: serviceContent,
      link: '/services/content-marketing',
    },
    {
      icon: Brain,
      title: 'AI-Powered Marketing Automation',
      description: 'Scale your marketing efforts without scaling your team. Our AI-driven automation tools streamline repetitive tasks, personalize customer experiences, and nurture leads automatically.',
      tags: ['Email Automation', 'Lead Scoring', 'CRM Integration', 'Chatbots'],
      image: serviceAI,
      link: '/services/ai-marketing',
    },
    {
      icon: Globe,
      title: 'Website Design & Development',
      description: 'Your website is your digital storefront. We design and develop high-converting websites that are optimized for performance, user experience, and search engines.',
      tags: ['Custom Design', 'E-commerce', 'WordPress', 'Performance'],
      image: serviceWeb,
      link: '/services/web-design',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      <SEOHead
        title="Comprehensive Digital Marketing Services That Drive Real Business Results | Senseoza"
        description="At Senseoza, we offer a full suite of digital marketing services designed to work together seamlessly. SEO, PPC, social media, content marketing, automation, and web design."
        canonicalUrl="https://senseoza.com/services"
        schema={serviceSchema}
      />
      {/* Hero Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mb-6">
              Comprehensive Digital Marketing Services That Drive Real Business Results
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
              At Senseoza, we offer a full suite of digital marketing services designed to work together seamlessly. Whether you need to increase organic visibility, drive immediate traffic through paid ads, or build lasting customer relationships through content, our integrated approach ensures every channel amplifies the others.
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
                className={`grid lg:grid-cols-2 gap-12 items-center`}
              >
                {/* Image - always first on mobile/tablet, alternates on desktop */}
                <div className={`order-1 ${index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-auto rounded-2xl shadow-xl hover:shadow-2xl transition-shadow"
                  />
                </div>
                {/* Content - always second on mobile/tablet, alternates on desktop */}
                <div className={`order-2 ${index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="p-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl w-fit mb-6">
                    <service.icon className="h-12 w-12 text-primary icon-3d" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">{service.title}</h2>
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl -mr-48 -mt-48" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/20 rounded-full blur-3xl -ml-40 -mb-40" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-primary-foreground text-sm font-semibold mb-6">
              Let's Work Together
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-primary-foreground">
              Ready to Elevate Your Marketing?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto">
              Let's discuss how our services can transform your digital presence into a powerful growth engine
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
                <Button size="lg" className="bg-background text-foreground hover:bg-background/90 shadow-lg px-8">
                  Get Started Today <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/case-studies" onClick={() => window.scrollTo(0, 0)}>
                <Button size="lg" variant="outline" className="border-primary-foreground bg-white/10 text-primary-foreground hover:bg-white/20 px-8">
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
