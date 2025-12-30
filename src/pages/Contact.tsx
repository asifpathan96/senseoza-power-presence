import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, MessageCircle, ArrowRight, Send, Sparkles, CheckCircle } from 'lucide-react';
import SEOHead from '@/components/SEOHead';
import { organizationSchema } from '@/utils/schema';
import { AnimatedSection, StaggerContainer, StaggerItem, FloatingElement } from '@/components/AnimatedSection';
import { motion } from 'framer-motion';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    website: '',
    budget: '',
    message: '',
    services: [] as string[],
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      toast({
        title: 'Missing Information',
        description: 'Please fill in all required fields.',
        variant: 'destructive',
      });
      return;
    }

    const whatsappMessage = `
*New Contact Form Submission*

*Name:* ${formData.name}
*Email:* ${formData.email}
*Phone:* ${formData.phone}
*Company:* ${formData.company || 'Not provided'}
*Website:* ${formData.website || 'Not provided'}
*Budget:* ${formData.budget || 'Not specified'}
*Services Interested In:* ${formData.services.length > 0 ? formData.services.join(', ') : 'Not specified'}

*Message:*
${formData.message}
    `.trim();

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappNumber = '919168411743';
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');

    toast({
      title: 'Redirecting to WhatsApp',
      description: 'Your message is ready to send via WhatsApp!',
    });

    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      website: '',
      budget: '',
      message: '',
      services: [],
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData({
      ...formData,
      budget: e.target.value,
    });
  };

  const handleServiceToggle = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service],
    }));
  };

  const services = [
    'SEO',
    'PPC',
    'Social Media',
    'Content Marketing',
    'Marketing Automation',
    'Web Design',
    'Influencer Marketing',
    'Full-Service Marketing',
  ];

  const nextSteps = [
    "We will respond within 2 business hours to schedule your free consultation.",
    "During the consultation, we will discuss your goals, challenges, and current marketing efforts.",
    "We will provide initial recommendations and a custom proposal tailored to your needs.",
    "If it is a good fit, we will develop a comprehensive strategy and get started!",
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Contact Senseoza | Start Your Digital Marketing Journey Today"
        description="Ready to grow your business? Contact Senseoza for a free consultation. Call us, email, or schedule a strategy session to discuss your digital marketing goals."
        canonicalUrl="https://senseoza.com/contact"
        schema={organizationSchema}
      />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <FloatingElement className="absolute top-1/4 right-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl" delay={0} />
        <FloatingElement className="absolute bottom-1/4 left-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl" delay={2} />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-8"
            >
              <Sparkles className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium text-white/90">Get In Touch</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-white mb-6"
            >
              Let's Start Growing Your{' '}
              <span className="text-accent">Business Together</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto"
            >
              Ready to transform your digital presence? Whether you need a specific service or a comprehensive marketing strategy, we are here to help.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-5 gap-8 md:gap-12 max-w-7xl mx-auto">
            
            {/* Contact Form */}
            <AnimatedSection direction="right" className="lg:col-span-3">
              <div className="bg-card p-6 md:p-8 rounded-3xl border border-border/50 shadow-xl">
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-3 bg-gradient-to-br from-primary to-accent rounded-xl">
                    <Send className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-heading font-bold">Send Us a Message</h2>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold mb-2">
                      Full Name <span className="text-destructive">*</span>
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="h-12 bg-background border-border/50 focus:border-primary"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold mb-2">
                        Email Address <span className="text-destructive">*</span>
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        className="h-12 bg-background border-border/50 focus:border-primary"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold mb-2">
                        Phone <span className="text-destructive">*</span>
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 9168411743"
                        className="h-12 bg-background border-border/50 focus:border-primary"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="company" className="block text-sm font-semibold mb-2">
                        Company Name
                      </label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your Company"
                        className="h-12 bg-background border-border/50 focus:border-primary"
                      />
                    </div>

                    <div>
                      <label htmlFor="website" className="block text-sm font-semibold mb-2">
                        Website URL
                      </label>
                      <Input
                        id="website"
                        name="website"
                        value={formData.website}
                        onChange={handleChange}
                        placeholder="https://yourwebsite.com"
                        className="h-12 bg-background border-border/50 focus:border-primary"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-3">
                      Services Interested In
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {services.map((service) => (
                        <label 
                          key={service} 
                          className={`flex items-center gap-2 p-3 rounded-xl border cursor-pointer transition-all ${
                            formData.services.includes(service) 
                              ? 'border-primary bg-primary/5' 
                              : 'border-border/50 hover:border-primary/50 bg-background'
                          }`}
                        >
                          <Checkbox
                            checked={formData.services.includes(service)}
                            onCheckedChange={() => handleServiceToggle(service)}
                          />
                          <span className="text-xs sm:text-sm">{service}</span>
                        </label>
                      ))}
                    </div>
                  </div>


                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold mb-2">
                      Tell us about your business and goals <span className="text-destructive">*</span>
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your business, your marketing goals, and any challenges you are facing..."
                      rows={5}
                      className="bg-background border-border/50 focus:border-primary"
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full h-14 gradient-primary text-base font-semibold shadow-primary hover:shadow-lg transition-all"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              </div>
            </AnimatedSection>

            {/* Contact Info */}
            <AnimatedSection direction="left" className="lg:col-span-2 space-y-6">
              {/* Quick Contact */}
              <div className="bg-card p-6 md:p-8 rounded-3xl border border-border/50 shadow-lg">
                <h2 className="text-xl md:text-2xl font-heading font-bold mb-6">Quick Contact</h2>
                <div className="space-y-4">
                  <a 
                    href="mailto:hello@senseoza.com" 
                    className="flex items-center gap-4 p-4 bg-secondary/50 rounded-xl hover:bg-secondary transition-colors group"
                  >
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email Us</p>
                      <p className="font-semibold">hello@senseoza.com</p>
                    </div>
                  </a>

                  <a 
                    href="tel:+919168411743" 
                    className="flex items-center gap-4 p-4 bg-secondary/50 rounded-xl hover:bg-secondary transition-colors group"
                  >
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Call Us</p>
                      <p className="font-semibold">+91 9168411743</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Schedule Call CTA */}
              <motion.div
                whileHover={{ y: -4 }}
                className="relative overflow-hidden rounded-3xl p-6 md:p-8 text-white"
              >
                <div className="absolute inset-0 gradient-primary" />
                <div className="absolute inset-0 dot-pattern opacity-10" />
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16" />
                <div className="relative z-10">
                  <Sparkles className="h-10 w-10 mb-4 text-accent" />
                  <h3 className="text-xl md:text-2xl font-heading font-bold mb-3">
                    Prefer a Call?
                  </h3>
                  <p className="text-white/80 mb-6 text-sm md:text-base">
                    Book a free 30-minute consultation at a time that works for you.
                  </p>
                  <Button 
                    onClick={() => {
                      const whatsappUrl = `https://wa.me/919168411743?text=${encodeURIComponent('Hi, I would like to schedule a free consultation.')}`;
                      window.open(whatsappUrl, '_blank');
                    }}
                    className="bg-white text-primary hover:bg-white/90 font-semibold w-full sm:w-auto"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Schedule a Call
                  </Button>
                </div>
              </motion.div>

              {/* What Happens Next */}
              <div className="bg-card p-6 md:p-8 rounded-3xl border border-border/50 shadow-lg">
                <h3 className="text-lg md:text-xl font-heading font-bold mb-6">What to Expect</h3>
                <div className="space-y-4">
                  {nextSteps.map((step, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                        <span className="text-xs font-bold text-white">{index + 1}</span>
                      </div>
                      <p className="text-sm text-muted-foreground pt-1">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
