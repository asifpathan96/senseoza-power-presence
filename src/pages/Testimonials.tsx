import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Star, ChevronLeft, ChevronRight, Quote, ArrowRight } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO',
      company: 'TechVision Inc.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop',
      rating: 5,
      text: 'Senseoza transformed our digital presence completely. Their AI-powered marketing strategies increased our ROI by 350% within six months. The team is professional, responsive, and truly understands modern marketing.',
    },
    {
      name: 'Michael Chen',
      role: 'Marketing Director',
      company: 'Global Retail Co.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop',
      rating: 5,
      text: 'Working with Senseoza has been a game-changer for our brand. Their comprehensive SEO strategy took us from page 5 to position 1 for our key terms. The results speak for themselves – traffic is up 400% and conversions have tripled.',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Founder',
      company: 'Wellness Studio',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop',
      rating: 5,
      text: 'The social media campaigns Senseoza created for us were phenomenal. We went from 5,000 to 150,000 followers in under a year, and our engagement rates are through the roof. They truly understand how to build authentic communities.',
    },
    {
      name: 'David Thompson',
      role: 'VP of Sales',
      company: 'SaaS Solutions Ltd.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop',
      rating: 5,
      text: 'The PPC campaigns managed by Senseoza have consistently delivered exceptional ROI. Their data-driven approach and continuous optimization have made them an invaluable partner in our growth journey.',
    },
    {
      name: 'Jessica Martinez',
      role: 'Brand Manager',
      company: 'Fashion Forward',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&h=200&fit=crop',
      rating: 5,
      text: 'Senseoza helped us define and amplify our brand voice across all channels. Their content marketing strategy has positioned us as thought leaders in our industry, and the influencer campaigns they orchestrated were perfectly aligned with our values.',
    },
    {
      name: 'Robert Kim',
      role: 'Owner',
      company: 'Restaurant Group',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
      rating: 5,
      text: 'The comprehensive digital strategy from Senseoza helped us navigate the challenging times and emerge stronger. Online orders increased by 280%, and our brand awareness has never been higher. Highly recommend their services.',
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-primary-foreground mb-6">
              Client Testimonials
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Hear from the brands we've helped transform their digital presence into measurable success
            </p>
          </div>
        </div>
      </section>

      {/* Featured Testimonial Carousel */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="bg-card p-8 md:p-12 rounded-3xl border border-border shadow-lg relative">
              <Quote className="h-16 w-16 text-primary/20 absolute top-8 left-8" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-6 mb-8">
                  <img
                    src={currentTestimonial.image}
                    alt={currentTestimonial.name}
                    className="w-20 h-20 rounded-full object-cover border-4 border-primary/20"
                  />
                  <div>
                    <h3 className="text-2xl font-heading font-bold">{currentTestimonial.name}</h3>
                    <p className="text-muted-foreground">
                      {currentTestimonial.role} at {currentTestimonial.company}
                    </p>
                    <div className="flex gap-1 mt-2">
                      {[...Array(currentTestimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                      ))}
                    </div>
                  </div>
                </div>

                <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                  {currentTestimonial.text}
                </p>

                <div className="flex justify-between items-center">
                  <div className="text-sm text-muted-foreground">
                    {currentIndex + 1} / {testimonials.length}
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={prevTestimonial}
                      aria-label="Previous testimonial"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={nextTestimonial}
                      aria-label="Next testimonial"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Testimonials Grid */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold mb-12 text-center">
            What Our Clients Say
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-2xl border border-border hover:shadow-lg transition-base"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-heading font-bold">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground">{testimonial.text}</p>
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
              Join Our Growing Family
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-primary-foreground">
              Join Our Success Stories
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto">
              Be the next brand to experience transformative digital marketing results
            </p>
            <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
              <Button size="lg" className="bg-background text-foreground hover:bg-background/90 shadow-lg px-8">
                Get Started Today <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
