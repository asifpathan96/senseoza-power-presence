import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { TrendingUp, Users, DollarSign, Eye, Search, ArrowRight } from 'lucide-react';
import SEOHead from '@/components/SEOHead';

const CaseStudies = () => {
  const caseStudies = [
    {
      title: 'E-Commerce Brand Achieves 350% ROI Growth',
      client: 'Fashion Retailer',
      industry: 'E-Commerce',
      challenge: 'Low conversion rates and poor organic visibility despite high traffic volume',
      solution: 'Implemented comprehensive SEO strategy, optimized product pages, and launched targeted PPC campaigns',
      results: [
        { icon: TrendingUp, metric: '350%', label: 'ROI Increase' },
        { icon: Users, metric: '180%', label: 'Traffic Growth' },
        { icon: DollarSign, metric: '$2.5M', label: 'Revenue Generated' },
      ],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop',
    },
    {
      title: 'SaaS Company Dominates Search Rankings',
      client: 'Tech Startup',
      industry: 'SaaS',
      challenge: 'Zero organic presence in competitive B2B software market',
      solution: 'AI-powered content strategy, technical SEO overhaul, and strategic link building campaign',
      results: [
        { icon: Search, metric: '#1', label: 'Ranking Position' },
        { icon: Users, metric: '450%', label: 'Organic Traffic' },
        { icon: TrendingUp, metric: '280%', label: 'Lead Generation' },
      ],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
    },
    {
      title: 'Healthcare Brand Builds Authority',
      client: 'Medical Clinic',
      industry: 'Healthcare',
      challenge: 'Limited online presence and low patient acquisition through digital channels',
      solution: 'Content marketing strategy, local SEO optimization, and social media engagement campaigns',
      results: [
        { icon: Users, metric: '520%', label: 'Patient Inquiries' },
        { icon: Eye, metric: '1M+', label: 'Monthly Impressions' },
        { icon: TrendingUp, metric: '95%', label: 'Appointment Rate' },
      ],
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=500&fit=crop',
    },
    {
      title: 'Restaurant Chain Amplifies Social Presence',
      client: 'Food & Beverage',
      industry: 'Hospitality',
      challenge: 'Inconsistent brand voice and low engagement across social media platforms',
      solution: 'Influencer marketing campaign, user-generated content strategy, and paid social advertising',
      results: [
        { icon: Users, metric: '800K', label: 'New Followers' },
        { icon: TrendingUp, metric: '650%', label: 'Engagement Rate' },
        { icon: DollarSign, metric: '220%', label: 'Sales Uplift' },
      ],
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=500&fit=crop',
    },
  ];

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Case Studies | Senseoza – Proven Digital Marketing Results"
        description="See how Senseoza has helped businesses increase traffic, rankings, and ROI with AI-driven marketing strategies."
        canonicalUrl="https://senseoza.com/case-studies"
      />
      {/* Hero Section */}
      <section className="pt-32 md:pt-36 pb-20 gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-primary-foreground mb-6">
              Case Studies
            </h1>
            <p className="text-xl text-primary-foreground/90">
              We don't just design strategies — we deliver results. Explore how Senseoza has helped brands grow their digital presence, boost ROI, and achieve lasting success.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-8 items-center`}
              >
                {/* Image */}
                <div className="lg:w-1/2">
                  <div className="rounded-2xl overflow-hidden shadow-lg">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-80 object-cover hover:scale-105 transition-base"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="lg:w-1/2 space-y-6">
                  <div>
                    <span className="text-primary font-semibold">{study.industry}</span>
                    <h2 className="text-3xl font-heading font-bold mt-2 mb-4">
                      {study.title}
                    </h2>
                  </div>

                  <div>
                    <h3 className="font-heading font-bold mb-2">Challenge</h3>
                    <p className="text-muted-foreground">{study.challenge}</p>
                  </div>

                  <div>
                    <h3 className="font-heading font-bold mb-2">Solution</h3>
                    <p className="text-muted-foreground">{study.solution}</p>
                  </div>

                  <div>
                    <h3 className="font-heading font-bold mb-4">Results</h3>
                    <div className="grid grid-cols-3 gap-4">
                      {study.results.map((result, idx) => (
                        <div key={idx} className="relative group bg-gradient-to-br from-primary via-primary/90 to-accent rounded-xl p-4 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                          <div className="absolute inset-0 bg-white/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                          <div className="relative z-10">
                            <result.icon className="h-6 w-6 text-white mx-auto mb-2 drop-shadow-md" />
                            <div className="text-2xl md:text-3xl font-heading font-black text-white mb-1 drop-shadow-md">
                              {result.metric}
                            </div>
                            <div className="text-xs font-semibold text-white/90">{result.label}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
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
              Your Success Story Awaits
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-primary-foreground">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto">
              Let's create a case study together – your brand's transformation starts here
            </p>
            <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
              <Button size="lg" className="bg-background text-foreground hover:bg-background/90 shadow-lg px-8">
                Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
