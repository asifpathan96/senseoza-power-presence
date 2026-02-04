import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Star, ChevronLeft, ChevronRight, Quote, ArrowRight, Sparkles } from 'lucide-react';
import { AnimatedSection, StaggerContainer, StaggerItem, FloatingElement } from '@/components/AnimatedSection';
import { motion, AnimatePresence } from 'framer-motion';
// 3D Assets
import testimonials3DTrophy from '@/assets/testimonials-3d-trophy.png';
import testimonials3DStars from '@/assets/testimonials-3d-stars.png';

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
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute inset-0 dot-pattern opacity-20" />
        
        <FloatingElement className="absolute top-1/4 left-10 w-64 h-64 bg-accent/20 rounded-full blur-3xl" delay={0} />
        <FloatingElement className="absolute bottom-1/4 right-10 w-80 h-80 bg-primary/20 rounded-full blur-3xl" delay={2} />

        {/* 3D Floating Trophy - Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="absolute top-24 left-5 md:left-16 lg:left-24 w-24 md:w-32 lg:w-40 floating-3d z-10 hidden md:block"
        >
          <img 
            src={testimonials3DTrophy} 
            alt="" 
            className="w-full h-auto drop-shadow-2xl"
            aria-hidden="true"
          />
        </motion.div>

        {/* 3D Floating Stars - Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="absolute top-32 right-5 md:right-16 lg:right-24 w-28 md:w-36 lg:w-44 floating-3d-slow z-10 hidden md:block"
        >
          <img 
            src={testimonials3DStars} 
            alt="" 
            className="w-full h-auto drop-shadow-2xl"
            aria-hidden="true"
          />
        </motion.div>
        
        <div className="container mx-auto px-4 z-10 py-32">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-8"
            >
              <Star className="h-4 w-4 text-accent fill-accent" />
              <span className="text-sm font-medium text-white/90">5-Star Reviews</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6 leading-tight"
            >
              Client <span className="text-accent">Testimonials</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed"
            >
              Hear from the brands we've helped transform their digital presence into measurable success
            </motion.p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2"
          >
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-2 bg-white rounded-full"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Featured Testimonial Carousel */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient" />
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="max-w-5xl mx-auto">
            <motion.div 
              className="relative bg-card p-8 md:p-12 rounded-3xl border border-border/50 shadow-xl overflow-hidden"
              whileHover={{ y: -4 }}
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/5 to-accent/5 rounded-full blur-3xl -mr-32 -mt-32" />
              <Quote className="h-20 w-20 text-primary/10 absolute top-8 left-8" />
              
              <div className="relative z-10">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center gap-6 mb-8">
                      <motion.img
                        whileHover={{ scale: 1.1 }}
                        src={currentTestimonial.image}
                        alt={currentTestimonial.name}
                        className="w-20 h-20 rounded-full object-cover border-4 border-primary/20 shadow-lg"
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

                    <p className="text-xl text-muted-foreground leading-relaxed mb-8 italic">
                      "{currentTestimonial.text}"
                    </p>
                  </motion.div>
                </AnimatePresence>

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
                      className="hover:bg-primary hover:text-white hover:border-primary transition-all"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={nextTestimonial}
                      aria-label="Next testimonial"
                      className="hover:bg-primary hover:text-white hover:border-primary transition-all"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* All Testimonials Grid */}
      <section className="py-20 md:py-32 bg-secondary/30 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-semibold mb-4">
              <Sparkles className="h-4 w-4" />
              All Reviews
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
              What Our Clients <span className="text-accent">Say</span>
            </h2>
          </AnimatedSection>
          
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <StaggerItem key={index}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="group bg-card p-6 rounded-2xl border border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-300 h-full"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-primary/20"
                    />
                    <div>
                      <h3 className="font-heading font-bold group-hover:text-primary transition-colors">{testimonial.name}</h3>
                      <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{testimonial.text}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute inset-0 dot-pattern opacity-10" />
        <FloatingElement className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl -mr-48 -mt-48" />
        <FloatingElement className="absolute bottom-0 left-0 w-80 h-80 bg-primary/20 rounded-full blur-3xl -ml-40 -mb-40" delay={2} />
        
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="max-w-4xl mx-auto text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-semibold mb-6"
            >
              <Sparkles className="h-4 w-4" />
              Join Our Growing Family
            </motion.span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6 text-white">
              Join Our <span className="text-accent">Success Stories</span>
            </h2>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              Be the next brand to experience transformative digital marketing results
            </p>
            <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-xl shadow-white/20 hover:shadow-2xl transition-all duration-300 px-8">
                Get Started Today <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;