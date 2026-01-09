import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ReactNode, useRef, MouseEvent } from 'react';

interface Card3DProps {
  children: ReactNode;
  className?: string;
  intensity?: number;
  glowColor?: string;
}

export const Card3D = ({ 
  children, 
  className = '', 
  intensity = 15,
  glowColor = 'hsl(185 85% 50%)'
}: Card3DProps) => {
  const ref = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [`${intensity}deg`, `-${intensity}deg`]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [`-${intensity}deg`, `${intensity}deg`]);
  
  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };
  
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };
  
  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
        perspective: '1000px',
      }}
      className={`relative ${className}`}
    >
      <div 
        style={{ transform: 'translateZ(50px)', transformStyle: 'preserve-3d' }}
        className="relative"
      >
        {children}
      </div>
    </motion.div>
  );
};

interface GlowingBorderProps {
  children: ReactNode;
  className?: string;
  borderWidth?: number;
}

export const GlowingBorder = ({ 
  children, 
  className = '',
  borderWidth = 2 
}: GlowingBorderProps) => {
  return (
    <div className={`relative group ${className}`}>
      <div className="absolute -inset-[2px] bg-gradient-to-r from-primary via-accent to-primary rounded-2xl opacity-60 group-hover:opacity-100 blur-sm transition-opacity duration-500 animate-gradient-shift bg-[length:200%_100%]" />
      <div className="relative bg-card rounded-2xl">
        {children}
      </div>
    </div>
  );
};

interface CyberButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export const CyberButton = ({ children, className = '', onClick }: CyberButtonProps) => {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`relative overflow-hidden px-8 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold rounded-lg group ${className}`}
    >
      <span className="relative z-10">{children}</span>
      <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute inset-0 opacity-0 group-hover:opacity-30">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white to-transparent animate-scan" />
      </div>
    </motion.button>
  );
};

interface HolographicTextProps {
  children: ReactNode;
  className?: string;
}

export const HolographicText = ({ children, className = '' }: HolographicTextProps) => {
  return (
    <span 
      className={`inline-block bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] bg-clip-text text-transparent animate-text-shimmer ${className}`}
    >
      {children}
    </span>
  );
};

interface TechCardProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'neon' | 'glass';
}

export const TechCard = ({ children, className = '', variant = 'default' }: TechCardProps) => {
  const variants = {
    default: 'bg-card border border-border/50 hover:border-accent/50 hover:shadow-accent/20',
    neon: 'bg-card/50 border border-accent/30 neon-glow-box hover:border-accent',
    glass: 'glass-effect hover:bg-white/15 backdrop-blur-xl',
  };
  
  return (
    <motion.div
      whileHover={{ 
        y: -8, 
        rotateX: 5,
        rotateY: -5,
        transition: { duration: 0.3 } 
      }}
      className={`rounded-2xl p-6 transition-all duration-500 ${variants[variant]} ${className}`}
      style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
    >
      {children}
    </motion.div>
  );
};

interface FloatingOrbProps {
  size?: number;
  color?: 'primary' | 'accent';
  className?: string;
  delay?: number;
}

export const FloatingOrb = ({ 
  size = 200, 
  color = 'accent', 
  className = '',
  delay = 0 
}: FloatingOrbProps) => {
  const colorClasses = {
    primary: 'from-primary/30 to-primary/10',
    accent: 'from-accent/30 to-accent/10',
  };
  
  return (
    <motion.div
      animate={{
        y: [0, -30, 0],
        x: [0, 15, 0],
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration: 8,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      className={`absolute rounded-full bg-gradient-radial ${colorClasses[color]} blur-3xl animate-morph ${className}`}
      style={{ width: size, height: size }}
    />
  );
};

interface ParticleFieldProps {
  count?: number;
  className?: string;
}

export const ParticleField = ({ count = 20, className = '' }: ParticleFieldProps) => {
  const particles = Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    duration: Math.random() * 10 + 10,
    delay: Math.random() * 5,
  }));
  
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-accent/50"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  );
};

interface GridBackgroundProps {
  className?: string;
}

export const GridBackground = ({ className = '' }: GridBackgroundProps) => {
  return (
    <div className={`absolute inset-0 cyber-grid opacity-30 ${className}`} />
  );
};

interface GlitchTextProps {
  children: string;
  className?: string;
}

export const GlitchText = ({ children, className = '' }: GlitchTextProps) => {
  return (
    <span className={`glitch ${className}`} data-text={children}>
      {children}
    </span>
  );
};

interface RotatingIconProps {
  children: ReactNode;
  className?: string;
}

export const RotatingIcon = ({ children, className = '' }: RotatingIconProps) => {
  return (
    <motion.div
      animate={{ rotateY: 360 }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: 'linear',
      }}
      className={`inline-block ${className}`}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {children}
    </motion.div>
  );
};

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
}

export const MagneticButton = ({ children, className = '' }: MagneticButtonProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * 0.2);
    y.set((e.clientY - centerY) * 0.2);
  };
  
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };
  
  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });
  
  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
