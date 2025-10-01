export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Senseoza",
  "description": "AI-Powered Digital Marketing Agency",
  "url": "https://senseoza.com",
  "logo": "https://lovable.dev/opengraph-image-p98pqg.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-555-123-4567",
    "contactType": "Customer Service",
    "email": "contact@senseoza.com",
    "areaServed": "US",
    "availableLanguage": "English"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Digital Ave",
    "addressLocality": "Tech City",
    "addressRegion": "TC",
    "postalCode": "12345",
    "addressCountry": "US"
  },
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
    "@type": "Organization",
    "name": "Senseoza"
  },
  "offers": [
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "AI-Powered Marketing",
        "description": "Predictive campaigns powered by artificial intelligence"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "SEO Excellence",
        "description": "Technical SEO, content optimization, and link building"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Social Media & Influencer Marketing",
        "description": "Data-driven social strategies and influencer partnerships"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Content Marketing",
        "description": "Blogs, videos, and storytelling that converts"
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
    "@type": "Organization",
    "name": "Senseoza"
  }
};
