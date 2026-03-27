import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Globe, Search, Smartphone, Code, Megaphone, Palette, Users, Rocket, ArrowUpRight } from 'lucide-react';
import SEOHead from '@/components/SEOHead';
import { organizationSchema } from '@/utils/schema';
import { AnimatedSection, FloatingElement } from '@/components/AnimatedSection';
import { motion } from 'framer-motion';

// 3D Assets
import hero3d from '@/assets/hero-3d-abstract.png';
import icon3dWeb from '@/assets/3d-web-dev.png';
import icon3dApp from '@/assets/3d-mobile-app.png';
import icon3dSeo from '@/assets/3d-seo.png';
import icon3dMarketing from '@/assets/3d-marketing.png';
import icon3dDesign from '@/assets/3d-design.png';
import icon3dBranding from '@/assets/3d-branding.png';
import icon3dWebapp from '@/assets/3d-webapp.png';
import icon3dInfluencer from '@/assets/3d-influencer.png';
import aboutBg from '@/assets/3d-about-bg.png';

const services = [
  { title: 'Website Development', icon: Globe, image: icon3dWeb, span: 'col-span-1' },
  { title: 'Web Applications', icon: Code, image: icon3dWebapp, span: 'col-span-1' },
  { title: 'Mobile App Creation', icon: Smartphone, image: icon3dApp, span: 'col-span-1 md:col-span-2 lg:col-span-1' },
  { title: 'Search Engine Optimization', icon: Search, image: icon3dSeo, span: 'col-span-1 md:col-span-2 lg:col-span-1' },
  { title: 'Digital Marketing', icon: Megaphone, image: icon3dMarketing, span: 'col-span-1' },
  { title: 'Graphic Design', icon: Palette, image: icon3dDesign, span: 'col-span-1' },
  { title: 'Influencer Marketing', icon: Users, image: icon3dInfluencer, span: 'col-span-1' },
  { title: 'Branding', icon: Rocket, image: icon3dBranding, span: 'col-span-1' },
];

