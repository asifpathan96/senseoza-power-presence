import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const blogPosts = [
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

  const categories = ['All', 'AI Marketing', 'SEO', 'Social Media', 'Content Marketing', 'PPC', 'Email Marketing'];

  const filteredPosts = activeCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-primary-foreground mb-6">
              Marketing Insights & Strategies
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Expert advice, industry trends, and actionable strategies to elevate your digital marketing game
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? 'default' : 'outline'}
                className={activeCategory === category ? 'gradient-primary' : ''}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {filteredPosts.length > 0 && (
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-8 bg-card rounded-3xl overflow-hidden border border-border shadow-lg hover:shadow-xl transition-base">
                <div className="relative h-80 lg:h-auto">
                  <img
                    src={filteredPosts[0].image}
                    alt={filteredPosts[0].title}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-4 left-4 px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-semibold">
                    Featured
                  </span>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <span className="text-primary font-semibold mb-2">{filteredPosts[0].category}</span>
                  <h2 className="text-3xl font-heading font-bold mb-4">
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
                  <Button className="gradient-primary w-fit">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.slice(1).map((post, index) => (
              <article
                key={index}
                className="bg-card rounded-2xl overflow-hidden border border-border hover:shadow-lg transition-base group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-base"
                  />
                  <span className="absolute top-4 left-4 px-3 py-1 bg-primary text-primary-foreground rounded-full text-sm font-semibold">
                    {post.category}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-heading font-bold mb-3 group-hover:text-primary transition-base">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
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
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-base">
                    Read Article <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 gradient-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-heading font-bold text-primary-foreground mb-4">
              Stay Ahead of the Curve
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Get weekly marketing insights and strategies delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg"
              />
              <Button className="bg-primary-foreground text-primary hover:scale-105 transition-base">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
