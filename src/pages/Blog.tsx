import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Clock, Sparkles, BookOpen } from 'lucide-react';
import SEOHead from '@/components/SEOHead';
import { blogSchema } from '@/utils/schema';
import { AnimatedSection, StaggerContainer, StaggerItem, FloatingElement } from '@/components/AnimatedSection';
import { motion } from 'framer-motion';
import aiMarketingImage from '@/assets/ai-marketing.jpg';
import seoImage from '@/assets/seo.jpg';
import socialMediaImage from '@/assets/social-media.jpg';

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  
  // Latest 3 blogs (same as homepage)
  const latestPosts = [
    {
      title: 'How AI is Revolutionizing Digital Marketing in 2024',
      excerpt: 'Discover the latest AI tools and strategies transforming how brands connect with audiences.',
      author: 'Senseoza Team',
      category: 'AI Marketing',
      date: 'Dec 10, 2024',
      readTime: '5 min read',
      image: aiMarketingImage,
      slug: 'ai-revolutionizing-digital-marketing-2024',
    },
    {
      title: 'SEO Trends You Can\'t Ignore This Year',
      excerpt: 'Stay ahead of algorithm updates with these proven SEO strategies for better rankings.',
      author: 'Senseoza Team',
      category: 'SEO',
      date: 'Dec 8, 2024',
      readTime: '4 min read',
      image: seoImage,
      slug: 'seo-trends-2024',
    },
    {
      title: 'Building Brand Authority on Social Media',
      excerpt: 'Learn how to create authentic connections and grow your brand presence online.',
      author: 'Senseoza Team',
      category: 'Social Media',
      date: 'Dec 5, 2024',
      readTime: '6 min read',
      image: socialMediaImage,
      slug: 'building-brand-authority-social-media',
    },
  ];

  // Additional blog posts
  const additionalPosts = [
    {
      title: '10 AI-Powered Marketing Strategies That Will Dominate 2025',
      excerpt: 'Discover how artificial intelligence is revolutionizing digital marketing and learn the top strategies to implement in your business for maximum ROI.',
      author: 'Sarah Johnson',
      date: 'March 15, 2024',
      readTime: '8 min read',
      category: 'AI Marketing',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop',
      slug: 'ai-marketing-strategies-2025',
    },
    {
      title: 'The Ultimate Guide to SEO in 2024: What Actually Works',
      excerpt: 'Cut through the noise and learn the SEO tactics that are proven to drive organic traffic and improve rankings in the current search landscape.',
      author: 'Michael Chen',
      date: 'March 12, 2024',
      readTime: '12 min read',
      category: 'SEO',
      image: 'https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=800&h=500&fit=crop',
      slug: 'ultimate-seo-guide-2024',
    },
    {
      title: 'Social Media ROI: How to Measure What Actually Matters',
      excerpt: 'Learn the metrics that matter and discover proven frameworks for measuring and improving your social media marketing return on investment.',
      author: 'Emily Rodriguez',
      date: 'March 8, 2024',
      readTime: '10 min read',
      category: 'Social Media',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=500&fit=crop',
      slug: 'social-media-roi-measurement',
    },
    {
      title: 'Content Marketing Trends: Creating Content That Converts',
      excerpt: 'Explore the latest content marketing trends and learn how to create compelling content that drives engagement and conversions.',
      author: 'David Thompson',
      date: 'March 5, 2024',
      readTime: '9 min read',
      category: 'Content Marketing',
      image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=500&fit=crop',
      slug: 'content-marketing-trends',
    },
    {
      title: 'PPC Mastery: Advanced Strategies for Maximum ROI',
      excerpt: 'Take your PPC campaigns to the next level with advanced bidding strategies, audience targeting, and optimization techniques.',
      author: 'Jessica Martinez',
      date: 'March 1, 2024',
      readTime: '11 min read',
      category: 'PPC',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop',
      slug: 'ppc-advanced-strategies',
    },
    {
      title: 'Email Marketing in 2024: Automation and Personalization',
      excerpt: 'Discover how to leverage marketing automation and personalization to create email campaigns that drive results.',
      author: 'Robert Kim',
      date: 'February 28, 2024',
      readTime: '7 min read',
      category: 'Email Marketing',
      image: 'https://images.unsplash.com/photo-1557200134-90327ee9fafa?w=800&h=500&fit=crop',
      slug: 'email-marketing-automation',
    },
  ];

  // Combine all posts for filtering
  const allPosts = [...latestPosts, ...additionalPosts];

  const categories = ['All', 'AI Marketing', 'SEO', 'Social Media', 'Content Marketing', 'PPC', 'Email Marketing'];

  const filteredPosts = activeCategory === 'All' 
    ? allPosts 
    : allPosts.filter(post => post.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Digital Marketing Blog | SEO, AI, Social Media Tips | Senseoza"
        description="Stay updated with the latest digital marketing trends, SEO tips, AI in marketing & social media strategies. Expert insights from Senseoza's marketing team in Pune."
        canonicalUrl="https://senseoza.com/blog"
        schema={blogSchema}
      />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute inset-0 dot-pattern opacity-20" />
        
        <FloatingElement className="absolute top-1/4 left-10 w-64 h-64 bg-accent/20 rounded-full blur-3xl" delay={0} />
        <FloatingElement className="absolute bottom-1/4 right-10 w-80 h-80 bg-primary/20 rounded-full blur-3xl" delay={2} />
        
        <div className="container mx-auto px-4 z-10 py-32">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-8"
            >
              <BookOpen className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium text-white/90">Marketing Insights</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6 leading-tight"
            >
              Digital Marketing <span className="text-accent">Blog</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed"
            >
              Stay ahead of digital trends with insights on SEO, AI, content, and social media. Learn from our experts and grow smarter with Senseoza.
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

      {/* Categories */}
      <section className="py-8 border-b border-border bg-background sticky top-20 z-40">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap gap-3 justify-center"
          >
            {categories.map((category, index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
              >
                <Button
                  variant={activeCategory === category ? 'default' : 'outline'}
                  className={activeCategory === category ? 'gradient-primary shadow-primary' : 'hover:border-primary hover:text-primary'}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      {filteredPosts.length > 0 && (
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <AnimatedSection className="max-w-6xl mx-auto">
              <motion.div 
                whileHover={{ y: -4 }}
                className="grid lg:grid-cols-2 gap-8 bg-card rounded-3xl overflow-hidden border border-border/50 shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-80 lg:h-auto overflow-hidden">
                  <img
                    src={filteredPosts[0].image}
                    alt={filteredPosts[0].title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                  <span className="absolute top-4 left-4 px-4 py-2 bg-primary text-white rounded-full text-sm font-semibold shadow-lg">
                    Featured
                  </span>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <span className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full text-primary text-sm font-semibold mb-4 w-fit">
                    {filteredPosts[0].category}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
                    {filteredPosts[0].title}
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    {filteredPosts[0].excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      <span>{filteredPosts[0].author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{filteredPosts[0].date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>{filteredPosts[0].readTime}</span>
                    </div>
                  </div>
                  <Link to={`/blog/${filteredPosts[0].slug}`} onClick={() => window.scrollTo(0, 0)}>
                    <Button className="gradient-primary shadow-primary w-fit">
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </AnimatedSection>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section className="py-12 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient opacity-50" />
        <div className="container mx-auto px-4 relative z-10">
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.slice(1).map((post, index) => (
              <StaggerItem key={index}>
                <Link
                  to={`/blog/${post.slug}`}
                  onClick={() => window.scrollTo(0, 0)}
                >
                  <motion.div
                    whileHover={{ y: -8 }}
                    className="bg-card rounded-2xl overflow-hidden border border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-300 group h-full"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <span className="absolute top-4 left-4 px-3 py-1 bg-primary/90 text-white rounded-full text-sm font-semibold">
                        {post.category}
                      </span>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-heading font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 text-sm line-clamp-2">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center gap-3 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all">
                        Read Article <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </motion.div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute inset-0 dot-pattern opacity-10" />
        <FloatingElement className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl -mr-48 -mt-48" />
        <FloatingElement className="absolute bottom-0 left-0 w-80 h-80 bg-primary/20 rounded-full blur-3xl -ml-40 -mb-40" delay={2} />
        
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="max-w-2xl mx-auto text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-semibold mb-6"
            >
              <Sparkles className="h-4 w-4" />
              Newsletter
            </motion.span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-4">
              Stay Ahead of the <span className="text-accent">Curve</span>
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Get weekly marketing insights and strategies delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <Button className="bg-white text-primary hover:bg-white/90 shadow-lg">
                Subscribe
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Blog;