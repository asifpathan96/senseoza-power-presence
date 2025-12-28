import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, MessageCircle, ArrowRight, Send, Sparkles } from 'lucide-react';
import SEOHead from '@/components/SEOHead';
import { organizationSchema } from '@/utils/schema';

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
    'Full-Service Marketing',
  ];

  const budgetOptions = [
    'Under $2,000',
    '$2,000-$5,000',
    '$5,000-$10,000',
    '$10,000-$25,000',
    '$25,000+',
    'Not sure yet',
  ];

  const nextSteps = [
    "We'll respond within 2 business hours to schedule your free consultation.",
    "During the consultation, we'll discuss your goals, challenges, and current marketing efforts.",
    "We'll provide initial recommendations and a custom proposal tailored to your needs.",
    "If it's a good fit, we'll develop a comprehensive strategy and get started!",
  ];

  return (
    <div className="min-h-screen pt-20">
      <SEOHead
        title="Contact Senseoza | Start Your Digital Marketing Journey Today"
        description="Ready to grow your business? Contact Senseoza for a free consultation. Call us, email, or schedule a strategy session to discuss your digital marketing goals."
        canonicalUrl="https://senseoza.com/contact"
        schema={organizationSchema}
      />
      
      {/* Hero Section */}
      <section className="py-12 md:py-20 gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-semibold mb-6">
              Get In Touch
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
              Let's Start Growing Your Business Together
            </h1>
            <p className="text-base md:text-xl text-white/90 max-w-3xl mx-auto">
              Ready to transform your digital presence? Whether you're looking for a specific service or need help developing a comprehensive marketing strategy, we're here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-background to-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-8 md:gap-12 max-w-7xl mx-auto">
            
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-card p-6 md:p-8 rounded-3xl border border-border shadow-xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-gradient-to-br from-primary to-accent rounded-xl">
                    <Send className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-heading font-bold">Send Us a Message</h2>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-5">
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
                      className="h-12"
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
                        className="h-12"
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
                        className="h-12"
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
                        className="h-12"
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
                        className="h-12"
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
                              : 'border-border hover:border-primary/50'
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
                    <label htmlFor="budget" className="block text-sm font-semibold mb-2">
                      Monthly Marketing Budget
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleSelectChange}
                      className="w-full h-12 px-4 rounded-lg border border-input bg-background text-sm"
                    >
                      <option value="">Select your budget</option>
                      {budgetOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
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
                      placeholder="Tell us about your business, your marketing goals, and any challenges you're facing..."
                      rows={5}
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full h-14 gradient-primary text-base font-semibold shadow-lg"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              {/* Quick Contact */}
              <div className="bg-card p-6 md:p-8 rounded-3xl border border-border shadow-lg">
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
              <div className="gradient-primary p-6 md:p-8 rounded-3xl text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16" />
                <div className="relative z-10">
                  <Sparkles className="h-10 w-10 mb-4" />
                  <h3 className="text-xl md:text-2xl font-heading font-bold mb-3">
                    Prefer a Call?
                  </h3>
                  <p className="text-white/90 mb-6 text-sm md:text-base">
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
              </div>

              {/* What Happens Next */}
              <div className="bg-card p-6 md:p-8 rounded-3xl border border-border shadow-lg">
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
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
