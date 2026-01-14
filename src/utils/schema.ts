export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "DigitalMarketingAgency",
  "name": "Senseoza",
  "description": "AI-Powered Digital Marketing Agency turning presence into power",
  "url": "https://senseoza.com",
  "logo": "https://senseoza.com/images/logo.png",
  "telephone": "+919168411743",
  "email": "hello@senseoza.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Pune",
    "addressRegion": "Maharashtra",
    "addressCountry": "IN"
  },
  "areaServed": "Pune",
  "priceRange": "$$",
  "sameAs": [
    "https://facebook.com/senseoza",
    "https://twitter.com/senseoza",
    "https://linkedin.com/company/senseoza",
    "https://instagram.com/senseoza"
  ]
};

export const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Digital Marketing",
  "provider": {
    "@type": "DigitalMarketingAgency",
    "name": "Senseoza",
    "url": "https://senseoza.com"
  },
  "areaServed": "Pune",
  "offers": [
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "SEO Services",
        "description": "Expert SEO services including technical SEO, local SEO, and link building"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "PPC Advertising",
        "description": "Google Ads management and paid advertising campaigns"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Social Media Marketing",
        "description": "Expert management of Instagram, Facebook, LinkedIn & Twitter"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Content Marketing",
        "description": "Blog writing, video content, and copywriting services"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Web Design & Development",
        "description": "Mobile-responsive, SEO-optimized, fast-loading websites"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "AI-Powered Marketing",
        "description": "AI-driven marketing automation and analytics"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "AI Agents & Workflow Automation",
        "description": "Custom AI agent development and workflow automation services"
      }
    }
  ]
};

export const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "name": "Senseoza Digital Marketing Blog",
  "description": "Expert insights on SEO, AI marketing, social media, and content strategy",
  "url": "https://senseoza.com/blog",
  "publisher": {
    "@type": "DigitalMarketingAgency",
    "name": "Senseoza",
    "url": "https://senseoza.com"
  }
};

export const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contact Senseoza",
  "description": "Get in touch with Pune's leading AI-powered digital marketing agency",
  "mainEntity": {
    "@type": "DigitalMarketingAgency",
    "name": "Senseoza",
    "telephone": "+919168411743",
    "email": "hello@senseoza.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Pune",
      "addressRegion": "Maharashtra",
      "addressCountry": "IN"
    }
  }
};
