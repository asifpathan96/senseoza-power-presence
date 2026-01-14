import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Bot, ArrowRight, CheckCircle, Zap, Target, TrendingUp, Users, BarChart3, 
  Clock, Shield, Cog, FileText, Mail, DollarSign, UserCheck, Share2, Bell,
  MessageSquare, Workflow, BrainCircuit, Eye, Lightbulb, Database, 
  ShoppingCart, Briefcase, Heart, Building2, Megaphone, Scale, Factory, 
  GraduationCap, Plane, Code, HandHeart, ChevronDown, Lock, RefreshCw,
  Sparkles, Globe, Layers, Cpu
} from 'lucide-react';
import SEOHead from '@/components/SEOHead';
import { AnimatedSection, StaggerContainer, StaggerItem, FloatingElement } from '@/components/AnimatedSection';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const aiAgentSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "AI Agents & Workflow Automation",
  "provider": {
    "@type": "Organization",
    "name": "Senseoza",
    "url": "https://senseoza.com"
  },
  "description": "Custom AI agent development and workflow automation services that eliminate repetitive tasks and automate business processes",
  "areaServed": "Worldwide",
  "availableChannel": {
    "@type": "ServiceChannel",
    "serviceUrl": "https://senseoza.com/services/ai-agents-automation"
  }
};

