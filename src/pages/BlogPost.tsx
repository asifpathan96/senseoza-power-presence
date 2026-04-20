import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Calendar, User, Clock, ArrowLeft, Share2, Facebook, Twitter, Linkedin, Sparkles } from 'lucide-react';
import SEOHead from '@/components/SEOHead';
import { AnimatedSection, FloatingElement } from '@/components/AnimatedSection';
import { motion } from 'framer-motion';
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
    'ai-revolutionizing-digital-marketing-2026': {
      title: 'How AI is Revolutionizing Digital Marketing in 2026',
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
      date: 'March 10, 2026',
      readTime: '5 min read',
      category: 'AI Marketing',
      image: aiMarketingImage,
    },
    'seo-trends-2026': {
      title: 'SEO Trends You Can\'t Ignore This Year',
      excerpt: 'Stay ahead of algorithm updates with these proven SEO strategies for better rankings.',
      content: [
        'Search Engine Optimization continues to evolve at a rapid pace. What worked last year may not be as effective today, making it crucial for businesses to stay updated on the latest trends and best practices.',
        'Core Web Vitals have become more important than ever. Google\'s emphasis on user experience means that page speed, interactivity, and visual stability directly impact your rankings.',
        'Voice search optimization is no longer optional. With the proliferation of smart speakers and voice assistants, optimizing for conversational queries has become essential for maintaining visibility.',
        'E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) continues to be a critical ranking factor. Building your brand\'s credibility through high-quality content, authoritative backlinks, and transparent business practices is more important than ever.',
        'Video content is taking center stage. YouTube is the second-largest search engine, and Google increasingly features video content in search results. Integrating video into your SEO strategy can significantly boost visibility.',
        'Local SEO has evolved beyond just Google Business Profile optimization. With the rise of "near me" searches and local intent, businesses need comprehensive local SEO strategies that include reviews, local content, and community engagement.',
      ],
      author: 'Senseoza Team',
      date: 'March 8, 2026',
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
      date: 'March 5, 2026',
      readTime: '6 min read',
      category: 'Social Media',
      image: socialMediaImage,
    },
    'ai-marketing-strategies-2027': {
      title: '10 AI-Powered Marketing Strategies That Will Dominate 2027',
      excerpt: 'Discover how artificial intelligence is revolutionizing digital marketing and learn the top strategies to implement in your business for maximum ROI.',
      content: [
        'In 2027, AI-powered marketing strategies are becoming essential for businesses looking to stay competitive. Here are the top 10 strategies that will dominate the landscape.',
        'Hyper-personalization at scale is becoming possible with AI. Beyond simple name insertion, AI can analyze behavior patterns to deliver truly personalized experiences across every touchpoint.',
        'Predictive customer journey mapping uses AI to anticipate customer needs before they even express them, allowing for proactive engagement and improved conversion rates.',
        'AI-driven content optimization goes beyond keywords. Modern AI can analyze top-performing content and provide recommendations for structure, tone, and topics that resonate with your audience.',
        'Automated A/B testing with AI eliminates guesswork. AI systems can run multiple tests simultaneously and automatically implement winning variations in real-time.',
        'Conversational AI has evolved to handle complex sales conversations, qualify leads, and even negotiate deals—all while providing a human-like experience.',
      ],
      author: 'Sarah Johnson',
      date: 'Feb 15, 2026',
      readTime: '8 min read',
      category: 'AI Marketing',
      image: aiMarketingImage,
    },
    'ultimate-seo-guide-2026': {
      title: 'The Ultimate Guide to SEO in 2026: What Actually Works',
      excerpt: 'Cut through the noise and learn the SEO tactics that are proven to drive organic traffic and improve rankings in the current search landscape.',
      content: [
        'SEO in 2026 has evolved significantly from keyword stuffing and link farms. Today\'s successful SEO strategies focus on user intent, content quality, and technical excellence.',
        'Understanding search intent is paramount. Google\'s algorithms have become incredibly sophisticated at understanding what users actually want when they search.',
        'Technical SEO forms the foundation. Site speed, mobile-friendliness, and proper indexing are non-negotiable elements of any successful SEO strategy.',
        'Content depth and expertise matter more than ever. Comprehensive, well-researched content that demonstrates genuine expertise consistently outranks thin, keyword-focused pages.',
        'Backlink quality over quantity is the new norm. A few high-quality, relevant backlinks are worth more than hundreds of low-quality directory links.',
        'Regular content updates and freshness signals show search engines that your site is actively maintained and provides current, relevant information.',
      ],
      author: 'Michael Chen',
      date: 'Feb 12, 2026',
      readTime: '12 min read',
      category: 'SEO',
      image: seoImage,
    },
    'social-media-roi-measurement': {
      title: 'Social Media ROI: How to Measure What Actually Matters',
      excerpt: 'Learn the metrics that matter and discover proven frameworks for measuring and improving your social media marketing return on investment.',
      content: [
        'Social media ROI has long been one of the most debated topics in digital marketing. In 2026, with budgets tighter and competition fiercer than ever, vanity metrics like likes and follower counts simply don\'t cut it. Brands need to measure what truly impacts the bottom line: revenue, qualified leads, customer retention, and brand equity.',
        'The first step to measuring real ROI is defining clear, business-aligned goals. Are you trying to drive e-commerce sales, generate B2B leads, build community, or improve customer support deflection? Each goal demands a different measurement framework, attribution model, and KPI stack.',
        'Modern attribution has moved beyond last-click. Multi-touch attribution models, view-through conversions, and incrementality testing now give marketers a far more honest picture of how social media contributes to the customer journey. Tools like GA4, Meta\'s Conversions API, and server-side tracking are essential for stitching the data together.',
        'Cost per acquisition (CPA), customer lifetime value (CLV), and return on ad spend (ROAS) are the three metrics every social media marketer should obsess over. When you pair CLV with CPA, you instantly know whether a channel is profitable long-term—not just on the day a sale closes.',
        'Don\'t ignore qualitative ROI either. Share of voice, sentiment analysis, branded search lift, and direct traffic growth are powerful indicators that your social presence is building real brand authority. AI-powered listening tools now surface these signals automatically.',
        'Reporting cadence matters as much as the metrics themselves. Weekly performance reviews catch tactical issues fast, while monthly and quarterly business reviews tie social activity back to revenue, pipeline, and retention. Stakeholders care about outcomes, not impressions.',
        'Finally, treat ROI measurement as a living discipline. Algorithm changes, platform shifts, and audience behavior are constantly evolving. The brands winning in 2026 are the ones running structured experiments, documenting learnings, and reallocating budget to what actually works.',
      ],
      author: 'Emily Rodriguez',
      date: 'Feb 8, 2026',
      readTime: '10 min read',
      category: 'Social Media',
      image: socialMediaImage,
    },
    'content-marketing-trends': {
      title: 'Content Marketing Trends: Creating Content That Converts',
      excerpt: 'Explore the latest content marketing trends and learn how to create compelling content that drives engagement and conversions.',
      content: [
        'Content marketing in 2026 looks very different from the blog-and-pray era of the early 2020s. Audiences are inundated with AI-generated noise, attention spans are shorter than ever, and search engines are actively rewarding originality, expertise, and depth. Brands that win are the ones treating content as a product, not a checkbox.',
        'Short-form video continues to dominate top-of-funnel discovery. Reels, Shorts, and TikTok-native videos are now essential for almost every B2C brand—and increasingly for B2B too. The key is repurposing one strong narrative across multiple formats and platforms instead of creating from scratch each time.',
        'Long-form content is making a serious comeback in 2026. With AI summarizers everywhere, only deep, opinionated, expert-driven articles stand out. Pillar pages of 2,500+ words backed by original research, interviews, and proprietary data consistently outperform thin AI content in both rankings and conversions.',
        'Personalization is no longer optional. Smart brands are using first-party data and AI to dynamically tailor headlines, CTAs, case studies, and even entire landing pages based on visitor industry, role, and intent. Personalized content can lift conversion rates by 30–80% compared to static experiences.',
        'Authentic storytelling beats polish. Behind-the-scenes content, founder-led narratives, customer-led case studies, and unfiltered employee advocacy are outperforming over-produced campaigns. Audiences in 2026 reward honesty and punish anything that feels manufactured.',
        'Interactive content—calculators, quizzes, assessments, configurators—captures intent better than passive reading. These assets double as lead magnets and produce qualified pipeline for sales teams instead of generic newsletter sign-ups.',
        'Distribution finally matters as much as creation. The brands winning in 2026 spend at least as much time syndicating, repurposing, and amplifying content via newsletters, communities, partnerships, and paid social as they do producing it. Great content with no distribution is just an expensive hobby.',
      ],
      author: 'David Thompson',
      date: 'Feb 5, 2026',
      readTime: '9 min read',
      category: 'Content Marketing',
      image: aiMarketingImage,
    },
    'ppc-advanced-strategies': {
      title: 'PPC Mastery: Advanced Strategies for Maximum ROI',
      excerpt: 'Take your PPC campaigns to the next level with advanced bidding strategies, audience targeting, and optimization techniques.',
      content: [
        'PPC in 2026 is dominated by AI-driven automation, but advanced marketers know that automation without strategy is just expensive guesswork. The brands generating the strongest ROAS are the ones combining Google\'s and Meta\'s machine learning with sharp human judgment, clean data, and creative excellence.',
        'Smart Bidding strategies like Target ROAS, Maximize Conversion Value, and Performance Max have matured significantly. The key to making them work is feeding them high-quality conversion data—ideally enhanced conversions, offline imports, and value-based bidding signals tied to true profit margins, not just gross revenue.',
        'Audience signals are now more powerful than keywords in many campaigns. First-party customer lists, lookalike audiences, in-market segments, and behavioral cohorts let you guide automated bidding toward your highest-value prospects rather than the cheapest clicks.',
        'Creative is the new targeting. With AI handling so much of the bidding and placement work, the differentiator in 2026 is the quality and variety of your ad creative. Brands that systematically test 10–20 creative variations per campaign, including AI-generated images and video, consistently outperform competitors stuck with two static ads.',
        'Landing page experience has direct impact on Quality Score, CPCs, and conversion rate. Page speed, mobile UX, message match, and trust signals (reviews, certifications, guarantees) can swing campaign profitability by 2–3x without changing a single bid.',
        'Negative keywords, exclusions, and brand safety lists remain essential—especially with broad match and Performance Max consuming larger shares of budget. Weekly search term audits prevent budget waste and catch low-intent traffic before it eats into ROAS.',
        'Finally, measurement and incrementality testing separate sophisticated PPC marketers from the rest. Geo-experiments, holdout tests, and conversion lift studies tell you what your platforms are actually contributing—versus what they\'re just taking credit for. In 2026, that clarity is worth millions.',
      ],
      author: 'Jessica Martinez',
      date: 'Feb 1, 2026',
      readTime: '11 min read',
      category: 'PPC',
      image: aiMarketingImage,
    },
    'email-marketing-automation': {
      title: 'Email Marketing in 2026: Automation and Personalization',
      excerpt: 'Discover how to leverage marketing automation and personalization to create email campaigns that drive results.',
      content: [
        'Despite predictions of its demise every year for the last two decades, email marketing in 2026 is stronger than ever. With the average ROI still hovering around $40 for every $1 spent, email remains the highest-leverage channel in the digital marketing stack—if you do it right.',
        'Automation has moved far beyond basic welcome series. Modern lifecycle programs include behavior-triggered flows for onboarding, activation, upsell, win-back, churn prevention, and re-engagement—each personalized by segment, lifecycle stage, and predicted intent.',
        'Hyper-personalization powered by AI is the single biggest unlock. Subject lines, hero images, product recommendations, send times, and even body copy can now be tailored per recipient. Brands using AI personalization typically see 25–40% lifts in click-through and 15–30% lifts in revenue per email.',
        'Deliverability has become a serious technical discipline. With Gmail and Yahoo enforcing strict authentication (SPF, DKIM, DMARC) and one-click unsubscribe requirements, sloppy senders are seeing inbox placement collapse. Regular list hygiene, engagement-based segmentation, and warm-up protocols are non-negotiable in 2026.',
        'Zero-party and first-party data fuel the best programs. Preference centers, progressive profiling, quizzes, and post-purchase surveys give you the explicit signals you need to send genuinely relevant content—without relying on increasingly restricted third-party tracking.',
        'Interactive email is finally going mainstream. AMP for Email, accessible across more clients than ever, lets recipients RSVP, shop, browse carousels, and submit forms without leaving the inbox. Conversion rates on interactive emails routinely beat their static counterparts by 2–3x.',
        'Measurement should go well beyond opens and clicks. Track revenue per recipient, list growth rate, churn, and incremental lift versus a holdout group. The brands winning at email in 2026 treat their list as a P&L line, not a vanity metric.',
      ],
      author: 'Robert Kim',
      date: 'Jan 28, 2026',
      readTime: '7 min read',
      category: 'Email Marketing',
      image: aiMarketingImage,
    },
    'ai-driven-personalization-pune-2026': {
      title: 'AI-Driven Personalization: How Pune Businesses Are Boosting Conversions in 2026',
      excerpt: 'AI tools for content creation, chatbots, and customer analysis are exploding across Pune\'s IT hubs—helping businesses cut errors and dramatically boost conversions.',
      content: [
        'Walk through Hinjewadi, Kharadi, or Baner today and you can feel it: Pune\'s IT corridors have quietly become one of India\'s most exciting hubs for AI-driven marketing. From early-stage SaaS startups to established D2C brands, businesses across the city are racing to deploy AI personalization at scale—and the conversion numbers are speaking for themselves. AI marketing in Pune is no longer experimental; it\'s a competitive necessity.',
        'AI-powered content creation tools are at the heart of this shift. Generative AI platforms now help Pune marketing teams produce ad copy, landing page variants, blog drafts, and product descriptions in minutes instead of days. The brands winning in 2026 aren\'t the ones replacing writers with AI—they\'re the ones using AI to test 10x more variations and double down on what converts.',
        'Smart chatbots are transforming how Hinjewadi-based companies handle customer conversations. Modern conversational AI can qualify leads, book demos, recommend products, and resolve support issues 24/7—in English, Hindi, and Marathi. Local SaaS firms report cutting first-response times from hours to seconds while freeing human teams to focus on high-value accounts.',
        'Customer behavior analysis is where AI delivers the biggest competitive edge. By unifying website, CRM, ad platform, and offline data, AI models predict who will buy, who will churn, and what will move them to act. Pune e-commerce brands using predictive segmentation are seeing 30–50% higher email revenue and dramatically lower acquisition costs.',
        'Error reduction is an underrated benefit. AI-driven QA catches broken UTMs, mistargeted ad sets, broken checkout flows, and duplicate audiences before they burn budget. For mid-market brands in Kharadi running multi-lakh monthly ad spends, even a 5% reduction in waste pays for the entire AI stack.',
        'Real conversion lift is showing up across industries. A Baner-based real estate marketer recently shared that personalized landing pages and AI-driven retargeting lifted qualified site visits by 62% in one quarter. A Hinjewadi D2C beauty brand saw a 41% jump in repeat purchases after deploying AI-powered product recommendations and triggered emails.',
        'Why are Pune startups and SMEs adopting AI faster than peers in many other cities? Three reasons: a deep local talent pool spilling out of the IT parks, a strong culture of experimentation, and lean teams that simply have to do more with less. AI personalization India\'s startup capital pune is producing right now is genuinely world-class.',
        'At Senseoza, we help Pune brands implement AI-driven personalization end-to-end—from data unification and chatbots for business, to AI ad creative, customer analytics Pune teams can actually act on, and conversion-focused landing experiences. If you\'re a founder or marketer in Hinjewadi, Kharadi, Baner, or anywhere across Pune ready to turn AI from buzzword into bottom-line growth, this is the year to move.',
      ],
      author: 'Senseoza Team',
      date: 'April 20, 2026',
      readTime: '8 min read',
      category: 'AI Marketing',
      image: aiMarketingImage,
    },
  };

  const post = blogPosts[slug || ''];

  if (!post) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center bg-background">
        <AnimatedSection className="text-center">
          <h1 className="text-4xl font-heading font-bold mb-4">Post Not Found</h1>
          <p className="text-muted-foreground mb-8">The blog post you're looking for doesn't exist.</p>
          <Link to="/blog">
            <Button className="gradient-primary">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
            </Button>
          </Link>
        </AnimatedSection>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={`${post.title} | Senseoza Blog`}
        description={post.excerpt}
        canonicalUrl={`https://senseoza.com/blog/${slug}`}
      />
      
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          src={post.image}
          alt={post.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/60 to-transparent" />
        
        <FloatingElement className="absolute top-1/4 right-10 w-64 h-64 bg-accent/20 rounded-full blur-3xl" delay={0} />
        
        <div className="relative z-10 container mx-auto px-4 pb-12 pt-32">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link 
                to="/blog" 
                className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors group"
                onClick={() => window.scrollTo(0, 0)}
              >
                <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" /> Back to Blog
              </Link>
            </motion.div>
            
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-block px-4 py-2 bg-primary text-white rounded-full text-sm font-semibold mb-6"
            >
              {post.category}
            </motion.span>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-6"
            >
              {post.title}
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-6 text-white/80"
            >
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
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient opacity-30" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection>
              <div className="prose prose-lg max-w-none">
                {post.content.map((paragraph, index) => (
                  <motion.p 
                    key={index} 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="text-lg text-muted-foreground mb-6 leading-relaxed"
                  >
                    {paragraph}
                  </motion.p>
                ))}
              </div>
            </AnimatedSection>

            {/* Share */}
            <AnimatedSection delay={0.3}>
              <div className="mt-12 pt-8 border-t border-border">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-2">
                    <Share2 className="h-5 w-5 text-muted-foreground" />
                    <span className="font-semibold">Share this article</span>
                  </div>
                  <div className="flex gap-3">
                    <motion.div whileHover={{ scale: 1.1 }}>
                      <Button variant="outline" size="icon" className="rounded-full hover:bg-primary hover:text-white hover:border-primary">
                        <Facebook className="h-4 w-4" />
                      </Button>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.1 }}>
                      <Button variant="outline" size="icon" className="rounded-full hover:bg-primary hover:text-white hover:border-primary">
                        <Twitter className="h-4 w-4" />
                      </Button>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.1 }}>
                      <Button variant="outline" size="icon" className="rounded-full hover:bg-primary hover:text-white hover:border-primary">
                        <Linkedin className="h-4 w-4" />
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* CTA */}
            <AnimatedSection delay={0.4}>
              <motion.div 
                whileHover={{ y: -4 }}
                className="mt-12 p-8 md:p-10 rounded-3xl gradient-hero text-center relative overflow-hidden"
              >
                <FloatingElement className="absolute top-0 right-0 w-48 h-48 bg-accent/30 rounded-full blur-3xl" />
                <div className="relative z-10">
                  <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-semibold mb-4">
                    <Sparkles className="h-4 w-4" />
                    Ready to Grow?
                  </span>
                  <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-4">
                    Want to implement these strategies?
                  </h3>
                  <p className="text-white/80 mb-6 max-w-lg mx-auto">
                    Let our experts help you achieve your digital marketing goals.
                  </p>
                  <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
                    <Button className="bg-white text-primary hover:bg-white/90 shadow-lg">
                      Get Started Today
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;