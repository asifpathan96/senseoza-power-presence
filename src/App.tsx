import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import ExitIntentPopup from "./components/ExitIntentPopup";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import CaseStudies from "./pages/CaseStudies";
import Testimonials from "./pages/Testimonials";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// Service Pages
import AIMarketing from "./pages/services/AIMarketing";
import SEOServices from "./pages/services/SEOServices";
import SocialMedia from "./pages/services/SocialMedia";
import ContentMarketing from "./pages/services/ContentMarketing";
import PPCAds from "./pages/services/PPCAds";
import WebDesign from "./pages/services/WebDesign";
import EmailAutomation from "./pages/services/EmailAutomation";
import Analytics from "./pages/services/Analytics";
import InfluencerMarketing from "./pages/services/InfluencerMarketing";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/ai-marketing" element={<AIMarketing />} />
        <Route path="/services/seo" element={<SEOServices />} />
        <Route path="/services/social-media" element={<SocialMedia />} />
        <Route path="/services/content-marketing" element={<ContentMarketing />} />
        <Route path="/services/ppc-ads" element={<PPCAds />} />
        <Route path="/services/web-design" element={<WebDesign />} />
        <Route path="/services/email-automation" element={<EmailAutomation />} />
        <Route path="/services/analytics" element={<Analytics />} />
        <Route path="/services/influencer-marketing" element={<InfluencerMarketing />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <WhatsAppButton />
      <ExitIntentPopup />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