const AIAgentsAutomation = () => {
  const [showFloatingCTA, setShowFloatingCTA] = useState(true);

  const agentServices = [
    {
      icon: MessageSquare,
      title: 'Customer Service Automation',
      description: 'Deploy intelligent AI agents that handle customer inquiries, provide instant support, resolve common issues, escalate complex cases to humans, and deliver personalized experiences at scale.',
    },
    {
      icon: FileText,
      title: 'Document Processing Automation',
      description: 'Transform how you handle documents with AI agents that extract data from invoices, receipts, contracts, and forms, validate information, and maintain organized digital archives.',
    },
    {
      icon: Workflow,
      title: 'Workflow & Process Automation',
      description: 'Streamline complex business processes with AI agents that coordinate multi-step workflows, manage approvals, integrate data across systems, and optimize based on performance.',
    },
    {
      icon: Database,
      title: 'Data Entry & Management',
      description: 'Eliminate manual data entry with AI agents that capture data from emails, PDFs, and websites, validate information, update CRM systems, and maintain data quality.',
    },
    {
      icon: Mail,
      title: 'Email & Communication Automation',
      description: 'Manage communications intelligently with AI agents that triage emails, draft responses, schedule meetings, follow up on pending items, and route messages appropriately.',
    },
    {
      icon: Target,
      title: 'Lead Qualification & Sales Automation',
      description: 'Accelerate your sales process with AI agents that qualify leads automatically, enrich data, score leads, schedule calls, and send personalized follow-up sequences.',
    },
    {
      icon: DollarSign,
      title: 'Financial Process Automation',
      description: 'Improve accuracy in financial operations with AI agents that process invoices, reconcile transactions, generate reports, flag anomalies, and manage payment workflows.',
    },
    {
      icon: UserCheck,
      title: 'HR & Recruitment Automation',
      description: 'Enhance HR operations with AI agents that screen resumes, schedule interviews, onboard employees, answer HR questions, and generate analytics.',
    },
    {
      icon: Share2,
      title: 'Social Media & Content Automation',
      description: 'Scale content operations with AI agents that schedule posts, monitor engagement, generate content ideas, analyze performance, and maintain brand consistency.',
    },
    {
      icon: Bell,
      title: 'Monitoring & Alert Systems',
      description: 'Stay informed with AI agents that monitor systems, detect anomalies, send intelligent alerts, gather diagnostics, and trigger automated responses.',
    },
  ];

  const technologies = [
    {
      icon: MessageSquare,
      title: 'Natural Language Processing (NLP)',
      description: 'Enables agents to understand and respond to human language in emails, messages, documents, and conversations—making interactions feel natural and intuitive.',
    },
    {
      icon: BrainCircuit,
      title: 'Machine Learning (ML)',
      description: 'Allows agents to learn from historical data, recognize patterns, predict outcomes, and improve their performance over time without explicit programming.',
    },
    {
      icon: Eye,
      title: 'Computer Vision',
      description: 'Enables agents to extract information from images, PDFs, and scanned documents, recognizing text, tables, signatures, and other visual elements with high accuracy.',
    },
    {
      icon: Lightbulb,
      title: 'Decision Intelligence',
      description: 'Empowers agents to evaluate multiple factors, assess situations, choose optimal actions, and make decisions that align with your business rules and objectives.',
    },
  ];

  const implementationProcess = [
    {
      phase: '01',
      title: 'Discovery & Analysis',
      duration: 'Week 1',
      description: 'We understand your business processes, identify automation opportunities, map current workflows, analyze pain points, define success metrics, and prioritize use cases by impact.',
    },
    {
      phase: '02',
      title: 'Solution Design',
      duration: 'Week 1-2',
      description: 'Based on our analysis, we design custom AI agent solutions including workflow architecture, system integrations, decision logic, user interfaces, error handling, and security measures.',
    },
    {
      phase: '03',
      title: 'Development & Configuration',
      duration: 'Week 2-4',
      description: 'Our technical team builds your AI agents by configuring automation platforms, developing custom integrations, training AI models, building interfaces, and implementing security protocols.',
    },
    {
      phase: '04',
      title: 'Testing & Refinement',
      duration: 'Week 4-5',
      description: 'We rigorously test functionality across scenarios, integration with all systems, accuracy, performance under load, user acceptance, and security validation.',
    },
    {
      phase: '05',
      title: 'Deployment & Training',
      duration: 'Week 5-6',
      description: 'We launch your AI agents with phased rollout, comprehensive team training, monitoring and support during launch, performance tracking, and documentation.',
    },
    {
      phase: '06',
      title: 'Ongoing Optimization',
      duration: 'Continuous',
      description: 'After deployment, we continuously improve through performance monitoring, regular updates, new capability additions, troubleshooting, and monthly strategy reviews.',
    },
  ];

  const realWorldApplications = [
    {
      icon: ShoppingCart,
      title: 'E-commerce Operations',
      description: 'An online retailer implemented AI agents to process orders, update inventory, handle customer inquiries, process returns and refunds, and generate shipping labels—reducing order processing time by 75%.',
    },
    {
      icon: Briefcase,
      title: 'Professional Services',
      description: 'A consulting firm deployed AI agents for scheduling client meetings, generating proposals, tracking project time, creating reports, and managing invoicing—saving 20+ hours per week.',
    },
    {
      icon: Heart,
      title: 'Healthcare Administration',
      description: 'A medical practice used AI agents to handle patient intake, reducing processing time from 45 minutes to 8 minutes while maintaining 99.2% accuracy in data extraction.',
    },
    {
      icon: Building2,
      title: 'Real Estate Management',
      description: 'A property management company automated tenant communications, maintenance requests, rent collection, lease renewals, and compliance reporting—managing 3x more properties with the same staff.',
    },
    {
      icon: Megaphone,
      title: 'Marketing Agencies',
      description: 'Digital marketing teams use AI agents to generate client reports, monitor campaigns, respond to inquiries, schedule content, and compile analytics—freeing strategists for creative work.',
    },
    {
      icon: DollarSign,
      title: 'Financial Services',
      description: 'Insurance companies achieved an 80% reduction in claims processing time, cutting claims handling from days to hours using AI agents for verification, risk assessment, and fraud detection.',
    },
  ];

  const benefits = [
    {
      icon: Clock,
      title: 'Dramatic Time Savings',
      stat: '15-30 hrs/week',
      description: 'Most businesses report saving 15-30 hours per week per employee on repetitive tasks, freeing your team for strategic, creative work.',
    },
    {
      icon: TrendingUp,
      title: 'Significant Cost Reduction',
      stat: '70% reduction',
      description: 'Organizations implementing AI agents report reducing manual tasks by up to 70%, translating to substantial cost savings.',
    },
    {
      icon: Users,
      title: 'Improved Customer Experience',
      stat: '24/7 availability',
      description: 'Faster response times, 24/7 availability, consistent quality, personalized interactions, and reduced errors improve customer satisfaction.',
    },
    {
      icon: Database,
      title: 'Enhanced Data Quality',
      stat: '99%+ accuracy',
      description: 'Eliminate inconsistencies, duplicates, and errors. AI agents maintain pristine data quality through consistent validation and processing.',
    },
    {
      icon: Zap,
      title: 'Scalability',
      stat: '10x volume',
      description: 'Handle 10x the volume without 10x the staff. AI agents scale instantly to accommodate growth, seasonal peaks, or new initiatives.',
    },
    {
      icon: Shield,
      title: 'Better Compliance',
      stat: '100% audit trails',
      description: 'Automated documentation, consistent process adherence, comprehensive audit trails, and built-in validation ensure regulatory compliance.',
    },
    {
      icon: Target,
      title: 'Competitive Advantage',
      stat: '40-60% faster',
      description: 'Organizations using AI agents see 40-60% faster decision-making compared to rule-based automation systems.',
    },
  ];

  const integrations = {
    'CRM & Sales': ['Salesforce', 'HubSpot', 'Pipedrive', 'Zoho CRM', 'Monday.com'],
    'Email & Communication': ['Gmail', 'Outlook', 'Slack', 'Microsoft Teams', 'Zoom'],
    'Project Management': ['Asana', 'Trello', 'Jira', 'ClickUp', 'Notion'],
    'E-commerce': ['Shopify', 'WooCommerce', 'Amazon', 'eBay', 'Magento'],
    'Accounting & Finance': ['QuickBooks', 'Xero', 'FreshBooks', 'Sage', 'NetSuite'],
    'Marketing': ['Mailchimp', 'ActiveCampaign', 'Google Analytics', 'Facebook Ads', 'LinkedIn'],
    'Databases': ['MySQL', 'PostgreSQL', 'MongoDB', 'Airtable', 'Google Sheets'],
    'Cloud Storage': ['Google Drive', 'Dropbox', 'OneDrive', 'Box'],
  };

  const securityFeatures = [
    { icon: Lock, title: 'Data Encryption', description: 'All data transmission and storage is encrypted using industry-standard protocols.' },
    { icon: Shield, title: 'Access Controls', description: 'Role-based permissions ensure agents and team members access only necessary information.' },
    { icon: FileText, title: 'Audit Trails', description: 'Comprehensive logging of all agent actions for complete visibility and accountability.' },
    { icon: CheckCircle, title: 'Compliance Standards', description: 'Implementations support GDPR, HIPAA, SOC 2, and other regulatory requirements.' },
    { icon: Eye, title: 'Data Privacy', description: 'We prioritize data minimization, secure processing, and privacy by design.' },
    { icon: RefreshCw, title: 'Security Updates', description: 'Continuous monitoring and updating to protect against emerging threats.' },
  ];

  const industries = [
    { icon: ShoppingCart, name: 'E-commerce & Retail' },
    { icon: Briefcase, name: 'Professional Services' },
    { icon: Heart, name: 'Healthcare & Medical' },
    { icon: Building2, name: 'Real Estate & Property' },
    { icon: DollarSign, name: 'Financial Services' },
    { icon: Megaphone, name: 'Marketing Agencies' },
    { icon: Scale, name: 'Legal Firms' },
    { icon: Factory, name: 'Manufacturing' },
    { icon: GraduationCap, name: 'Education & E-learning' },
    { icon: Plane, name: 'Hospitality & Travel' },
    { icon: Code, name: 'SaaS & Technology' },
    { icon: HandHeart, name: 'Non-Profit Organizations' },
  ];

  const whyChooseUs = [
    { title: 'Custom Solutions, Not Templates', description: 'Every AI agent is customized to your specific processes, goals, and challenges.' },
    { title: 'Rapid Implementation', description: 'Our proven methodology delivers working AI agents in 4-6 weeks—getting you results fast.' },
    { title: 'No-Code & Low-Code Approach', description: 'Solutions your team can understand and manage, reducing dependence on technical specialists.' },
    { title: 'Proven Track Record', description: 'Successful implementations across industries, saving clients thousands of hours with documented ROI.' },
    { title: 'Ongoing Support', description: 'Continuous monitoring, optimization, and support to ensure increasing value over time.' },
    { title: 'Transparent Process', description: "You'll understand exactly what we're building, why, and how it works—no black boxes." },
    { title: 'Strategic Thinking', description: "We help reimagine processes for optimal efficiency, finding opportunities you didn't know existed." },
  ];

  const gettingStartedSteps = [
    { step: 1, title: 'Free Consultation', description: 'Schedule a no-obligation call to discuss your processes and identify automation opportunities.' },
    { step: 2, title: 'Process Analysis', description: 'We conduct a detailed analysis of your workflows, documenting current processes and quantifying impact.' },
    { step: 3, title: 'Custom Proposal', description: 'Receive a detailed proposal outlining recommended AI agents, expected benefits, timeline, and investment.' },
    { step: 4, title: 'Pilot Project', description: 'Start with a focused pilot targeting your highest-impact opportunity, delivering quick wins.' },
    { step: 5, title: 'Scale & Optimize', description: 'Systematically expand automation across your organization while continuously optimizing.' },
  ];

  const faqs = [
    {
      question: 'Will AI agents replace my employees?',
      answer: 'No. AI agents handle repetitive, time-consuming tasks, allowing your employees to focus on higher-value work requiring human creativity, judgment, and relationship skills. Most organizations find that automation enhances employee satisfaction by eliminating tedious work.',
    },
    {
      question: 'How long does implementation take?',
      answer: 'Most AI agent projects are deployed within 4-6 weeks from project kickoff. Simple automations can launch in 2-3 weeks, while complex enterprise implementations may require 8-12 weeks.',
    },
    {
      question: 'What if our processes change?',
      answer: 'AI agents are designed to be adaptable. We build flexibility into every automation, and our ongoing support includes updating agents as your processes evolve.',
    },
    {
      question: 'Do we need technical expertise to use AI agents?',
      answer: 'No. We design user-friendly interfaces and provide comprehensive training. Your team interacts with AI agents through simple interfaces—no coding or technical knowledge required.',
    },
    {
      question: 'How do you ensure accuracy?',
      answer: 'We implement multiple validation layers, extensive testing, human review for critical decisions, comprehensive error handling, and continuous monitoring. Most AI agents achieve 99%+ accuracy on their assigned tasks.',
    },
    {
      question: 'Can AI agents integrate with our custom software?',
      answer: 'Yes. We can integrate with virtually any application that has an API or data export capability. Custom integrations are part of our standard implementation process.',
    },
    {
      question: 'What happens if an AI agent makes a mistake?',
      answer: 'We build comprehensive error handling and escalation protocols. When agents encounter uncertainty, they flag items for human review rather than proceeding with potential errors.',
    },
    {
      question: 'How do you measure success?',
      answer: 'We establish clear success metrics during discovery including time saved, cost reduction, error rate improvement, process speed increase, customer satisfaction impact, and overall ROI—then track these metrics continuously.',
    },
  ];

  return (
    <div className="min-h-screen">
      <SEOHead
        title="AI Agents & Workflow Automation Services | Senseoza"
        description="Deploy intelligent AI agents that automate workflows, eliminate repetitive tasks & work 24/7. Custom automation solutions delivering ROI within months."
        canonicalUrl="https://senseoza.com/services/ai-agents-automation"
        schema={aiAgentSchema}
      />
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center gradient-hero overflow-hidden pt-32 md:pt-36">
        <FloatingElement className="absolute top-20 left-10 w-72 h-72 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 blur-3xl" delay={0} />
        <FloatingElement className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-gradient-to-r from-accent/20 to-primary/20 blur-3xl" delay={2} />
        <FloatingElement className="absolute top-1/2 left-1/3 w-64 h-64 rounded-full bg-primary/10 blur-3xl" delay={4} />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <AnimatedSection>
              <motion.div 
                className="inline-flex items-center gap-2 p-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl mb-6 border border-white/10"
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Bot className="h-12 w-12 text-accent icon-3d" />
              </motion.div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold mb-6 text-accent">
                AI Agents & Workflow Automation That Work 24/7 for Your Business
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/80 mb-6 max-w-4xl mx-auto">
                Imagine having a tireless digital workforce that handles repetitive tasks, makes intelligent decisions, and operates around the clock without breaks or errors. AI agents are autonomous software systems capable of perceiving, reasoning, and acting independently to automate business processes—making decisions without human intervention while continuously learning and adapting.
              </p>
              <p className="font-semibold text-primary-foreground mb-8">
                24/7 Operations | 70% Task Reduction | ROI in Months
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg hover:shadow-xl transition-all duration-300">
                    Schedule Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* What Are AI Agents Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <AnimatedSection className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-heading font-bold mb-6 text-center">
              Understanding AI Agents and Intelligent Automation
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                AI agents combine multiple AI capabilities including natural language processing, reasoning, planning, and automation to perform tasks efficiently and intelligently. Unlike traditional automation that follows rigid, pre-programmed rules, <strong className="text-foreground">AI agents think, learn, and adapt</strong> to changing conditions.
              </p>
              <p>
                Think of AI agents as intelligent digital employees who can handle complex workflows that previously required human judgment. They process documents, respond to customer inquiries, manage data entry, coordinate schedules, monitor systems, generate reports, and make decisions based on real-time information—all while learning from every interaction to become more effective over time.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <motion.div 
                  className="p-6 bg-card rounded-2xl border border-border text-center"
                  whileHover={{ scale: 1.02, y: -4 }}
                >
                  <div className="text-4xl font-bold text-primary mb-2">40-60%</div>
                  <div className="text-sm text-muted-foreground">Faster Decision-Making</div>
                </motion.div>
                <motion.div 
                  className="p-6 bg-card rounded-2xl border border-border text-center"
                  whileHover={{ scale: 1.02, y: -4 }}
                >
                  <div className="text-4xl font-bold text-primary mb-2">70%</div>
                  <div className="text-sm text-muted-foreground">Reduction in Manual Tasks</div>
                </motion.div>
                <motion.div 
                  className="p-6 bg-card rounded-2xl border border-border text-center"
                  whileHover={{ scale: 1.02, y: -4 }}
                >
                  <div className="text-4xl font-bold text-primary mb-2">79%</div>
                  <div className="text-sm text-muted-foreground">Companies Achieve ROI in 12 Months</div>
                </motion.div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Your Business Needs AI Agents */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold mb-6">
              The Business Case for AI Agent Automation
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transform your operations with intelligent automation that delivers measurable results.
            </p>
          </AnimatedSection>
          
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { icon: Zap, title: 'Eliminate Repetitive Work', description: 'Your team spends countless hours on tasks that AI agents can handle automatically. Data entry, document processing, email responses—all handled instantly and accurately.' },
              { icon: TrendingUp, title: 'Scale Without Hiring', description: 'With 35-50% productivity gains across automated processes, AI agents scale instantly without the cost, training, or management overhead of hiring additional staff.' },
              { icon: CheckCircle, title: 'Improve Accuracy', description: 'AI agents maintain consistent accuracy rates above 99%, eliminating costly errors in data processing, customer communications, and financial operations.' },
              { icon: Clock, title: '24/7 Operations', description: 'AI agents never sleep, take breaks, or call in sick. They work continuously, processing requests and handling tasks around the clock.' },
              { icon: Lightbulb, title: 'Faster Decision-Making', description: 'AI agents analyze situations and make decisions in seconds that might take humans hours or days, accessing and analyzing data in real-time.' },
              { icon: DollarSign, title: 'Cost Reduction', description: 'Beyond labor savings, AI agents reduce costs by optimizing processes, preventing errors, improving resource allocation, and identifying inefficiencies.' },
            ].map((item, index) => (
              <StaggerItem key={index}>
                <motion.div 
                  className="p-6 bg-card rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 h-full"
                  whileHover={{ scale: 1.02, y: -4 }}
                >
                  <div className="p-3 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl w-fit mb-4">
                    <item.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-heading font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Our AI Agent Services */}
      <section className="py-20 gradient-hero relative overflow-hidden">
        <FloatingElement className="absolute top-10 left-20 w-48 h-48 rounded-full bg-accent/20 blur-3xl" delay={0} />
        <FloatingElement className="absolute bottom-10 right-20 w-64 h-64 rounded-full bg-primary/20 blur-3xl" delay={2} />
        
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-accent mb-6">
              Custom AI Agents Tailored to Your Business
            </h2>
            <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
              We build intelligent automation solutions for every aspect of your operations.
            </p>
          </AnimatedSection>
          
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {agentServices.map((service, index) => (
              <StaggerItem key={index}>
                <motion.div 
                  className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 h-full"
                  whileHover={{ scale: 1.02, y: -4 }}
                >
                  <div className="p-3 bg-white/10 rounded-xl w-fit mb-4">
                    <service.icon className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-accent mb-3">{service.title}</h3>
                  <p className="text-primary-foreground/80 text-sm">{service.description}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* How AI Agents Work */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold mb-6">
              The Technology Behind Intelligent Automation
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our AI agents leverage cutting-edge technologies to deliver human-like intelligence.
            </p>
          </AnimatedSection>
          
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {technologies.map((tech, index) => (
              <StaggerItem key={index}>
                <motion.div 
                  className="p-6 bg-card rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 h-full text-center"
                  whileHover={{ scale: 1.02, y: -4 }}
                >
                  <div className="p-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl w-fit mx-auto mb-4">
                    <tech.icon className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-lg font-heading font-bold mb-3">{tech.title}</h3>
                  <p className="text-sm text-muted-foreground">{tech.description}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold mb-6">
              From Strategy to Deployment in Weeks, Not Months
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our proven methodology delivers working AI agents quickly and efficiently.
            </p>
          </AnimatedSection>
          
          <div className="max-w-4xl mx-auto">
            {implementationProcess.map((item, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <motion.div 
                  className="flex gap-6 mb-8 last:mb-0"
                  whileHover={{ x: 10 }}
                >
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center">
                      <span className="text-xl font-bold text-white">{item.phase}</span>
                    </div>
                    <div className="text-xs text-muted-foreground text-center mt-2">{item.duration}</div>
                  </div>
                  <div className="pt-2 flex-1">
                    <h3 className="text-xl font-heading font-bold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Real-World Applications */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold mb-6">
              AI Agents Solving Real Business Problems
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See how businesses across industries are transforming their operations.
            </p>
          </AnimatedSection>
          
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {realWorldApplications.map((app, index) => (
              <StaggerItem key={index}>
                <motion.div 
                  className="p-6 bg-card rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 h-full"
                  whileHover={{ scale: 1.02, y: -4 }}
                >
                  <div className="p-3 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl w-fit mb-4">
                    <app.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-heading font-bold mb-3">{app.title}</h3>
                  <p className="text-muted-foreground text-sm">{app.description}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold mb-6">
              Measurable Impact on Your Business
            </h2>
          </AnimatedSection>
          
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {benefits.map((benefit, index) => (
              <StaggerItem key={index}>
                <motion.div 
                  className="p-6 bg-card rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 h-full text-center"
                  whileHover={{ scale: 1.02, y: -4 }}
                >
                  <div className="p-3 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl w-fit mx-auto mb-4">
                    <benefit.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-primary mb-2">{benefit.stat}</div>
                  <h3 className="text-lg font-heading font-bold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Integration Capabilities */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold mb-6">
              Works With Your Existing Tools
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our AI agents integrate seamlessly with the platforms you already use.
            </p>
          </AnimatedSection>
          
          <div className="max-w-5xl mx-auto">
            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {Object.entries(integrations).map(([category, platforms], index) => (
                <StaggerItem key={index}>
                  <motion.div 
                    className="p-4 bg-card rounded-xl border border-border"
                    whileHover={{ scale: 1.02 }}
                  >
                    <h4 className="font-bold text-sm mb-3 text-primary">{category}</h4>
                    <div className="space-y-1">
                      {platforms.map((platform, idx) => (
                        <div key={idx} className="text-xs text-muted-foreground flex items-center gap-2">
                          <CheckCircle className="h-3 w-3 text-primary" />
                          {platform}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
            <AnimatedSection className="mt-8 text-center">
              <p className="text-muted-foreground">
                <strong className="text-foreground">Custom APIs:</strong> We can connect to virtually any application with an API, enabling comprehensive automation across your entire technology ecosystem.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Security & Compliance */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold mb-6">
              Enterprise-Grade Security
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We understand that automation involves sensitive business data.
            </p>
          </AnimatedSection>
          
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {securityFeatures.map((feature, index) => (
              <StaggerItem key={index}>
                <motion.div 
                  className="p-6 bg-card rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 flex items-start gap-4"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="p-2 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold mb-6">
              AI Agent Expertise Across Sectors
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our solutions have delivered results across diverse industries.
            </p>
          </AnimatedSection>
          
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {industries.map((industry, index) => (
              <StaggerItem key={index}>
                <motion.div 
                  className="p-4 bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-300 flex items-center gap-3"
                  whileHover={{ scale: 1.02 }}
                >
                  <industry.icon className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm font-medium">{industry.name}</span>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Why Choose Senseoza */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold mb-6">
              Your Partner in Intelligent Automation
            </h2>
          </AnimatedSection>
          
          <div className="max-w-4xl mx-auto space-y-4">
            {whyChooseUs.map((item, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <motion.div 
                  className="p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-300"
                  whileHover={{ x: 10 }}
                >
                  <div className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-heading font-bold mb-1">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold mb-6">
              Your Path to Intelligent Automation
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Most businesses see positive ROI within 2-3 months of deployment.
            </p>
          </AnimatedSection>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-5 gap-4">
              {gettingStartedSteps.map((item, index) => (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <motion.div 
                    className="p-4 bg-card rounded-xl border border-border text-center h-full"
                    whileHover={{ scale: 1.02, y: -4 }}
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-bold mx-auto mb-3">
                      {item.step}
                    </div>
                    <h3 className="font-heading font-bold text-sm mb-2">{item.title}</h3>
                    <p className="text-xs text-muted-foreground">{item.description}</p>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold mb-6">
              Common Questions About AI Agent Automation
            </h2>
          </AnimatedSection>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-card border border-border rounded-xl px-6"
                >
                  <AccordionTrigger className="text-left font-heading font-bold hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero relative overflow-hidden">
        <FloatingElement className="absolute top-10 right-20 w-48 h-48 rounded-full bg-accent/20 blur-3xl" delay={1} />
        <FloatingElement className="absolute bottom-10 left-20 w-64 h-64 rounded-full bg-primary/20 blur-3xl" delay={3} />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <AnimatedSection>
            <h2 className="text-4xl font-heading font-bold text-accent mb-6">
              Ready to Automate Your Business Processes?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Stop wasting valuable time on repetitive tasks that AI agents can handle better, faster, and more accurately. Let Senseoza build intelligent automation solutions that transform how your business operates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-lg hover:shadow-xl transition-all duration-300">
                  Schedule Your Free Automation Consultation <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Floating CTA Button */}
      <AnimatePresence>
        {showFloatingCTA && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            className="fixed bottom-24 right-6 z-40 hidden lg:block"
          >
            <Link to="/contact">
              <Button 
                size="lg" 
                className="gradient-primary shadow-xl hover:shadow-2xl transition-all duration-300 rounded-full px-6"
              >
                <Bot className="mr-2 h-5 w-5" />
                Get Started with AI Agents
              </Button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AIAgentsAutomation;