const Home = () => {
  return (
    <div className="min-h-screen bg-agency-dark">
      <SEOHead
        title="SenSEOza AI Digital Solutions | Digital Marketing Agency Pune"
        description="SenSEOza AI Digital Solutions is a leading digital marketing agency in Pune, India. Expert SEO, web design, social media & AI marketing services."
        canonicalUrl="https://senseoza.com/"
        schema={organizationSchema}
      />

      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background layers */}
        <div className="absolute inset-0 bg-agency-dark" />
        <div className="absolute inset-0 agency-grid-pattern opacity-20" />

        {/* Neon glow blobs */}
        <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] rounded-full bg-neon-violet/20 blur-[120px]" />
        <div className="absolute bottom-1/4 -right-32 w-[400px] h-[400px] rounded-full bg-neon-cyan/15 blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-neon-magenta/10 blur-[140px]" />

        <div className="container mx-auto px-4 relative z-10 pt-28 pb-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            {/* Left: Text */}
            <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 glass-agency rounded-full mb-8"
              >
                <Sparkles className="h-4 w-4 text-neon-cyan" />
                <span className="text-sm font-medium text-white/80">AI-Powered Agency</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-[1.1] mb-6"
              >
                SenSEOza{' '}
                <span className="neon-text-glow">AI</span>{' '}
                Digital Solutions
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg md:text-xl text-white/60 mb-10 leading-relaxed"
              >
                SenSEOza AI Digital Solutions is a leading digital marketing agency in Pune, India, committed to helping businesses thrive in the online realm. With a focus on innovation and performance, our expert team offers a full range of services.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link to="/contact">
                  <Button size="lg" className="w-full sm:w-auto px-8 py-6 text-base neon-gradient-btn text-white border-0 hover:shadow-[0_0_30px_hsl(270_100%_60%/0.5)] transition-all duration-300">
                    Elevate Your Journey
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/services">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto px-8 py-6 text-base glass-agency text-white border-white/10 hover:border-neon-cyan/50 hover:bg-white/5 transition-all duration-300">
                    Our Services
                  </Button>
                </Link>
              </motion.div>
            </div>

            {/* Right: 3D Hero Illustration */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative flex items-center justify-center"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-80 h-80 md:w-96 md:h-96 rounded-full bg-neon-violet/20 blur-[80px] animate-pulse" />
              </div>
              <FloatingElement distance={15} duration={5}>
                <img
                  src={hero3d}
                  alt="AI and digital growth 3D abstract illustration"
                  width={1024}
                  height={1024}
                  className="relative z-10 w-full max-w-lg md:max-w-xl drop-shadow-[0_0_40px_hsl(270_100%_60%/0.4)]"
                />
              </FloatingElement>

              {/* Floating accent shapes */}
              <FloatingElement className="absolute top-10 right-10 w-16 h-16 rounded-2xl glass-agency flex items-center justify-center" delay={1} distance={12}>
                <Sparkles className="h-7 w-7 text-neon-cyan" />
              </FloatingElement>
              <FloatingElement className="absolute bottom-20 left-5 w-14 h-14 rounded-xl glass-agency flex items-center justify-center" delay={2} distance={10}>
                <Rocket className="h-6 w-6 text-neon-magenta" />
              </FloatingElement>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/20 rounded-full flex items-start justify-center p-2"
          >
            <motion.div
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-2 bg-neon-cyan rounded-full"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* ─── SERVICES BENTO GRID ─── */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-agency-darker" />
        <div className="absolute top-0 left-1/3 w-[400px] h-[400px] rounded-full bg-neon-violet/10 blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] rounded-full bg-neon-cyan/8 blur-[100px]" />

        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 glass-agency rounded-full text-neon-cyan text-sm font-semibold mb-4">
              What We Do
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-white mb-4">
              Our <span className="neon-text-glow">Services</span>
            </h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto">
              Comprehensive digital solutions designed to accelerate your growth
            </p>
          </AnimatedSection>

          {/* Bento Box Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <AnimatedSection key={service.title} delay={index * 0.05}>
                <motion.div
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className={`group relative glass-agency rounded-2xl p-6 h-full min-h-[220px] flex flex-col items-center justify-center text-center cursor-pointer overflow-hidden hover:border-neon-violet/40 transition-all duration-500 ${service.span}`}
                >
                  {/* Inner glow on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl bg-gradient-to-br from-neon-violet/10 via-transparent to-neon-cyan/10" />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl shadow-[inset_0_0_60px_hsl(270_100%_60%/0.15)]" />

                  {/* 3D Icon */}
                  <div className="relative z-10 mb-4">
                    <img
                      src={service.image}
                      alt={service.title}
                      width={512}
                      height={512}
                      loading="lazy"
                      className="w-20 h-20 object-contain group-hover:scale-110 transition-transform duration-500 drop-shadow-[0_0_20px_hsl(270_100%_60%/0.3)]"
                    />
                  </div>

                  <h3 className="relative z-10 text-white font-heading font-semibold text-base group-hover:text-neon-cyan transition-colors duration-300">
                    {service.title}
                  </h3>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ABOUT / WHY CHOOSE US ─── */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-agency-dark" />
        
        {/* 3D Background element */}
        <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
          <img
            src={aboutBg}
            alt=""
            aria-hidden="true"
            loading="lazy"
            width={1024}
            height={512}
            className="w-full max-w-5xl object-contain mix-blend-screen"
          />
        </div>

        {/* Glow effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-neon-magenta/10 blur-[120px]" />

        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="max-w-4xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 glass-agency rounded-full text-neon-magenta text-sm font-semibold mb-6">
              Why Choose Us
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-8 leading-tight">
              Whether you're a startup or an established enterprise
            </h2>
            <p className="text-xl md:text-2xl text-white/60 leading-relaxed max-w-3xl mx-auto mb-12">
              Our tailored strategies ensure a strong and captivating online presence that drives results.
            </p>

            {/* Glassmorphic stat cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
              {[
                { value: '500+', label: 'Projects Delivered' },
                { value: '97%', label: 'Client Satisfaction' },
                { value: '5+', label: 'Years Experience' },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ y: -4 }}
                  className="glass-agency rounded-2xl p-6 hover:border-neon-cyan/30 transition-all duration-300"
                >
                  <div className="text-3xl md:text-4xl font-heading font-bold neon-text-glow mb-2">
                    {stat.value}
                  </div>
                  <div className="text-white/50 text-sm font-medium uppercase tracking-wider">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── FOOTER CTA ─── */}
      <section className="py-24 md:py-40 relative overflow-hidden">
        <div className="absolute inset-0 bg-agency-darker" />
        <div className="absolute inset-0 agency-grid-pattern opacity-10" />

        {/* Neon accent blobs */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[300px] rounded-full bg-neon-violet/15 blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] rounded-full bg-neon-cyan/10 blur-[100px]" />

        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-white mb-8 leading-tight">
              Choose SenSEOza AI Digital to{' '}
              <span className="neon-text-glow">elevate</span>{' '}
              your digital journey and witness unparalleled success.
            </h2>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block"
            >
              <Link to="/contact">
                <Button size="lg" className="px-12 py-7 text-lg neon-gradient-btn text-white border-0 hover:shadow-[0_0_40px_hsl(270_100%_60%/0.5)] transition-all duration-500">
                  Contact Us
                  <ArrowUpRight className="ml-2 h-6 w-6" />
                </Button>
              </Link>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Home;
