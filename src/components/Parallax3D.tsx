import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ReactNode, useRef, useEffect, useState } from 'react';

interface ParallaxLayerProps {
  children: ReactNode;
  className?: string;
  speed?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}

export const ParallaxLayer = ({ 
  children, 
  className = '',
  speed = 0.5,
  direction = 'up'
}: ParallaxLayerProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });

  const getTransform = () => {
    const range = [-200 * speed, 200 * speed];
    switch (direction) {
      case 'up':
        return useTransform(scrollYProgress, [0, 1], [range[1], range[0]]);
      case 'down':
        return useTransform(scrollYProgress, [0, 1], [range[0], range[1]]);
      case 'left':
        return useTransform(scrollYProgress, [0, 1], [range[1], range[0]]);
      case 'right':
        return useTransform(scrollYProgress, [0, 1], [range[0], range[1]]);
      default:
        return useTransform(scrollYProgress, [0, 1], [range[1], range[0]]);
    }
  };

  const transform = getTransform();
  const springTransform = useSpring(transform, { stiffness: 100, damping: 30 });

  const isVertical = direction === 'up' || direction === 'down';

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{
        [isVertical ? 'y' : 'x']: springTransform,
      }}
    >
      {children}
    </motion.div>
  );
};

interface MouseParallaxProps {
  children: ReactNode;
  className?: string;
  intensity?: number;
  inverted?: boolean;
}

export const MouseParallax = ({ 
  children, 
  className = '',
  intensity = 20,
  inverted = false
}: MouseParallaxProps) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;
      
      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const x = ((e.clientX - centerX) / window.innerWidth) * intensity * (inverted ? -1 : 1);
      const y = ((e.clientY - centerY) / window.innerHeight) * intensity * (inverted ? -1 : 1);
      
      setPosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [intensity, inverted]);

  return (
    <motion.div
      ref={ref}
      className={className}
      animate={{
        x: position.x,
        y: position.y,
      }}
      transition={{
        type: 'spring',
        stiffness: 150,
        damping: 15,
      }}
    >
      {children}
    </motion.div>
  );
};

interface DepthLayersProps {
  children: ReactNode;
  className?: string;
  layers?: number;
  intensity?: number;
}

export const DepthLayers = ({ 
  children, 
  className = '',
  layers = 3,
  intensity = 30
}: DepthLayersProps) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setPosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className={`relative ${className}`} style={{ perspective: 1000 }}>
      <motion.div
        animate={{
          rotateX: position.y * -5,
          rotateY: position.x * 5,
        }}
        transition={{
          type: 'spring',
          stiffness: 100,
          damping: 20,
        }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {children}
      </motion.div>
    </div>
  );
};

interface Floating3DElementProps {
  children?: ReactNode;
  className?: string;
  type?: 'sphere' | 'cube' | 'ring' | 'pyramid';
  size?: number;
  color?: string;
  delay?: number;
  duration?: number;
}

export const Floating3DElement = ({
  children,
  className = '',
  type = 'sphere',
  size = 100,
  color = 'primary',
  delay = 0,
  duration = 6
}: Floating3DElementProps) => {
  const getShape = () => {
    const baseClasses = `absolute ${className}`;
    const colorClass = color === 'primary' ? 'bg-primary' : color === 'accent' ? 'bg-accent' : `bg-${color}`;
    
    switch (type) {
      case 'sphere':
        return (
          <div 
            className={`${baseClasses} ${colorClass} rounded-full opacity-20 blur-sm`}
            style={{ width: size, height: size }}
          />
        );
      case 'cube':
        return (
          <div 
            className={`${baseClasses} ${colorClass} opacity-20 blur-sm`}
            style={{ 
              width: size, 
              height: size,
              transform: 'rotateX(45deg) rotateY(45deg)',
              transformStyle: 'preserve-3d'
            }}
          />
        );
      case 'ring':
        return (
          <div 
            className={`${baseClasses} border-4 border-current rounded-full opacity-20`}
            style={{ 
              width: size, 
              height: size,
              borderColor: color === 'primary' ? 'hsl(220 90% 50%)' : 'hsl(185 85% 50%)'
            }}
          />
        );
      case 'pyramid':
        return (
          <div 
            className={`${baseClasses} opacity-20`}
            style={{ 
              width: 0, 
              height: 0,
              borderLeft: `${size/2}px solid transparent`,
              borderRight: `${size/2}px solid transparent`,
              borderBottom: `${size}px solid ${color === 'primary' ? 'hsl(220, 90%, 50%)' : 'hsl(185, 85%, 50%)'}`,
            }}
          />
        );
      default:
        return children;
    }
  };

  return (
    <motion.div
      animate={{
        y: [0, -30, 0],
        rotateZ: [0, 5, -5, 0],
        scale: [1, 1.05, 1],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      {getShape()}
    </motion.div>
  );
};

interface GlitchTextProps {
  children: string;
  className?: string;
}

export const GlitchText = ({ children, className = '' }: GlitchTextProps) => {
  return (
    <span className={`relative inline-block ${className}`}>
      <span className="relative z-10">{children}</span>
      <motion.span
        className="absolute top-0 left-0 text-accent opacity-80"
        animate={{
          x: [-2, 2, -2],
          opacity: [0.8, 0.6, 0.8],
        }}
        transition={{
          duration: 0.1,
          repeat: Infinity,
          repeatDelay: 3,
        }}
        style={{ clipPath: 'inset(0 0 50% 0)' }}
      >
        {children}
      </motion.span>
      <motion.span
        className="absolute top-0 left-0 text-primary opacity-80"
        animate={{
          x: [2, -2, 2],
          opacity: [0.8, 0.6, 0.8],
        }}
        transition={{
          duration: 0.1,
          repeat: Infinity,
          repeatDelay: 3,
          delay: 0.05,
        }}
        style={{ clipPath: 'inset(50% 0 0 0)' }}
      >
        {children}
      </motion.span>
    </span>
  );
};

export default ParallaxLayer;
