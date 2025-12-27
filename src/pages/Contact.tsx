import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, MessageCircle, Clock, ArrowRight } from 'lucide-react';
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

  const serviceOptions = [
    'Search Engine Optimization (SEO)',
    'Pay-Per-Click Advertising (PPC)',
    'Social Media Marketing',
    'Content Marketing',
    'AI-Powered Marketing Automation',
    'Website Design & Development',
  ];

  const budgetOptions = [
    'Under $1,000/month',
    '$1,000 - $3,000/month',
    '$3,000 - $5,000/month',
    '$5,000 - $10,000/month',
    '$10,000+/month',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
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
*Phone:* ${formData.phone || 'Not provided'}
*Company:* ${formData.company || 'Not provided'}
*Website:* ${formData.website || 'Not provided'}
*Monthly Budget:* ${formData.budget || 'Not specified'}
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

  return (
    <div className="min-h-screen pt-20">
      <SEOHead
        title="Let's Start Growing Your Business Together | Contact Senseoza"
        description="Schedule your free consultation with Senseoza. Get AI-powered marketing, SEO, social media, and content solutions that grow your business."
        canonicalUrl="https://senseoza.com/contact"
        schema={organizationSchema}
      />
      {/* Hero Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mb-6">
              Let's Start Growing Your Business Together
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Ready to transform your digital presence? Fill out the form below and our team will get back to you within 24 hours.
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
              <h2 className="text-3xl font-heading font-bold mb-6">Schedule Your Free Consultation</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
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
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold mb-2">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 9168411743"
                    />
                  </div>

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
                </div>

                <div>
                  <label htmlFor="website" className="block text-sm font-semibold mb-2">
                    Website URL
                  </label>
                  <Input
                    id="website"
                    name="website"
                    type="url"
                    value={formData.website}
                    onChange={handleChange}
                    placeholder="https://yourwebsite.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-3">
                    Services Interested In
                  </label>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {serviceOptions.map((service) => (
                      <div key={service} className="flex items-center space-x-2">
                        <Checkbox
                          id={service}
                          checked={formData.services.includes(service)}
                          onCheckedChange={() => handleServiceToggle(service)}
                        />
                        <label
                          htmlFor={service}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                        >
                          {service}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <label htmlFor="budget" className="block text-sm font-semibold mb-2">
                    Monthly Budget Range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleSelectChange}
                    className="w-full px-4 py-2 rounded-lg border border-input bg-background"
                  >
                    <option value="">Select your budget</option>
                    {budgetOptions.map((budget) => (
                      <option key={budget} value={budget}>
                        {budget}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project, goals, and how we can help..."
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
                  Schedule Your Free Consultation
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-heading font-bold mb-6">Get in Touch</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Have questions? Our team is here to help. Reach out through any of these channels and 
                  we'll respond within 24 hours.
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
                    <h3 className="font-heading font-bold mb-1">Office Hours</h3>
                    <p className="text-muted-foreground">
                      Monday - Friday: 9:00 AM - 6:00 PM IST<br />
                      Saturday: 10:00 AM - 2:00 PM IST
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-8 gradient-primary rounded-2xl text-primary-foreground">
                <h3 className="text-2xl font-heading font-bold mb-4">
                  Ready to Get Started?
                </h3>
                <p className="mb-6">
                  Schedule a free 30-minute consultation to discuss your marketing goals and 
                  how we can help you achieve them.
                </p>
                <Button 
                  onClick={() => {
                    const whatsappUrl = `https://wa.me/919168411743?text=${encodeURIComponent('Hi, I would like to schedule a free consultation.')}`;
                    window.open(whatsappUrl, '_blank');
                  }}
                  className="bg-white text-primary hover:bg-white/90 hover:scale-105 transition-all shadow-lg font-semibold"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Schedule Your Free Consultation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
