import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import SEOHead from '@/components/SEOHead';
import { organizationSchema } from '@/utils/schema';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: '',
  });

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
*Company:* ${formData.company || 'Not provided'}
*Phone:* ${formData.phone || 'Not provided'}
*Service:* ${formData.service || 'Not specified'}

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
      company: '',
      phone: '',
      service: '',
      message: '',
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
      service: e.target.value,
    });
  };

  const services = [
    'AI-Powered Marketing',
    'Influencer Marketing',
    'SEO',
    'PPC Advertising',
    'Social Media Marketing',
    'Content Marketing',
    'Email Marketing',
    'Web Design & Development',
    'Brand Strategy',
    'Analytics & Reporting',
  ];

  return (
    <div className="min-h-screen pt-20">
      <SEOHead
        title="Contact Senseoza | Start Your Digital Marketing Journey"
        description="Contact Senseoza today for AI-powered marketing, SEO, social media, and content solutions that grow your business."
        canonicalUrl="https://senseoza.com/contact"
        schema={organizationSchema}
      />
      {/* Hero Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-primary-foreground mb-6">
              Let's Build Your Digital Success Story
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Whether you need SEO, AI campaigns, or a full digital transformation, our experts are ready to help.
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
              <h2 className="text-3xl font-heading font-bold mb-6">Let's Connect</h2>
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

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold mb-2">
                      Company
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
                    <label htmlFor="phone" className="block text-sm font-semibold mb-2">
                      Phone
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
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-semibold mb-2">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleSelectChange}
                    className="w-full px-4 py-2 rounded-lg border border-input bg-background"
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
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
                    placeholder="Tell us about your project and goals..."
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
                  Book a Consultation via WhatsApp
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
                    <a href="mailto:senseoza@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                      senseoza@gmail.com
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
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold mb-1">Visit Us</h3>
                    <p className="text-muted-foreground">
                      Shalom Bungalow, Sandvik Colony,<br />
                      Sector No. 27, Pradhikaran, Nigdi,<br />
                      Pune, Pimpri-Chinchwad,<br />
                      Maharashtra 411044
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
                    const whatsappUrl = `https://wa.me/919168411743?text=${encodeURIComponent('Hi, I would like to book a consultation.')}`;
                    window.open(whatsappUrl, '_blank');
                  }}
                  className="bg-white text-primary hover:bg-white/90 hover:scale-105 transition-all shadow-lg font-semibold"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Book a Consultation
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
