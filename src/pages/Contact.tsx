import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, MessageCircle, Clock, CheckCircle } from 'lucide-react';
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
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      toast({
        title: 'Missing Information',
        description: 'Please fill in all required fields.',
        variant: 'destructive',
      });
      return;
    }

    // Format message for WhatsApp
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

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappNumber = '919168411743';
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Open WhatsApp
    window.open(whatsappUrl, '_blank');

    toast({
      title: 'Redirecting to WhatsApp',
      description: 'Your message is ready to send via WhatsApp!',
    });

    // Reset form
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
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-primary-foreground mb-6">
              Let's Start Growing Your Business Together
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Ready to transform your digital presence? Whether you're looking for a specific service or need help developing a comprehensive marketing strategy, we're here to help. Schedule a free consultation to discuss your goals and how we can help you achieve them.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="bg-card p-8 rounded-2xl border border-border shadow-lg">
              <h2 className="text-3xl font-heading font-bold mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-2">
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold mb-2">
                      Phone *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 9168411743"
                      required
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
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
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-3">
                    Services Interested In
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {services.map((service) => (
                      <label key={service} className="flex items-center gap-2 cursor-pointer">
                        <Checkbox
                          checked={formData.services.includes(service)}
                          onCheckedChange={() => handleServiceToggle(service)}
                        />
                        <span className="text-sm">{service}</span>
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
                    className="w-full px-4 py-2 rounded-lg border border-input bg-background"
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
                    Tell us about your business and goals *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your business, your marketing goals, and any challenges you're facing..."
                    rows={6}
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 shadow-lg font-semibold"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-heading font-bold mb-6">Get in Touch</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Have questions? Our team is here to help. Reach out through any of these channels and 
                  we'll respond within 2 business hours.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-6 bg-secondary/50 rounded-xl">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold mb-1">Email Us</h3>
                    <a href="mailto:hello@senseoza.com" className="text-muted-foreground hover:text-primary transition-colors">
                      hello@senseoza.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-secondary/50 rounded-xl">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold mb-1">Call Us</h3>
                    <a href="tel:+919168411743" className="text-muted-foreground hover:text-primary transition-colors">
                      +91 9168411743
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-secondary/50 rounded-xl">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold mb-1">Business Hours</h3>
                    <p className="text-muted-foreground">Monday-Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-muted-foreground">Saturday-Sunday: Closed</p>
                  </div>
                </div>
              </div>

              <div className="p-8 gradient-primary rounded-2xl text-primary-foreground">
                <h3 className="text-2xl font-heading font-bold mb-4">
                  Schedule a Call
                </h3>
                <p className="mb-6">
                  Prefer to schedule a call? Book a free 30-minute consultation at a time that works for you.
                </p>
                <Button 
                  onClick={() => {
                    const whatsappUrl = `https://wa.me/919168411743?text=${encodeURIComponent('Hi, I would like to schedule a free consultation.')}`;
                    window.open(whatsappUrl, '_blank');
                  }}
                  className="bg-white text-primary hover:bg-white/90 hover:scale-105 transition-all shadow-lg font-semibold"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Schedule a Call
                </Button>
              </div>

              {/* What Happens Next */}
              <div className="bg-card p-8 rounded-2xl border border-border">
                <h3 className="text-xl font-heading font-bold mb-6">What to Expect After You Contact Us</h3>
                <div className="space-y-4">
                  {nextSteps.map((step, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-bold text-primary">{index + 1}</span>
                      </div>
                      <p className="text-muted-foreground text-sm">{step}</p>
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
