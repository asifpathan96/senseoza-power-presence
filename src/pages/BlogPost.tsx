import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Calendar, User, Clock, ArrowLeft, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import SEOHead from '@/components/SEOHead';
import aiMarketingImage from '@/assets/ai-marketing.jpg';
import seoImage from '@/assets/seo.jpg';
import socialMediaImage from '@/assets/social-media.jpg';

const BlogPost = () => {
  const { slug } = useParams();

  const blogPosts: Record<string, {
    title: string;
    excerpt: string;
    content: string[];
    author: string;
    date: string;
    readTime: string;
    category: string;
    image: string;
  }> = {
    'ai-revolutionizing-digital-marketing-2024': {
      title: 'How AI is Revolutionizing Digital Marketing in 2024',
      excerpt: 'Discover the latest AI tools and strategies transforming how brands connect with audiences.',
      content: [
        'Artificial Intelligence has become the cornerstone of modern digital marketing strategies. From predictive analytics to personalized content creation, AI is fundamentally changing how businesses connect with their target audiences.',
        'One of the most significant developments is the use of machine learning algorithms to analyze consumer behavior patterns. These systems can process vast amounts of data in real-time, enabling marketers to make data-driven decisions faster than ever before.',
        'AI-powered chatbots have evolved beyond simple FAQ responses. Today\'s conversational AI can handle complex customer inquiries, provide personalized product recommendations, and even close sales—all while learning from each interaction to improve future performance.',
        'Predictive analytics is another game-changer. By analyzing historical data and identifying patterns, AI can forecast trends, predict customer lifetime value, and help businesses allocate their marketing budgets more effectively.',
        'Content creation has also been transformed. While AI won\'t replace human creativity, it\'s becoming an invaluable tool for generating content ideas, optimizing headlines, and even creating first drafts that human writers can refine.',
        'Looking ahead, we expect to see even greater integration of AI in marketing strategies. From voice search optimization to augmented reality experiences, the possibilities are endless for businesses willing to embrace these technologies.',
      ],
      author: 'Senseoza Team',
      date: 'Dec 10, 2024',
      readTime: '5 min read',
      category: 'AI Marketing',
      image: aiMarketingImage,
    },
    'seo-trends-2024': {
      title: 'SEO Trends You Can\'t Ignore This Year',
      excerpt: 'Stay ahead of algorithm updates with these proven SEO strategies for better rankings.',
      content: [
        'Search Engine Optimization continues to evolve at a rapid pace. What worked last year may not be as effective today, making it crucial for businesses to stay updated on the latest trends and best practices.',
        'Core Web Vitals have become more important than ever. Google\'s emphasis on user experience means that page speed, interactivity, and visual stability directly impact your rankings.',
        'Voice search optimization is no longer optional. With the proliferation of smart speakers and voice assistants, optimizing for conversational queries has become essential for maintaining visibility.',
        'E-A-T (Expertise, Authoritativeness, Trustworthiness) continues to be a critical ranking factor. Building your brand\'s credibility through high-quality content, authoritative backlinks, and transparent business practices is more important than ever.',
        'Video content is taking center stage. YouTube is the second-largest search engine, and Google increasingly features video content in search results. Integrating video into your SEO strategy can significantly boost visibility.',
        'Local SEO has evolved beyond just Google My Business optimization. With the rise of "near me" searches and local intent, businesses need comprehensive local SEO strategies that include reviews, local content, and community engagement.',
      ],
      author: 'Senseoza Team',
      date: 'Dec 8, 2024',
      readTime: '4 min read',
      category: 'SEO',
      image: seoImage,
    },
    'building-brand-authority-social-media': {
      title: 'Building Brand Authority on Social Media',
      excerpt: 'Learn how to create authentic connections and grow your brand presence online.',
      content: [
        'Building brand authority on social media requires more than just posting regularly. It demands a strategic approach that combines authenticity, value, and consistent engagement with your audience.',
        'Start by defining your brand voice. Your social media presence should reflect your company\'s personality and values. Whether you\'re professional and informative or casual and humorous, consistency across all platforms is key.',
        'Content is still king, but context is queen. Understanding what type of content resonates with your audience on each platform is crucial. What works on LinkedIn may not work on Instagram or TikTok.',
        'Engagement is a two-way street. Responding to comments, participating in conversations, and acknowledging your followers helps build a community around your brand. This authentic interaction is what transforms followers into loyal advocates.',
        'Influencer partnerships can accelerate your authority-building efforts. Choose influencers whose values align with your brand and whose audience matches your target demographic for maximum impact.',
        'Analytics should guide your strategy. Regularly review your performance metrics to understand what\'s working and what isn\'t. Use these insights to refine your approach and continuously improve your social media presence.',
      ],
      author: 'Senseoza Team',
      date: 'Dec 5, 2024',
      readTime: '6 min read',
      category: 'Social Media',
      image: socialMediaImage,
    },
    'ai-marketing-strategies-2025': {
      title: '10 AI-Powered Marketing Strategies That Will Dominate 2025',
      excerpt: 'Discover how artificial intelligence is revolutionizing digital marketing and learn the top strategies to implement in your business for maximum ROI.',
      content: [
        'As we approach 2025, AI-powered marketing strategies are becoming essential for businesses looking to stay competitive. Here are the top 10 strategies that will dominate the landscape.',
        'Hyper-personalization at scale is becoming possible with AI. Beyond simple name insertion, AI can analyze behavior patterns to deliver truly personalized experiences across every touchpoint.',
        'Predictive customer journey mapping uses AI to anticipate customer needs before they even express them, allowing for proactive engagement and improved conversion rates.',
        'AI-driven content optimization goes beyond keywords. Modern AI can analyze top-performing content and provide recommendations for structure, tone, and topics that resonate with your audience.',
        'Automated A/B testing with AI eliminates guesswork. AI systems can run multiple tests simultaneously and automatically implement winning variations in real-time.',
        'Conversational AI has evolved to handle complex sales conversations, qualify leads, and even negotiate deals—all while providing a human-like experience.',
      ],
      author: 'Sarah Johnson',
      date: 'March 15, 2024',
      readTime: '8 min read',
      category: 'AI Marketing',
      image: aiMarketingImage,
    },
    'ultimate-seo-guide-2024': {
      title: 'The Ultimate Guide to SEO in 2024: What Actually Works',
      excerpt: 'Cut through the noise and learn the SEO tactics that are proven to drive organic traffic and improve rankings in the current search landscape.',
      content: [
        'SEO in 2024 has evolved significantly from keyword stuffing and link farms. Today\'s successful SEO strategies focus on user intent, content quality, and technical excellence.',
        'Understanding search intent is paramount. Google\'s algorithms have become incredibly sophisticated at understanding what users actually want when they search.',
        'Technical SEO forms the foundation. Site speed, mobile-friendliness, and proper indexing are non-negotiable elements of any successful SEO strategy.',
        'Content depth and expertise matter more than ever. Comprehensive, well-researched content that demonstrates genuine expertise consistently outranks thin, keyword-focused pages.',
        'Backlink quality over quantity is the new norm. A few high-quality, relevant backlinks are worth more than hundreds of low-quality directory links.',
        'Regular content updates and freshness signals show search engines that your site is actively maintained and provides current, relevant information.',
      ],
      author: 'Michael Chen',
      date: 'March 12, 2024',
      readTime: '12 min read',
      category: 'SEO',
      image: seoImage,
    },
  };

  const post = blogPosts[slug || ''];

  if (!post) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-heading font-bold mb-4">Post Not Found</h1>
          <p className="text-muted-foreground mb-8">The blog post you're looking for doesn't exist.</p>
          <Link to="/blog">
            <Button className="gradient-primary">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20">
      <SEOHead
        title={`${post.title} | Senseoza Blog`}
        description={post.excerpt}
        canonicalUrl={`https://senseoza.com/blog/${slug}`}
      />
      
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="container mx-auto">
            <div className="max-w-4xl">
              <Link 
                to="/blog" 
                className="inline-flex items-center text-primary-foreground/80 hover:text-primary-foreground mb-4 transition-colors"
                onClick={() => window.scrollTo(0, 0)}
              >
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
              </Link>
              <span className="inline-block px-4 py-1 bg-primary text-primary-foreground rounded-full text-sm font-semibold mb-4">
                {post.category}
              </span>
              <h1 className="text-3xl md:text-5xl font-heading font-bold text-primary-foreground mb-6">
                {post.title}
              </h1>
              <div className="flex flex-wrap items-center gap-6 text-primary-foreground/80">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg max-w-none">
              {post.content.map((paragraph, index) => (
                <p key={index} className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Share */}
            <div className="mt-12 pt-8 border-t border-border">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <Share2 className="h-5 w-5 text-muted-foreground" />
                  <span className="font-semibold">Share this article</span>
                </div>
                <div className="flex gap-3">
                  <Button variant="outline" size="icon" className="rounded-full hover:bg-primary hover:text-primary-foreground">
                    <Facebook className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full hover:bg-primary hover:text-primary-foreground">
                    <Twitter className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full hover:bg-primary hover:text-primary-foreground">
                    <Linkedin className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-12 p-8 rounded-2xl gradient-hero text-center">
              <h3 className="text-2xl font-heading font-bold text-primary-foreground mb-4">
                Want to implement these strategies?
              </h3>
              <p className="text-primary-foreground/90 mb-6">
                Let our experts help you achieve your digital marketing goals.
              </p>
              <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
                <Button className="bg-background text-foreground hover:bg-background/90">
                  Get Started Today
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;
